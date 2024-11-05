import axios from "../axios/axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', { email , password })
            localStorage.setItem('token' , response.data.token)
            console.log(response.data.token)
            navigate('/home');
            
        } catch (err) {
            setError(err.response.data.message)
            console.error('error is : ' , err)
        }

    }


    const toRegister = () => {
        navigate('/register')
    }

    return(
        <div>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br /><br />
                <button type="submit">Login</button>
            </form>

            <p>New User? <span  onClick={toRegister} style={{cursor : "pointer"}}> Register Here</span></p>

        </div>
    )


}


export default Login;