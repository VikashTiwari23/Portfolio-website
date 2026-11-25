import { SkillInfo } from "../User"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <div id="skills" className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-mono my-5 scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-whiteColor text-center">03.&nbsp;<span className="text-primaryColor">Skills</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">{SkillInfo.map((skill:any,index:number)=><SkillCard key={index} title={skill.title} skillSet={skill.skills} />)}</div>
    </div>
  )
} 

export default Skills
