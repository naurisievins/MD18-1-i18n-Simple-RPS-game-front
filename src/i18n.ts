import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      rps: "Rock Paper Scissors",
      about: "This is simple Rock-Paper-Scissors game. You play against computer. This application is built using React for frontend and Node.js with Express.js for backend. Result history is saved in MySQL database.",
      home: "Home",
      game: "Game",
      rulesTitle: "Game rules:",
      rules: "A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!",
      startGame: "Start game",
      yourScore: "Your score: ",
      computerScore: "Computer's score: ",
      yourWeapon: "Your weapon:",
      computerWeapon: "Computer's weapon:",
      chooseWeapon: "Choose your weapon:",
      makeYourMove: 'Make your move!',
      youWin: "You win!",
      computerWin: "Computer wins!",
      draw: "Draw!",
      scores: "Score history",
      back: "Back to the game",
      singleScores: "Single scores",
      playerWeapon: "Player's weapon",
      winner: "Winner",
      sessionScores: "Session scores",
      playerScore: "Player's score",
      comuptersScore: "Computer's score",
      gameCount: "Games count",

    }
  },
  lv: {
    translation: {
      rps: "Akmens Šķēres Papīrs",
      about: "Šī ir vienkārša 'Akmens Šķēres Papīrs' spēle. Jūsu pretinieks ir dators. Šī aplikācija ir veidota izmantojot React 'frontendam', un Node.js ar Express.js ''backendam'. Rezultātu vēsture tiek saglabāta MySQL datubāzē.",
      home: "Sākums",
      game: "Spēle",
      rulesTitle: "Spēles noteikumi:",
      rules: "Klasiska divu spēlētāju spēle. Spēlētāji sāk katru kārtu, sakot: 'akmens, šķēres, papīrs, aiziet!' Tad katrs spēlētājs izstiepj roku ar izvēlēto kombināciju. Akmens sasit šķēres, šķēres sagriež papīru un papīrs ietin akmeni. Redzēsim, kurš uzvar katrā kārtā!",
      startGame: "Sākt spēli",
      yourScore: "Tavs rezultāts: ",
      computerScore: "Datora rezultāts: ",
      yourWeapon: "Tavs ierocis:",
      computerWeapon: "Datora ierocis:",
      chooseWeapon: "Izvēlies savu ieroci:",
      makeYourMove: 'Izdari izvēli!',
      youWin: "Tu uzvarēji!",
      computerWin: "Dators uzvarēja!",
      draw: "Neizšķirts!",
      scores: "Rezultātu vēsture",
      back: "Atpakaļ uz spēli",
      singleScores: "Raundu rezultāti",
      playerWeapon: "Spēlētāja ierocis",
      winner: "Uzvarētājs",
      sessionScores: "Sesijas rezultāti",
      playerScore: "Spēlētāja rezultāts",
      comuptersScore: "Datora rezultāts",
      gameCount: "Spēļu skaits",
    }
  },
  de: {
    translation: {
      rps: "Schere, Stein, Papier",
      about: "Dies ist ein einfaches Stein-Schere-Papier-Spiel. Sie spielen gegen Computer. Diese Anwendung wurde mit React für das Frontend und Node.js mit Express.js für das Backend erstellt. Der Ergebnisverlauf wird in der MySQL-Datenbank gespeichert.",
      home: "Heim",
      game: "Spiel",
      rulesTitle: "Spielregeln:",
      rules: "Ein klassisches Spiel für zwei Personen. Die Spieler beginnen jede Runde, indem sie sagen: „Stein, Papier, Schere, schieße!“ Beim „Schießen“ streckt jeder Spieler seine Faust nach Stein, seine flache Hand nach Papier oder seinen Zeige- und Mittelfinger nach einer Schere. Stein zermalmt Schere, Schere schneidet Papier und Papier bedeckt Stein. Sehen Sie, wer jede Runde gewinnt!",
      startGame: "Spiel beginnen",
      yourScore: "Ihr Ergebnis: ",
      computerScore: "Punktzahl des Computers: ",
      yourWeapon: "Ihre Waffe:",
      computerWeapon: "Waffe des Computers:",
      chooseWeapon: "Wähle deine Waffe:",
      makeYourMove: 'Mach deinen Zug!',
      youWin: "Du gewinnst!",
      computerWin: "Rechner gewinnt!",
      draw: "Ziehen!",
      scores: "Ergebnisverlauf",
      back: "Zurück zum Spiel",
      singleScores: "Einzelne Partituren",
      playerWeapon: "Waffe des Spielers",
      winner: "Gewinner",
      sessionScores: "Sitzungsergebnisse",
      playerScore: "Spieler-Punktzahl",
      comuptersScore: "Computerergebnis",
      gameCount: "Anzahl von Spielen",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;