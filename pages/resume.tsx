import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <>
      <div className="px-6 py-2">
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold text-green">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
              <p className="font-semibold">
                Federal University of Technology Akure (2015-2020)
              </p>
              <p className="my-3">Computer Engineering (First class honors)</p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold text-green">Certification</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Google Cloud Computing</h5>
              <p className="font-semibold">Google Africa Developer (2020)</p>
              <p className="my-3">
                VM, Containers, Docker, Kubernetes, App Engine, Compute Engine.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            
            <h5 className="my-3 text-2xl font-bold text-green">Experience</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Lead Software Developer
              </h5>
              <p className="font-semibold">
                {" "}
                <b>Skillz System Ltd (Abuja Nigeria)</b> — (April. 2022- Feb.
                2023)
              </p>
              <p className="my-3">
                <p>
                  <b>Node Js Full Stack Developer</b>
                </p>
                Led a team of 5 to develop robust bespoke systems for clients,
                such as an ERP/CRM; solar products management system, and oil
                and gas distributors management system. ● Implemented Docker,
                CI/CD, and auto Jira sprints cards movement which increased the
                development processes by 80%.
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold text-green">Experience</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Node Js Full Stack Developer
              </h5>
              <p className="font-semibold">
                Minerva Technologies (Lagos Nigeria)
              </p>
              <p className="my-3">
                ● Collaborated with a team of 3 full-stack developers to build
                an art platform and fintech App using node for the server and
                React for the web app. ● Adopted best SDLC practices within the
                Agile environment to produce rapid iterations for the company. ●
                Developed image identification and recognition microservice
                algorithm functionality to help prevent irrelevant profile image
                upload which had an efficiency of 94%.
              </p>
            </div>
          </div>
          {/* <div className="grid gap-6 md:grid-cols-2"> */}
          <div>
            {/* <h5 className="my-3 text-2xl font-bold">Experience</h5> */}
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Lead Software Developer
              </h5>
              <p className="font-semibold">
                {" "}
                <b>Carrotsuite (Lagos Nigeria)</b> — (Oct 2021 - Feb 2022)
              </p>
              <p className="my-3">
                <p>
                  <b>Node / React / React Native</b>
                </p>
                ● Built a SaaS web and mobile app which addressed issues of
                  poor visitor and staff management in an organization.
                  ● Led a team of 4 that built 3 bespoke eCommerce solutions that
                  cut across multiple industries, such as building, construction,
                  and art.
                  ● Wrote both the project server-side and client-side code using
                  ExpressJs, React.Js for the user interface, and HTML, CSS,
                  and JavaScript for the admin interface.
                  ● Implemented a Real-time notification functionality leveraging
                  socket.io.
                  ● Developed lots of features in an agile environment using Node.
                  ● Created Data Import tools leveraging active record import.
              </p>
            </div>
          </div>
          <div>
            {/* <h5 className="my-3 text-2xl font-bold">Experience</h5> */}
            <div className="">
              <h5 className="my-2 text-xl font-bold">
              Software Developer (Remote)
              </h5>
              <p className="font-semibold">
                {" "}
                <b>SripixelBytes (Contact) (India)</b> — (Mar 2021 - Oct 2021)
              </p>
              <p className="my-3">
                <p>
                  <b>Node / React Native / Flutter—</b>
                </p>
                ● Worked with a team of 10 to build a lifestyle mobile app with
                  multiple functionalities that simplify laundry tasks, last mile
                  logistics, grocery shopping, and utility bills payment.
                  ● Wrote 50% of project server-side and client-side code for
                  projects using Node, HTML, CSS, and React Native.
                  ● collaborated with product managers to identify minimum viable
                  product requirements and clearly defined feature sets into
                  well-scoped user stories for individual team members.
                  ● Introduced continuous identification, measurement, and improvement approach, which bolstered up development
                  processes by 50%.
              </p>
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
