import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/userContext";

export default function Login(props) {
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
            const response = await fetch('https://iifsd.herokuapp.com/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password
                })
            })

            const data = await response.json();
            console.log('data', data);

            if (data.error) {
                setError(data.message[0].message[0].message);
                return;
            }
            setUser(data);
        }

        catch (err) {
            setError(err.toString());
        }
    }
    return (
        <div className="container">
            <div className="login-content">

                <h1>Login</h1>

                {error && <p className="msg msg--error">{error.toString()}</p>}
                <br />

                <form className="loginForm" onSubmit={handleSubmit}>
                    <input className="input" placeholder="Email" type="email" value={email} onChange={(e) => { setError(''); setEmail(e.target.value) }} />
                    <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => { setError(''); setPassword(e.target.value) }} />
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}