import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <div className="backgroundpage grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
     
      {/* Sidebar */}
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-4 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-8 dark:bg-dark-500">
        <Navbar />
        <Component/> 
      </div>
    </div>
  </ThemeProvider>
  );
}

export default MyApp;
