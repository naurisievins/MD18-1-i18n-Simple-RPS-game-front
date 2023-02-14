import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      rps: "Rock Paper Scissors",
      about: "This is simple Rock-Paper-Scissors game. You play against computer. This application is built using React for frontend and Node.js with Express.js for backend. Result history is saved in MySQL database.",
      home: "Home",
      game: "Game",
      rulesTitle: "Game rules:",
      rules: "A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!",
      startGame: "Start game"
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
      startGame: "Sākt spēli"
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