import "../../../styles/buttons.css"
import style from "./style.module.css"
function HeaderButton (){
    return(
        <div>
            <button className={style.btnprimary}><a href="#contactSection" className={style.btn}>Contato</a></button>
        </div>
    )
}
export default HeaderButton