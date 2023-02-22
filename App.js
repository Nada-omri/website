import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Part1 } from './components/part1/Part1';
import { Part2 } from './components/part2/Part2';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Part1/>
      <Part2/>
    </div>
  );
}

export default App;
