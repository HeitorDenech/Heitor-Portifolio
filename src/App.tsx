import './App.css';
import Botao from './components/Botao';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// ------------------IMAGENS----------------------
import imgHardSkills from './assets/imgHardSkills.png';
import imgIntroducaoProgramador from './assets/imgIntroducaoProgramador.avif';
import imgGeodiverso1 from './assets/imgGeodiverso1.jpg';
import imgGeodiverso2 from './assets/imgGeodiverso2.jpg';
import imgGeodiverso3 from './assets/imgGeodiverso3.jpg';
import imgSuber1 from './assets/imgSuber1.jpg';
import imgSuber2 from './assets/imgSuber2.jpg';
import imgSuber3 from './assets/imgSuber3.jpg';
import imgCoca1 from './assets/imgCoca1.jpg';
import imgCoca2 from './assets/imgCoca2.jpg';
import imgCoca3 from './assets/imgCoca3.jpg';
import imgCoca4 from './assets/imgCoca4.jpg';
import imgCoca5 from './assets/imgCoca5.jpg';
import imgCalculadora from './assets/imgCalculadora.jpg';
import imgTempo1 from './assets/imgTempo1.jpg';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true
    });
  }, []);

  useEffect(() => {
    let contadorGeo = 1;
    let contadorSuber = 1;
    let contadorCoca = 1;

    const intervaloGeo = setInterval(() => {
      contadorGeo = contadorGeo >= 3 ? 1 : contadorGeo + 1;
      const radioGeo = document.getElementById(`radio${contadorGeo}`);
      if (radioGeo instanceof HTMLInputElement) {
        radioGeo.checked = true;
      }
    }, 3500);

    const intervaloSuber = setInterval(() => {
      contadorSuber = contadorSuber >= 3 ? 1 : contadorSuber + 1;
      const radioSuber = document.getElementById(`radio${contadorSuber}-suber`);
      if (radioSuber instanceof HTMLInputElement) {
        radioSuber.checked = true;
      }
    }, 3500);

    const intervaloCoca = setInterval(() => {
      contadorCoca = contadorCoca >= 5 ? 1 : contadorCoca + 1;
      const radioCoca = document.getElementById(`radio${contadorCoca}-coca`);
      if (radioCoca instanceof HTMLInputElement) {
        radioCoca.checked = true;
      }
    }, 3500);

    return () => {
      clearInterval(intervaloGeo);
      clearInterval(intervaloSuber);
      clearInterval(intervaloCoca)
    };
  }, []);




  useEffect(() => {
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
      const question = content.querySelector('.question');
      const answer = content.querySelector('.answer') as HTMLElement;

      if (question && answer) {
        question.addEventListener('click', () => {
          content.classList.toggle('active');

          if (content.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
            answer.style.maxHeight = "0px";
          }
        });
      }
    });

    // Cleanup: remove os event listeners ao desmontar
    return () => {
      contents.forEach(content => {
        const question = content.querySelector('.question');
        const cloned = question?.cloneNode(true);
        if (question && cloned) {
          question.parentNode?.replaceChild(cloned, question);
        }
      });
    };
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

            <div className='img-hard-skills' data-aos="flip-left" data-aos-once="true">
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

              <section className='meus-projetos' data-aos="fade-up" data-aos-once="true">

                <div className="accordion">



                  {/* -------------------GEODIVERSO------------------- */}



                  <div className="content">
                    <div className="question">
                      <i className="bi bi-person-workspace"></i>
                      <h3>Geodiverso</h3>

                      <svg width="15" height="10" viewBox="0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round" />
                      </svg>

                    </div>
                    <div className="answer">
                      <div className='img-projetos-container'>




                        {/* ---------------------CARROSEL--------------------- */}


                        <div className="carrosel">
                          <div className="slides">
                            <input type="radio" name="radio-botao" id="radio1" />
                            <input type="radio" name="radio-botao" id="radio2" />
                            <input type="radio" name="radio-botao" id="radio3" />

                            <div className="slide first">
                              <img src={imgGeodiverso1} alt="imagem 1" />
                            </div>

                            <div className="slide">
                              <img src={imgGeodiverso2} alt="imagem 2" />
                            </div>

                            <div className="slide">
                              <img src={imgGeodiverso3} alt="imagem 3" />
                            </div>

                            <div className="navegacao-botao">
                              <div className="botao-1"></div>
                              <div className="botao-2"></div>
                              <div className="botao-3"></div>
                              <div className="botao-4"></div>
                            </div>
                          </div>
                        </div>

                        {/* ---------------------/CARROSEL--------------------- */}


                      </div>

                      <div className='text-projetos-container'>

                        <h1>Geodiverso</h1>

                        <p>Geodiverso é um site voltado a ensinar os conteúdos de Geografia do Ensino Médio,
                          desenvolvido em 2024 no Senac RS.</p>

                        <a href="">

                          <Botao texto="Ver mais" />

                        </a>

                      </div>
                    </div>
                  </div>


                  {/* ------------------------SUBER-------------------- */}


                  <div className="content">
                    <div className="question">
                      <i className="bi bi-person-workspace"></i>
                      <h3>Suber</h3>
                      <svg width="15" height="10" viewBox="0 0 42 25">
                        <path
                          d="M3 3L21 21L39 3"
                          stroke="white"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="answer">
                      <div className="img-projetos-container">



                        {/* -----------------CARROSSEL------------------ */}


                        <div className="carrosel">
                          <div className="slides">
                            <input type="radio" name="radio-botao-suber" id="radio1-suber" />
                            <input type="radio" name="radio-botao-suber" id="radio2-suber" />
                            <input type="radio" name="radio-botao-suber" id="radio3-suber" />

                            <div className="slide first-suber">
                              <img src={imgSuber1} alt="imagem 1" />
                            </div>

                            <div className="slide">
                              <img src={imgSuber2} alt="imagem 2" />
                            </div>

                            <div className="slide">
                              <img src={imgSuber3} alt="imagem 2" />
                            </div>

                            <div className="navegacao-botao">
                              <div className="botao-1"></div>
                              <div className="botao-2"></div>
                              <div className="botao-3"></div>
                              <div className="botao-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* -------------------------/CARROSSEL------------------- */}

                      <div className='text-projetos-container'>

                        <h1>Suber</h1>

                        <p>Suber é um site desenvolvido em dupla, no SENAC, em 2024, eu fiz a parte para notebook, e
                          minha dupla para celular. O objetivo do projeto era fazer uma landing page, com um dos
                          temas que tinham de opção, no nosso caso foi o suber.</p>

                        <a href="">

                          <Botao texto="Ver mais" />

                        </a>

                      </div>
                    </div>
                  </div>


                  {/* ---------------------COCA-COLA----------------------------- */}


                  <div className="content">
                    <div className="question">
                      <i className="bi bi-person-workspace"></i>
                      <h3>Coca-Cola</h3>
                      <svg width="15" height="10" viewBox="0 0 42 25">
                        <path
                          d="M3 3L21 21L39 3"
                          stroke="white"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="answer">
                      <div className="img-projetos-container">


                        {/* -----------------CARROSSEL------------------ */}


                        <div className="carrosel">
                          <div className="slides">
                            <input type="radio" name="radio-botao-coca" id="radio1-coca" />
                            <input type="radio" name="radio-botao-coca" id="radio2-coca" />
                            <input type="radio" name="radio-botao-coca" id="radio3-coca" />
                            <input type="radio" name="radio-botao-coca" id="radio4-coca" />
                            <input type="radio" name="radio-botao-coca" id="radio5-coca" />

                            <div className="slide first-coca">
                              <img src={imgCoca1} alt="imagem 1" />
                            </div>

                            <div className="slide">
                              <img src={imgCoca2} alt="imagem 2" />
                            </div>

                            <div className="slide">
                              <img src={imgCoca3} alt="imagem 2" />
                            </div>

                            <div className="slide">
                              <img src={imgCoca4} alt="imagem 2" />
                            </div>

                            <div className="slide">
                              <img src={imgCoca5} alt="imagem 2" />
                            </div>

                            <div className="navegacao-botao">
                              <div className="botao-1"></div>
                              <div className="botao-2"></div>
                              <div className="botao-3"></div>
                              <div className="botao-4"></div>
                            </div>
                          </div>


                        </div>
                      </div>

                      {/* -------------------------/CARROSSEL------------------- */}

                      <div className='text-projetos-container'>

                        <h1>Coca-Cola</h1>

                        <p>Foi um site que eu fiz apenas para testar minhas habilidades de CC adquiridas, me inspirei no site da Coca-Cola, a ideia era
                          fazer o mais parecido com o site original sem inspecionar a página, ou seja, apenas com o conhecimento que eu já possuo.
                          O site foi desenvolvido em 2025</p>

                        <a href="">

                          <Botao texto="Ver mais" />

                        </a>

                      </div>
                    </div>
                  </div>


                  {/* ------------------------CALCULADORA-------------------- */}


                  <div className="content">
                    <div className="question">
                      <i className="bi bi-person-workspace"></i>
                      <h3>Calculadora</h3>
                      <svg width="15" height="10" viewBox="0 0 42 25">
                        <path
                          d="M3 3L21 21L39 3"
                          stroke="white"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="answer">
                      <div className="img-projetos-container">


                        {/* -----------------CARROSSEL------------------ */}


                        <div className="carrosel">
                          <div className="slides">
                            <input type="radio" name="radio-botao-calculadora" id="radio1-calculadora" />

                            <div className="slide first-calculadora">
                              <img src={imgCalculadora} alt="imagem 1" />
                            </div>

                            <div className="navegacao-botao">
                              <div className="botao-1"></div>
                              <div className="botao-2"></div>
                              <div className="botao-3"></div>
                              <div className="botao-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* -------------------------/CARROSSEL------------------- */}

                      <div className='text-projetos-container'>

                        <h1>Calculadora</h1>

                        <p>Nesse projeto eu fiz uma calculadora simples, usando HTML, CSS e JS. A calculadora foi desenvolvida em 2025, na AGES.</p>

                        <a href="">

                          <Botao texto="Ver mais" />

                        </a>

                      </div>
                    </div>
                  </div>


                  {/* ------------------------SITE-PREVISAO-DO-TEMPO-------------------- */}


                  <div className="content">
                    <div className="question">
                      <i className="bi bi-person-workspace"></i>
                      <h3>Previsão do tempo</h3>
                      <svg width="15" height="10" viewBox="0 0 42 25">
                        <path
                          d="M3 3L21 21L39 3"
                          stroke="white"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="answer">
                      <div className="img-projetos-container">


                        {/* -----------------CARROSSEL------------------ */}


                        <div className="carrosel">
                          <div className="slides">
                            <input type="radio" name="radio-botao-calculadora" id="radio1-calculadora" />
                            <input type="radio" name="radio-botao-calculadora" id="radio2-calculadora" />
                            <input type="radio" name="radio-botao-calculadora" id="radio3-calculadora" />
                            <input type="radio" name="radio-botao-calculadora" id="radio4-calculadora" />

                            <div className="slide first-calculadora">
                              <img src={imgTempo1} alt="imagem 1" />
                            </div>

                            <div className="navegacao-botao">
                              <div className="botao-1"></div>
                              <div className="botao-2"></div>
                              <div className="botao-3"></div>
                              <div className="botao-4"></div>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* -------------------------/CARROSSEL------------------- */}

                      <div className='text-projetos-container'>

                        <h1>Previsão do tempo</h1>

                        <p>Previsão do tempo, realizado em 2025, foi mais um dos projetos desenvolvidos na AGES. A ideia era realizar um site que
                          mostrasse a previsão do tempo de qualquer cidade do mundo, o trabalho foi feito em grupo, me destaquei na parte do HTML e CSS do projeto.</p>

                        <a href="">

                          <Botao texto="Ver mais" />

                        </a>

                      </div>
                    </div>
                  </div>

                </div>

              </section>

            </div>

          </section>




        </section>

      </section>

    </body>
  )
}

export default App
