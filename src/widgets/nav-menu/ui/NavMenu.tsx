import { useEffect, useState } from "react";
import containersIcon from '../../images/for-nav-menu/cotainers.svg';
import enterIcon from '../../images/for-nav-menu/enter.svg';
import accountIcon from '../../images/for-nav-menu/profile.svg';
import Image from "next/image";
import { useUserStore } from "@/app/stores/user-store/user.store";

export const NavMenu: React.FC = () => {
  const [currentNavId, setCurrentNavId] = useUserStore((state: any) => [state.currentNavId, state.setCurrentNavId]);

  const [navData] = useState([
    {
      value: 'Контейнеры',
      image: containersIcon,
      id: 1,
    },
    {
      value: 'Вход на территорию',
      image: enterIcon,
      id: 2,
    },
    {
      value: 'Аккаунт',
      image: accountIcon,
      id: 3,
    }
  ])

  return (
    <div className="fixed px-[12px] flex items-center justify-around bottom-0 left-0 right-0 bg-white border-t-[1px] border-[#8b8b8b] z-30">
      {navData.map(({value, image, id}, index) => (
        <div onClick={() => setCurrentNavId(id)} className="flex flex-col pb-[4px] gap-[4px] pt-[8px] items-center cursor-pointer" key={index}>
          <div className={`h-[28px] w-[28px] ${currentNavId === id ? 'bg-[#FEC922]' : 'bg-[#B9B9BA]'}`} style={{maskImage: `url(${image.src})`, maskRepeat: 'no-repeat', maskPosition: 'center', maskSize: 'contain'}}></div>
          <p className={`text-[10px] self-end font-semibold ${currentNavId === id ? 'text-[#FEC922]' : 'text-[#B9B9BA]'}`}>{value}</p>
        </div>
      ))}
    </div>
  );
};