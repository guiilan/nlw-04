import style from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){

    const hasActiveChallenge = true;

    return(
        <div className={style.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={style.challenBoxActive}>
                    <header>
                        Ganhe 400 XP
                    </header>
                    <main>
                        <img src="icons/bodt.svg" alt="img"/>
                        <strong>
                            Novo Desafio
                        </strong>
                        <p>
                            Corra 1km na esteira
                        </p>
                    </main>
                    <footer>
                        <button 
                        type="button"
                        className={style.challengeBoxFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={style.challengeBoxSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>


                </div>
            )
            :
            (  <div className={style.challengeBoxNotActive}>
                <strong>
                    Finalize um ciclo para receber outro desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de Level competando os desafios
                </p>
            </div>)
            }
        </div>
    )
}