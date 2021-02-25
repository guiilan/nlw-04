import { useState, useEffect } from 'react'
import style from '../styles/components/Coutdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const [time, setTime] = useState(3);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setisActive(true);
    }

    
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setisActive(false);
        setTime(25 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            },1000)
        }else if( isActive && time === 0){
            sethasFinished(true)
            setisActive(false)
        }
    }, [isActive, time])

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
            {hasFinished ? (
                    (<button 
                        disabled
                        className={style.countdownButton}
                        >
                        Cilco encerrado
                    </button>))
                    :
                        (<>
                        { isActive ? 
                        (<button 
                         type="button" 
                         className={`${style.countdownButton} ${style.countdownButtonActive}`}
                         onClick={resetCountdown}
                         >
                             Abandonar o ciclo
                         </button>)
                         :
                         (<button 
                         type="button" 
                         className={style.countdownButton}
                         onClick={startCountdown}
                             >
                             Inciar o ciclo
                         </button>)}
                         </>)
                    }


        </div>
    )
}