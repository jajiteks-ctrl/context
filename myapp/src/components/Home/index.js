import Translator from "../Translator";
import {LanguageContext}  from "../LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  // Styles


  return (
    <div >
      <h1 >{Translator[language].message}</h1>
      <p >{Translator[language].about}</p>

      <select value={language} onChange={handleLanguage} >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="te">తెలుగు</option>
      </select>
    </div>
  );
};

export default Home;
