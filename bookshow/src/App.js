import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import { render } from "react-dom";
import Movielist from './components/Movielist';
import Movieticket from './components/Movieticket';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Movie />} />
    <Route path="/Movielist" element={<Movielist />} />
    <Route path="/" element={<Movielist />} />
    <Route path="/Movieticket" element={<Movieticket />} />
    </Routes>
    </BrowserRouter>
        </div>
  );
}

export default App;
