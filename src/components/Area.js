import React,{useState} from 'react'

export default function Area(props) {

    const [text,setText] = useState('Enter your Text');
    // setText("new text");

    const toUpCase = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const change = (event) =>{
        setText(event.target.value)
    }

    const toLowCase = ()=>{
        let ltext = text.toLocaleLowerCase();
        setText(ltext);
    }

    const cleartext = () =>{
        setText("")
    }

    const copytext=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    //used regex to split the words whenever a space is encountered
    //newText will act as an array
    //then stich those array elements and update text
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
        <>  
            <div className="container my-3">
            <h3>{props.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={change} rows="6"></textarea>

            </div>
            <button className="btn btn-primary mx-2" onClick={toUpCase}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={toLowCase}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={copytext}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
            </div>

            <div className="container my-3">

                <h2>Text Summary</h2>
                <p>{text.length} Characters</p>
                <p>{text.split(" ").length} Words</p>

                <h2>Preview</h2>
                <p>{text}</p>

                <p>Time to read : {0.008 * text.split(" ").length} minutes</p>

            </div>
        </>
    )
}
