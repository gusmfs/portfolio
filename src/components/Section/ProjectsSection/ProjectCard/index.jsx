import style from "./style.module.css"
function ProjectCard({img , name , description, linkGit, imgProject, linkVercel}){
    return( 
        <li className={style.li}>
            <img className={style.imgProject} src={imgProject} alt="project image review" />
            <div className={style.footerCard}>
                <div className={style.divHeader}>
                    <div className={style.divInfo}>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                        {/* //<img src={img} alt="git image" className={style.img} /> */}
                </div>
                <div className={style.divButtonsFooter}>
                    <button className={style.btnprimary}><a href={linkGit} className={style.btn}>GitHub</a></button>
                    <button className={style.btnprimary}><a href={linkVercel} className={style.btn}>Vercel</a></button>
                </div>
            </div>

        </li>
    )
}
export default ProjectCard