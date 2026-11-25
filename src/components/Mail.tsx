import { info } from "../User";

const Mail = () => {
  return (
    <div className="hidden lg:flex items-center gap-10 text-textColor fixed bottom-32 -right-44 rotate-90">
      <a
        data-aos="fade-down-left"
        data-aos-duration={800}
        href={`mailto:${info.email}`}
        className="cursor-pointer font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        {info.email}
      </a>
      <hr className="border-[2px] text-textColor rounded-xl bg-textColor border-textColor w-40" />
    </div>
  )
}

export default Mail
