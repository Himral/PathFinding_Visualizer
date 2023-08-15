import './App.css';
import Navbar from './navbar/navbar';
import { useParams } from './context/context';
function App() {
  console.log(useParams())
  return (
    
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
