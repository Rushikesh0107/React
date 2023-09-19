import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

let username = "rushkiesh"

//this is how react scripts converts the HTML written in the components in the objects so it can render it.
//it converts the following element tag in the reactElement type object which further forms a DOM tree
//to create element and inject it in the HTML (all of this happens under the hood)
//babble is responsible for all of this things 

const Element = (
    <a href="https://google.com">click here to visit google Homie</a>
)

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", traget:"_blank"},
    'click here to visit google',
    username

)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
  
)
