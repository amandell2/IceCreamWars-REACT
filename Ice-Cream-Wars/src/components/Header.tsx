import './Header.css';

interface Props{
    user: string;
}


function Header({user}: Props){
    return(
    <div className = "Header_container">
    <h1 className="Header--title">Ice Cream Wars</h1>
    <div className = "Header--user">
        <p>Welcome {user}</p>
        </div>
    </div>
    );
}

export default Header;