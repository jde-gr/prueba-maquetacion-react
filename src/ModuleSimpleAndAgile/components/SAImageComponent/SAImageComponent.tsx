import React, { FC, useState, useEffect } from 'react';

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
    <img
      src={
        windowWidth < breakPoint
          ? '/images/Slider@3x.png'
          : '/images/Slider_VER2.svg'
      }
      alt="Tecnología Inteligente"
      width={props.imgWidth}
      height={props.imgHeight}
      style={windowWidth < breakPoint ? { marginBottom: 32 } : {}}
    />
  );
};

export default SAImageComponent;
