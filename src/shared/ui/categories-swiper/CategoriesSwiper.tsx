import { Navigation } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import { CategoryButton } from "../category-button";
export const CategoriesSwiper: React.FC = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      
    >
      <SwiperSlide>
        <CategoryButton />
      </SwiperSlide>
    </Swiper>
  )
}