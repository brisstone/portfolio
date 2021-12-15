import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <>
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Engineering
            </h5>
            <p className="font-semibold">Federal University of Technology Akure (2015-2020)</p>
            <p className="my-3">
              Computer Engineering (First class honors)
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Certification</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Google Cloud Computing
            </h5>
            <p className="font-semibold">Google Africa Developer (2020)</p>
            <p className="my-3">
            VM, Containers, Docker, Kubernetes, App Engine,
            Compute Engine.
            </p>
          </div>
        </div>  
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              I.T Intern
            </h5>
            <p className="font-semibold">FEMTECH Information Technology, Ilorin (2019-2020)</p>
            <p className="my-3">
             <p> Installation and repairs of solar systems</p> 
              Supported the IT team in the hardware and software systems maintenance.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">CarrotSuite (2021)</p>
            <p className="my-3">Web (MERN) and Mobile Development(React-Native) </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>


    


    

  </>  
  );
};

export default Resume;
