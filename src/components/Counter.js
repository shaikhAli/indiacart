import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
        handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
        handleResetClick: () => dispatch({ type: 'RESET' })
    }
}

const Counter = ({ count, handleIncrementClick, handleDecrementClick, handleResetClick }) => {
    return (
        <div className='container'>
            <button type="button" className="btn btn-secondary button" onClick={handleDecrementClick}>Decrement</button>
            <button type="button" className="btn btn-primary button" onClick={handleIncrementClick}>Increment</button>
            <button type="button" className="btn btn-danger" onClick={handleResetClick}>Reset</button>
            <h1>Hello Counter & Redux! Counter is </h1>
            <p><span className='counter-text'>{count}</span></p>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);