import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
