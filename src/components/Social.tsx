import {  IconBrandGithub ,  IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"

const Social = () => {
    const socialLinks = [
        {
            link : 'https://github.com/VikashTiwari23',
            icon : IconBrandGithub
        },
        {
            link : 'https://www.linkedin.com/in/vikash-tiwari-99086a326/',
            icon : IconBrandLinkedin
        },
        {
            link : 'https://leetcode.com/u/WXVCPSgpZh/',
            icon : IconBrandLeetcode
        },
        {
            link : 'https://www.youtube.com/@vikashtiwari7922',
            icon : IconBrandYoutube
        }
    ];
    const socialIcons = socialLinks.map((social,index)=>{
        const IconComponent = social.icon;
        return <a key={index} href= {social.link} target="_blank" className="cursor-pointer  font-mono text-base sm:text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out" rel="noopener noreferrer">
        <div  data-aos="fade-down-right" data-aos-duration={800} >
            <IconComponent className="-rotate-90" size={30} />
        </div>
       </a>
    })
  return (
    <div className="hidden md:flex items-center gap-6 sm:gap-10 text-textColor fixed bottom-20 sm:bottom-40 -left-44 rotate-90">
      {socialIcons}
      <hr className="border-[2px] text-textColor rounded-xl bg-textColor border-textColor w-32 sm:w-40" />
    </div>
  )
}

export default Social
