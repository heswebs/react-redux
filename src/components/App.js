import React, { Component } from 'react'
import * as actions from '../redux/actions'   // import {INCREMENT, DECREMENT} 

export default class App extends Component {

    increment = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(actions.increment(number))
    }
    
    decrement = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(actions.decrement(number))
    }

    incrementIfOdd = () => {
        const number = this.select.value * 1
        const counter  = this.props.store.getState()
        if (counter % 2 === 1) {
            this.props.store.dispatch(actions.increment(number))
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1

        setTimeout(()=>{
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }
    

    render() {
        const counter = this.props.store.getState()
        return (
            <div>
                <h2>clicked {counter} times</h2>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>&nbsp;
                </div>
            </div>
        )
    }
}
