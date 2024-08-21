import React, {useState} from 'react';
import './App.css';

function Registration() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false); //default value is false

    return (
        <div className="Registration">
            <header className="App-header">
                <label htmlFor='username'>Username :</label>
                <input type = 'text' id = 'username' value = "" required />
            </header>
        </div>
    );
}

export default Registration;