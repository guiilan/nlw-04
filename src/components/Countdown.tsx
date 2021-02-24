import { useState, useEffect } from 'react'
import style from '../styles/components/Coutdown.module.css'

export function Countdown(){

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time-1);
            },1000)
        }
    }, [active, time])

    return(
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth} </span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>
            <button 
                type="button" 
                className={style.countdownButton}
                onClick={startCountdown}
            >
                    Iniciar um ciclo
            </button>
        </div>
    )
}