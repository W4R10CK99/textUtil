import React from 'react'

export default function Alert(props) {
  
  
    return (
        // condition is this alert message will only show when there is something to show
        // so by default props.alert is set to null is App.js and it will only have any string values
        // to show when there is its function called to update value in alertmsg useState object
        //that is why props.alert && condition is used
        props.alert && <div class="alert alert-success" role="alert">
        {props.alert.msg} : {props.alert.desc}
        {/* hello */}
        </div>
    
  )
}

