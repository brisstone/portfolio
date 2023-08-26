import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <div className="my-3 text-base font-medium" style={{textAlign: "center"}}>
        <p>
        {/* I am a recent graduate of Computer Engineering, B.Tech (First class honors) from Federal University of Technology
        Akure. I have over 4 years of experience in Web Development.  */}
        I am a dedicated Full Stack Engineer with a strong academic foundation, holding a First Class Honors Bachelor's degree in Computer Engineering from the esteemed Federal University of Technology Akure. 
        Leveraging over four years of professional experience, 
        I excel in crafting tailored web applications, designing captivating UI/UX interfaces, 
        and orchestrating the entire software development life cycle. 
        Proficient in technologies such as React.js, Vue.js, Node.js, and GraphQL, 
        I am well-versed in leading teams, collaborating on system optimization, 
        and delivering exceptional results. With a keen eye for detail and a commitment to innovation, 
        I consistently bring products to new heights.
        </p>
      
      {/* <br/> */}
      <br/>
        <p>
          {/* Proficient at developing apps based on individual as well as
					corporate specification. Rudimentary Skills in designing responsive and interactive UI/UX for
					apps and websites. Adept at software development life-cycle including analysis, design, development, testing and documentation. Familiar with version control
					platforms such as Git, experienced in the creation of RESTFUL API, GraphQL API and database for Mobile and Web applications. */}
          My versatility extends to both back-end and front-end development, ensuring a comprehensive understanding of each project's intricacies. 
          I am dedicated to delivering solutions that transcend expectations, leveraging my adaptable skill set and passion for innovation. 
          Equipped with a solid track record of leadership and collaboration, I am poised to contribute valuable expertise to any development team, driving the creation of exceptional applications.
        </p>
        
      </div>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          Niche:
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
