//import {monuments} from '../datas'
//style="width: 18rem;"
import "../styles/card.css"
import Line from "./Line"
import Doughnut from "./Doughnut"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Liste() {
  let navigate = useNavigate();
  return (
        <div style={{margin: 0+" auto"}}>

            <br/>
            <ul style={{margin: 0+" auto"}}>
                <li className="itemcard" ><div className="card" > 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale de Bourges </h5>
    <br/>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Saint-%C3%89tienne_de_Bourges#:~:text=La%20cath%C3%A9drale%20Saint%2D%C3%89tienne%20de,et%20de%20l'Indre)." target="_blank">ici</a></p>
    <div className="centerBtn">
        <a className="btn btn-outline-warning" href="#" onClick={() => {
          navigate("/monument/bourges");
        }}>Accès aux analyses</a>
    </div>
  </div>
</div></li>
             
<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale de Chartres</h5>
    <br/>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Chartres" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="#" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/chartres");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale Notre Dame d’Amiens</h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_d%27Amiens" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/amiens");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale Notre Dame de Reims</h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Reims" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/reims");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">Le Palais des Papes d’Avignon</h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Palais_des_papes_d%27Avignon" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/avignon");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">L’Abbaye du Mont Saint Michel </h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Abbaye_du_Mont-Saint-Michel" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/stmichel");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Basilique Notre Dame de Fourvière </h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Basilique_Notre-Dame_de_Fourvi%C3%A8re" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/fourviere");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard"><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale Notre Dame de Strasbourg </h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Strasbourg" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/strasbourg");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>

<li className="itemcard" style={{margin: 0+" auto"}}><div className="card"> 
  <div className="card-body">
    <h5 className="card-title">La Cathédrale Notre Dame de Paris</h5>
    <p className="card-text">Plus d'informations <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Paris" target="_blank">ici</a></p>
    <div className="centerBtn"> <a  href="" className="btn btn-outline-warning" onClick={() => {
          navigate("/monument/paris");
        }}>Accès aux analyses</a></div>
  </div>
</div></li>
            </ul>
            <br/>
            <br/>
        </div>
        
    )
}

export default Liste