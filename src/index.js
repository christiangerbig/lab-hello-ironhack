import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img src="/images/ironhack-logo.svg"></img>
                </div>
                <div>
                    <h1>Say hello to React JS</h1>
                </div>
x
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));