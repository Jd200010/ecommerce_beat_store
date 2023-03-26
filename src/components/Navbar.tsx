import Button from './Button'
import { NavbarProps } from '../interfaces'
import { Link } from 'react-router-dom'

const Navbar = ({text = 'Header', cartQuant} : NavbarProps) => {

  const linkdinClick = () => {console.log('YOU CLICKED LINKDIN')}
  const indeedClick = () => {console.log('YOU CLICKED INDEED')}
  const instagramClick = () => {console.log('YOU CLICKED INSTAGRAM')}
  const cartClick = () => {console.log('YOU CLICKED CART')}

  return (
    <div className='navbar'>
      <div className="navbar-left">
            <Link to='/'><h1>{text}</h1></Link>
        </div>
        <div className="navbar-right">
            <Button text='Linkdin' onClick={linkdinClick} btnClass='nav-right-btn'/>
            <Button text='Indeed' onClick={indeedClick} btnClass='nav-right-btn'/>
            <Button text='Instagram' onClick={instagramClick} btnClass='nav-right-btn'/>
            <Link to='/cart' ><Button text='Cart' onClick={cartClick} btnClass='cart-btn' cartQuant={cartQuant}/></Link>
        </div>
    </div>
  )
}

export default Navbar