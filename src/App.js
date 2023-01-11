import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path='/contact-us' element={<Contact/>} />

        <Route path='/about-us' element={<About/>} />
      </Routes> */}
          <Main/>

    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
