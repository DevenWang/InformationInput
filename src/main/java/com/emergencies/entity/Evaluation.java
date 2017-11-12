package com.emergencies.entity;

public class Evaluation {

    private int evaluationId;
    private int baseId;

    private String expert;
    private int rank;
    private String evaluationDesc;
    private String control;
    private String response;
    private String prevention;
    private String rescue;


    public Evaluation() {
    }

    public Evaluation(int baseId, String expert, int rank, String evaluationDesc, String control, String response, String prevention, String rescue) {
        this.baseId = baseId;
        this.expert = expert;
        this.rank = rank;
        this.evaluationDesc = evaluationDesc;
        this.control = control;
        this.response = response;
        this.prevention = prevention;
        this.rescue = rescue;
    }

    public int getEvaluationId() {
        return evaluationId;
    }

    public void setEvaluationId(int evaluationId) {
        this.evaluationId = evaluationId;
    }

    public int getBaseId() {
        return baseId;
    }

    public void setBaseId(int baseId) {
        this.baseId = baseId;
    }

    public String getExpert() {
        return expert;
    }

    public void setExpert(String expert) {
        this.expert = expert;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getEvaluationDesc() {
        return evaluationDesc;
    }

    public void setEvaluationDesc(String evaluationDesc) {
        this.evaluationDesc = evaluationDesc;
    }

    public String getControl() {
        return control;
    }

    public void setControl(String control) {
        this.control = control;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getPrevention() {
        return prevention;
    }

    public void setPrevention(String prevention) {
        this.prevention = prevention;
    }

    public String getRescue() {
        return rescue;
    }

    public void setRescue(String rescue) {
        this.rescue = rescue;
    }
}
