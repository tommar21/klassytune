import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/products" element={<ProductsList searchContext={searchContext} />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App;
