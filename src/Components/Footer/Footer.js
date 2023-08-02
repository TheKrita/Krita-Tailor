import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {TfiShoppingCartFull} from 'react-icons/tfi';
import {LiaOpencart} from 'react-icons/lia'
import {BsCartCheck} from 'react-icons/bs'
import {RiCustomerService2Line} from 'react-icons/ri';
import './Footer.css'

const Footer = () => {
  return(
    <div className='footerMain'>
      <div className='footer-container'>
        <Link to="/">
            <button className='footer-button'>
                <AiOutlineHome />
                <p>Home</p>
            </button>
        </Link>
        <Link to="/orders">
            <button className='footer-button'>
                <TfiShoppingCartFull />
                <p>Orders</p>
            </button>
        </Link>
        <Link to="/instakria">
            <button className='footer-button'>
                <LiaOpencart />
                <p>Instakria</p>
            </button>
        </Link>
        <Link to="/requests">
            <button className='footer-button'>
                <BsCartCheck />
                <p>Requests</p>
            </button>
        </Link>
        <Link to="/care">
            <button className='footer-button'>
                <RiCustomerService2Line />
                <p>Support</p>
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Footer