import { BottomSheet } from "@/shared/ui/bottom-sheet";
import { CategoriesSwiper } from "@/shared/ui/categories-swiper";
import { Input } from "@/shared/ui/input";
import  { YaMap } from "@/shared/ui/ya-map";
import { NavMenu } from "@/widgets/nav-menu";
import { useState } from "react";

export const MapPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <section className="flex-1 flex flex-col">
      <div className="flex-1">
        <YaMap />
      </div>
      <BottomSheet>
        <div className="px-[12px]">
          <Input placeholder="Адрес или название пункта"/>
          <CategoriesSwiper />
        </div>
      </BottomSheet>   
      <NavMenu />   
    </section>
  );
}