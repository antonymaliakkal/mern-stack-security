import { useNavigate } from "react-router-dom"
import {  jwtDecode } from "jwt-decode"

const Home = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    let userData;
    if(token) {
        userData = jwtDecode(token);
        console.log(userData)
    }

    const handleLogout = () => {
        
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome {userData.userName} ! You are logged in...</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}


export default Home;