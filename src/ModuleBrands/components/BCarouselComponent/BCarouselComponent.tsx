import React, { FC, useState, useEffect } from 'react';
import styles from './BCarouselComponent.module.css';

import img1md from '../../../components/images/brands/brands_1.svg';
import img2md from '../../../components/images/brands/brands_2.svg';
import img1xs from '../../../components/images/brands/brands_1_sm.png';
import img2xs from '../../../components/images/brands/brands_2_sm.png';

import indDefault from '../../../components/images/SimpleAndAgileSlider/md/bullets/simple_and_agile_slider_md_default_bullet.png';
import indActive from '../../../components/images/SimpleAndAgileSlider/md/bullets/simple_and_agile_slider_md_active_bullet.png';

interface BCarouselComponentProps {
  imgWidth: number;
  imgHeight: number;
}

const BCarouselComponent: FC<BCarouselComponentProps> = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const [activeId, setActiveId] = useState('0');

  const dots = [{ id: '0' }, { id: '1' }];

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      <div>
        <div
          id="myBrandsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: props.imgHeight + 80 }}
        >
          <div className="carousel-inner" style={{ textAlign: 'center' }}>
            <div className="carousel-item active">
              {' '}
              <img
                src={windowWidth < breakPoint ? img1xs : img1md}
                alt="First slide"
                width={props.imgWidth}
                height={props.imgHeight}
              />{' '}
            </div>
            <div className="carousel-item">
              {' '}
              <img
                src={windowWidth < breakPoint ? img2xs : img2md}
                alt="Second slide"
                width={props.imgWidth}
                height={props.imgHeight}
              />{' '}
            </div>
          </div>
          <ol
            className="carousel-indicators list-inline"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 0,
            }}
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
                  data-bs-target="#myBrandsCarousel"
                  href="#myBrandsCarousel"
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
  );
};

export default BCarouselComponent;
