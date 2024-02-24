import logo from "../../../assets/logo2.png"
import style from "./style.module.css"
function HeaderLogo (){
    return(
        <div>
            <img className={style.logo} src={logo
            } alt="Logo" />
        </div>
    )
}
export default HeaderLogo