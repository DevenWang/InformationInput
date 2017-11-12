package com.emergencies.service;

import com.emergencies.dao.*;
import com.emergencies.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexService {

    private BaseInfoDAO baseInfoDAO;
    private DetailsInfoDAO detailsInfoDAO;
    private EvaluationDAO evaluationDAO;
    private OthersDAO othersDAO;
    private PlaceDAO placeDAO;

    @Autowired
    public IndexService(BaseInfoDAO baseInfoDAO, DetailsInfoDAO detailsInfoDAO, EvaluationDAO evaluationDAO, OthersDAO othersDAO, PlaceDAO placeDAO) {
        this.baseInfoDAO = baseInfoDAO;
        this.detailsInfoDAO = detailsInfoDAO;
        this.evaluationDAO = evaluationDAO;
        this.othersDAO = othersDAO;
        this.placeDAO = placeDAO;
    }

    public List<Place> placeCode() {
        return placeDAO.getAll();
    }


    public void insertBaseInfo(BaseInfo baseInfo) {
        baseInfoDAO.insert(baseInfo);
    }

    public void insertDetailInfo(DetailsInfo detailsInfo) {
        detailsInfoDAO.insert(detailsInfo);
    }

    public void insertEvalution(Evaluation evaluation) {
        evaluationDAO.insert(evaluation);
    }

    public void insertOthers(List<Others> others) {
        if (others != null) {
            for (Others o : others) {
                othersDAO.insert(o);
            }
        }

    }

}
