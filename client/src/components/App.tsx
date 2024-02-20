import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dice from './Dice';

export default function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Dice />} />
    </Routes>
  </>
)
}