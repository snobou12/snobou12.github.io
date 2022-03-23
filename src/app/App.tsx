import React,{FC} from 'react';
import { useTranslation } from 'react-i18next';
import { About,Header,LangSwitcher,Projects,Skills } from '../components';

import './App.scss';

const App:FC =()=> {
  const {i18n}=useTranslation();
  const aboutRef = React.createRef<HTMLDivElement>();
  const skillsRef = React.createRef<HTMLDivElement>();
  const projectsRef = React.createRef<HTMLDivElement>();

  const smoothTo =(id:number)=>{
      switch (id) {
        case 0:
          if(aboutRef.current) aboutRef.current.scrollIntoView()  
          break;
        case 1:
          if(skillsRef.current) skillsRef.current.scrollIntoView()  
          break;
        case 2:
          if(projectsRef.current) projectsRef.current.scrollIntoView()  
          break;  
        default:
          if(aboutRef.current) aboutRef.current.scrollIntoView()  
      }
  }
  const handleChangeLanguage =(lang:string)=>{
      i18n.changeLanguage(lang);
  }
  return (
    <div className="app">
      <div className="app__content">
        <Header handleSmoothTo={smoothTo} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <LangSwitcher change={handleChangeLanguage} />
      </div>
     
    </div>
  );
}

export default App;
