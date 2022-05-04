import '../styles/monument.css';
import React from 'react';
import { useParams } from 'react-router';
import Map from './Map';
import Doughnut from './Doughnut';
import Line from './Line';

function Monument() {

  let { nom } = useParams();
  let { nomMonu } = "";
  let { lienMonu } = "#";
  let noteMoy = null;
  let map = <Map/>;
  let nbvisite = null;
  let donut = <Doughnut nom = {"La Cathédrale Notre Dame de Chartres"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[4,64,0,13,1731,12]} colors={[
    'rgba(255, 99, 132', //rouge
    'rgba(54, 162, 235', //bleu clair
    'rgba(255, 206, 86', //jaune
    'rgba(75, 192, 192', //vert clair
    'rgba(255, 128, 0', //orange
    'rgba(191, 0, 255' //violet rose

  ]} colorsbd={[
    'rgba(255, 99, 132', //rouge
    'rgba(54, 162, 235', //bleu clair
    'rgba(255, 206, 86', //jaune
    'rgba(75, 192, 192', //vert clair
    'rgba(255, 128, 0', //orange
    'rgba(191, 0, 255' //violet rose
  ]} mult={1} multbg={0.2} />;

  const styletexte = {
    width: 70+"%",
    margin: 0+" auto"

};

  function afficheMap(nam) {
    return <Map nom={nam} />
  }

  switch (nom) {
    case "bourges":
      nomMonu = "La Cathédrale Saint-Etienne de Bourges";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Chartres";
      map = afficheMap("bourges");
      noteMoy = 4.68;
      donut = <Doughnut nom = {"La Cathédrale Saint-Etienne de Bourges"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[3,18,0,0,1188,4]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;
      nbvisite = <Line nom = {"La Cathédrale Saint-Etienne de Bourges"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[1,2,46,57,129,233,311,302,191,155,73,30]} colors={[
        'rgba(230, 255, 204'
      ]} colorsbd={[
        'rgba(230, 255, 204'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    case "chartres":
      nomMonu = "La Cathédrale Notre Dame de Chartres";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Chartres";
      map = afficheMap("chartres");
      noteMoy = 4.71;
      donut = <Doughnut nom = {"La Cathédrale Notre Dame de Chartres"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[4,64,0,13,1731,12]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Cathédrale Notre Dame de Chartres"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[1,7,75,137,186,374,494,412,283,252,101,28]} colors={[
        'rgba(204, 255, 255'
      ]} colorsbd={[
        'rgba(204, 255, 255'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    case "amiens":
      nomMonu = "La Cathédrale Notre Dame d'Amiens";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_d%27Amiens";
      map = afficheMap("amiens");
      noteMoy = 4.74;
      donut = <Doughnut nom = {"La Cathédrale Notre Dame d'Amiens"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[1,22,0,6,2107,38]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Cathédrale Notre Dame d'Amiens"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,13,68,126,226,430,579,534,340,320,133,36]} colors={[
        'rgba(255, 204, 204'
      ]} colorsbd={[
        'rgba(255, 204, 204'
      ]} mult={1} multbg={1} width={5}/>;
      break;
    case "reims":
      nomMonu = "La Cathédrale Notre Dame de Reims";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Reims";
      map = afficheMap("reims");
      noteMoy = 4.62;
      donut = <Doughnut nom = {"La Cathédrale Notre Dame de Reims"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[6,83,0,16,2559,34]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Cathédrale Notre Dame de Reims"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,25,117,226,293,504,721,634,435,349,155,45]} colors={[
        'rgba(102, 102, 255'
      ]} colorsbd={[
        'rgba(102, 102, 255'
      ]} mult={1} multbg={1} width={5}/>;
      break;
    case "avignon":
      nomMonu = "Le Palais des Papes d'Avignon";
      lienMonu = "https://fr.wikipedia.org/wiki/Palais_des_papes_d%27Avignon";
      map = afficheMap("avignon");
      noteMoy = 4.38;
      donut = <Doughnut nom = {"Le Palais des Papes d'Avignon"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[17,184,2,32,3345,45]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"Le Palais des Papes d'Avignon"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,23,153,211,325,741,1028,797,616,470,283,115]} colors={[
        'rgba(255, 242, 204'
      ]} colorsbd={[
        'rgba(255, 242, 204'
      ]} mult={1} multbg={1} width={5}/>;
      break;
    case "stmichel":
      nomMonu = "L’abbaye du Mont Saint Michel";
      lienMonu = "https://fr.wikipedia.org/wiki/Abbaye_du_Mont-Saint-Michel";
      map = afficheMap("stmichel");
      noteMoy = 4.38;
      donut = <Doughnut nom = {"L’abbaye du Mont Saint Michel"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[18,210,7,39,3640,44]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"L’abbaye du Mont Saint Michel"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[2,55,248,261,438,794,1131,834,628,506,254,92]} colors={[
        'rgba(255, 204, 204'
      ]} colorsbd={[
        'rgba(255, 204, 204'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    case "fourviere":
      nomMonu = "La Basilique Notre Dame de Fourvière";
      lienMonu = "https://fr.wikipedia.org/wiki/Basilique_Notre-Dame_de_Fourvi%C3%A8re";
      map = afficheMap("fourviere");
      noteMoy = 4.68;
      donut = <Doughnut nom = {"La Basilique Notre Dame de Fourvière"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[29,51,2,19,4201,3]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Basilique Notre Dame de Fourvière"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,0,0,0,125,888,1334,1252,822,699,237,81]} colors={[
        'rgba(204, 204, 255'
      ]} colorsbd={[
        'rgba(204, 204, 255'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    case "strasbourg":
      nomMonu = "La Cathédrale Notre Dame de Strasbourg";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Strasbourg";
      map = afficheMap("strasbourg");
      noteMoy = 4.65;
      donut = <Doughnut nom = {"La Cathédrale Notre Dame de Strasbourg"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[22,63,2,13,4803,3]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Cathédrale Notre Dame de Strasbourg"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,8,158,304,585,1101,1363,1062,821,606,180,57]} colors={[
        'rgba(255, 102, 102'
      ]} colorsbd={[
        'rgba(255, 102, 102'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    case "paris":
      nomMonu = "Notre Dame de Paris";
      lienMonu = "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Paris";
      map = afficheMap("paris");
      noteMoy = 4.55;
      donut = <Doughnut nom = {"La Cathédrale Notre Dame de Paris"} nomLabel={"Continent"} labels={["Afrique","Amérique du Nord","Amérique du Sud","Asie","Europe","Océanie"]} data={[45,107,5,17,2383,1]} colors={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose

      ]} colorsbd={[
        'rgba(255, 99, 132', //rouge
        'rgba(54, 162, 235', //bleu clair
        'rgba(255, 206, 86', //jaune
        'rgba(75, 192, 192', //vert clair
        'rgba(255, 128, 0', //orange
        'rgba(191, 0, 255' //violet rose
      ]} mult={1} multbg={0.2} />;

      nbvisite = <Line nom = {"La Cathédrale Notre Dame de Paris"} nomLabel={" Nombre de visites "} labels={[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]} data={[0,0,0,0,0,82,913,1062,815,378,77,18]} colors={[
        'rgba(255, 102, 140'
      ]} colorsbd={[
        'rgba(255, 102, 140'
      ]} mult={1} multbg={1} width={5}/>;

      break;
    default:
      map = afficheMap("stmichel");
      break;
  }
  return (
    
    <div>
      <br/>
      <div class="card" style={styletexte}>
        <div class="card-body">
          <h2 id="nomMonument" style={{textAlign: "center"}}>{nomMonu} ( {noteMoy} / 5 ) </h2>
          <h5 id="nomMonument" style={{textAlign: "center"}}>Plus d'informations <a href={lienMonu} target="_blank">ici</a></h5>
        </div>
      </div>
      <br/>
      {donut}

      <br/>

      {nbvisite}

      <br/>

      {map}

      <br/>
    </div>
  )
}

export default Monument