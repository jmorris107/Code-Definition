import React from 'react'
import CardItem from'./CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinatkions!</h1>
            <div className='cards_container'>
            <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem />
                {/* copy and paste code below and make new cards. */}
                {/* <CardItem
                src="imges/img-9.jpg"
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label='Adventure'
                path='/services'
                /> */}

                </ul> 
            </div> 
            </div> 
        </div>
    )
}

export default Cards;
