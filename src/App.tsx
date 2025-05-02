import './App.css';
import Botao from './components/Botao';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// ------------------IMAGENS----------------------
// import imgIntroducao from './assets/imgIntroducao.avif';
import imgHardSkills from './assets/imgHardSkills.png';
import GeodiversoPrint from './assets/GeodiversoPrint.jpg';
import imgIntroducaoProgramador from './assets/imgIntroducaoProgramador.avif';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 400, // duração da animação
      once: true      // anima só uma vez
    });
  }, []);


  useEffect(() => {
    let contador = 1;
    const intervalo = setInterval(() => {
      contador++;
      if (contador > 4) contador = 1;

      const radio = document.getElementById(`radio${contador}`);
      if (radio instanceof HTMLInputElement) {
        radio.checked = true;
      }
    }, 3500);

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar
  }, []);

  return (
    <body>

      <section className='container-principal'>

        <section className='navbar'>

          <div className='navbar-icons'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-whatsapp"></i>
          </div>

        </section>

        <section className='container-main'>

          {/* ------------------------------INTRODUCAO-HEITOR-------------------------- */}

          <section className='introducao-heitor'>

            <div className='texto-introducao'>

              <h1 data-aos="fade-right" data-aos-once="true">
                Heitor Denech
              </h1>

              <p data-aos="fade-right" data-aos-once="true">
                Tenho 18 anos, comecei a programar em 2023, e acabei me apegando muito ao front-end e ao desing web, utilizando
                ferramentas como o Figma. Sou dedicado, comunicativo e sempre busco aprender mais.
              </p>

              <div data-aos="fade-right" data-aos-once="true">
                <a href="#projetos">
                  <Botao texto="Meus Projetos" />
                </a>
              </div>

            </div>

            {/* --------------IMG-INTRODUCAO------------ */}

            <div className='img-introducao' data-aos="fade-left" data-aos-once="true">

              <img src={imgIntroducaoProgramador} alt="imagemIntroducaoHeitor" srcSet="" />

            </div>

          </section>


          {/* --------------------------------HARD-SKILLS---------------------------------- */}


          <section className='hard-skills-container-principal'>

            <div className='img-hard-skills' data-aos="fade-up" data-aos-once="true">
              <img src={imgHardSkills} alt="imgHardSkills" srcSet="" />
            </div>

            <div className='icons-hard-skills' data-aos="fade-up" data-aos-once="true">

              <h1>Hard Skills</h1>

              <div className='icons-container-principal'>


                <i data-aos="fade-up" data-aos-once="true" className="devicon-html5-plain colored" title="HTML5"></i>
                <i data-aos="fade-up" data-aos-once="true" className="devicon-css3-plain colored" title="CSS3"></i>
                <i data-aos="fade-up" data-aos-once="true" className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i data-aos="fade-up" data-aos-once="true" className="devicon-figma-plain colored" title="Figma"></i>
                <i data-aos="fade-up" data-aos-once="true" className="devicon-github-original colored" title="GitHub"></i>
                <i data-aos="fade-up" data-aos-once="true" className="devicon-java-plain colored" title="Java"></i>

              </div>

            </div>

          </section>

          {/* -------------------PROJETOS-HEITOR------------------------ */}

          <section className='projetos'>

            <h1 data-aos="fade-up" data-aos-once="true" id='projetos'>Meus Projetos</h1>

            <div className='projetos-container'>

              {/* <div className='meus-projetos' data-aos="fade-up" data-aos-once="true">

                <div className='img-projetos-container'>

                  <img src={GeodiversoPrint} alt="imgGeodiverso" srcSet="" />

                </div>

                <div className='text-projetos-container'>

                  <h1>Geodiverso</h1>

                  <p>Geodiverso é um site voltado a ensinar os conteúdos de Geografia do Ensino Médio, desenvolvido em 2024 no Senac RS.</p>

                  <a href="">

                    <Botao texto="Ver mais" />

                  </a>

                </div>

              </div> */}

              {/* -----------------------CARROSEL------------------------ */}

              <section className='carrosel-container'>

                <div className="carrosel">
                  <div className="slides">
                    <input type="radio" name="radio-botao" id="radio1" />
                    <input type="radio" name="radio-botao" id="radio2" />
                    <input type="radio" name="radio-botao" id="radio3" />
                    <input type="radio" name="radio-botao" id="radio4" />

                    <div className="slide first">
                      <img src={GeodiversoPrint} alt="imagem 1" />
                    </div>

                    <div className="slide">
                      <img src={GeodiversoPrint} alt="imagem 2" />
                    </div>

                    <div className="slide">
                      <img src={GeodiversoPrint} alt="imagem 3" />
                    </div>

                    <div className="slide">
                      <img src={GeodiversoPrint} alt="imagem 4" />
                    </div>

                    <div className="navegacao-botao">
                      <div className="botao-1"></div>
                      <div className="botao-2"></div>
                      <div className="botao-3"></div>
                      <div className="botao-4"></div>
                    </div>
                  </div>

                  <section className="navegacao-manual">
                    <label htmlFor="radio1" className="manual-botao"></label>
                    <label htmlFor="radio2" className="manual-botao"></label>
                    <label htmlFor="radio3" className="manual-botao"></label>
                    <label htmlFor="radio4" className="manual-botao"></label>
                  </section>
                </div>

              </section>

              {/* --------------------</CARROSEL>------------------------ */}

            </div>

          </section>




        </section>

      </section>

    </body>
  )
}

export default App
