import './App.css';
import Botao from './components/Botao';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// ------------------IMAGENS----------------------
import imgIntroducao from './assets/imgIntroducao.avif';
import imgHardSkills from './assets/imgHardSkills.png';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 400, // duração da animação
      once: true      // anima só uma vez
    });
  }, []);

  return (
    <body>

      <section className='container-principal'>

        <div className='navbar'>

          <div className='navbar-icons'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-whatsapp"></i>
          </div>

        </div>

        <div className='container-main'>

          {/* ------------------------------INTRODUCAO-HEITOR-------------------------- */}

          <section className='introducao-heitor'>

            <div className='texto-introducao'>

              <h1 data-aos="fade-right">
                Heitor Denech
              </h1>

              <p data-aos="fade-right">
                Tenho 18 anos, programo desde 2023 (front-end). Sou dedicado, comunicativo e sempre busco aprender mais.
              </p>

              <div data-aos="fade-right">
                <Botao texto="Meus Projetos" />
              </div>

            </div>

            {/* --------------IMG-INTRODUCAO------------ */}

            <div className='img-introducao' data-aos="fade-left">

              <img src={imgIntroducao} alt="imagemIntroducaoHeitor" srcSet="" />

            </div>

          </section>


          {/* --------------------------------HARD-SKILLS---------------------------------- */}


          <section className='hard-skills-container-principal'>

            <div className='img-hard-skills' data-aos="fade-up">
              <img src={imgHardSkills} alt="" srcSet="" />
            </div>

            <div className='icons-hard-skills' data-aos="fade-up">

              <h1>Hard Skills</h1>

              <div className='icons-container-principal'>


                <i data-aos="fade-up" className="devicon-html5-plain colored" title="HTML5"></i>
                <i data-aos="fade-up" className="devicon-css3-plain colored" title="CSS3"></i>
                <i data-aos="fade-up" className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i data-aos="fade-up" className="devicon-figma-plain colored" title="Figma"></i>
                <i data-aos="fade-up" className="devicon-github-original colored" title="GitHub"></i>
                <i data-aos="fade-up" className="devicon-java-plain colored" title="Java"></i>

              </div>

            </div>

          </section>

          {/* -------------------PROJETOS-HEITOR------------------------ */}

        </div>

      </section>

    </body>
  )
}

export default App
