//import {monuments} from '../datas'
//style="width: 18rem;"
import "../styles/card.css"

function Liste() {
    return (
        <div>
            <br/>
            <ul>
                <li className="itemcard"><div className="card"> 
  <img src="./image1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./" className="btn btn-outline-warning">Go somewhere</a>
  </div>
</div></li>
            </ul>
        </div>
    )
}

export default Liste