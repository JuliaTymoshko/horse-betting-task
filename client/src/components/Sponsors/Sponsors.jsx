import classNames from 'classnames';
import styles from './sponsors.module.scss';
import Title from './../../elements/Title/Title';
import sponsors from './../../utils/sponsors.json';

// Import swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Sponsors = () => {
  return (
    <section className={classNames(styles.sponsors)}>
      <Title title="Our" highlightedText="Sponsors" />
      <div>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 1500 }}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
            1400: {
              slidesPerView: 10,
            },
          }}
        >
          {sponsors.map((sponsor) => {
            return (
              <SwiperSlide
                key={sponsor.id}
                className={classNames(styles.swiperSlide)}
              >
                <img
                  src={sponsor.url}
                  alt={sponsor.title}
                  className={classNames(styles.sponsorImg)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;
