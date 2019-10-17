import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Counter extends Component{
    addFunction(){
        this.props.add(1);
    }
    addAsyncFunction(){
        this.props.addAsync();
    }
    subFunction(){
            this.props.sub(1);
    }
    render(){
        let {counter,testObj} = this.props;
        return (
            <div>
                <hr />
                <div>Counter --testObj.num-{testObj.num}</div>
               < Link to = '/' > home </Link> 
               <div>
                   <div>{counter}</div>
                   <button onClick={this.addFunction.bind(this)}>+</button>
                   <button onClick={this.addAsyncFunction.bind(this)}>async + </button>
                   <button onClick={this.subFunction.bind(this)}>-</button>
               </div>
                
            </div>
        )
    }
}