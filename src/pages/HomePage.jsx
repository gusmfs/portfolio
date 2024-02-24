import React from "react";
import DefaultTemplate from "../components/DefaultTemplate";
import AboutSection from "../components/Section/AboutSection";
import BannerSection from "../components/Section/BannerSection";
import ProjectSection from "../components/Section/ProjectsSection";
import TechSection from "../components/Section/TechSection";
import style from "./style.module.css"
import "./style.css";
function HomePage() {
  return (
    <div className="page__container">
      <div className="animated-background">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
        <DefaultTemplate>
            <BannerSection />
          <div className={style.containerApp}>
            <AboutSection />
            <TechSection />
            <ProjectSection />
          </div>
        </DefaultTemplate>
    </div>
  );
}

export default HomePage;