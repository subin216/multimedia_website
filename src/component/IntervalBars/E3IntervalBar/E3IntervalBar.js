import React, {Component} from 'react';

import IntervalBar from '../IntervalBar/IntervalBar'
import classes from './E3IntervalBar.module.css';

class E3IntervalBar extends Component{
    render(){
        return(
            <div className={classes.E3}>
                <h1>E3 Scaling</h1>
                <IntervalBar start={this.props.start} end={this.props.end}/>
                <div>
                    <span >"s" before scaling:{this.props.prevS} </span>
                    <span className={classes.s}>"s" after scaling:{this.props.s} </span>
                </div>
            </div>
        )
    }
}

export default E3IntervalBar;