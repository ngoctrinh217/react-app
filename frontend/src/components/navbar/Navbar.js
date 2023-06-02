import react from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuItems from './MenuItems';
import Dropdown from '../dropdown/Dropdown';
import { TopButton } from '../button/Button';


const Navbar =()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [dropdown, setDropdown] = useState(false);    
return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Perfume</h1>
        <div className="menu-icons" onClick= {handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars" }></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

            {MenuItems.map((item, index) => {
                if(item.title === "Products"){
                    return (
                        <li key={index}>
                        <a className={item.cName} href="/" 
                        onMouseEnter={()=>setDropdown(true)}
                        onMouseLeave={()=>setDropdown(false)} >
                        {dropdown && <Dropdown />}
                        <i className={item.icon}>
                        </i>{item.title}
                        </a>
                        
                        </li>   
                    )
                }
                return (
                    <li key={index}>
                    <a className={item.cName} href="/">
                    <i className={item.icon}>
                    </i>{item.title}
                    </a>
                    </li>   
                )
            })} 
        <TopButton>
        Signup
        </TopButton> 
        </ul>
        
    </nav>
  )
}

export default Navbar