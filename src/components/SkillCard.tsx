import { Avatar } from "@mantine/core"

const skillBadge = (skills:[])=>{
    return <>
        {skills?.map((skill:any,index:number)=><div key={index} className="flex items-center gap-3 border-textColor p-2 sm:p-3 border rounded-lg hover:!shadow-[0_0_10px_0_#64FFDA]">
            <Avatar  radius="xs" src={`Icons/${skill}.png`}/>
            <div className="text-textColor text-base sm:text-lg font-medium">{skill}</div>
        </div>)}
   </> 
}


const SkillCard = (props:any) => {
  return (
    <div  data-aos="fade-up" data-aos-duration={800}  className="rounded-2xl border border-primaryColor p-4 sm:p-5 lg:p-6 hover:!shadow-[0_0_10px_0_#64FFDA] h-full">
      <div className="text-whiteColor font-bold text-lg sm:text-xl md:text-2xl text-center mb-2">{props.title}</div>
      <div className="flex flex-wrap gap-3 justify-center">{skillBadge(props.skillSet)}</div>
    </div>
  )
}

export default SkillCard
