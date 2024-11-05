import axios from '../axios/axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('/register' , { username , email , password })
            localStorage.setItem('token' , response.data.token)
            console.log(response.data)
            navigate('/home')
        } catch (err) {
            console.error(err)
        }

    }

    const toLogin = () => navigate('/login')
    
    return(
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name : </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br /> <br />
                <label htmlFor="email">Email : </label>
                <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br /><br />
                <button type="submit">Register </button>
            </form>

            <p>Already registered user? <span onClick={toLogin} style={{cursor:'pointer'}}>Login here</span> </p>

        </div>
    )

}

export default Register;