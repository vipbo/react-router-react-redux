import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Counter extends Component{
    addFunction(){
        this.props.add(1);
    }
    subFunction(){
            this.props.sub(1);
    }
    render(){
        return (
            <div>
                <hr />
                <div>Counter -- {this.props.counter}</div>
               < Link to = '/' > home </Link> 
               <div>
                   <div>0</div>
                   <button onClick={this.addFunction.bind(this)}>+</button>
                   <button onClick={this.subFunction.bind(this)}>-</button>
               </div>
                
            </div>
        )
    }
}