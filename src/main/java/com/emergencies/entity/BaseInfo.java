package com.emergencies.entity;

import java.util.Date;

public class BaseInfo {

    private int baseId;
    private String title;
    private String type;
    private String placeId;
    private Date start;
    private Date end;
    private String baseDesc;
    private int baseLevel;

    public BaseInfo() {
    }

    public BaseInfo(String title, String type, String placeId, Date start, Date end, String baseDesc, int baseLevel) {
        this.title = title;
        this.type = type;
        this.placeId = placeId;
        this.start = start;
        this.end = end;
        this.baseDesc = baseDesc;
        this.baseLevel = baseLevel;
    }

    public int getBaseId() {
        return baseId;
    }

    public void setBaseId(int baseId) {
        this.baseId = baseId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public String getBaseDesc() {
        return baseDesc;
    }

    public void setBaseDesc(String baseDesc) {
        this.baseDesc = baseDesc;
    }

    public int getBaseLevel() {
        return baseLevel;
    }

    public void setBaseLevel(int baseLevel) {
        this.baseLevel = baseLevel;
    }
}

