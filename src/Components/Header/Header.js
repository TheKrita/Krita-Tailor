import './Header.css';
import krita from './krita_logo.png'
import {Link} from 'react-router-dom'
import {MdNotificationsActive} from 'react-icons/md';
import {CgProfile,CgSearch} from 'react-icons/cg';

const Header = () =>(
    <div className='headerContainer'>
        <div className='headerMainContainer'>
            <div className='headerLogoContainer'>
                <Link to='/'><img className='logo' src={krita} alt="logo" /></Link>
                <h1 className='headerHeading'>KRITA</h1>
            </div>
            <div className='searchBarContainer'>
            <button className='searchButton'><CgSearch /></button>
                <input placeholder='Search for Customers Here' type='search' className='searchBar' />
            </div>
            <div className='endContainer'>
            <button className='button'><MdNotificationsActive /></button>
                <button className='button'><CgProfile/></button>
            </div>
        </div>
        <div className='searchBarContainerMobile'>
            <div className='searchBarMobile'>
                <button className='searchButton'><CgSearch /></button>
                <input placeholder='Search for Customers Here' type='search' className='searchBar' />
            </div>
        </div>
    </div>
)

export default Header