import styles from './Home.module.scss'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {

  const { t } = useTranslation();

  return (
   <div className={styles.wrapper}>
      <h1 className="{styles.title}">
        {t('rps')}
      </h1>
      <span>
        {t('about')}
      </span>
      <span className={styles.game_rules}>
        <b>{t("rulesTitle")}</b><br />
        {t("rules")}
      </span>
      <div className={styles.button_container}>
        <button className={styles.button}>
          <NavLink to='game'>{t('startGame')}</NavLink>
        </button>
      </div>
    </div>
  )
}

export default Home