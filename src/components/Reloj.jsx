import React, { useEffect, useState } from 'react';
import './Reloj.css';
import Hidden from './Hidden';

export const Reloj = () => {
  const date = new Date();

  const [dataTime, setDataTime] = useState({
    horas: date.getHours(),
    minutos: date.getMinutes(),
    segundos: date.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDataTime({
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Mostrar Reloj' : 'Ocultar Reloj'}
      </button>
      <Hidden isHidden={isHidden}>
        <div className="container">
          <div className="contador">
            <p>
              {dataTime.horas < 10 ? `0${dataTime.horas}` : dataTime.horas} h :{' '}
              {dataTime.minutos < 10 ? `0${dataTime.minutos}` : dataTime.minutos} min :{' '}
              {dataTime.segundos < 10 ? `0${dataTime.segundos}` : dataTime.segundos} seg
            </p>
          </div>
        </div>
      </Hidden>
    </>
  );
};