import { info } from "../User"

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 my-10 font-mono mb-10 flex flex-col gap-2 justify-center items-center">
      <div className="font-semibold text-2xl sm:text-3xl text-primaryColor">{info.name}</div>
      <div className="text-base sm:text-xl text-textColor">Copyright &copy; {new Date().getFullYear()} | All Rights Reserved</div>
    </div>
  )
}

export default Footer
