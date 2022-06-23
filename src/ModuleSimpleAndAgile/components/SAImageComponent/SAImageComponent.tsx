import React, { FC, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import styles from './SAImageComponent.module.css';
import img1 from '../../../components/images/SimpleAndAgileSlider/md/slides/simple_and_agile_slider_md_1.png';
import img2 from '../../../components/images/SimpleAndAgileSlider/md/slides/simple_and_agile_slider_md_2.png';
import img3 from '../../../components/images/SimpleAndAgileSlider/md/slides/simple_and_agile_slider_md_3.png';
import img4 from '../../../components/images/SimpleAndAgileSlider/md/slides/simple_and_agile_slider_md_4.png';
import img5 from '../../../components/images/SimpleAndAgileSlider/md/slides/simple_and_agile_slider_md_5.png';

import img1xs from '../../../components/images/SimpleAndAgileSlider/xs/slides/simple_and_agile_slider_xs_1.png';
import img2xs from '../../../components/images/SimpleAndAgileSlider/xs/slides/simple_and_agile_slider_xs_2.png';
import img3xs from '../../../components/images/SimpleAndAgileSlider/xs/slides/simple_and_agile_slider_xs_3.png';
import img4xs from '../../../components/images/SimpleAndAgileSlider/xs/slides/simple_and_agile_slider_xs_4.png';
import img5xs from '../../../components/images/SimpleAndAgileSlider/xs/slides/simple_and_agile_slider_xs_5.png';
interface SAImageComponentProps {
  imgWidth: number;
  imgHeight: number;
}

const SAImageComponent: FC<SAImageComponentProps> = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div
      className={styles.simpleAndAgileCarousel}
      style={
        windowWidth < breakPoint
          ? { marginBottom: 32 }
          : { width: props.imgWidth }
      }
    >
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            src={windowWidth < breakPoint ? img1xs : img1}
            alt="First slide"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={windowWidth < breakPoint ? img2xs : img2}
            alt="Second slide"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={windowWidth < breakPoint ? img3xs : img3}
            alt="Third slide"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={windowWidth < breakPoint ? img4xs : img4}
            alt="Fourth slide"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={windowWidth < breakPoint ? img5xs : img5}
            alt="Fifth slide"
            width={props.imgWidth}
            height={props.imgHeight}
          />
        </Carousel.Item>
      </Carousel>

      {/* <img
        src={
          windowWidth < breakPoint
            ? '/images/Slider@3x.png'
            : '/images/Slider_VER2.svg'
        }
        alt="Cuéntanos tu necesidad"
        width={props.imgWidth}
        height={props.imgHeight}
        style={windowWidth < breakPoint ? { marginBottom: 32 } : {}}
      /> */}
    </div>
  );
};

export default SAImageComponent;
