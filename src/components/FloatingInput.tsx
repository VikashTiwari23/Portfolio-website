import React from 'react'

type FloatingInputProps = {
  id: string
  name: string
  value: string
  handleChange: (id: string, value: string) => void
  type?: string
  autoComplete?: string
  required?: boolean
}

const FloatingInput = (props: FloatingInputProps) => {
  return (
    <div className="relative">
      {
        props.id !== 'message' ? (
          <input
            type={props.type || 'text'}
            id={props.id}
            name={props.id}
            value={props.value}
            onChange={(e) => props.handleChange(props.id, e.target.value)}
            autoComplete={props.autoComplete}
            required={props.required}
            className="block px-2.5 pb-2.5 pt-4 w-full rounded-xl text-heading bg-transparent border-2 text-base sm:text-lg md:text-xl border-red-900 appearance-none focus:outline-none bg-bgColor hover:!shadow-[0_0_8px_0_#64FFDA50] text-whiteColor focus:ring-0 focus:border-2 focus:border-primaryColor peer"
            placeholder=" "
          />
        ) : (
          <textarea
            name={props.id}
            id={props.id}
            rows={4}
            value={props.value}
            onChange={(e) => props.handleChange(props.id, e.target.value)}
            required={props.required}
            className="block px-2.5 pb-2.5 pt-4 w-full rounded-xl text-heading bg-transparent border-2 text-base sm:text-lg md:text-xl border-red-900 appearance-none focus:outline-none hover:!shadow-[0_0_5px_0_#64FFDA70] bg-bgColor text-whiteColor focus:ring-0 focus:border-2 focus:border-primaryColor peer"
            placeholder=" "
          />
        )
      }
      <label htmlFor={props.id} className={`absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-whiteColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${props.id !== 'message' ? 'peer-placeholder-shown:top-1/2' : 'peer-placeholder-shown:top-6'} peer-focus:top-2 peer-focus:scale-75 bg-bgColor text-whiteColor show:text-whiteColor rtl:peer-focus:left-auto start-1`}>{props.name}</label>
    </div>
  )
}

export default FloatingInput
