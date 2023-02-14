import styles from './Home.module.scss'
import { NavLink } from "react-router-dom";

function Home() {

  return (
   <div className={styles.wrapper}>
      <h1 className="{styles.title}">
        Rock Paper Scissors
      </h1>
      <span>
        This is simple Rock-Paper-Scissors game. You play against computer. This application
        is built using React for frontend and Node.js with Express.js for backend.
        Result history is saved in MySQL database.
      </span>
      <span className={styles.game_rules}>
        <b>Game rules:</b><br />
        A classic two-person game. Players start each round by saying,
        “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist
        for rock, flat hand for paper, or their index and middle finger for scissors.
        Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!
      </span>
      <div className={styles.button_container}>
        <button className={styles.button}>
          <NavLink to='game'>Start game</NavLink>
        </button>
      </div>
    </div>
  )
}

export default Home