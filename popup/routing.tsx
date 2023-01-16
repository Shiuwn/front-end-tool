import type { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Color from './color'
import Home from './home'
import Other from './other'
import URLCode from './URLCode'

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/color' element={<Color />}></Route>
        <Route path='/urlcode' element={<URLCode />}></Route>
        <Route path='/other' element={<Other />}></Route>
      </Route>
    </Routes>
  )
}