$(function () {
    $("#type_popover").popover({
        trigger: 'hover',
        container: 'body',
        content: "自然灾害、人为灾害等"
    });
    $("#baseLevel_popover").popover({
        trigger: 'hover',
        container: 'body',
        content: "范围（一般严重IV级、较严重III级、严重II级、特别严重I级）"
    });
    $("#disasterType_popover").popover({
        trigger: 'hover',
        container: 'body',
        title: "以自然灾害为例",
        content: "原生、次生、衍生"
    });
    $("#hazards_popover").popover({
        trigger: 'hover',
        container: 'body',
        title: "以自然灾害为例(可为空)",
        content: "气海变动、地壳变动、农林灾害"
    });
    $("#bearing_popover").popover({
        trigger: 'hover',
        container: 'body',
        title: "以自然灾害为例(可为空)",
        content: "固定、可动、植被"
    });
    $("#expert_popover").popover({
        trigger: 'hover',
        container: 'body',
        content: "评估专家的编号（是由哪位专家评估）"
    });
    $("#rank_popover").popover({
        trigger: 'hover',
        container: 'body',
        content: "专家评估的等级"
    });
});