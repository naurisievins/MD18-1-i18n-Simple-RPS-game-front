import styles from './Scores.module.scss'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import axios from 'axios'
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { SingleScore, SessionScore } from '../../assets/types';


function Scores() {

  const [toggleScores, setToggleScores] = useState(true);
  const { t } = useTranslation();
  const queryClient = useQueryClient()

  const { isLoading: singleScoresLoading, data: singleScoreData } = useQuery({
    queryKey: ["singleScore"],
    queryFn: () =>
    axios.get('http://localhost:3004/single_score')
    .then( ({ data }) => {
      return data
    })
  })

  const { isLoading: sessionScoresLoading, data: sessionScoreData } = useQuery({
    queryKey: ["sessionScore"],
    queryFn: () =>
    axios.get('http://localhost:3004/session_score')
    .then( ({ data }) => {
      return data
    })
  })

  if (singleScoresLoading || sessionScoresLoading) {
    return <div className={styles.row}>
             <h2>Loading...</h2>
           </div>
  }

  return (
   <div className={styles.scores_container}>
     <div className={styles.row}>
       <button onClick={() => setToggleScores(!toggleScores)}
               className={styles.button}
       >
         {t('singleScores')}
       </button>
       <button onClick={() => setToggleScores(!toggleScores)}
               className={styles.button}
       >
         {t('sessionScores')}
      </button>
     </div>
      {toggleScores ? 

        <div className={styles.col}>
          <div className={styles.row}>
            <h2>{t('singleScores')}</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <span>Nr.</span>
            </div>
            <div className={styles.col}>
              <span>{t('playerWeapon')}</span>
            </div>

            <div className={styles.col}>
              <span>{t('computerWeapon')}</span>
            </div>

            <div className={styles.col}>
              <span>{t('winner')}</span>
            </div>
          </div>
          {singleScoreData.map((score: SingleScore) => (
            <div className={styles.row} key={score.id}>
              <div className={styles.col}>
                <span>{score.id}</span>
              </div>
            <div className={styles.col}>
              <span>{score.player_weapon}</span>
            </div>

            <div className={styles.col}>
              <span>{score.computer_weapon}</span>
            </div>

            <div className={styles.col}>
              <span>{score.winner}</span>
            </div>
          </div>
          ))}
        </div> 
        :
        <div className={styles.col}>
          <div className={styles.row}>
            <h2>{t('sessionScores')}</h2>
          </div>
          <div className={styles.row}>
          <div className={styles.col}>
            <span>Nr.</span>
          </div>
          <div className={styles.col}>
            <span>{t('playerScore')}</span>
          </div>

          <div className={styles.col}>
            <span>{t('computerScore')}</span>
          </div>

          <div className={styles.col}>
            <span>{t('gameCount')}</span>
          </div>
        </div>

        {sessionScoreData.map((score: SessionScore) => (
          <div className={styles.row} key={score.id}>
            <div className={styles.col}>
              <span>{score.id}</span>
            </div>
          <div className={styles.col}>
            <span>{score.player_score} wins</span>
          </div>

          <div className={styles.col}>
            <span>{score.computer_score} wins</span>
          </div>

          <div className={styles.col}>
            <span>{score.games} games</span>
          </div>
        </div>
        ))}
      </div> 

      }
    </div> 
  )
}

export default Scores