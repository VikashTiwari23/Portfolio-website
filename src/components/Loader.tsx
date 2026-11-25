

import { IconHexagon } from "@tabler/icons-react"
import { slugs } from "../User"
import IconCloud from "./magicui/icon-cloud"

export function Loader() {
  return (
    <div className="relative flex animate-[ping_1.5s_ease-in-out_1_4.5s] h-full w-full size-full items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={100} stroke={1.3} color="#64FFDA" />
      <div className="text-3xl text-textColor absolute -z-10">VT</div>
    </div>
  )
}

export default Loader