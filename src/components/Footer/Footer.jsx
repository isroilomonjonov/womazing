import React from "react";
import "./style.css";
import png1 from "../../images/photo_2023-07-24_16-19-45.jpg";
import logo from "../../images/logo.png";
import inst from "../../images/inst.png";
import face from "../../images/face.png";
import twit from "../../images/twit.png";
import visa from "../../images/visa.png";
const Footer = () => {
  return (
    <>
      <div style={{ margin: "0 245px" }}>
        <h2 className="setH2">Команда мечты Womazing</h2>
        <div className="set">
          <div>
            <div>
              <img src={png1} className="image" alt="ulg" />
            </div>
          </div>
          <div className="section3Right">
            <h6 className="dlyKajdoy">Для каждой</h6>
            <p className="section3P">
              Каждая девушка уникальна. Однако,мы схожи в миллионе мелочей.
              Womazing ищет эти мелочи и создает прекрасные вещи. которые
              выгодно подчеркивают достоинство каждой девушки.
            </p>
            <a href="mailto:someone@example.com">Подробнее о бренде</a>
          </div>
        </div>
      </div>
      <br />
      <section className="footer section">
        <div className="foot">
          <img className="im" src={logo} />
          <h5>WOMAZING</h5>
        </div>
        <div>
          <p>
            &#169;Все права защищены
            <br />
            Политика конфиднциальности
            <br />
            Публичная оферта
          </p>
        </div>
        <div className="footer-content">
          <a href="mailto:someone@example.com">Главная</a>
        </div>
        <div className="footer-content">
          <p> Магазин </p>
          <br />
          <p>
            Пальто
            <br />
            Свитшоты
            <br />
            Кардиганы
            <br />
            Толстовки
          </p>
        </div>
        <div className="footer-content">О бренде</div>
        <div className="footer-content">Контакты</div>
        <div className="div">
          <p>
            *7 (495) 823-54-12
            <br />
            hello@womazing.com
          </p>
          <br />
          <img src={inst} />
          <img src={face} />
          <img src={twit} />
          <br />
          <br />
          <img src={visa} />
        </div>
      </section>
    </>
  );
};

export default Footer;
