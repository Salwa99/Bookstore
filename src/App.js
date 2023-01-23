import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/CategoriesPage';
import Navigation from './components/Header';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
