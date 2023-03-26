import BeatButton from './BeatButton'
import { BeatProps } from '../interfaces'

const Beat = ( { id, title, price, inCart, onAdd, onRemove }: BeatProps) => {

  return (
    <div className='beat'>
        <div className='beat-image'>Image</div>
        <div>
          <h3>Title: {title}</h3>
          <p>Price: ${price}</p>
          <p>In Cart? {inCart? 'True': 'False'}</p>
          {onAdd? <BeatButton id={id} text={'Add To Cart'} onClick={onAdd}/>:
          onRemove && <BeatButton id={id} text={'Remove From Cart'} onClick={onRemove}/>}
        </div>
    </div>
  )
}

export default Beat