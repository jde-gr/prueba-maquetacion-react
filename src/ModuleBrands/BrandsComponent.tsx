import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import MDWrapperComponent, {
  WrappedModule,
} from '../core/components/ModuleMDWrapperComponent/MDWrapperComponent';
import BMessageComponent from './components/BMessageComponent/BMessageComponent';
import BCarouselComponent from './components/BCarouselComponent/BCarouselComponent';

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
          <div>
            <div
              className="container"
              style={
                windowWidth < breakPoint
                  ? { maxWidth: 'unset', padding: 0 }
                  : { padding: 0 }
              }
            >
              <BCarouselComponent imgWidth={imgWidth} imgHeight={imgHeight} />
            </div>
          </div>
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
              <BCarouselComponent imgWidth={imgWidth} imgHeight={imgHeight} />
            </Col>
          </MDWrapperComponent>
        </div>
      )}
    </>
  );
};

export default BrandsComponent;
