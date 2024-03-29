import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Modal from "../components/Modal";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const scrollUp = () => {
    console.log("joo");
    setShowDetail(false);
    // window.scroll(0, 0);
  };

  const setCurrentProject = () => {
    console.log("joo");
    setShowDetail(true);
    // window.scroll(0, 0);
  };

  const [open, setOpen] = useState(false);

  const openDialogModal = () => {
    // setDialogMessage(message);
    // setDialogTitle(title);
    setOpen(true);
  };

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={openDialogModal}
        layout="responsive"
        height="150"
        width="300"
      />

      <p className="my-2 text-center cursor-pointer" onClick={openDialogModal}>
        {name}
      </p>

      <Modal
        open={open}
        setOpen={setOpen}
        title={name}
        action={() => {}}
        image_path={image_path}
        description={description}
        key_techs={key_techs}
        github_url={github_url}
        deployed_url={deployed_url}
      />

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={scrollUp}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
