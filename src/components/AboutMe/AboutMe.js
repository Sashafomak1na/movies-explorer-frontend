import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo-me.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__section" aria-label="Главное о себе">
          <h3 className="about-me__name">Александра</h3>
          <p className="about-me__self">Фронтенд-разработчик, 19 лет</p>
          <p className="about-me__biography">
            Я родилась и живу в городе Челябинск, учусь в ЮУрГУ на втором курсе
              кибербеза. Очень люблю заниматься спортом и общаться с интересными
              людьми. В 11 классе решила сдавать информатику, так и познакомилась
              с программированием и теперь оно неотъемлемая часть моей жизни.
              Мечтаю перебраться в Москву и найти работу в IT.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Sashafomak1na"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="На фотографии Александра Фомакина"
        />
      </div>
    </section>
  );
};

export default AboutMe;
