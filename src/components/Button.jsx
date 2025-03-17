import { RiArrowRightCircleLine } from '@remixicon/react'
const Button = ({text,className}) => {
  return (
    <button className={`bg-primary text-white py-[17px] px-[35px] rounded-[26px] flex gap-4 items-center hover:bg-[#0f0b18] transition-colors ${className}`}>
        {text}
        <RiArrowRightCircleLine />  
    </button>
  )
}

export default Button