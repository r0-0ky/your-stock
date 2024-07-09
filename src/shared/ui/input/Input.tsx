import { InputProps } from "./types"

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-[13px] py-[14px] px-[13px] bg-[#F5F5F5] rounded-[10px]">
      <button className="w-[23px] h-[23px] bg-search-icon hover:opacity-80 transition-all"></button>
      <input placeholder={placeholder} className="placeholder:text-[#767474] bg-transparent outline-none w-full text-[14px] font-sf-pro" />
    </div>
  )
}