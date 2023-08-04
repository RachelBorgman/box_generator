import React, { useState } from 'react';
    
const Form = (props) => {
    const { currentBoxes, setCurrentBoxes } = props;

    const [color, setColor] = useState("");
    const [size, setSize] = useState(200);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentBoxes([...currentBoxes, {color: color, size: size + "px"}])
        setColor("")
        setSize("")
    }
    
    return (
        <form onSubmit={ handleSubmit } style={{ margin: "10px"}}>
            <label htmlFor='colorName'>Color: </label>
            <input type="text" name="color" value={color} onChange={ (e) => setColor(e.target.value) } placeholder="Enter your color"/>
            <label htmlFor='size'>Size: </label>
            <input type="text" name="size" value={size} onChange={ (e) => setSize(e.target.value) } placeholder="Enter size"/>
            <input type="submit" value="Add Box" />
        </form>
    );
};
    
export default Form;