import { FullWidthButtonProps } from "./types"

export const FullWidthButton: React.FC<FullWidthButtonProps> = ({ handleClick }) => {
  const handleButtonClick = () => {
    handleClick()
  }

  return (
    <button onClick={handleButtonClick} className='py-[12px] rounded-[10px] mx-[12px] bg-black text-white font-raleway'>Далее</button>
  )
}