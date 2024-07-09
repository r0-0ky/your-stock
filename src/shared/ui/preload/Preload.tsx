import { useUserStore } from "@/app/stores/user-store/user.store";

export const Preload: React.FC = () => {
  const [isHidden] = useUserStore((state: any) => [state.isLoad]);
  
  return (
    <section className={`${isHidden ? 'opacity-0 invisible' : 'opacity-100 visible'} px-[12px] z-20 absolute top-0 bottom-0 right-0 left-0 bg-white transition-all ease-in-out flex flex-col flex-1 items-center justify-end`}>
      <div className="bg-preload-logo w-[255px] h-[65px]"></div>
      <p className="text-[14.5px] font-aquma text-center pb-[40px] pt-[48px]  max-w-[300px]">Ваш удобный и безопасный способ хранения вещей</p>
    </section>
  )
};