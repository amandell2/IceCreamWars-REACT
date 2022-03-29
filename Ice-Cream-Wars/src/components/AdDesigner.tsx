import './AdDesigner.css';
import {useState} from 'react';
import Ad from './Ad';

function AdDesigner(){
    const [fontSize, setFontSize] = useState(24);
    const [flavor, setFlavor] = useState("");
    const sizeChange = {
        fontSize: fontSize + "px"
    };
    const [darkTheme, setDarkTheme] = useState(true);
    let addClass = "";
    if(darkTheme){
        addClass = " darkTheme"
    }else{
        addClass = " lightTheme"
    }


    return(
        <div className="adContainer">
            <h1>Ad Designer</h1>
            <div className= {"AdDesigner-Ad" + addClass}>
                <p>Vote for</p>
                <p className="flavorDisplay" style={sizeChange}>{flavor}</p>
            </div>
            <div className="flavorContainer">
                <h2>What to Support</h2>
                <div>
                    <button disabled = {flavor === "Chocolate"} onClick = {()=> setFlavor("Chocolate")}>
                        Chocolate
                        </button>
                    <button disabled = {flavor === "Vanilla"} onClick = {()=> setFlavor("Vanilla")}>
                        Vanilla
                        </button>
                    <button disabled = {flavor === "Strawberry"} onClick = {()=> setFlavor("Strawberry")}>
                        Strawberry
                        </button>
                </div>
            </div>
            <div className="themeContainer">
                <h2>Color Theme</h2>
                <div>
                    <button disabled ={!darkTheme}
                    onClick = {() => {
                        setDarkTheme(false);
                    }}> 
                        Light 
                        </button>
                    <button disabled={darkTheme}
                    onClick = {() => {
                        setDarkTheme(true);
                    }}>
                        Dark
                    </button>
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