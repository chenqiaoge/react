import React, { Component } from 'react';
import { increment, decrement, reset } from '../../redux/actions/counter';

import { connect } from 'react-redux';

class Counter extends Component {

    render() {
        const {
            counter1: { count },
            increment,
            decrement,
            reset,
        } = this.props;
        return (
            <div>
                <div>当前计数为（显示redux计数）{count}</div>
                <button onClick={() => increment()}>自增</button>
                <button onClick={() => decrement()}>自减</button>
                <button onClick={() => reset()}>重置</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counter1:state.counter1,
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment:()=>{
            dispatch(increment());
        },
        decrement:()=>{
            dispatch(decrement());
        },
        reset:()=>{
            dispatch(reset());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
