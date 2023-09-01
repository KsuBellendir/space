import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {

    const [click, setClick] = useState(false); 
  
    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
    <div className='navbar-container'>
        <NavLink to='/' onClick={closeMobileMenu}>
            <img src='images/shared/logo.svg' className='logo' alt='linabell'/>
        </NavLink>
        <div className='menu-icon'  onClick={handelClick}>
            {click ? <FaTimes/> : <FaBars/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                    О нас
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/destination' className='nav-links' onClick={closeMobileMenu}>
                    Куда
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/crew' className='nav-links' onClick={closeMobileMenu}>
                    Команда
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/technology' className='nav-links' onClick={closeMobileMenu}>
                    Технологии
                </NavLink>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar;