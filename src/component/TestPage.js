import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class TestPage extends Component{
    render(){
        return(
            <div>
                <hr />
                <div>TestPage</div>
                 < Link to = '/' > home </Link>
            </div>
        )
    }
}