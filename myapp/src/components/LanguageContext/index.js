import { createContext, useState } from "react";

 const LanguageContext = createContext()

 const LanguageProvider =({children})=>{
    const [language, setLanguage] = useState("en")

    const changeLanguage = (lan)=>{
        setLanguage(lan)
    }


    return (
        <LanguageContext.Provider value = {{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext,LanguageProvider }