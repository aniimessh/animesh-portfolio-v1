import { ProjectImageData } from "@/data/constants";
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  return (
    <>
      <div
        className="sm:w-3/4 pt-28 p-5 w-full md:h-screen  mx-auto flex justify-center items-center flex-col"
        id="project"
      >
        <>
          <h1 className="hero_text text-center">Project</h1>
          <div className="h-1 w-12 bg-[#faa307] rounded-full mx-auto mt-5"></div>
          <p className="text-lg w-full mt-5 mb-5 sm:mb-0 font-Nunito font-semibold text-center">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </>
        {ProjectImageData.map((item) => {
          return (
            <div
              className={`flex ${
                item.id % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }  flex-col-reverse sm:justify-between gap-x-8 justify-center items-center`}
              key={item.id}
            >
              <div className="sm:w-1/2 w-full ">
                <ProjectImage item={item} />
              </div>
              <div className="sm:w-1/2 w-full sm:mt-0 mt-20">
                <ProjectDetails item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
