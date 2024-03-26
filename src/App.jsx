import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Frontpage from "./components/Frontpage/Frontpage.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import info from "./information.json";
import "./App.css";

const App = () => {
  const [information, setInformation] = useState(info);
  const [currentLang, setCurrentLang] = useState("eng");

  const changeLang = () => {
    currentLang == "eng" ? setCurrentLang("br") : setCurrentLang("eng");
  }

  return (
    <div>
      <main>
        <Navbar lang={currentLang} changeLang={changeLang} info={information} />
        <Frontpage lang={currentLang} info={information} />
        <Projects lang={currentLang} info={information} />
        <Skills lang={currentLang} info={information} />
        <Contact lang={currentLang} info={information} />
      </main>
    </div>
  );
};

export default App;
