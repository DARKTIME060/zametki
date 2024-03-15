import { MdSearch, MdArrowBack, MdOutlineCancel  } from "react-icons/md";
import uzFlag from '../images/uz.svg'
import ruFlag from '../images/ru.svg'
import { useState, useContext } from "react";
import { Context } from "../context/Context";

function Navbar() {
  const [active,setActive] = useState(false)
  const {flag,changeLang,lang,value,setValue} = useContext(Context)

  return (
    <nav className="nav">
      <div className="nav-main">
        <div className="nav__lang">
          <button className={`nav__lang-btn ${flag === true ? 'active' : ''}`} onClick={()=>changeLang('uz')}>
            <span>UZ</span>
            <img src={uzFlag} alt="uzbek" />
          </button>
          <button className={`nav__lang-btn ${flag === false ? 'active' : ''}`} onClick={()=>changeLang('ru')}>
            <span>RU</span>
            <img src={ruFlag} alt="russian" />
          </button>
        </div>
        <div className="container">
          <h1 className="nav__title">{lang.navTitle}</h1>
        </div>
        <button className="nav__search-btn" onClick={()=>setActive(true)}>
          <MdSearch />
        </button>
      </div>
      <div className={`nav-search ${active == true ? 'active' : ''}`}>
        <button className="nav__back" onClick={()=>setActive(false)}>
          <MdArrowBack />
        </button>
        <div className="container">
          <input 
            type="text" 
            className="nav__input" 
            placeholder={lang.search}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
        </div>
        <button className="nav__cancel" onClick={()=>setValue('')}>
          <MdOutlineCancel />
        </button>
      </div>
    </nav>
  )
}

export default Navbar