import { CartProps } from '../interfaces'
import Navbar from '../components/Navbar'
import Beats from '../components/Beats'

const Cart = ({ beats, onRemove, cartQuant }: CartProps) => {
  return (
    <>
        <Navbar text="S!nner's Beat Store" cartQuant={cartQuant} />
        <h1>Cart</h1>
        {  beats !== null ? cartQuant !== 0 ? <Beats beats={beats} onRemove={onRemove}/> : 'Your cart is empty go buy something fool -_-' : 'No Beats :('}
    </>
  )
}

export default Cart