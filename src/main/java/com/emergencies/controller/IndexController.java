package com.emergencies.controller;

import com.emergencies.entity.*;
import com.emergencies.service.IndexService;
import com.emergencies.util.ValidateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class IndexController {

    private IndexService indexService;

    private static Map<String, String> PLACE_MAP = new HashMap<>(3509);

    @Autowired
    public IndexController(IndexService indexService) {
        this.indexService = indexService;
        List<Place> places = indexService.placeCode();
        for (Place place : places) {
            PLACE_MAP.put(place.getPlaceId(), place.getPlaceName());
        }
    }

    @RequestMapping(value = "/placeCode", method = RequestMethod.GET)
    public Map<String, Object> placeCode() {
        Map<String, Object> resp = new HashMap<>();
        resp.put("status", 200);
        resp.put("data", PLACE_MAP);
        return resp;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Map<String, Object> add(@RequestBody Map<String, Object> reqMap) {

        Map<String, Object> resp = new HashMap<>();

        String placeId = reqMap.get("placeId").toString();
        String title = reqMap.get("title").toString();
        String baseDesc = reqMap.get("baseDesc").toString();
        String start = reqMap.get("start").toString();
        String end = reqMap.get("end").toString();
        String type = reqMap.get("type").toString();
        String baseLevel = reqMap.get("baseLevel").toString();

        String loss = reqMap.get("loss").toString();
        String injured = reqMap.get("injured").toString();
        String death = reqMap.get("death").toString();
        String environmental = reqMap.get("environmental").toString();
        String social = reqMap.get("social").toString();
        String disasterType = reqMap.get("disasterType").toString();
        String hazards = reqMap.get("hazards").toString();
        String bearing = reqMap.get("bearing").toString();

        String expert = reqMap.get("expert").toString();
        String rank = reqMap.get("rank").toString();
        String evaluationDesc = reqMap.get("evaluationDesc").toString();
        String control = reqMap.get("control").toString();
        String response = reqMap.get("response").toString();
        String prevention = reqMap.get("prevention").toString();
        String rescue = reqMap.get("rescue").toString();

        List<Map<String, Object>> others = (List<Map<String, Object>>) reqMap.get("others");
        boolean val = ValidateUtil.validate(placeId, title, baseDesc, start, end, type, baseLevel, loss, injured, death,
                environmental, social, disasterType, expert, rank, evaluationDesc, control, response, prevention, rescue);


        if (!val) {
            resp.put("status", 5003);
            resp.put("msg", "有必填项为空！");
            return resp;
        }

        Date start_date = null;
        Date end_date = null;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        try {
            end_date = sdf.parse(end);
            start_date = sdf.parse(start);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        int baseLevel_int = Integer.parseInt(baseLevel);
        double loss_double = Double.parseDouble(loss);
        int injured_int = Integer.parseInt(injured);
        int death_int = Integer.parseInt(death);
        int rank_int = Integer.parseInt(rank);


        if (hazards == null) {
            hazards = "";
        }
        if (bearing == null) {
            bearing = "";
        }

        BaseInfo baseInfo = new BaseInfo(title, type, placeId, start_date, end_date, baseDesc, baseLevel_int);
        indexService.insertBaseInfo(baseInfo);

        DetailsInfo detailsInfo = new DetailsInfo(baseInfo.getBaseId(), loss_double, injured_int, death_int, environmental, social, disasterType, hazards, bearing);
        indexService.insertDetailInfo(detailsInfo);

        Evaluation evaluation = new Evaluation(baseInfo.getBaseId(), expert, rank_int, evaluationDesc, control, response, prevention, rescue);
        indexService.insertEvalution(evaluation);

        List<Others> othersList = ValidateUtil.validateOthers(baseInfo.getBaseId(), others);
        indexService.insertOthers(othersList);

        resp.put("status", 200);
        return resp;
    }

}
