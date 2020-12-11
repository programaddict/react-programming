import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
    const [currGmtDate, setCurrGmtDate] = useState("");
    const [changeColor, setChangeColor] = useState("");


    useEffect(() => {
        const gmtDate = new Date().toUTCString();
        var gmtHours = new Date().getUTCHours();
        
        if (gmtHours < 12) {
            setChangeColor("green");
        } else {
            setChangeColor("blue");
        }

        setCurrGmtDate(gmtDate);

    });

    return (
        <div style={{ background: changeColor }} className="App-header">
            <p>{currGmtDate}</p>
        </div>
    );
}

export default App;
