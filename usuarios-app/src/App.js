import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import GerenciaUsuarios from './components/GerenciaUsuarios';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route exact path='/usuarios' element={<GerenciaUsuarios/>}/>
      </Routes>
    </Router>
    );
}

export default App;
