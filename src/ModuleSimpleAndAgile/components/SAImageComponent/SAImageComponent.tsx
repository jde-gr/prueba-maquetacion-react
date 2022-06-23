import React, { FC, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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

import indDefault from '../../../components/images/SimpleAndAgileSlider/md/bullets/simple_and_agile_slider_md_default_bullet.png';
import indActive from '../../../components/images/SimpleAndAgileSlider/md/bullets/simple_and_agile_slider_md_active_bullet.png';
interface SAImageComponentProps {
  imgWidth: number;
  imgHeight: number;
}

const SAImageComponent: FC<SAImageComponentProps> = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeId, setActiveId] = useState('0');
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const dots = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];

  return (
    <div
      className={styles.simpleAndAgileCarousel}
      style={
        windowWidth < breakPoint
          ? { marginBottom: 32 }
          : { width: props.imgWidth }
      }
    >
      <div
        className="container"
        style={
          windowWidth < breakPoint
            ? { maxWidth: 'unset', padding: 0 }
            : { padding: 0 }
        }
      >
        <div className="row d-flex justify-content-center">
          <div>
            <div
              id="myCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ height: props.imgHeight + 80 }}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {' '}
                  <img
                    src={windowWidth < breakPoint ? img1xs : img1}
                    alt="First slide"
                    width={props.imgWidth}
                    height={props.imgHeight}
                  />{' '}
                </div>
                <div className="carousel-item">
                  {' '}
                  <img
                    src={windowWidth < breakPoint ? img2xs : img2}
                    alt="Second slide"
                    width={props.imgWidth}
                    height={props.imgHeight}
                  />{' '}
                </div>
                <div className="carousel-item">
                  {' '}
                  <img
                    src={windowWidth < breakPoint ? img3xs : img3}
                    alt="Third slide"
                    width={props.imgWidth}
                    height={props.imgHeight}
                  />{' '}
                </div>
                <div className="carousel-item">
                  {' '}
                  <img
                    src={windowWidth < breakPoint ? img4xs : img4}
                    alt="Fourth slide"
                    width={props.imgWidth}
                    height={props.imgHeight}
                  />{' '}
                </div>
                <div className="carousel-item">
                  {' '}
                  <img
                    src={windowWidth < breakPoint ? img5xs : img5}
                    alt="Fifth slide"
                    width={props.imgWidth}
                    height={props.imgHeight}
                  />{' '}
                </div>
              </div>
              <ol
                className="carousel-indicators list-inline"
                style={{ display: 'flex', alignItems: 'center', marginTop: 0 }}
              >
                {dots.map((value) => (
                  <li
                    className={`list-inline-item active {activeId === value.id && ${styles.active}}`}
                    onClick={() => setActiveId(value.id)}
                  >
                    {' '}
                    <a
                      id={`carousel-selector-${value.id}`}
                      className={`selected ${styles.a}`}
                      data-bs-slide-to={value.id}
                      data-bs-target="#myCarousel"
                      href="#myCarousel"
                      style={{ opacity: 1 }}
                    >
                      {' '}
                      <img
                        src={activeId === value.id ? indActive : indDefault}
                        className="img-fluid rounded"
                        alt=""
                        width={activeId === value.id ? 16 : 6}
                        height={activeId === value.id ? 16 : 6}
                      />{' '}
                    </a>{' '}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default SAImageComponent;
