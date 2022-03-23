import React,{FC} from 'react'
import USAIcon from "../../assets/flag_usa.png";
import RussiaIcon from "../../assets/flag_russia.png";

import "./LangSwitcher.scss"

interface LangSwitcherProps{
    change:(lang:string)=>void
}
const LangSwitcher:FC<LangSwitcherProps>=({change})=> {
  return (
    <div  className='lang'>
        <img onClick={()=>change("ru")} src={RussiaIcon} alt="ru_icon" />
        <img onClick={()=>change("en")} src={USAIcon} alt="us_icon" />
    </div>
  )
}

export default LangSwitcher