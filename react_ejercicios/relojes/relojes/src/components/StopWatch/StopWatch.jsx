import "./Stopwatch.css"

import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0); //time por defecto será 0
    const [timerOn, setTimerOn] = useState(false); //timeOn en false porque el cronómetro está parado al inicio

    useEffect(() => { 
        let interval = null; //se inicializa en null
    
        //condicional para que, si timerOn es true (está corriendo), se almacene el valor del tiempo cada 10 milisegundos
        if (timerOn) {
          interval = setInterval(() => { //setInterval ejecuta el proceso cada 10 milisegundos 
            setTime((prevTime) => prevTime + 10); //se almacena el tiempo obtenido en la variable time
          }, 10);
        } else {
          clearInterval(interval); //si timeOn no está corriendo, volvemos al null
        }
        //se vuelve a hacer el paso anterior para asegurar que el cronómetro está parado si no se usa la aplicación
        return () => clearInterval(interval); 
      }, [timerOn]);

  return ( 
    <div className="stopwatch"> 
    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    {/* //cronómetro en minutos, segundos y centésimas */}
    {/* .slice oculta el "exceso" cuando se llega al valor máximo de las dos cifras */}
    <div className="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )} 
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
    
  )
}

export default Stopwatch