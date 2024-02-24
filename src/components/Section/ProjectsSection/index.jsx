import { projects } from "../../../data/projects.js";
import ProjectCard from "./ProjectCard/index.jsx";
import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from "swiper/element/bundle";
register()
function ProjectSection() {
  // const [slidePerView, setSlidePerView] = useState(1)

  // useEffect(() => {
  //   function handleResize(){
  //     if(window.innerWidth < )
  //   }
  // },[])
  return (
    <section>
      <div className="container">
        <div className={style.projectContainer} id="projectsSection">
          <h3 className={style.title}>Projetos</h3>
          <Swiper className={style.ul}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{clickable: true}}
            navigation
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} >
                <ProjectCard
                  
                  imgProject={project.imgProject}
                  linkVercel={project.linkVercel}
                  img={project.img}
                  linkGit={project.linkGit}
                  name={project.name}
                  description={project.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
