import logo from "../../../assets/logo2.png"
import style from "./style.module.css"
function HeaderLogo (){
    return(
        <div>
            <a href="#bannerSection">
                <img className={style.logo} src={logo} alt="Logo" />
            </a>
        </div>
    )
}
export default HeaderLogo