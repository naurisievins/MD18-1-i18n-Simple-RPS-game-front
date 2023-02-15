import styles from './Game.module.scss'
import rock from '../../assets/images/rock.png'
import paper from '../../assets/images/paper.png'
import scissors from '../../assets/images/scissors.png'
import transp from '../../assets/images/transp.png'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Scores from '../Scores/Scores'
import { Results, MutationSessionScore } from '../../assets/types'

function Game() {

  const { t } = useTranslation();
  const [playerWeapon, setPlayerWeapon] = useState('');
  const [countdown, setCountdown] = useState(4);
  const [winner, setWinner] = useState(t(''));
  const [results, setResults] = useState<Results>({player:0, computer:0, games:0});
  const countdownIntervalRef = useRef<number>();
  const computerWeaponRef = useRef<string>(transp);
  const queryClient = useQueryClient()
  const gamesRef = useRef<number>();
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      computerWeaponRef.current = randomComputerWeapon();
      whoWins();
      setCountdown(4);
      return () => clearInterval(countdownIntervalRef.current);
    }
  }, [countdown]);

  useEffect(() => {
    if (gamesRef.current) {
      if (gamesRef.current === 1){
        mutationSessionScore.mutate( {results, update: false} )
      } else {
        mutationSessionScore.mutate( {results, update: true})
      }
    }
  }, [results.games]);



  const { data: sessionScoreData } = useQuery({
    queryKey: ["sessioneScore"],
    queryFn: () =>
    axios.get('http://localhost:3004/session_score')
    .then( ({ data }) => {
      return data
    })
  })

  const mutationSingleScore = useMutation({
    mutationFn: ({win, computerWep, playerWep}: any) => axios.post(`http://localhost:3004/single_score`, {win, computerWep, playerWep}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['singleScore'] });
    },
    onError: () => {
    }
  })



  const mutationSessionScore = useMutation({
    mutationFn: ({results, update}: MutationSessionScore) => axios.post(`http://localhost:3004/session_score`, { results, update}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessionScore'] });
    },
    onError: () => {
    }
  })

  const saveSingleScore = ( win: string, computerWep: string, playerWep: string) => {
    mutationSingleScore.mutate({ win, computerWep, playerWep})
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

  const updateScore = (win: string, computerWep: string, playerWep: string) => {
    if (win === 'player') {
      setWinner(t('youWin'))
      setResults({...results, player: results.player + 1, games: results.games + 1})
    } else if (win === 'computer') {
      setWinner(t('computerWin'))
      setResults({...results, computer: results.computer + 1, games: results.games + 1})
    } else {
      setWinner(t('draw'))
      setResults({...results, games: results.games + 1})
    }

    gamesRef.current ?  gamesRef.current++ : gamesRef.current = 1;
    saveSingleScore(win, computerWep, playerWep)
  }


  const whoWins = () => {
    if (computerWeaponRef.current === rock && playerWeapon === paper) {
      updateScore('player', "rock", "paper");
    } else if (computerWeaponRef.current === rock && playerWeapon === scissors) {
      updateScore('computer', "rock", "scissors");
    } else if (computerWeaponRef.current === paper && playerWeapon === scissors) {
      updateScore('player', "paper", "scissors");
    } else if (computerWeaponRef.current === paper && playerWeapon === rock) {
      updateScore('computer', "paper", "rock");
    } else if (computerWeaponRef.current === scissors && playerWeapon === rock) {
      updateScore('player', "scissors", "rock");
    } else if (computerWeaponRef.current === scissors && playerWeapon === paper) {
      updateScore('computer', "scissors", "paper");
    } else {
      updateScore('draw', 'X', 'X');
    }
  }

  return (
    <div className={styles.wrapper}>

      <button onClick={() => setShowScores(!showScores)}
              className={styles.show_scores_button}
      >
        {showScores ? t('back') : t('scores')}
      </button>
      {showScores ? <Scores /> :

        <div className={styles.game_container}>

          <div className={styles.score_container}>
            <div className={styles.container__col}>
              <div>{t('yourScore')}{results.player}</div>
            </div>

            <div className={styles.container__col}>
              <div>{t('computerScore')}{results.computer}</div>
            </div>
          </div>

          <div className={styles.main_container}>
            <div className={styles.container__col}>
              <div className={styles.row20}>
                <h3>{t('yourWeapon')}</h3>
              </div>
              <div className={`${styles.row80} ${styles.row80_padding}`}>
                <div className={styles.img_container}>
                  <img src={playerWeapon} />
                </div>
              </div>
            </div>

            <div className={styles.container__col}>
              <div className={styles.row20}>
                <h3>{t('computerWeapon')}</h3>
              </div>
              <div className={`${styles.row80} ${styles.row80_padding}`}>
                <div className={styles.img_container}>
                  <span className={styles.countdown}>
                    {countdown !==4 && countdown !== 0 && countdown}
                  </span>
                  <img src={computerWeaponRef.current} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_container}>
            <span>{winner ? winner : t('makeYourMove')}</span>
          </div>

          <div className={styles.player_container}>
            <div className={styles.row20}>
              <h3>{t('chooseWeapon')}</h3>
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
      }
    </div>
  )
}

export default Game