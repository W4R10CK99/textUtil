import './App.css';
import NavBar from './components/NavBar';
import Area from './components/Area';

function App() {
  return (
    <>
    <NavBar title="TextUtil" about="About Us"/>
    <div className="container my-3">
    <Area title="Enter Your Text Here"/>

    </div>
    </>
    
  );
}

export default App;
