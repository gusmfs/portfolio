import style from "./style.module.css";
function TechCard({ img, name}) {
    return(
        
        <li className={style.li}>
            <img className={style.img} src={img} alt={`technologie ${name}`}/>
            <span className={style.span}>{name}</span>
        </li>
    )
}
export default TechCard
