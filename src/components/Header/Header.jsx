import React from "react";
import "./style.css"
import kiyim from "../../images/kiyim.png"
import phone from "../../images/telefon.png"
import shopping from "../../images/shopping.png"
import strelka from "../../images/strelka.png"
import rasim1 from "../../images/rasim1.png"
import rasim2 from "../../images/rasim2.png"
import rasim3 from "../../images/rasim3.png"
const Header = () => {
  return (
    <div className="bagraund">
      <section className="nawbar">
        <div className="conteyner1">
          <img className="nawbarimg" src={kiyim} alt="koylak" />
          <p className="Womazing">Womazing</p>
        </div>
        <div className="conteyner2">
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Магазин</a>
            </li>
            <li>
              <a href="#">О бренде</a>
            </li>
            <li>
              {" "}
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="conteyner3">
          <img className="nawbarimg" src={phone} alt="telefon" />
          <a href="tell:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
          <img className="nawbarimg" src={shopping} alt="karzina" />
        </div>
      </section>

      <section className="sectionText">
        <div className="">
          <div className="h1">
            <h1>
              Новые поступления <br />в этом сезоне
            </h1>
          </div>
          <div className="pText">
            Утонченные сочетания и бархатные <br /> оттенки - вот то, что вы
            искали в этом <br /> сезоне. Время исследовать.
          </div>
          <div className="magazin">
            <img src={strelka} alt="strelka" />
            <button className="shop">Открыть магазин</button>
          </div>
        </div>
        <div className="rasimla">
          <img className="rasim1" src={rasim1} alt="kiyim" />
          <img className="rasim2" src={rasim2} alt="kiyim" />
          <img className="rasim3" src={rasim3} alt="kiyim" />
        </div>
      </section>
    </div>
  );
};

export default Header;
