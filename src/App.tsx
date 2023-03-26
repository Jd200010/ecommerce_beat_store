import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BeatTypes } from './interfaces';
import { useState } from 'react'

const BeatsArr: BeatTypes[] = [
  {id: 1, title: 'Chi Town', price: 30.00, quant: 0, inCart: false},
  {id: 2, title: 'A Town', price: 50.00, quant: 0, inCart: false},
  {id: 3, title: 'Hero', price: 20.00, quant: 0, inCart: false},
  {id: 4, title: 'I Know', price: 60.00, quant: 0, inCart: false},
]


function App() {
  const [beats, setBeats] = useState<BeatTypes[] | null>(BeatsArr);
  const [cartQuant, setCartQuant] = useState<number>(0)

  const addToCart = (id: number) => {

    if(beats !== null && beats[id - 1].inCart !== true) setCartQuant(cartQuant + 1)

    setBeats( beats !== null ? beats?.map((beat) => beat.id === id && beat.inCart !== true
    ? {...beat, inCart: true} : beat): beats)
  }

  const removeFromCart = (id: number) => {
    setBeats( beats !== null ? beats?.map((beat) => beat.id === id
    ? {...beat, inCart: false} : beat) : beats)

    setCartQuant(cartQuant - 1)
  }

  return (
    <Routes>
      <Route path='/' element={<Home beats={beats} onAdd={addToCart} cartQuant={cartQuant}/>}/>
      <Route path='/cart' element={<Cart beats={beats} onRemove={removeFromCart} cartQuant={cartQuant}/>}/>
    </Routes>
  );
}

export default App;
