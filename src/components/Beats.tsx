import { BeatsProps } from '../interfaces'
import Beat from './Beat'

const Beats = ({ beats, onAdd, onRemove }: BeatsProps) => {
  return (

    <div className='beats-container'>
       {beats.map((beat) => (
       window.location.pathname === '/' ? <Beat key={beat.id} title={beat.title} id={beat.id} price={beat.price} inCart={beat.inCart} onAdd={onAdd}/> : 
       window.location.pathname === '/cart' && beat.inCart === true && <Beat key={beat.id} title={beat.title} id={beat.id} price={beat.price} inCart={beat.inCart} onRemove={onRemove}/>
      ))}
    </div>
  )
}

export default Beats