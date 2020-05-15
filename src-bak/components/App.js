import React, { Component } from 'react'

export default class App extends Component {

    state = {
        counter:0
    }


    render() {
        return (
            <div>
                <h2>clicked {this.state.counter} times</h2>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button>+</button>&nbsp;
                    <button>-</button>&nbsp;
                    <button>increment if odd</button>&nbsp;
                    <button>increment async</button>&nbsp;
                </div>
            </div>
        )
    }
}
