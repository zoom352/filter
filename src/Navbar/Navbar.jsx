import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
        <NavLink to ='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        
    </nav>
}

export default Navbar;