import eu from "../../../assets/eu.png";
import { username } from "../../../data/user";
import style from "./style.module.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function BannerSection() {
  return (
    <section className="container">
      <div className={style.bannerContainer}>
        <div className={style.bannerTitle}>
          <div className={style.nameContainer}>
            <p className={style.user}>{username}</p>
            <p className={style.dev}>Desenvolvedor Full-Stack</p>
          </div>
          <div className={style.animatedtext}>
            Bem vindo ao meu <span className={style.span}></span>
          </div>
          <div className={style.buttonsContainer}>
            <button className={style.btnprimary}>
              <a href="#aboutSection" className={style.btn}>
                Saiba mais
              </a>
            </button>
            <div className={style.socialContainer}>
              <button className={style.btnsecondary}>
                <a
                  href="https://github.com/gusmfs"
                  target="_blank"
                  className={style.btnsecondary}
                >
                  <FaGithub className={style.git} size={30}/>
                </a>
              </button>
              <button className={style.btnsecondary}>
                <a
                  href="https://www.linkedin.com/in/gustavo-medeiros-fs/"
                  target="_blank"
                  className={style.btnsecondary}
                >
                  <FaLinkedinIn size={20} />

                </a>
              </button>
            </div>
          </div>
        </div>
        <div className={style.imgContainer}>
          <div className={style.divImg}>
            <div className={style.glow}>
              <img className={style.img} src={eu} alt="foto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BannerSection;
