import * as React from 'react';
import {Button} from "./button/Button";
import {ButtonCounter} from "../containers/ButtonCounterContainer";




export class App extends React.Component {

    getRequest(){
        fetch('http://localhost:3000/my-api')
                    .then((res) => {
                        return res.json()
                    })
                    .then((res) => {
                        console.log('Любимый муж');
                        alert(JSON.parse(res).message)
                    })
    }

    render() {
        return (
            <div>page
            <Button text="Жми меня" onClick={this.getRequest}/>
            <ButtonCounter/>
            </div>
        )
    }
};