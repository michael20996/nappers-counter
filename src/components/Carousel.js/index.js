import React, {Component} from 'react';
import Card from '../Card/Card';

class Carousel extends component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div class = 'view-port' style = {styles.view_port}>
                    <div class = 'card-container' style = {styles.card_container}>
                    <Card card_numer = "0"/>
                    <Card card_numer = "1"/>
                    <Card card_numer = "2"/>
                    <Card card_numer = "3"/>
                    </div>
                </div>  
            </div>
        )
    }
}
const styles = {
    view_port: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '150px'
    },
    card_container:{
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'


    }
}


export default Carousel;