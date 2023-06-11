import React,{useState} from 'react';
import './sign.css';
import { Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const Sign = () => {
    const baseURL="http://localhost:8080/api"
    
      const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const navigate = useNavigate();

      const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
      };
    
      
      const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log(signupData)
        axios.post(`${baseURL}/signup`,signupData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
          navigate('/');
      };
    
    
  return (
    <>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className="signcontainerjm">
        <div className="appsignwrapper">
            <div>
                <h2 className="signtitle">CREATE ACCOUNT</h2>
            </div>
            <form className="form-wrapper"  onSubmit={handleSignupSubmit}>
            <div className="signname">
                <label className="label">Full Name</label>
                <input className="signinput" type="text" name="username"  value={signupData.username}
                  onChange={handleSignupChange}/>
            </div>
            <div className="signemail">
                <label className="label">Email</label>
                <input className="signinpute" type="email" name="email"  value={signupData.email}
                  onChange={handleSignupChange}/>
            </div>
            <div className="signpassword">
                <label className="label">Password</label>
                <input className="signinput" type="password" name="password" value={signupData.password}
                  onChange={handleSignupChange}/>
            </div>
            <div>
            <button type='submit' className="submit" >Sign up</button>
            </div>
            </form>
            <div className="magjoy">Already have an account?</div>
            <div className="subjoy">
            <Link to='/Login'><button type='sumbit' className='subjoy1'> Login</button></Link>

            </div>
        </div>
    </div>
    </>
  )
};

export default Sign;