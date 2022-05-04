import React from 'react'

import Monument from './components/Monument'
import BarChart from './components/BarChart'
import Line from './components/Line'
import Pie from './components/Pie'
import Doughnut from './components/Doughnut'
import CloudChart from './components/CloudChart'
import Liste from './components/ListeMonument'
import './styles/App.css';
import { useState, useEffect } from 'react'

import * as echarts from 'echarts';
import Map from './components/Map'



const Home = () => {

    const [nightchart, setChart] = useState();
    const stylenc = { width: 900 + "px", height: 500 + "px" };

    function useMakenight() {
        useEffect(() => {
            var chart_3821a6a8acad4b1abd71f914ed943637 = echarts.init(
                document.getElementById('3821a6a8acad4b1abd71f914ed943637'), 'white', { renderer: 'canvas' });
            var option_3821a6a8acad4b1abd71f914ed943637 = {
                "animation": true,
                "animationThreshold": 2000,
                "animationDuration": 1000,
                "animationEasing": "cubicOut",
                "animationDelay": 0,
                "animationDurationUpdate": 300,
                "animationEasingUpdate": "cubicOut",
                "animationDelayUpdate": 0,
                "color": [
                    "#802200",
                    "#B33000",
                    "#FF4500",
                    "#FAA327",
                    "#9ECB3C",
                    "#6DBC49",
                    "#37B44E",
                    "#14ADCF",
                    "#209AC9",
                    "#1E91CA",
                    "#2C6BA0",
                    "#2B55A1",
                    "#2D3D8E",
                    "#44388E",
                    "#6A368B",
                    "#D02C2A",
                    "#D44C2D",
                    "#F57A34",
                    "#FA8F2F",
                    "#D99D21"
                ],
                "series": [
                    {
                        "type": "pie",
                        "clockwise": true,
                        "data": [
                            {
                                "name": "2 ",
                                "value": " 64.1"
                            },
                            {
                                "name": "3 ",
                                "value": " 18.9"
                            },
                            {
                                "name": "4 ",
                                "value": " 8.2"
                            },
                            {
                                "name": "5 ",
                                "value": " 4.5"
                            },
                            {
                                "name": "6 ",
                                "value": " 2.2"
                            },
                            {
                                "name": "7 ",
                                "value": " 1.3"
                            },
                            {
                                "name": "8 ",
                                "value": " 0.6"
                            },
                            {
                                "name": "9 ",
                                "value": " 0.2"
                            }
                        ],
                        "radius": [
                            "20%",
                            "95%"
                        ],
                        "center": [
                            "30%",
                            "60%"
                        ],
                        "roseType": "area",
                        "label": {
                            "show": true,
                            "position": "inside",
                            "margin": 8,
                            "fontSize": 12,
                            "fontStyle": "italic",
                            "fontWeight": "bold",
                            "fontFamily": "Century",
                            "formatter": "{b}:{c}%"
                        },
                        "rippleEffect": {
                            "show": true,
                            "brushType": "stroke",
                            "scale": 2.5,
                            "period": 4
                        }
                    }
                ],
                "legend": [
                    {
                        "data": [
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9
                        ],
                        "selected": {},
                        "show": false,
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
                        "text": "Nigthingale représentant la distribution de personnes visitant plus de deux monuments",
                        "subtext": "Seuls 5% des visiteurs ont visité plus de ces 5 monuments",
                        "padding": 5,
                        "itemGap": 10
                    }
                ],
                "toolbox": {
                    "show": false,
                    "orient": "horizontal",
                    "itemSize": 15,
                    "itemGap": 10,
                    "left": "80%",
                    "feature": {
                        "saveAsImage": {
                            "type": "png",
                            "backgroundColor": "auto",
                            "connectedBackgroundColor": "#fff",
                            "show": true,
                            "title": "\u4fdd\u5b58\u4e3a\u56fe\u7247",
                            "pixelRatio": 1
                        },
                        "restore": {
                            "show": true,
                            "title": "\u8fd8\u539f"
                        },
                        "dataView": {
                            "show": true,
                            "title": "\u6570\u636e\u89c6\u56fe",
                            "readOnly": false,
                            "lang": [
                                "\u6570\u636e\u89c6\u56fe",
                                "\u5173\u95ed",
                                "\u5237\u65b0"
                            ],
                            "backgroundColor": "#fff",
                            "textareaColor": "#fff",
                            "textareaBorderColor": "#333",
                            "textColor": "#000",
                            "buttonColor": "#c23531",
                            "buttonTextColor": "#fff"
                        },
                        "dataZoom": {
                            "show": true,
                            "title": {
                                "zoom": "\u533a\u57df\u7f29\u653e",
                                "back": "\u533a\u57df\u7f29\u653e\u8fd8\u539f"
                            },
                            "icon": {},
                            "xAxisIndex": false,
                            "yAxisIndex": false,
                            "filterMode": "filter"
                        },
                        "magicType": {
                            "show": true,
                            "type": [
                                "line",
                                "bar",
                                "stack",
                                "tiled"
                            ],
                            "title": {
                                "line": "\u5207\u6362\u4e3a\u6298\u7ebf\u56fe",
                                "bar": "\u5207\u6362\u4e3a\u67f1\u72b6\u56fe",
                                "stack": "\u5207\u6362\u4e3a\u5806\u53e0",
                                "tiled": "\u5207\u6362\u4e3a\u5e73\u94fa"
                            },
                            "icon": {}
                        },
                        "brush": {
                            "icon": {},
                            "title": {
                                "rect": "\u77e9\u5f62\u9009\u62e9",
                                "polygon": "\u5708\u9009",
                                "lineX": "\u6a2a\u5411\u9009\u62e9",
                                "lineY": "\u7eb5\u5411\u9009\u62e9",
                                "keep": "\u4fdd\u6301\u9009\u62e9",
                                "clear": "\u6e05\u9664\u9009\u62e9"
                            }
                        }
                    }
                }
            };

            setChart(chart_3821a6a8acad4b1abd71f914ed943637.setOption(option_3821a6a8acad4b1abd71f914ed943637));


        }, []);
    }



    const styletexte = {
        width: 70+"%",
        margin: 0+" auto"

    };
    return (
        <div className="bg-white">
            <br/>

            <div class="card" style={styletexte}>
                <div class="card-body">
                    Il existe une multitude de monuments perçus par la société comme étant digne d’intérêt et devant être transmis aux générations futures. Cependant seulement une minorité d’entre eux ont atteint la consécration en décrochant une place au sein du patrimoine mondial de l’UNESCO.
                    L’objectif de ce projet est de concevoir un ou plusieurs moyens de visualiser et d’interpréter les flux touristiques dans ou entre plusieurs sites du patrimoine mondial de l’UNESCO. Le but est donc de s’informer et de traiter les enjeux de la « patrimonialisation », mais aussi de comprendre comment se construit le patrimoine culturel global dans le cadre de la mondialisation. Pour ce faire, nous avons représenté les principales mobilités inter-monuments (c’est-à-dire monuments visités par les mêmes touristes). De plus, nous nous sommes intéressés aux pays d’origine des personnes visitant les sites inscrits au sein du patrimoine mondial de l’UNESCO, nous avons donc aussi représenté les principales mobilités internationales.
                </div>
            </div>
            <br/>
            <div id="accueil">
            
                <Line nom={"Évolution du nombre de visites par année "} sousnom = {"Plus forte affluence en 2016"} nomLabel={"Nombre de visite "} labels={[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]} data={[4, 133, 865, 1322, 2307, 5147, 7874, 6889, 4951, 3735, 1493, 502]} colors={[
                    'rgba(255, 204, 204'
                ]} colorsbd={[
                    'rgba(255, 204, 204'
                ]} mult={1} multbg={1} width={5} />

                <Doughnut nom={"Répartion des visiteurs par continent"} nomLabel={"Continent"} labels={["Afrique", "Amérique du Nord", "Amérique du Sud", "Asie", "Europe", "Océanie"]} data={[145, 802, 18, 155, 25957, 184]} colors={[
                    'rgba(255, 99, 132', //rouge
                    'rgba(54, 162, 235', //bleu clair
                    'rgba(255, 255, 0', //jaune
                    'rgba(64, 255, 0', //vert clair
                    'rgba(255, 128, 0', //orange
                    'rgba(191, 0, 255' //violet rose

                ]} colorsbd={[
                    'rgba(255, 99, 132', //rouge
                    'rgba(54, 162, 235', //bleu clair
                    'rgba(255, 230, 0', //jaune
                    'rgba(64, 255, 0', //vert clair
                    'rgba(255, 128, 0', //orange
                    'rgba(191, 0, 255' //violet rose
                ]} mult={1} multbg={0.2} />
                <BarChart nom={"Répartion des visiteurs par pays"} nomLabel={"Autres Pays"} labels={["Australie", "Belgique", "Canada", "Espagne", "Etats - Unis", "Italie", "Suisse", "Pays - Bas", "Luxembourg", "Allemagne"]} data={[165, 1293, 442, 100, 317, 66, 543, 37, 80, 80]} colors={[
                    'rgba(255, 99, 132',
                    'rgba(54, 162, 235',
                    'rgba(255, 206, 86',
                    'rgba(75, 192, 192',
                    'rgba(153, 102, 255',
                    'rgba(255, 159, 64'
                ]} colorsbd={[
                    'rgba(255, 99, 132',
                    'rgba(54, 162, 235',
                    'rgba(255, 206, 86',
                    'rgba(75, 192, 192',
                    'rgba(153, 102, 255',
                    'rgba(255, 159, 64'
                ]} mult={1} multbg={0.2} nomLabelFrance={"France"} labelsFrance={"France"} dataFrance={[23517]} colorsFrance={'rgba(154, 99, 23,0.2)'} colorsFranceBd={'rgba(154, 99, 23,1)'} />

            
                <Doughnut nom={"Répartition des typologies des voyageurs"} nomLabel={"Situation"} labels={["En couple", "En famille", "Seul", "Entre amis", "Voyage d'affaires"]} data={[45, 28, 18, 6, 3]} colors={[
                    'rgba(255, 99, 132',
                    'rgba(54, 162, 235',
                    'rgba(255, 206, 86',
                    'rgba(75, 192, 192',
                    'rgba(153, 102, 255'
                ]} colorsbd={[
                    'rgba(255, 99, 132',
                    'rgba(54, 162, 235',
                    'rgba(255, 206, 86',
                    'rgba(75, 192, 192',
                    'rgba(153, 102, 255'
                ]} mult={1} multbg={0.2} />

                <CloudChart />
                
                {useMakenight()}
                {/* Nightingale de nb de visite_monum >2 */}
                <div id="3821a6a8acad4b1abd71f914ed943637" class="chart-container" style={stylenc}></div>
                {nightchart}
                
                <br/>

                <Map nom={"francemonument"}/>

                <br/>

                <Map nom={"franceinter"}/>
               

            </div>


        </div>
    )
}
export default Home