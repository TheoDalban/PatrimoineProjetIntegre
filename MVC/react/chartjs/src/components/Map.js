import React from "react";

import { useState, useEffect } from 'react'

import * as am5 from "@amcharts/amcharts5"
import * as am5map from "@amcharts/amcharts5/map"
import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/json/worldLow.json"
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"



function Map(props) {
    const am5geodata_worldLowdata = am5geodata_worldLow.default;
    const stylemap = {
        width: 80+"%",
        height: 700+"px",
        border: "solid",
        borderRadius: 5+"px",
        margin: 0+" auto"
    };

    let stylemap3 = {
      display: 'none',
  };

  let stylemap2 = {
    width: 80+"%",
    height: 700+"px",
    border: "solid",
    borderRadius: 5+"px",
    margin: 0+" auto"
  };
    
    const [map, setMap] = useState();
    const [map2, setMap2] = useState();
    useEffect(() => {
        switch(props.nom){
          case "francemonument":
            
            am5.ready(function() {
        
            // Create rootmonument element
            // https://www.amcharts.com/docs/v5/getting-started/#rootmonument_element
            var rootmonument = am5.Root.new("chartdivcarte");
            
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            rootmonument.setThemes([
              am5themes_Animated.new(rootmonument),
              am5themes_Responsive.new(rootmonument),
            ]); 
            
            
            // Create the map chart
            // https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = rootmonument.container.children.push(am5map.MapChart.new(rootmonument, {
              panX: "translateX",
              panY: "translateY",
              positionX: 46,
              rotationY: 2,
              projection: am5map.geoMercator()
            }));
        
            var cont = chart.children.push(am5.Container.new(rootmonument, {
              layout: rootmonument.horizontalLayout,
              x: 20,
              y: 40
            }));
            
            
            // Add labels and controls
            cont.children.push(am5.Label.new(rootmonument, {
              centerY: am5.p50,
              text: "Map"
            }));
            
            var switchButton = cont.children.push(am5.Button.new(rootmonument, {
              themeTags: ["switch"],
              centerY: am5.p50,
              icon: am5.Circle.new(rootmonument, {
                themeTags: ["icon"]
              })
            }));
            
            switchButton.on("active", function() {
              if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoMercator());
                chart.set("panX", "translateX");
                chart.set("panY", "translateY");
              }
              else {
                chart.set("projection", am5map.geoOrthographic());
                chart.set("panX", "rotateX");
                chart.set("panY", "rotateY");
              }
            });
            
            cont.children.push(am5.Label.new(rootmonument, {
              centerY: am5.p50,
              text: "Globe"
            }));
            
            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootmonument, {
              geoJSON: am5geodata_worldLowdata
            }));
        
            
            var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootmonument, {}));
            graticuleSeries.mapLines.template.setAll({
              stroke: rootmonument.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.08
            });
            
            // Create line series for trajectory lines
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
            var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootmonument, {}));
            lineSeries.mapLines.template.setAll({
              stroke: rootmonument.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.6,
              strokeWidth: 5,
            });
            
            // destination series
            var citySeries = chart.series.push(
              am5map.MapPointSeries.new(rootmonument, {})
            );
            
            citySeries.bullets.push(function() {
              var circle = am5.Circle.new(rootmonument, {
                radius: 5,
                tooltipText: "{title}",
                tooltipY: 0,
                fill: am5.color(0xffba00),
                stroke: rootmonument.interfaceColors.get("background"),
                strokeWidth: 2
              });
            
              return am5.Bullet.new(rootmonument, {
                sprite: circle
              });
            });
            
            // arrow series
            var arrowSeries = chart.series.push(
              am5map.MapPointSeries.new(rootmonument, {})
            );
            
            arrowSeries.bullets.push(function() {
              var arrow = am5.Graphics.new(rootmonument, {
                fill: am5.color(0x000000),
                stroke: am5.color(0x000000),
                draw: function (display) {
                  display.moveTo(0, 0);
                }
              });
            
              return am5.Bullet.new(rootmonument, {
                sprite: arrow
              });
            });
            
            var cities = [
              {
                id: "saint michel",
                title: "Abbaye du Mont-Saint-Michel",
                geometry: { type: "Point", coordinates: [-1.510278, 48.636391] }
              },
              {
                id: "cat bourges",
                title: "Cathédrale Saint-Étienne de Bourges",
                geometry: { type: "Point", coordinates: [2.3970163, 47.0821675] },
              },
              {
                id: "cat chartres",
                title: "Cathédrale Notre-Dame de Chartres",
                geometry: { type: "Point", coordinates: [1.4856484, 48.4478061] }
              }, {
                id: "cat amiens",
                title: "Cathédrale Notre-Dame d'Amiens",
                geometry: { type: "Point", coordinates: [2.2998594, 49.8946286] }
              }, {
                id: "dame avignon",
                title: "Notre Dame des Doms d'Avignon",
                geometry: { type: "Point", coordinates: [4.8056519, 43.9514439] }
              }, {
                id: "cat reims",
                title: "Cathédrale Notre-Dame de Reims",
                geometry: { type: "Point", coordinates: [4.0318532, 49.2538627] }
              }, {
                id: "bas fourviere",
                title: "Basilique Notre Dame de Fourvière",
                geometry: { type: "Point", coordinates: [4.8204373, 45.7622965] }
              }, {
                id: "cat paris",
                title: "Cathédrale Notre-Dame de Paris",
                geometry: { type: "Point", coordinates: [2.3477134, 48.8529717] }
              }, {
                id: "cat strasbourg",
                title: "Cathédrale Notre Dame de Strasbourg",
                geometry: { type: "Point", coordinates: [7.7485755, 48.5817555] }
              }];
            
            citySeries.data.setAll(cities);
            
            // prepare line series data
            var destinations = ["cat strasbourg", "cat paris", "bas fourviere", "cat reims", "dame avignon", "cat amiens", "cat chartres", "cat bourges"];
            // Saint Michel coordinates
            var originLongitude = -1.510278;
            var originLatitude = 48.636391;
            
            // Fourvière -- Avignon
            am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[4.8204373, 45.7622965], [4.8056519, 43.9514439]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          })
        
            // Strasbourg -- Avignon
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[7.7485755, 48.5817555], [4.8056519, 43.9514439]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            // Fourvière -- Strasbourg
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[4.8204373, 45.7622965], [7.7485755, 48.5817555]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            // Strasbourg -- Saint-Michel
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[7.7485755, 48.5817555], [-1.510278, 48.636391]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            //Saint-Michel -- Fourvière
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [4.8204373, 45.7622965]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
         
            
            polygonSeries.events.on("datavalidated", function () {
              chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
            })
            
            
            // Make stuff animate on load
            chart.appear(1000, 100);
            
            }); // end am5.ready()
            
            break;
          case "franceinter":
            
            setMap2(am5.ready(function() {
          
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var rootnation = am5.Root.new("chartdivcarte2");
            
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            rootnation.setThemes([
              am5themes_Animated.new(rootnation),
              am5themes_Responsive.new(rootnation),
            ]);
            
            
            // Create the map chart
            // https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = rootnation.container.children.push(am5map.MapChart.new(rootnation, {
              panX: "translateX",
              panY: "translateY",
              positionX: 46,
              rotationY: 2,
              projection: am5map.geoMercator()
            }));
          
            var cont = chart.children.push(am5.Container.new(rootnation, {
              layout: rootnation.horizontalLayout,
              x: 20,
              y: 40
            }));
            
            
            // Add labels and controls
            cont.children.push(am5.Label.new(rootnation, {
              centerY: am5.p50,
              text: "Map"
            }));
            
            var switchButton = cont.children.push(am5.Button.new(rootnation, {
              themeTags: ["switch"],
              centerY: am5.p50,
              icon: am5.Circle.new(rootnation, {
                themeTags: ["icon"]
              })
            }));
            
            switchButton.on("active", function() {
              if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoMercator());
                chart.set("panX", "translateX");
                chart.set("panY", "translateY");
              }
              else {
                chart.set("projection", am5map.geoOrthographic());
                chart.set("panX", "rotateX");
                chart.set("panY", "rotateY");
              }
            });
            
            cont.children.push(am5.Label.new(rootnation, {
              centerY: am5.p50,
              text: "Globe"
            }));
            
            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootnation, {
              geoJSON: am5geodata_worldLowdata
            }));
          
            
            var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootnation, {}));
            graticuleSeries.mapLines.template.setAll({
              stroke: rootnation.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.08
            });
            
            // Create line series for trajectory lines
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
            var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootnation, {}));
            lineSeries.mapLines.template.setAll({
              stroke: rootnation.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.6,
              strokeWidth: 5,
              tooltipText: "en provenance de {title} : {valeur}",
            });
            
            // destination series
            var citySeries = chart.series.push(
              am5map.MapPointSeries.new(rootnation, {})
            );
            
            citySeries.bullets.push(function() {
              var circle = am5.Circle.new(rootnation, {
                radius: 5,
                tooltipText: "{title}",
                tooltipY: 0,
                fill: am5.color(0xffba00),
                stroke: rootnation.interfaceColors.get("background"),
                strokeWidth: 2
              });
            
              return am5.Bullet.new(rootnation, {
                sprite: circle
              });
            });
            
            // arrow series
            var arrowSeries = chart.series.push(
              am5map.MapPointSeries.new(rootnation, {})
            );
            
            arrowSeries.bullets.push(function() {
              var arrow = am5.Graphics.new(rootnation, {
                fill: am5.color(0xf000A0),
                stroke: am5.color(0x000000),
                draw: function (display) {
                  display.moveTo(0, 0);
                }
              });
            
              return am5.Bullet.new(rootnation, {
                sprite: arrow
              });
            });
            
            var cities = [
              {
                id: "australie",
                title: "Australie",
                geometry: { type: "Point", coordinates: [133, -23] }
              },
              {
                id: "belgique",
                title: "Belgique",
                geometry: { type: "Point", coordinates: [3.97, 50.86] },
              },
              {
                id: "canada",
                title: "Canada",
                geometry: { type: "Point", coordinates: [-112, 60] }
              }, {
                id: "espagne",
                title: "Espagne",
                geometry: { type: "Point", coordinates: [-3.81, 40.43] }
              }, {
                id: "etatsunis",
                title: "États-Unis",
                geometry: { type: "Point", coordinates: [-88.01, 41.83] }
              }, {
                id: "italie",
                title: "Italie",
                geometry: { type: "Point", coordinates: [12.45, 41.88] }
              }, {
                id: "suisse",
                title: "Suisse",
                geometry: { type: "Point", coordinates: [7.90, 46.61] }
              }, {
                id: "paysbas",
                title: "Pays-bas",
                geometry: { type: "Point", coordinates: [4.94, 52.08] }
              }, {
                id: "luxembourg",
                title: "Luxembourg",
                geometry: { type: "Point", coordinates: [6.02, 49.74] }
              }, {
                id: "allemagne",
                title: "Allemagne",
                geometry: { type: "Point", coordinates: [12.25, 51.34] }
              }, { 
                  id: "cat bourges",
                  title: "France",
                  geometry: { type: "Point", coordinates: [2.3970163, 47.0821675] },
                }];
            
            citySeries.data.setAll(cities);
            
            // prepare line series data
            var destinations = ["australie", "belgique", "canada", "espagne", "etatsunis", "italie", "suisse", "paysbas", "luxembourg", "allemagne"];
            // Saint etienne de bourges coordinates
            var originLongitude = 2.3970163;
            var originLatitude = 47.0821675;
            
            // France -- Australie
            am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Belgique
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical",  title: cities[1].title,valeur: 1000, geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            }); 
          });
          
            // France -- Canada
            am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
            // France -- Espagne
            am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-3.81, 40.43]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
            // France -- Etats-Unis
            am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Italie
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [12.45, 41.88]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Suisse
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Pays-Bas
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [4.94, 52.08]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Luxembourg
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [6.02, 49.74]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          // France -- Allemagne
          am5.array.each(destinations, function (did) {
            var destinationDataItem = citySeries.getDataItemById(did);
            var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [12.25, 51.34]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
            arrowSeries.pushDataItem({
              lineDataItem: lineDataItem,
              positionOnLine: 0.5,
              autoRotate: true,
            });
          });
          
          
            
            polygonSeries.events.on("datavalidated", function () {
              chart.zoomToGeoPoint({ longitude:  -2.3970163, latitude: 47.0821675 }, 15);
            })
            
            
            // Make stuff animate on load
            chart.appear(1000, 100);
            
            })); // end am5.ready()
            
            break;
            case "bourges":
              
            
            setMap(am5.ready(function() {
        
            // Create rootBourges element
            // https://www.amcharts.com/docs/v5/getting-started/#rootBourges_element
            var rootBourges = am5.Root.new("chartdivcarte");
            
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            rootBourges.setThemes([
              am5themes_Animated.new(rootBourges),
              am5themes_Responsive.new(rootBourges),
            ]);
            
            
            // Create the map chart
            // https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = rootBourges.container.children.push(am5map.MapChart.new(rootBourges, {
              panX: "translateX",
              panY: "translateY",
              positionX: 46,
              rotationY: 2,
              projection: am5map.geoMercator()
            }));
        
            var cont = chart.children.push(am5.Container.new(rootBourges, {
              layout: rootBourges.horizontalLayout,
              x: 20,
              y: 40
            }));
            
            
            // Add labels and controls
            cont.children.push(am5.Label.new(rootBourges, {
              centerY: am5.p50,
              text: "Map"
            }));
            
            var switchButton = cont.children.push(am5.Button.new(rootBourges, {
              themeTags: ["switch"],
              centerY: am5.p50,
              icon: am5.Circle.new(rootBourges, {
                themeTags: ["icon"]
              })
            }));
            
            switchButton.on("active", function() {
              if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoMercator());
                chart.set("panX", "translateX");
                chart.set("panY", "translateY");
              }
              else {
                chart.set("projection", am5map.geoOrthographic());
                chart.set("panX", "rotateX");
                chart.set("panY", "rotateY");
              }
            });
            
            cont.children.push(am5.Label.new(rootBourges, {
              centerY: am5.p50,
              text: "Globe"
            }));
            
            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootBourges, {
              geoJSON: am5geodata_worldLowdata
            }));
        
            
            var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootBourges, {}));
            graticuleSeries.mapLines.template.setAll({
              stroke: rootBourges.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.08
            });
            
            // Create line series for trajectory lines
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
            var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootBourges, {}));
            lineSeries.mapLines.template.setAll({
              stroke: rootBourges.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.6,
              strokeWidth: 5,
            });
            
            // destination series
            var citySeries = chart.series.push(
              am5map.MapPointSeries.new(rootBourges, {})
            );
            
            citySeries.bullets.push(function() {
              var circle = am5.Circle.new(rootBourges, {
                radius: 5,
                tooltipText: "{title}",
                tooltipY: 0,
                fill: am5.color(0xffba00),
                stroke: rootBourges.interfaceColors.get("background"),
                strokeWidth: 2
              });
            
              return am5.Bullet.new(rootBourges, {
                sprite: circle
              });
            });
            
            // arrow series
            var arrowSeries = chart.series.push(
              am5map.MapPointSeries.new(rootBourges, {})
            );
            
            arrowSeries.bullets.push(function() {
              var arrow = am5.Graphics.new(rootBourges, {
                fill: am5.color(0x000000),
                stroke: am5.color(0x000000),
                draw: function (display) {
                  display.moveTo(0, -3);
                  display.lineTo(8, 0);
                  display.lineTo(0, 3);
                  display.lineTo(0, -3);
                }
              });
            
              return am5.Bullet.new(rootBourges, {
                sprite: arrow
              });
            });
            
            var cities = [
            {
    
                id: "belgique",
                title: "Belgique",
                geometry: { type: "Point", coordinates: [3.97, 50.86] },
                },
                {
                id: "canada",
                title: "Canada",
                geometry: { type: "Point", coordinates: [-112, 60] }
                }, {
                id: "etatsunis",
                title: "États-Unis",
                geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                }, 
                {
                id: "paysbas",
                title: "Pays-bas",
                geometry: { type: "Point", coordinates: [4.94, 52.08] }
                },
                {
                id: "suisse",
                title: "Suisse",
                geometry: { type: "Point", coordinates: [7.90, 46.61] }
                },
                {
                id: "cat bourges",
                title: "Cathédrale Saint-Étienne de Bourges",
                geometry: { type: "Point", coordinates: [2.3970163, 47.0821675] },
              }];
            
            citySeries.data.setAll(cities);
            
            // prepare line series data
            var destinations = ["belgique","canada","etatsunis","paysbas","suisse"];
            // Bourges coordinates
            var originLongitude = 2.3970163;
            var originLatitude = 47.0821675;
            
            
            // Bourges -- Belgique
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            // Bourges -- Canada
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            // Bourges -- Etatsunis
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
            // Bourges -- Pays-Bas
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [4.94, 52.08]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })

            // Bourges -- Suisse
            am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
        
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
        
         
            
            polygonSeries.events.on("datavalidated", function () {
              chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
            })
            
            
            // Make stuff animate on load
            chart.appear(1000, 100);
            
            })); // end am5.ready()
            break;
            case "chartres":
              
            am5.ready(function() {
        
              // Create rootChartres element
              // https://www.amcharts.com/docs/v5/getting-started/#rootChartres_element
              var rootChartres = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootChartres.setThemes([
                am5themes_Animated.new(rootChartres),
                am5themes_Responsive.new(rootChartres),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootChartres.container.children.push(am5map.MapChart.new(rootChartres, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootChartres, {
                layout: rootChartres.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootChartres, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootChartres, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootChartres, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootChartres, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootChartres, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootChartres, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootChartres.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootChartres, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootChartres.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootChartres, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootChartres, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootChartres.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootChartres, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootChartres, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootChartres, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootChartres, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
                  id: "australie",
                  title: "Australie",
                  geometry: { type: "Point", coordinates: [133, -23] }
                  },
                  {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, {
                  id: "etatsunis",
                  title: "États-Unis",
                  geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                  }, 
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "cat chartres",
                  title: "Cathédrale Notre-Dame de Chartres",
                  geometry: { type: "Point", coordinates: [1.4856484, 48.4478061] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["australie","belgique","canada","etatsunis","suisse"];
              // Chartres coordinates
              var originLongitude = 1.4856484;
              var originLatitude = 48.4478061;
              
              // Chartres -- Australie 
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Chartres -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Chartres -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Chartres -- Etatsunis
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Chartres -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "amiens":
              
            am5.ready(function() {
        
              // Create rootAmiens element
              // https://www.amcharts.com/docs/v5/getting-started/#rootAmiens_element
              var rootAmiens = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootAmiens.setThemes([
                am5themes_Animated.new(rootAmiens),
                am5themes_Responsive.new(rootAmiens),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootAmiens.container.children.push(am5map.MapChart.new(rootAmiens, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootAmiens, {
                layout: rootAmiens.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootAmiens, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootAmiens, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootAmiens, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootAmiens, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootAmiens, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootAmiens, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootAmiens.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootAmiens, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootAmiens.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootAmiens, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootAmiens, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootAmiens.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootAmiens, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootAmiens, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootAmiens, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootAmiens, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
                  id: "australie",
                  title: "Australie",
                  geometry: { type: "Point", coordinates: [133, -23] }
                  },
                  {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, {
                  id: "espagne",
                  title: "Espagne",
                  geometry: { type: "Point", coordinates: [-3.81, 40.43] }
                  }, {
                  id: "etatsunis",
                  title: "États-Unis",
                  geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                  }, {
                  id: "cat amiens",
                  title: "Cathédrale Notre-Dame d'Amiens",
                  geometry: { type: "Point", coordinates: [2.2998594, 49.8946286] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["australie","belgique","canada","espagne","etatsunis"];
              // Amiens coordinates
              var originLongitude = 2.2998594;
              var originLatitude = 49.8946286;
              
              // Amiens -- Australie 
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Amiens -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Amiens -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Amiens -- Espagne
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-3.81, 40.43]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Amiens -- Etatsunis
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "reims":
              
            am5.ready(function() {
        
              // Create rootReims element
              // https://www.amcharts.com/docs/v5/getting-started/#rootReims_element
              var rootReims = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootReims.setThemes([
                am5themes_Animated.new(rootReims),
                am5themes_Responsive.new(rootReims),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootReims.container.children.push(am5map.MapChart.new(rootReims, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootReims, {
                layout: rootReims.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootReims, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootReims, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootReims, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootReims, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootReims, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootReims, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootReims.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootReims, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootReims.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootReims, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootReims, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootReims.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootReims, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootReims, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootReims, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootReims, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
                  id: "australie",
                  title: "Australie",
                  geometry: { type: "Point", coordinates: [133, -23] }
                  },
                  {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, {
                  id: "etatsunis",
                  title: "États-Unis",
                  geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                  }, 
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "cat reims",
                  title: "Cathédrale Notre-Dame de Reims",
                  geometry: { type: "Point", coordinates: [4.0318532, 49.2538627] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["australie","belgique","canada","etatsunis","suisse"];
              // Reims coordinates
              var originLongitude = 4.0318532;
              var originLatitude = 49.2538627;
              
              // Reims -- Australie 
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Reims -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Reims -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Reims -- Etatsunis
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Reims -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "avignon":
              
            am5.ready(function() {
        
              // Create rootAvignon element
              // https://www.amcharts.com/docs/v5/getting-started/#rootAvignon_element
              var rootAvignon = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootAvignon.setThemes([
                am5themes_Animated.new(rootAvignon),
                am5themes_Responsive.new(rootAvignon),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootAvignon.container.children.push(am5map.MapChart.new(rootAvignon, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootAvignon, {
                layout: rootAvignon.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootAvignon, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootAvignon, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootAvignon, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootAvignon, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootAvignon, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootAvignon, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootAvignon.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootAvignon, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootAvignon.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootAvignon, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootAvignon, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootAvignon.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootAvignon, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootAvignon, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootAvignon, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootAvignon, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
                  id: "australie",
                  title: "Australie",
                  geometry: { type: "Point", coordinates: [133, -23] }
                  },
                  {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, {
                  id: "etatsunis",
                  title: "États-Unis",
                  geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                  }, 
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "dame avignon",
                  title: "Notre Dame des Doms d'Avignon",
                  geometry: { type: "Point", coordinates: [4.8056519, 43.9514439] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["australie","belgique","canada","etatsunis","suisse"];
              // Avignon coordinates
              var originLongitude = 4.8056519;
              var originLatitude = 43.9514439;
              
              // Avignon -- Australie 
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Avignon -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Avignon -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Avignon -- Etatsunis
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Avignon -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "stmichel":
              
            am5.ready(function() {
        
              // Create rootStMichel element
              // https://www.amcharts.com/docs/v5/getting-started/#rootStMichel_element
              var rootStMichel = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootStMichel.setThemes([
                am5themes_Animated.new(rootStMichel),
                am5themes_Responsive.new(rootStMichel),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootStMichel.container.children.push(am5map.MapChart.new(rootStMichel, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootStMichel, {
                layout: rootStMichel.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootStMichel, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootStMichel, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootStMichel, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootStMichel, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootStMichel, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootStMichel, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootStMichel.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootStMichel, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootStMichel.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootStMichel, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootStMichel, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootStMichel.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootStMichel, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootStMichel, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootStMichel, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootStMichel, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
                  id: "australie",
                  title: "Australie",
                  geometry: { type: "Point", coordinates: [133, -23] }
                  },
                  {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, {
                  id: "etatsunis",
                  title: "États-Unis",
                  geometry: { type: "Point", coordinates: [-88.01, 41.83] }
                  }, 
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "saint michel",
                  title: "Abbaye du Mont-Saint-Michel",
                  geometry: { type: "Point", coordinates: [-1.510278, 48.636391] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["australie","belgique","canada","etatsunis","suisse"];
              // Saint Michel coordinates
              var originLongitude = -1.510278;
              var originLatitude = 48.636391;
              
              // Saint Michel -- Australie 
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [133, -23]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Saint Michel -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Saint Michel -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Saint Michel -- Etatsunis
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-88.01, 41.83]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Saint Michel -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "fourviere":
              
            am5.ready(function() {
        
              // Create rootFourviere element
              // https://www.amcharts.com/docs/v5/getting-started/#rootFourviere_element
              var rootFourviere = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootFourviere.setThemes([
                am5themes_Animated.new(rootFourviere),
                am5themes_Responsive.new(rootFourviere),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootFourviere.container.children.push(am5map.MapChart.new(rootFourviere, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootFourviere, {
                layout: rootFourviere.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootFourviere, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootFourviere, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootFourviere, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootFourviere, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootFourviere, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootFourviere, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootFourviere.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootFourviere, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootFourviere.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootFourviere, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootFourviere, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootFourviere.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootFourviere, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootFourviere, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootFourviere, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootFourviere, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
      
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, 
                  {
                  id: "espagne",
                  title: "Espagne",
                  geometry: { type: "Point", coordinates: [-3.81, 40.43] }
                  },
                  {
                  id: "italie",
                  title: "Italie",
                  geometry: { type: "Point", coordinates: [12.45, 41.88] }
                  },
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "bas fourviere",
                  title: "Basilique Notre Dame de Fourvière",
                  geometry: { type: "Point", coordinates: [4.8204373, 45.7622965] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["belgique","canada","espagne","italie","suisse"];
              // Fourvière coordinates
              var originLongitude = 4.8204373;
              var originLatitude = 45.7622965;
              
              
              // Fourvière -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Fourvière -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Fourvière -- Espagne
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-3.81, 40.43]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
  
              // Fourvière -- Italie
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [12.45, 41.88]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
  
  
              // Fourvière -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            case "strasbourg":
              setMap(am5.ready(function() {
        
                // Create rootStrasbourg element
                // https://www.amcharts.com/docs/v5/getting-started/#rootStrasbourg_element
                var rootStrasbourg = am5.Root.new("chartdivcarte");
                
                
                // Set themes
                // https://www.amcharts.com/docs/v5/concepts/themes/
                rootStrasbourg.setThemes([
                  am5themes_Animated.new(rootStrasbourg),
                  am5themes_Responsive.new(rootStrasbourg),
                ]);
                
                
                // Create the map chart
                // https://www.amcharts.com/docs/v5/charts/map-chart/
                var chart = rootStrasbourg.container.children.push(am5map.MapChart.new(rootStrasbourg, {
                  panX: "translateX",
                  panY: "translateY",
                  positionX: 46,
                  rotationY: 2,
                  projection: am5map.geoMercator()
                }));
            
                var cont = chart.children.push(am5.Container.new(rootStrasbourg, {
                  layout: rootStrasbourg.horizontalLayout,
                  x: 20,
                  y: 40
                }));
                
                
                // Add labels and controls
                cont.children.push(am5.Label.new(rootStrasbourg, {
                  centerY: am5.p50,
                  text: "Map"
                }));
                
                var switchButton = cont.children.push(am5.Button.new(rootStrasbourg, {
                  themeTags: ["switch"],
                  centerY: am5.p50,
                  icon: am5.Circle.new(rootStrasbourg, {
                    themeTags: ["icon"]
                  })
                }));
                
                switchButton.on("active", function() {
                  if (!switchButton.get("active")) {
                    chart.set("projection", am5map.geoMercator());
                    chart.set("panX", "translateX");
                    chart.set("panY", "translateY");
                  }
                  else {
                    chart.set("projection", am5map.geoOrthographic());
                    chart.set("panX", "rotateX");
                    chart.set("panY", "rotateY");
                  }
                });
                
                cont.children.push(am5.Label.new(rootStrasbourg, {
                  centerY: am5.p50,
                  text: "Globe"
                }));
                
                // Create main polygon series for countries
                // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
                var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootStrasbourg, {
                  geoJSON: am5geodata_worldLowdata
                }));
            
                
                var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootStrasbourg, {}));
                graticuleSeries.mapLines.template.setAll({
                  stroke: rootStrasbourg.interfaceColors.get("alternativeBackground"),
                  strokeOpacity: 0.08
                });
                
                // Create line series for trajectory lines
                // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
                var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootStrasbourg, {}));
                lineSeries.mapLines.template.setAll({
                  stroke: rootStrasbourg.interfaceColors.get("alternativeBackground"),
                  strokeOpacity: 0.6,
                  strokeWidth: 5,
                });
                
                // destination series
                var citySeries = chart.series.push(
                  am5map.MapPointSeries.new(rootStrasbourg, {})
                );
                
                citySeries.bullets.push(function() {
                  var circle = am5.Circle.new(rootStrasbourg, {
                    radius: 5,
                    tooltipText: "{title}",
                    tooltipY: 0,
                    fill: am5.color(0xffba00),
                    stroke: rootStrasbourg.interfaceColors.get("background"),
                    strokeWidth: 2
                  });
                
                  return am5.Bullet.new(rootStrasbourg, {
                    sprite: circle
                  });
                });
                
                // arrow series
                var arrowSeries = chart.series.push(
                  am5map.MapPointSeries.new(rootStrasbourg, {})
                );
                
                arrowSeries.bullets.push(function() {
                  var arrow = am5.Graphics.new(rootStrasbourg, {
                    fill: am5.color(0x000000),
                    stroke: am5.color(0x000000),
                    draw: function (display) {
                      display.moveTo(0, -3);
                      display.lineTo(8, 0);
                      display.lineTo(0, 3);
                      display.lineTo(0, -3);
                    }
                  });
                
                  return am5.Bullet.new(rootStrasbourg, {
                    sprite: arrow
                  });
                });
                
                var cities = [
                {
        
                    id: "belgique",
                    title: "Belgique",
                    geometry: { type: "Point", coordinates: [3.97, 50.86] },
                    },
                    {
                    id: "canada",
                    title: "Canada",
                    geometry: { type: "Point", coordinates: [-112, 60] }
                    }, 
                    {
                    id: "espagne",
                    title: "Espagne",
                    geometry: { type: "Point", coordinates: [-3.81, 40.43] }
                    },
                    {
                    id: "luxembourg",
                    title: "Luxembourg",
                    geometry: { type: "Point", coordinates: [6.02, 49.74] }
                    }, 
                    {
                    id: "suisse",
                    title: "Suisse",
                    geometry: { type: "Point", coordinates: [7.90, 46.61] }
                    },
                    {
                    id: "cat strasbourg",
                    title: "Cathédrale Notre Dame de Strasbourg",
                    geometry: { type: "Point", coordinates: [7.7485755, 48.5817555] },
                  }];
                
                citySeries.data.setAll(cities);
                
                // prepare line series data
                var destinations = ["belgique","canada","espagne","luxembourg","suisse"];
                // Strasbourg coordinates
                var originLongitude = 7.7485755;
                var originLatitude = 48.5817555;
                
                
                // Strasbourg -- Belgique
                am5.array.each(destinations, function (did) {
                  var destinationDataItem = citySeries.getDataItemById(did);
                  var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
            
                  arrowSeries.pushDataItem({
                    lineDataItem: lineDataItem,
                    positionOnLine: 0.5,
                    autoRotate: true,
                  });
                })
            
                // Strasbourg -- Canada
                am5.array.each(destinations, function (did) {
                  var destinationDataItem = citySeries.getDataItemById(did);
                  var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
            
                  arrowSeries.pushDataItem({
                    lineDataItem: lineDataItem,
                    positionOnLine: 0.5,
                    autoRotate: true,
                  });
                })
            
                // Strasbourg -- Espagne
                am5.array.each(destinations, function (did) {
                  var destinationDataItem = citySeries.getDataItemById(did);
                  var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-3.81, 40.43]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
            
                  arrowSeries.pushDataItem({
                    lineDataItem: lineDataItem,
                    positionOnLine: 0.5,
                    autoRotate: true,
                  });
                })
    
                // Strasbourg -- Luxembourg
                am5.array.each(destinations, function (did) {
                  var destinationDataItem = citySeries.getDataItemById(did);
                  var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [6.02, 49.74]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
            
                  arrowSeries.pushDataItem({
                    lineDataItem: lineDataItem,
                    positionOnLine: 0.5,
                    autoRotate: true,
                  });
                })
    
    
                // Strasbourg -- Suisse
                am5.array.each(destinations, function (did) {
                  var destinationDataItem = citySeries.getDataItemById(did);
                  var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
            
                  arrowSeries.pushDataItem({
                    lineDataItem: lineDataItem,
                    positionOnLine: 0.5,
                    autoRotate: true,
                  });
                })
            
             
                
                polygonSeries.events.on("datavalidated", function () {
                  chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
                })
                
                
                // Make stuff animate on load
                chart.appear(1000, 100);
                
                }) // end am5.ready()
            )
    
              break;
            case "paris":
              
            am5.ready(function() {
        
              // Create rootParis element
              // https://www.amcharts.com/docs/v5/getting-started/#rootParis_element
              var rootParis = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootParis.setThemes([
                am5themes_Animated.new(rootParis),
                am5themes_Responsive.new(rootParis),
              ]);
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootParis.container.children.push(am5map.MapChart.new(rootParis, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootParis, {
                layout: rootParis.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootParis, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootParis, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootParis, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootParis, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootParis, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootParis, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootParis.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootParis, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootParis.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootParis, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootParis, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootParis.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootParis, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootParis, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootParis, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, -3);
                    display.lineTo(8, 0);
                    display.lineTo(0, 3);
                    display.lineTo(0, -3);
                  }
                });
              
                return am5.Bullet.new(rootParis, {
                  sprite: arrow
                });
              });
              
              var cities = [
              {
              id: "algerie",
              title: "Algerie",
              geometry: { type: "Point", coordinates: [0.71, 27.20] }
              },
              {
                  id: "belgique",
                  title: "Belgique",
                  geometry: { type: "Point", coordinates: [3.97, 50.86] },
                  },
                  {
                  id: "canada",
                  title: "Canada",
                  geometry: { type: "Point", coordinates: [-112, 60] }
                  }, 
                  {
                  id: "espagne",
                  title: "Espagne",
                  geometry: { type: "Point", coordinates: [-3.81, 40.43] }
                  },
                  
                  {
                  id: "suisse",
                  title: "Suisse",
                  geometry: { type: "Point", coordinates: [7.90, 46.61] }
                  },
                  {
                  id: "cat paris",
                  title: "Cathédrale Notre-Dame de Paris",
                  geometry: { type: "Point", coordinates: [2.3477134, 48.8529717] },
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["algerie","belgique","canada","espagne",,"suisse"];
              // Paris coordinates
              var originLongitude = 2.3477134;
              var originLatitude = 48.8529717;
              
               // Paris -- Algerie
               am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [0.71, 27.20]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
  
              // Paris -- Belgique
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [3.97, 50.86]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Paris -- Canada
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-112, 60]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Paris -- Espagne
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [-3.81, 40.43]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
  
              // Paris -- Suisse
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [7.90, 46.61]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
  
              break;
            default:
              
              am5.ready(function() {
          
              // Create rootmonument element
              // https://www.amcharts.com/docs/v5/getting-started/#rootmonument_element
              var rootmonument = am5.Root.new("chartdivcarte");
              
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              rootmonument.setThemes([
                am5themes_Animated.new(rootmonument),
                am5themes_Responsive.new(rootmonument),
              ]); 
              
              
              // Create the map chart
              // https://www.amcharts.com/docs/v5/charts/map-chart/
              var chart = rootmonument.container.children.push(am5map.MapChart.new(rootmonument, {
                panX: "translateX",
                panY: "translateY",
                positionX: 46,
                rotationY: 2,
                projection: am5map.geoMercator()
              }));
          
              var cont = chart.children.push(am5.Container.new(rootmonument, {
                layout: rootmonument.horizontalLayout,
                x: 20,
                y: 40
              }));
              
              
              // Add labels and controls
              cont.children.push(am5.Label.new(rootmonument, {
                centerY: am5.p50,
                text: "Map"
              }));
              
              var switchButton = cont.children.push(am5.Button.new(rootmonument, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(rootmonument, {
                  themeTags: ["icon"]
                })
              }));
              
              switchButton.on("active", function() {
                if (!switchButton.get("active")) {
                  chart.set("projection", am5map.geoMercator());
                  chart.set("panX", "translateX");
                  chart.set("panY", "translateY");
                }
                else {
                  chart.set("projection", am5map.geoOrthographic());
                  chart.set("panX", "rotateX");
                  chart.set("panY", "rotateY");
                }
              });
              
              cont.children.push(am5.Label.new(rootmonument, {
                centerY: am5.p50,
                text: "Globe"
              }));
              
              // Create main polygon series for countries
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
              var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(rootmonument, {
                geoJSON: am5geodata_worldLowdata
              }));
          
              
              var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(rootmonument, {}));
              graticuleSeries.mapLines.template.setAll({
                stroke: rootmonument.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.08
              });
              
              // Create line series for trajectory lines
              // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
              var lineSeries = chart.series.push(am5map.MapLineSeries.new(rootmonument, {}));
              lineSeries.mapLines.template.setAll({
                stroke: rootmonument.interfaceColors.get("alternativeBackground"),
                strokeOpacity: 0.6,
                strokeWidth: 5,
              });
              
              // destination series
              var citySeries = chart.series.push(
                am5map.MapPointSeries.new(rootmonument, {})
              );
              
              citySeries.bullets.push(function() {
                var circle = am5.Circle.new(rootmonument, {
                  radius: 5,
                  tooltipText: "{title}",
                  tooltipY: 0,
                  fill: am5.color(0xffba00),
                  stroke: rootmonument.interfaceColors.get("background"),
                  strokeWidth: 2
                });
              
                return am5.Bullet.new(rootmonument, {
                  sprite: circle
                });
              });
              
              // arrow series
              var arrowSeries = chart.series.push(
                am5map.MapPointSeries.new(rootmonument, {})
              );
              
              arrowSeries.bullets.push(function() {
                var arrow = am5.Graphics.new(rootmonument, {
                  fill: am5.color(0x000000),
                  stroke: am5.color(0x000000),
                  draw: function (display) {
                    display.moveTo(0, 0);
                  }
                });
              
                return am5.Bullet.new(rootmonument, {
                  sprite: arrow
                });
              });
              
              var cities = [
                {
                  id: "saint michel",
                  title: "Abbaye du Mont-Saint-Michel",
                  geometry: { type: "Point", coordinates: [-1.510278, 48.636391] }
                },
                {
                  id: "cat bourges",
                  title: "Cathédrale Saint-Étienne de Bourges",
                  geometry: { type: "Point", coordinates: [2.3970163, 47.0821675] },
                },
                {
                  id: "cat chartres",
                  title: "Cathédrale Notre-Dame de Chartres",
                  geometry: { type: "Point", coordinates: [1.4856484, 48.4478061] }
                }, {
                  id: "cat amiens",
                  title: "Cathédrale Notre-Dame d'Amiens",
                  geometry: { type: "Point", coordinates: [2.2998594, 49.8946286] }
                }, {
                  id: "dame avignon",
                  title: "Notre Dame des Doms d'Avignon",
                  geometry: { type: "Point", coordinates: [4.8056519, 43.9514439] }
                }, {
                  id: "cat reims",
                  title: "Cathédrale Notre-Dame de Reims",
                  geometry: { type: "Point", coordinates: [4.0318532, 49.2538627] }
                }, {
                  id: "bas fourviere",
                  title: "Basilique Notre Dame de Fourvière",
                  geometry: { type: "Point", coordinates: [4.8204373, 45.7622965] }
                }, {
                  id: "cat paris",
                  title: "Cathédrale Notre-Dame de Paris",
                  geometry: { type: "Point", coordinates: [2.3477134, 48.8529717] }
                }, {
                  id: "cat strasbourg",
                  title: "Cathédrale Notre Dame de Strasbourg",
                  geometry: { type: "Point", coordinates: [7.7485755, 48.5817555] }
                }];
              
              citySeries.data.setAll(cities);
              
              // prepare line series data
              var destinations = ["cat strasbourg", "cat paris", "bas fourviere", "cat reims", "dame avignon", "cat amiens", "cat chartres", "cat bourges"];
              // Saint Michel coordinates
              var originLongitude = -1.510278;
              var originLatitude = 48.636391;
              
              // Fourvière -- Avignon
              am5.array.each(destinations, function (did) {
              var destinationDataItem = citySeries.getDataItemById(did);
              var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[4.8204373, 45.7622965], [4.8056519, 43.9514439]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
              arrowSeries.pushDataItem({
                lineDataItem: lineDataItem,
                positionOnLine: 0.5,
                autoRotate: true,
              });
            })
          
              // Strasbourg -- Avignon
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[7.7485755, 48.5817555], [4.8056519, 43.9514439]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Fourvière -- Strasbourg
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[4.8204373, 45.7622965], [7.7485755, 48.5817555]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              // Strasbourg -- Saint-Michel
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[7.7485755, 48.5817555], [-1.510278, 48.636391]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
              //Saint-Michel -- Fourvière
              am5.array.each(destinations, function (did) {
                var destinationDataItem = citySeries.getDataItemById(did);
                var lineDataItem = lineSeries.pushDataItem({ orientation: "vertical", geometry: { type: "LineString", coordinates: [[originLongitude, originLatitude], [4.8204373, 45.7622965]] } }); //[destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]]
          
                arrowSeries.pushDataItem({
                  lineDataItem: lineDataItem,
                  positionOnLine: 0.5,
                  autoRotate: true,
                });
              })
          
           
              
              polygonSeries.events.on("datavalidated", function () {
                chart.zoomToGeoPoint({ longitude: 2, latitude: 48 }, 15);
              })
              
              
              // Make stuff animate on load
              chart.appear(1000, 100);
              
              }); // end am5.ready()
              
              break;
          }
        

    },[]);
    return(
        <>
        {/* Map centré sur Strasbourg inter monuments
    styles  */}
    {map}
    <div id="chartdivcarte" style={stylemap}></div>
    <br/>
    {map2}
    <div id="chartdivcarte2" style={stylemap2}></div>
    </>
    )
} 

export default Map