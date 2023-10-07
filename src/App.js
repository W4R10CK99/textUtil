import './App.css';
import NavBar from './components/NavBar';
import Area from './components/Area';
import React,{useState} from 'react'; 
import Alert from './components/Alert';
// import About from './components/About';

function App() {

  //alert mode object and function

  const [alertmsg, setAlertmsg] = useState(null);

  const showAlert =(msg,desc)=>{
    setAlertmsg({
      msg : msg,
      desc : desc
    })

    //it will only show till 1.5 sec hence timeout function
    setTimeout(() => {
      setAlertmsg(null);
    }, 1500);
  }

  //this useState is used to check and update dark mode through out the page
  const [mode, setMode] = useState('light');

  //function to pass to all the components which will change thier properties
  //for changing to dark or light mode
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Success","Dark Mode enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Success","Light Mode enabled");
    }
  }


  return (
    <>
    <NavBar title="TextUtil" about="About Us" mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alertmsg}/>
    <div className="container my-3">
    <Area title="Enter Your Text Here" mode={mode} alert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
