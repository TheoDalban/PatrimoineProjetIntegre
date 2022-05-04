import React from "react";

import { useState, useEffect } from 'react'

import * as echarts from 'echarts'
import 'echarts-wordcloud'

const CloudChart = () => {
    const [cloudchart, setCloud] = useState();
    const stylenc = { width: 900 + "px", height: 500 + "px" };

    function useMakecloud() {
        useEffect(() => {
            var chart_e1834cc963834b23b96f4a5729470f70 = echarts.init(
                document.getElementById('e1834cc963834b23b96f4a5729470f70'), 'white', { renderer: 'canvas' });
            var option_e1834cc963834b23b96f4a5729470f70 = {
                "animation": true,
                "animationThreshold": 2000,
                "animationDuration": 1000,
                "animationEasing": "cubicOut",
                "animationDelay": 0,
                "animationDurationUpdate": 300,
                "animationEasingUpdate": "cubicOut",
                "animationDelayUpdate": 0,
                "color": [
                    "#c23531",
                    "#2f4554",
                    "#61a0a8",
                    "#d48265",
                    "#749f83",
                    "#ca8622",
                    "#bda29a",
                    "#6e7074",
                    "#546570",
                    "#c4ccd3",
                    "#f05b72",
                    "#ef5b9c",
                    "#f47920",
                    "#905a3d",
                    "#fab27b",
                    "#2a5caa",
                    "#444693",
                    "#726930",
                    "#b2d235",
                    "#6d8346",
                    "#ac6767",
                    "#1d953f",
                    "#6950a1",
                    "#918597"
                ],
                "series": [
                    {
                        "type": "wordCloud",
                        "shape": "diamond",
                        "rotationRange": [
                            0,
                            0
                        ],
                        "rotationStep": 45,
                        "girdSize": 20,
                        "sizeRange": [
                            20,
                            100
                        ],
                        "data": [
                            {
                                "name": "beau",
                                "value": 2001,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(144,124,11)"
                                    }
                                }
                            },
                            {
                                "name": "palais",
                                "value": 1980,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(44,150,25)"
                                    }
                                }
                            },
                            {
                                "name": "monde",
                                "value": 1800,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(53,104,38)"
                                    }
                                }
                            },
                            {
                                "name": "site",
                                "value": 1952,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(25,71,86)"
                                    }
                                }
                            },
                            {
                                "name": "France",
                                "value": 1658,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(81,58,65)"
                                    }
                                }
                            },
                            {
                                "name": "incontournable",
                                "value": 1622,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(1,65,107)"
                                    }
                                }
                            },
                            {
                                "name": "astronomique",
                                "value": 1606,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(56,76,136)"
                                    }
                                }
                            },
                            {
                                "name": "superbe",
                                "value": 1537,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(84,33,86)"
                                    }
                                }
                            },
                            {
                                "name": "\u00e9difice",
                                "value": 1536,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(130,14,144)"
                                    }
                                }
                            },
                            {
                                "name": "avignon",
                                "value": 1535,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(111,151,26)"
                                    }
                                }
                            },
                            {
                                "name": "spectacle",
                                "value": 1508,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(4,134,157)"
                                    }
                                }
                            },
                            {
                                "name": "Cath\u00e9drale",
                                "value": 1437,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(147,72,108)"
                                    }
                                }
                            },
                            {
                                "name": "haut",
                                "value": 1425,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(132,111,38)"
                                    }
                                }
                            },
                            {
                                "name": "lumi\u00e8re",
                                "value": 1337,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(27,120,131)"
                                    }
                                }
                            },
                            {
                                "name": "magnifique",
                                "value": 1326,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(93,56,64)"
                                    }
                                }
                            },
                            {
                                "name": "visite",
                                "value": 1246,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(142,138,62)"
                                    }
                                }
                            },
                            {
                                "name": "decouvrir",
                                "value": 1219,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(55,112,90)"
                                    }
                                }
                            },
                            {
                                "name": "trop",
                                "value": 1180,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(44,7,106)"
                                    }
                                }
                            },
                            {
                                "name": "detour",
                                "value": 1160,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(6,83,43)"
                                    }
                                }
                            },
                            {
                                "name": "place",
                                "value": 1155,
                                "textStyle": {
                                    "normal": {
                                        "color": "rgb(37,132,158)"
                                    }
                                }
                            }
                        ],
                        "drawOutOfBound": false,
                        "textStyle": {
                            "emphasis": {}
                        }
                    }
                ],
                "legend": [
                    {
                        "data": [],
                        "selected": {},
                        "show": true,
                        "padding": 5,
                        "itemGap": 10,
                        "itemWidth": 25,
                        "itemHeight": 14
                    }
                ],
                "tooltip": {
                    "show": true,
                    "trigger": "item",
                    "triggerOn": "mousemove|click",
                    "axisPointer": {
                        "type": "line"
                    },
                    "showContent": true,
                    "alwaysShowContent": false,
                    "showDelay": 0,
                    "hideDelay": 100,
                    "textStyle": {
                        "fontSize": 14
                    },
                    "borderWidth": 0,
                    "padding": 5
                },
                "title": [
                    {
                        "text": "Nuage de mots des commentaires TripAdvisor",
                        "subtext": "Les mots les plus fréquents dans les avis sont globalements positifs",
                        "padding": 5,
                        "itemGap": 10
                    }
                ]
            }

            setCloud(chart_e1834cc963834b23b96f4a5729470f70.setOption(option_e1834cc963834b23b96f4a5729470f70));

        }, []);
    };

    return (
        <>
        { useMakecloud() }
        {/* Nuage de mots */}
        < div id = "e1834cc963834b23b96f4a5729470f70" class="chart-container" style = { stylenc } ></div >
            { cloudchart }
        </>
    )

}
export default CloudChart