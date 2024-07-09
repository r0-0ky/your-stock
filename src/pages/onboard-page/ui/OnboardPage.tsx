import { FullWidthButton } from '@/shared/ui/full-width-button';
import Image from 'next/image';
import { useState } from 'react';
import firstPhone from '../images/phone-1.png';
import secondPhone from '../images/phone-2.png';
import thirdPhone from '../images/phone-3.png';
import { useUserStore } from '@/app/stores/user-store/user.store';

export const OnboardPage: React.FC = () => {
  const [setIsFirstLogin] = useUserStore((state: any) => [state.setIsFirstLogin]);
  const [onboardData] = useState([
    {
      text: 'Найдите подходящий склад на карте',
      image: firstPhone,
    },
    {
      text: 'ВЫБЕРИТЕ ПОДХОДЯЩую по размерам, и Месту ячеку в контейнере',
      image: secondPhone,
    },
    {
      text: 'выберите подходящий тариф и арендуйте свою ячейку',
      image: thirdPhone,
    }
  ]);
  const [currentDataNum, setCurrentDataNum] = useState(0);

  const handleNext = () => {
    if (currentDataNum !== onboardData.length - 1) {
      setCurrentDataNum(currentDataNum + 1);
    }
    else {
      setIsFirstLogin(false);
    }
  }

  return (
    <section className='flex-1 flex flex-col mb-[6px] px-[12px]'>
      <div className='flex-1 h-full relative'>
        <Image src={onboardData[currentDataNum].image} objectFit='cover' priority={true} placeholder='blur' layout='fill' alt='Телефон' objectPosition='bottom'/>
      </div>
      <p className='text-[20px] font-aquma text-center max-w-[300px] mx-auto my-[23px]'>{onboardData[currentDataNum].text}</p>
      <FullWidthButton handleClick={handleNext} />
    </section>
  );
};