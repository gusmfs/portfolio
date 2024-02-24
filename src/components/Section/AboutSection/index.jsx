import style from "./style.module.css";
function AboutSection() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.aboutContainer} id="aboutSection">
          <h3 className={style.title}>Sobre mim</h3>
          <div className={style.content}>
            <p>
              Nessa jornada, não busco apenas ser um programador habilidoso, mas
              um profissional completo, capaz de enfrentar os desafios dia após
              dia. Cada erro é uma lição valiosa, e cada conquista serve como um
              impulso para ir atras do meu objetivo.
            </p>
            <p>
              Movido por uma personalidade competitiva e ambiciosa, estou
              constantemente em busca de resultados significativos. Encaro cada
              projeto como uma oportunidade de superar expectativas e alcançar
              novos patamares. A competição não é apenas com os outros, mas,
              acima de tudo, comigo mesmo, buscando constantemente superar meus
              próprios limites e elevar o nível das minhas realizações.
            </p>
            <p>
              Estou comprometido em transformar desafios em oportunidades de
              crescimento, consolidando não apenas minhas skills em
              programação, mas também desenvolvendo minha capacidade racional para 
              que consiga seguir um caminho com muito foco e criatividade!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
