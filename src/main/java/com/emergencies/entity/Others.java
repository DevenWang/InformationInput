package com.emergencies.entity;

public class Others {

    private int othersId;
    private int baseId;
    private String othersDesc;
    private String othersInfo;

    public Others() {
    }

    public Others(int baseId, String othersDesc, String othersInfo) {
        this.baseId = baseId;
        this.othersDesc = othersDesc;
        this.othersInfo = othersInfo;
    }

    public Others(String othersDesc, String othersInfo) {
        this.othersDesc = othersDesc;
        this.othersInfo = othersInfo;
    }

    public int getOthersId() {
        return othersId;
    }

    public void setOthersId(int othersId) {
        this.othersId = othersId;
    }

    public int getBaseId() {
        return baseId;
    }

    public void setBaseId(int baseId) {
        this.baseId = baseId;
    }

    public String getOthersDesc() {
        return othersDesc;
    }

    public void setOthersDesc(String othersDesc) {
        this.othersDesc = othersDesc;
    }

    public String getOthersInfo() {
        return othersInfo;
    }

    public void setOthersInfo(String othersInfo) {
        this.othersInfo = othersInfo;
    }
}
