import "./CardCta.css";
import devices from "../../assets/devices.png";
import conecting from "../../assets/conecting.jpg";
import film from "../../assets/film.png";

export const CardCta = () => {
  return (
    <main>
        
        
        <div className="mainContainer">
        <div className="mainContainer__section">
            <img className="mainContainer__section--img"  src={devices} alt=""/>
            <h2 className="mainContainer__section--title">Conectate desde cualquier dispositivo</h2>
            <div className="mainContainer__section--contButton">
                <button className="mainContainer__section--button">Enter</button>
                
            </div>       
         </div>

         <div className="mainContainer__section">
            <img className="mainContainer__section--img"  src={conecting} alt=""/>
            <h2 className="mainContainer__section--title">Conoce a otros profesionales con un solo click</h2>
            <div className="mainContainer__section--contButton">
                <button className="mainContainer__section--button">Enter</button>
            </div>       
         </div>
         <div className="mainContainer__section">
            <img className="mainContainer__section--img"  src={film} alt="" />
            <h2 className="mainContainer__section--title">Promocionate y dale difusión a tus proyectos</h2>
            <div className="mainContainer__section--contButton">
                <button className="mainContainer__section--button">Enter</button>
            </div>       
         </div>
       

    </div>

    </main>
  )
}
