import styles from './Game.module.scss'
import rock from '../../assets/images/rock.png'
import paper from '../../assets/images/paper.png'
import scissors from '../../assets/images/scissors.png'
import { useState, useEffect, useRef } from 'react'

function Game() {

  type Results = {
    player: number
    computer: number
  }

  const [playerWeapon, setPlayerWeapon] = useState('');
  const [countdown, setCountdown] = useState(4);
  const [winner, setWinner] = useState('');
  const [results, setResults] = useState<Results>({player:0, computer:0});
  const countdownIntervalRef = useRef<number>();
  const computerWeaponRef = useRef<string>();
  const newGameRef = useRef<boolean>(true);

  useEffect(() => {
    if (countdown === 0) {
      computerWeaponRef.current = randomComputerWeapon();
      whoWins();
      setCountdown(4);
      return () => clearInterval(countdownIntervalRef.current);
    }
  }, [countdown]);

  const updateDatabase = (newSession: boolean) => {
    newSession ? console.log('jauns ieraksts datubaze') : console.log('update datubazes pedejo ierakstu');
  }

  const startGame = () => {
    computerWeaponRef.current = '';
    setCountdown(3);
    countdownIntervalRef.current = setInterval(() => setCountdown(countdown => countdown - 1), 500);
  }

  const randomComputerWeapon = (): string => {
    const weapon = Math.ceil(Math.random() * 3)
    switch (weapon) {
      case 1:
        return rock;
        break;
      case 2:
        return paper;
        break;
      case 3:
        return scissors;
        break;
      default:
        return randomComputerWeapon()
    }    
  }

  const updateScore = (winner: string) => {
    if (winner === 'player') {
      setWinner('You win!')
      setResults({...results, player: results.player + 1})
    } else if (winner === 'computer') {
      setWinner('Computer wins!')
      setResults({...results, computer: results.computer + 1})
    } else {
      setWinner('Draw!')
    }

    if (newGameRef.current) {
      newGameRef.current = false;
      updateDatabase(true); // new session (NEW)
    } else {
      updateDatabase(false) // continue session (UPDATE)
    }
  }

  const whoWins = () => {
    if (computerWeaponRef.current === rock && playerWeapon === paper) {
      updateScore('player');
    } else if (computerWeaponRef.current === rock && playerWeapon === scissors) {
      updateScore('computer');
    } else if (computerWeaponRef.current === paper && playerWeapon === scissors) {
      updateScore('player');
    } else if (computerWeaponRef.current === paper && playerWeapon === rock) {
      updateScore('computer');
    } else if (computerWeaponRef.current === scissors && playerWeapon === rock) {
      updateScore('player');
    } else if (computerWeaponRef.current === scissors && playerWeapon === paper) {
      updateScore('computer');
    } else {
      updateScore('draw');
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.game_container}>

        <div className={styles.score_container}>
          <div>Your score: {results.player}</div>
          <div>Computer's score: {results.computer}</div>
        </div>

        <div className={styles.main_container}>
          <div className={styles.main_container__col}>
            <div className={styles.row20}>
              <h3>Your weapon:</h3>
            </div>
            <div className={`${styles.row80} ${styles.row80_padding}`}>
              <div className={styles.img_container}>
                <img src={playerWeapon} />
              </div>
            </div>
          </div>
          <div className={styles.main_container__col}>
            <div className={styles.row20}>
              <h3>Computer's weapon:</h3>
            </div>
            <div className={`${styles.row80} ${styles.row80_padding}`}>
              <div className={styles.img_container}>
                <span className={styles.countdown}>
                  {countdown !==4 && countdown}
                </span>
                <img src={computerWeaponRef.current} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.info_container}>
          <span>{winner ? winner : 'Make your move!'}</span>
        </div>

        <div className={styles.player_container}>
          <div className={styles.row20}>
            <h3>Choose your weapon:</h3>
          </div>
          <div className={styles.row80}>
            <div className={styles.img_container}>
              <img src={rock}
                   onClick={() => {
                    countdown === 4 && (
                      setPlayerWeapon(rock),
                      startGame()
                    )}}
              />
            </div>
            <div className={styles.img_container}>
              <img src={paper} 
                   onClick={() => {
                    countdown === 4 && (
                      setPlayerWeapon(paper),
                      startGame()
                    )}}
              />
            </div>
            <div className={styles.img_container}>
              <img src={scissors}
                   onClick={() => {
                    countdown === 4 && (
                      setPlayerWeapon(scissors),
                      startGame()
                    )}}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Game