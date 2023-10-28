import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componets/Footer';
import Home from './Pages/Home';
import Header from './Componets/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
