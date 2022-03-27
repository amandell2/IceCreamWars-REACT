import './Votes.css';
import {useState} from 'react';

function Votes(){
    let [chocolateVotes, setChocolateVotes] = useState<number>(0);
    let [vanillaVotes, setVanillaVotes] = useState<number>(0);
    let [strawberryVotes, setStrawberryVotes] = useState<number>(0);
    const [showChocolate, setShowChocolate] = useState(false);
    const [showVanilla, setShowVanilla] = useState(false);
    const [showStrawberry, setShowStrawberry] = useState(false);
    const [width, setWidth] = useState(0);

    let voteCount = chocolateVotes+vanillaVotes+strawberryVotes;

    let chocolatePercent = Math.round((chocolateVotes/voteCount) * 100);
    let vanillaPercent = Math.round((vanillaVotes/voteCount) * 100);
    let strawberryPercent = Math.round((strawberryVotes/voteCount) * 100);

    let chocolateWidth = {
        width: chocolatePercent + "%"
    };

    let vanillaWidth = {
        width: vanillaPercent + "%"
    };

    let strawberryWidth = {
        width: strawberryPercent + "%"
    };


    return(
    <div className="voteContainer">
        <h1>Vote Here</h1>
        <div>
            <button onClick ={()=>{
                setChocolateVotes(chocolateVotes+1);
                setShowChocolate(true);
                }
            }>
                Chocolate
            </button>
            <button onClick ={()=>{
                setVanillaVotes(vanillaVotes+1)
                setShowVanilla(true);
                }
            }>
                Vanilla
            </button>
            <button onClick ={()=>{
                setStrawberryVotes(strawberryVotes+1);
                setShowStrawberry(true);
                }
            }>
                Strawberry
            </button>
        </div>
        <div>
            {voteCount === 0 && <span>No votes yet.</span>}
            {showChocolate && 
            <span>
            <div>Chocolate: {chocolateVotes} ({chocolatePercent}%)</div>
            <div className="chocolateBarContainer">
                <div className="chocolateBar" style={chocolateWidth}></div>
            </div>
            </span>
            }
            {showVanilla &&
            <span className="voteContainer">
            <div>Vanilla: {vanillaVotes} ({vanillaPercent}%)</div>
            <div className="vanillaBarContainer">
                <div className="vanillaBar" style={vanillaWidth}></div>
            </div>
            </span>
            }
            {showStrawberry &&
            <span>
            <div>Stawberry: {strawberryVotes} ({strawberryPercent}%)</div>
            <div className="strawberryBarContainer">
                <div className="strawberryBar" style={strawberryWidth}></div>
            </div>
            </span>
            }
        </div>
    </div> 
    ); 
}

export default Votes;