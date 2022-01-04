import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/userContext";

function Signup(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            props.history.push('/');
        }
    }, [user, props.history])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://iifsd.herokuapp.com/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    email: email,
                    password: password
                })
            })

            const data = await response.json();
            console.log('data', data);

            if (data.error) {
                setError(data.message[0].messages[0].message);
                return;
            }

            setUser(data);
        } catch (err) {
            setError(err.toString());
        }
    }

    return (
        <div className="container">
            <div className="login-content">

                <h1>Signup</h1>

                {error && <p className="msg msg--error">{error.toString()}</p>}
                <br />

                <form className="loginForm" onSubmit={handleSubmit}>
                    <input className="input" placeholder="First Name" type="text" value={firstName} onChange={(e) => { setError(''); setFirstName(e.target.value) }} />
                    <input className="input" placeholder="Last Name" type="text" value={lastName} onChange={(e) => { setError(''); setLastName(e.target.value) }} />
                    <input className="input" placeholder="Email" type="email" value={email} onChange={(e) => { setError(''); setEmail(e.target.value) }} />
                    <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => { setError(''); setPassword(e.target.value) }} />
                    <button className="login-button">Singup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup