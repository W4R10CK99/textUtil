import './App.css';
import NavBar from './components/NavBar';
import Area from './components/Area';
// import About from './components/About';

function App() {
  return (
    <>
    <NavBar title="TextUtil" about="About Us"/>
    <div className="container my-3">
    <Area title="Enter Your Text Here"/>
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
