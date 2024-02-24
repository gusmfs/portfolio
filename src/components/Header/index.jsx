import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";
import HeaderNav from "./HeaderNav";
import styles from "./style.module.css";
function Header (){
    return(
        <header>
            <div className="container">
                <div className={styles.headerContainer}>
                    <HeaderLogo/>
                    <HeaderNav type={"submit"} />
                    <HeaderButton/>
                </div>
            </div>
        </header>
    )
}
export default Header