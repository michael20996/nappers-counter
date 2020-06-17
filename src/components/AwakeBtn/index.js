import React, {Component, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./AwakeBtn.css";
import Counter from '../Counter'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        fullWidth: true,
      },
    },
  }));




export default class OutlinedButtons extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
    this.increment = this.increment.bind(this)
    //const classes = useStyles();

  }

  /*handleClick(e){
    e.preventDefault();
  }*/

  increment = () => {
    this.setState({
        count: this.state.count+ 1
    })
  }

  render(){
  return (
    <div className= 'onclick'>
     <Counter testCount = {this.state.count} />
     <Button onClick = {this.increment} id="awake-btn" href="/awake" variant="light">
        play
    </Button>
    </div>
  )
  }
}


