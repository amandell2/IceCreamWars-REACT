import './Ad.css';

interface Props{
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Props){
    let addClass = "";
    if(darkTheme){
        addClass = " Ad-darkTheme"
    }else{
        addClass = " Ad-lightTheme"
    }
    const styles = {
        fontSize: fontSize + "px"
    };

    return(
 
        <div className= {"Ad-SampleAds" + addClass}>
            <p>Vote for</p>
            <p className="flavorDisplay" style={styles}>{flavor}</p>
        </div>
    );
}

export default Ad;