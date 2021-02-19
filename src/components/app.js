import ReactDom from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc(){
    const authData = {data: "Auth benim sitemde"};
       if (WavesKeeper) {
            WavesKeeper.auth(authData)
            .then(auth => {
                console.log(auth);
            }).catch(error => {
                console.error(error);

            })
        } else {
            alert("to auth WavesKeeper should be installed.(önce yüklemelisin)");
        }
    }
    render() {
        return (
            <div className ="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
            </div>
        )
    }
}
const app= document.getElementById('app');
if(app){
    ReactDom.render(<App/>, app);
}