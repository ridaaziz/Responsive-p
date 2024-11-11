import "../style/about.css"
const About = () => {
  return (
    <div id="about" className='main-container'>
   <div  className='header-boxes-con'> 
      <h1  className='hd-1'>
        Education
      </h1>
      <ul className='text-1'>
        <li >
          Associate Degree in Arts Ada/Ba from Karachi University.
        </li>
        <li>
          Fsc Pre Engineering from Nabi Bagh College.
        </li>
        <li >
          Matric in Science from Daffodils Secondary School.
        </li>
      </ul>

      <h1 className='hd-2'>
        Certificate
      </h1>
      <ul className='text-2'>
        <li >
          GENERATIVE A.I AGENTIC A.I ENGINEERING DEGREE IN PROGRESS.
        </li>
        <li className="ms" >
          MICROSOFT OFFICE.
        </li>
      </ul>
    </div>
    </div>
  );
};

export default About;