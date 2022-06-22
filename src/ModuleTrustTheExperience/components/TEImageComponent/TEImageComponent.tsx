import React, { FC, useState, useEffect } from 'react';

interface TEImageComponentProps {
  imgWidth: number;
  imgHeight: number;
}

const TEImageComponent: FC<TEImageComponentProps> = (props) => {
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
          ? '/images/experiencia_ilustracion@2x.png'
          : '/images/ilustracion_experiencia@2x.png'
      }
      alt="Confía en la experiencia"
      width={props.imgWidth}
      height={props.imgHeight}
      style={windowWidth < breakPoint ? { marginBottom: 32 } : {}}
    />
  );
};
export default TEImageComponent;
