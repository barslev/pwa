import 'react-id-swiper/src/styles/css/swiper.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import IDSwiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import SwiperItem from './SwiperItem';
import { container, innerContainer, bullet, bulletActive } from './Swiper.styles';

/**
 * The basic swiper component.
 * @param {Object} props The component props.
 * @returns {React.Node}
 */
function Swiper(props) {
  const {
    autoPlay,
    interval,
    children,
    controls,
    className,
    classNames,
    initialSlide,
    rebuildOnUpdate,
    slidesPerView,
    maxIndicators,
    indicators,
    loop,
    snapItems,
    onSlideChange,
  } = props;

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper !== null) {
      swiper.update();
      swiper.on('slideChange', () => onSlideChange(swiper.realIndex));
    }
  }, [swiper]);

  const useFraction = (maxIndicators && maxIndicators < children.length);
  const paginationType = useFraction ? 'fraction' : 'bullets';
  const el = (indicators && children.length > 1) ? '.swiper-pagination' : null;

  const params = {
    modules: [Pagination, Navigation], // Need to add Pagination, Navigation modules
    containerClass: cls(innerContainer, classNames.container),
    autoplay: autoPlay ? {
      delay: interval,
    } : false,
    initialSlide,
    navigation: !controls ? {
      nextEl: null,
      prevEl: null,
    } : undefined,
    pagination: {
      el,
      type: paginationType,
      bulletClass: bullet,
      bulletActiveClass: bulletActive,
    },
    loop,
    rebuildOnUpdate,
    slidesPerView,
    freeMode: !snapItems,
    getSwiper: setSwiper,
    on: {
      slideChange: () => onSlideChange(swiper ? swiper.realIndex : 0),
    },
  };

  return (
    <div className={cls(container, className)}>
      <IDSwiper {...params}>
        {children}
      </IDSwiper>
    </div>
  );
}

Swiper.Item = SwiperItem;

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    container: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(),
    ]),
    item: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape(),
    ]),
  }),
  controls: PropTypes.bool,
  indicators: PropTypes.bool,
  initialSlide: PropTypes.number,
  interval: PropTypes.number,
  loop: PropTypes.bool,
  maxIndicators: PropTypes.number,
  onSlideChange: PropTypes.func,
  rebuildOnUpdate: PropTypes.bool,
  slidesPerView: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  snapItems: PropTypes.bool,
};

Swiper.defaultProps = {
  autoPlay: false,
  className: null,
  classNames: {},
  controls: false,
  indicators: false,
  initialSlide: 0,
  interval: 3000,
  loop: false,
  maxIndicators: null,
  onSlideChange: () => { },
  rebuildOnUpdate: false,
  slidesPerView: 1,
  snapItems: true,
};

export default Swiper;
