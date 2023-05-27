import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './scenes/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
