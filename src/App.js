import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import grad from "./img/grad.jpg";

function App() {
  return (
    <div className="App">
      <div className="nameContainer">
  
        <h2 className="name">HELLO,<br></br>I AM SURPRISE PETRUS MAIMELA<br></br>SOFTWARE Developer</h2>
      </div>

      <div className="container">
        <div className="row pt-5">
          <div className="col-6 ">
            <img src={grad} alt="graduation"></img>
          </div>
          <div className="col-6 ">
            <div className="card border-light">
              <div className="card-title">
                <h2>
                  <span className="text-danger">ABOUT ME</span>
                </h2>
              </div>
              <div className="card-body">
                <p>
                  SURPRISE is a young Software Developer,a very dedicated
                  tech-enthusiast and a Software Development graduate from the
                  Tshwane University of Technology.However I prefer to define
                  myself based on what I can do rather than the qualification I
                  hold.I am a very self-discipline person who is open to
                  opportunities and I am always up for challeges to grow myself
                  especially when technically, and problem-solving skills can be
                  utilized to solve real business and social challenges and
                  enhance my knowledge in the Software Engineering field.
                </p>
                <p>
                  <span className="Ptitle ">PERSONAL IDENTITY</span>
                  <br></br>
                  Energetic and passionate aspiring Software Developer, aiming
                  to use my knowledge and skills that I have acquired from my
                  Computer Engineering Systems course as well as self-study and
                  with my hard work to satisfy any IT related job or entrylevel
                  opportunity at any organization. As a current Software
                  Development student at InvestHoodIT(Midrand), I feel confident
                  that I will significantly benefit your team and organization
                  with my technical and leadership abilities, coupled with my
                  adaptability and interpersonal skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Skillcontainer">
        <div className="row">
          <h3 className=" text-dark">TECHNICAL SKILLS</h3>
          <ul className="px-4 text-dark">
            <li> C++</li>
            <li> C#</li>
            <li> SQL</li> <li> Java</li>
            <li> Python</li>
            <li> JavaScript</li>
            <li> PHP</li>
            <li> HTM</li>
            <li> CSS </li>
            <li>Lavarel</li>
            <li> Arduino</li>
            <li> Processing</li>
            <li> Programmable Logic Controller(PLC)</li>
            <li> Proteus</li>
            <li> Raspberr y Pi.</li>
          </ul>
        </div>
      </div>

      <div className="row bg-dark">
        <h3 className="contactTitle text-light mt-4">CONTACTS</h3>\

        <p className="contacts"><i class="bi bi-whatsapp"></i> 0790282429</p>
        <p className="contacts"><i class="bi bi-envelope-at-fill"></i> maimelapet@gmail.com</p>
        <p className="contacts"><i class="bi bi-linkedin"></i> https://www.linkedin.com/in/surprise-maimela-97b94422a</p>
      </div>
    </div>
  );
}

export default App;
