import im from "./assets/img/im.jpg";

function App() {
  return (
    <div classNameName="App">
      <div className="resume">
        <div className="base">
          <div className="profile">
            <div className="photo">
              <img src={im} alt="im" />
              <i className="fas fa-rocket"></i>
            </div>
            <div className="info">
              <h1 className="name">Kostiuk Volodymyr</h1>
              <h2 className="job">Front-end developer</h2>
            </div>
          </div>

          <div className="contact">
            <h3>Contact Me</h3>
            <div className="call">
              <a href="tel:380 68 250 5984">
                <i className="fas fa-phone"></i>
                <span>(380)68-250-59-84</span>
              </a>
            </div>
            <div className="address">
              <a href="https://github.com/moneyproduction" target="_blank">
                <i className="fas fa-map-marker"></i>
                <span>GitHub</span>
              </a>
            </div>
            <div className="email">
              <a href="https://t.me/productionofmoney" target="_blank">
                <i className="fas fa-envelope"></i>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="func">
          <div className="work">
            <h3>
              <i className="fa fa-briefcase"></i>ABOUT ME
            </h3>
            Hi, my name is Vladimir, I'm 21 years old, I live in Kyiv /
            Kremenchuk / Ukraine. I am self-taught, all that I know, all I
            learned on my own. I can describe myself as a person who adapts to
            any situation. I succeed in a changing environment and turn
            unexpected obstacles into stepping stones for new achievements. I
            always follow my goal. I try to do my work in a timely and quality
            manner. I take work ethic very seriously. I do what I'm paid to do
            responsibly. I'll be very happy if I get to you, I won't let you
            down!
          </div>

          <div className="skills-prog">
            <h3>
              <i className="fas fa-code"></i>Programming Skills
            </h3>
            <ul>
              <li data-percent="95">
                <span>HTML5</span>
              </li>
              <li data-percent="90">
                CSS3 & SCSS & BEM & FLEX & GRID & BOOTSTRAP & CSS/SCSS MODULES
              </li>
              <li data-percent="60">
                <span>JavaScript</span>
              </li>
              <li>
                React (Redux Toolkit, React Router, React Pagination, React
                Content Loader)
              </li>
              <li data-percent="40">
                <span>Git / GitHub</span>
              </li>
              <li data-percent="40">
                SOLID / ООП / Design template / Design principles
              </li>
            </ul>
          </div>

          <div className="project-prog">
            <h3>
              <i className="fas fa-code"></i> projects, all the code is on
              github
            </h3>
            <ul>
              <li>
                <a
                  href="https://github.com/moneyproduction/cloudstore-react"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>1 - demonstration project " cloudstore-react "</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moneyproduction/sushiparadise-js-shopping-cart"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>2 - " sushiparadise-js-shopping-cart "</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moneyproduction/quiz-app-react"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>3 - " quiz-app-react "</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moneyproduction/task-list-react"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>4 - " task-list-react "</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moneyproduction/count-down-js"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>5 - " count-down-js "</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moneyproduction/lock-password"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  <span>6 - " lock-password-js "</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="interests">
            <div className="skills-prog">
              <h3>
                <i className="fas fa-code"></i>WORK EXPERIENCE
              </h3>
              <ul>
                <li data-percent="95">
                  <span className="spanexp">01 - 04 / 2023 / Freelancer</span>
                </li>
                <li>
                  <a
                    href="https://github.com/moneyproduction/sky-apartaments-freelance"
                    target="_blank"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>1 - " sky-apartaments-freelance "</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/moneyproduction/bestcities"
                    target="_blank"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>2 - " best-cities-freelance "</span>
                  </a>
                </li>
                <li data-percent="95">
                  <span className="spanexp">
                    04 - 07 / 2023 / Frontend Developer "Payoneer"
                  </span>
                </li>
                <li data-percent="95">
                  <>
                    Collaborated with designers to create user-friendly
                    interfaces and seamless interactions.
                    <br /> Generated project ideas and ensured efficient
                    workflow.
                    <br /> Assisted a senior developer in overseeing complex
                    design projects for corporate clients.
                    <br /> Conducted quality assurance tests to improve
                    usability and identify bugs.
                    <br /> Due to a non-disclosure agreement (NDA), cannot
                    provide more details.
                  </>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
