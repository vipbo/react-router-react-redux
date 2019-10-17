import React, { Component } from 'react';
import Counter from '../component/Counter'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../store/action'


 class Counter2 extends Component{
    render(){
        return (
            <div>
               <Counter {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        counter:state,
        testObj:{num:666}
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter2)