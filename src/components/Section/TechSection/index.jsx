import { technologies } from "../../../data/technologies.js";
import TechCard from "./TechCard/index.jsx";
import style from "./style.module.css";
function TechSection (){
    return(
        <section className={style.section}>
            <div className="container">
                <div className={style.techContainer} id="techsSection">
                    <h3 className={style.title}>Tecnologias</h3>
                    <ul className={style.ul}>
                        {technologies.map(technologie => {
                            return (
                                <TechCard key={technologie.id} img={technologie.img} name={technologie.name}/> 
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default TechSection