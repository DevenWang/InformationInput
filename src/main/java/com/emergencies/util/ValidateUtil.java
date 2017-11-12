package com.emergencies.util;

import com.emergencies.entity.Others;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ValidateUtil {

    public static boolean validate(String... args) {
        for (String s : args) {
            if (s == null || s.length() <= 0) {
                return false;
            }
        }
        return true;
    }

    public static List<Others> validateOthers(int baseId, List<Map<String, Object>> others) {
        if (others == null || others.size() <= 0) {
            return null;
        }

        List<Others> othersList = new ArrayList<>(others.size());

        for (Map<String, Object> map : others) {
            String othersDesc = map.get("othersDesc").toString();
            String othersInfo = map.get("othersInfo").toString();

            if ((othersDesc == null && othersInfo == null) || (othersDesc.length() <= 0 && othersInfo.length() <= 0)) {
                continue;
            } else {
                if (othersDesc == null) {
                    othersDesc="";
                }
                if (othersInfo == null) {
                    othersInfo = "";
                }

                Others o = new Others(baseId, othersDesc, othersInfo);
                othersList.add(o);
            }
        }

        return othersList;
    }

}
