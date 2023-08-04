import React from 'react';
// import React, { Component } from 'react';
// import styles from './BoxComponent.module.css'
    
const BoxDisplay = (props) => {

    const { currentBoxes } = props;

    return (
            <div>
                {currentBoxes.map((box, index) => (
                    <div key={index} style={{backgroundColor: box.color, display: "inline-block", height: box.size, width: box.size, margin: "15px"}}>
                    </div>))}
            </div>
            // <div style={{backgroundColor:{color}}} className='box'>Hello</div>
    );
};
    
export default BoxDisplay;

