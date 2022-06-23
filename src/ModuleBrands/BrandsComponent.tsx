import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import SimpleImageSlider from 'react-simple-image-slider';
import { useMeasure } from 'react-use';

import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import BMessageComponent from './components/BMessageComponent/BMessageComponent';

interface BrandsComponentProps {}

const BrandsComponent: FC<BrandsComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const smPT = 64;
  const smPR = 20;
  const smPB = 54;
  const smPL = 25;

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const imgWidth =
    windowWidth < breakPoint ? windowWidth - smPR - smPL : width * 0.88;
  const imgHeight =
    windowWidth < breakPoint ? (imgWidth * 168) / 296 : (imgWidth * 112) / 536;

  const imagesMD = [
    { url: '/images/brands_1.svg' },
    { url: '/images/brands_2.svg' },
  ];

  const imagesSM = [
    { url: '/images/brands_1_sm.png' },
    { url: '/images/brands_2_sm.png' },
  ];

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {windowWidth < breakPoint ? (
        <div
          id="brands"
          style={{
            paddingTop: smPT,
            paddingRight: smPR,
            paddingBottom: smPB,
            paddingLeft: smPL,
            backgroundColor: '#ffffff',
          }}
        >
          <BMessageComponent />
          <SimpleImageSlider
            width={imgWidth}
            height={imgHeight}
            images={imagesSM}
            showBullets={true}
            showNavs={false}
            style={{ backgroundColor: '#fff' }}
          />
        </div>
      ) : (
        <div id="brands">
          <MDWrapperComponent
            paddingBottom={96}
            paddingTop={96}
            wrappedModule={WrappedModule.None}
            backgroundColor={'#ffffff'}
          >
            <Col md={{ span: 10, offset: 1 }} ref={ref}>
              <BMessageComponent />
              <SimpleImageSlider
                width={imgWidth}
                height={imgHeight}
                images={imagesMD}
                showBullets={true}
                showNavs={false}
                style={{ backgroundColor: '#fff', margin: 'auto' }}
              />
            </Col>
          </MDWrapperComponent>
        </div>
      )}
    </>
  );
};

export default BrandsComponent;
