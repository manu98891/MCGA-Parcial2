import './App.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () =>{
return(
  <div>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </div>
)
}

export default App;
