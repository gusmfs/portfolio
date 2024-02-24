
import Footer from "../Footer";
import Header from "../Header"
import style from "./style.module.css"

function DefaultTemplate({ children }){
   return (
      <>
         <Header/>
         <main className={style.mainContainer}>{children}</main>
         <Footer/>
      </>
   );
};
export default DefaultTemplate;
