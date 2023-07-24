import React from "react";
import "./style.css";
import girlImg from "../../images/photo_2023-07-19_14-49-02.jpg";
import girlImg1 from "../../images/photo_2023-07-19_14-48-32.jpg";
import girlImg2 from "../../images/photo_2023-07-19_14-48-42.jpg";
import frame1 from "../../images/Frame 16 (2).png";
import frame2 from "../../images/Frame 16 (1).png";
import frame3 from "../../images/Frame 16.png";
const Main = () => {
  return (
    <div className="container">
      <div className="h1Container">
        <h1 className="sscc">Новая коллекция</h1>
      </div>
      <br />
      <div className="nn">
        <div className="jk">
          <div className="rm">
            <img src={girlImg} width="320" height="500" alt="girl" />
            <h2 className="vv">Футболка USA</h2>
            <p className="kook">$229 $129</p>
          </div>
          <div className="rm">
            <img src={girlImg1} alt="girl" width="320" height="500" />
            <h2 className="vv">Купальник Glow</h2>
            <p className="kook">$129</p>
          </div>
          <div className="rm">
            <img src={girlImg2} alt="girl" width="320" height="500" />
            <h2 className="vv">Свитшот Sweet Shot</h2>
            <p className="kook">$129</p>
          </div>
        </div>
        <br />
        <div>
          <button className="poshsha">
            <a className="sutan">Открыт магазин</a>
          </button>
        </div>
      </div>
      <br />
      <div className="thv">
        <div className="new">
          <h2>Что для нас важно</h2>
        </div>
        <div className="teekkok">
          <div className="className">
            <div className="bb">
              <img src={frame1} alt="rasm" />
            </div>
              <h2>Качества</h2>
              <p>
                Наши профессионалы работают на лучшем оборудовании для пошива
                одежды беспрецедентного качества
              </p>
          </div>
          <div className="className">
            <div className="bb">
              <img src={frame2} alt="rasm" />
            </div>
              <h2>Скорость</h2>
              <p>
                Блогодаря отлаженной системе в Womazing мы можем отшивать до
                20-ти единиц продукции в наших сообственных цехах{" "}
              </p>
          </div>
          <div className="className">
            <div className="bb">
              <img src={frame3} alt="foto" />
            </div>
              <h2>Ответственность</h2>
              <p>
                Мы заботимся о людях и планете.Безотходное прозводство и
                комфортные условия труда-все это Womazing
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
