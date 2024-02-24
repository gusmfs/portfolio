import style from "./nav.module.css"
function HeaderNav ({type}){
    return(
        <div className={style.navContainer}>
            <a className={style.buttons} href="#aboutSection">Sobre</a>
            <a className={style.buttons} href="#techsSection">Stack</a>
            <a className={style.buttons} href="#projectsSection">Projects</a>
        </div>
    )
}
export default HeaderNav