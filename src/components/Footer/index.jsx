
import {user} from "../../data/user.js"
import style from "./style.module.css"
import img from "../../assets/direitos.png"
function Footer () {
    return(
        <footer className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.footerP}>
                        <p className={style.p}>{`Todos os direitos reservados - ${user} ` }</p>
                        <img className={style.img} src={img} alt="copyright"/>
                    </div>
                </div>
        </footer>
    )
}
export default Footer