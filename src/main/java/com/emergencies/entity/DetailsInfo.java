package com.emergencies.entity;

public class DetailsInfo {

    private int detailsId;
    private int baseId;

    private double loss;
    private int injured;
    private int death;
    private String environmental;
    private String social;

    private String disasterType;
    private String hazards;
    private String bearing;

    public DetailsInfo() {
    }

    public DetailsInfo(int baseId, double loss, int injured, int death, String environmental, String social, String disasterType, String hazards, String bearing) {
        this.baseId = baseId;
        this.loss = loss;
        this.injured = injured;
        this.death = death;
        this.environmental = environmental;
        this.social = social;
        this.disasterType = disasterType;
        this.hazards = hazards;
        this.bearing = bearing;
    }

    public int getDetailsId() {
        return detailsId;
    }

    public void setDetailsId(int detailsId) {
        this.detailsId = detailsId;
    }

    public int getBaseId() {
        return baseId;
    }

    public void setBaseId(int baseId) {
        this.baseId = baseId;
    }

    public double getLoss() {
        return loss;
    }

    public void setLoss(double loss) {
        this.loss = loss;
    }

    public int getInjured() {
        return injured;
    }

    public void setInjured(int injured) {
        this.injured = injured;
    }

    public int getDeath() {
        return death;
    }

    public void setDeath(int death) {
        this.death = death;
    }

    public String getEnvironmental() {
        return environmental;
    }

    public void setEnvironmental(String environmental) {
        this.environmental = environmental;
    }

    public String getSocial() {
        return social;
    }

    public void setSocial(String social) {
        this.social = social;
    }

    public String getDisasterType() {
        return disasterType;
    }

    public void setDisasterType(String disasterType) {
        this.disasterType = disasterType;
    }

    public String getHazards() {
        return hazards;
    }

    public void setHazards(String hazards) {
        this.hazards = hazards;
    }

    public String getBearing() {
        return bearing;
    }

    public void setBearing(String bearing) {
        this.bearing = bearing;
    }
}
