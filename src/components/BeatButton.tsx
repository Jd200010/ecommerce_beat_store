import { BeatButtonProps } from "../interfaces"

const BeatButton = ({text = 'Add To Cart', id, onClick}: BeatButtonProps) => {
  return (
    <button onClick={() => onClick(id)}>
            {text}</button>
  )
}

export default BeatButton