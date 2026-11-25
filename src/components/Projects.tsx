import { projectDetails } from "../User"
import ProjectCard from "./ProjectCard"


const Projects = () => {
  return (
    <div id="projects" className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-mono my-10 scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <div className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-whiteColor text-center">
            02.&nbsp;<span className="text-primaryColor">Projects</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {projectDetails.map((project,index)=>{
                return <ProjectCard key={index} project={project} />
            })}
        </div>
    </div>
  )
}



export default Projects
