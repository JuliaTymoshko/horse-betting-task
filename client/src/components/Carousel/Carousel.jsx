import Slide from './../Slide/Slide';
import Title from './../../elements/Title/Title';
import news from './../../utils/swiperCards.json';

// Swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  Lazy,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/effect-fade/effect-fade.scss';
import 'swiper/modules/lazy/lazy.scss';

const Carousel = () => {
  return (
    <section>
      <Title title="Our" highlightedText="Overview" />

      <Swiper
        className="customSwiperWrap"
        lazy={true}
        effect={'fade'}
        slidesPerView={1}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          Lazy,
          EffectFade,
        ]}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        autoplay={{ delay: 2000 }}
      >
        {news.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <Slide
                title={card.title}
                description={card.description}
                btnText={card.btnText}
                url={card.url}
                lazyClassForImage="swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
