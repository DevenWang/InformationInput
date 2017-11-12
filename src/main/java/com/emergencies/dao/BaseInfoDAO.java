package com.emergencies.dao;

import com.emergencies.entity.BaseInfo;

public interface BaseInfoDAO {

    int insertSelectKey(BaseInfo baseInfo);
    int insert(BaseInfo baseInfo);

}
