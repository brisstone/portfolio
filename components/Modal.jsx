import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function Modal({
  open,
  setOpen,
  title,
  action,
  image_path,
  description,
  key_techs,
  github_url,
  deployed_url,
}) {
  const cancelButtonRef = useRef(null);

  return (
    <div style={{ border: "2px solid purple" }}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div
                    className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-gray-100"
                    style={{
                      //   padding: "30px",
                      height: "60vh",
                        width: "100vw",
                    }}
                  >
                    <div
                      className="sm:flex sm:items-start"
                      style={{ border: "20px solid blue" }}
                    >
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        Icon
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 h-[100%] p-10">
                            <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-4 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                              <div className="">
                                <Image
                                  src={image_path}
                                  alt={title}
                                  layout="responsive"
                                  height="150"
                                  width="300"
                                />
                                <div className="flex justify-center my-4 space-x-3 pl-6">
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
                                <h2 className="mb-3 text-xl font-medium md:text-2xl">
                                  {title}
                                </h2>
                                <h3 className="mb-3 font-medium">
                                  {description}
                                </h3>

                                <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                  {key_techs?.map((tech) => (
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
                                onClick={() => {
                                  setOpen(false);
                                  action(true);
                                }}
                                className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                              >
                                <MdClose size={30} />
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
