import './AdDesigner.css';
import {useState} from 'react';

function AdDesigner(){
    const [fontSize, setFontSize] = useState(12);
    const [flavor, setFlavor] = useState("");
    const sizeChange = {
        fontSize: fontSize + "px"
    };
    const [theme, setTheme] = useState("lightTheme")
    let addClass = "";
    if(theme === "lightTheme"){
        addClass = " lightTheme"
    }else{
        addClass = " darkTheme"
    }
    
    return(
        <div className="adContainer">
            <h1>Ad Designer</h1>
            <div className= {"Ad" + addClass}>
                <p>Vote for</p>
                <p className="flavorDisplay" style={sizeChange}>{flavor}</p>
            </div>
            <div className="flavorContainer">
                <h2>What to Support</h2>
                <div>
                    <button onClick = {()=> setFlavor("Chocolate")}>Chocolate</button>
                    <button onClick = {()=> setFlavor("Vanilla")}>Vanilla</button>
                    <button onClick = {()=> setFlavor("Strawberry")}>Strawberry</button>
                </div>
            </div>
            <div className="themeContainer">
                <h2>Color Theme</h2>
                <div>
                    <button onClick = {() => setTheme("lightTheme")}> Light </button>
                    <button onClick = {() => setTheme("darkTheme")}>Dark</button>
                </div>
            </div>
            <div className="fontContainer">
                <h2>Color Theme</h2>
                <div className="fontButtonContainer">
                    <button onClick = {()=> setFontSize(fontSize-1)}>Down</button>
                    <p>{fontSize}</p>
                    <button onClick = {()=> setFontSize(fontSize+1)}>Up</button>
                </div>

            </div>
        </div>
    );
}

export default AdDesigner;