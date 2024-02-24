import iconGit from "../../assets/github-icon.png"
import iconWhats from "../../assets/whatsapp-icon.png"
import iconLinkedin from "../../assets/linkedin-icon.png"
import {user} from "../../data/user.js"
import style from "./style.module.css"
function Footer () {
    return(
        <footer className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.divContact}>
                        <h3 className={style.title}>Contato</h3>
                        <ul className={style.ul}>
                            <li><img src={iconWhats} alt="icon whatsapp" /></li>
                            <li><img src={iconLinkedin} alt="icon linkedin" /></li>
                            <li><img src={iconGit} alt="icon github" /></li>
                        </ul>
                    </div>
                    <div>
                        <p className="p">{`Todos os direitos reservados - ${user}`}</p>
                    </div>
                </div>
        </footer>
    )
}
export default Footer