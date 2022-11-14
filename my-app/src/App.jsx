import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/layouts';

const App = () =>{
return(
  <div>
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
  </div>
)
}

export default App;
