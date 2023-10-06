import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const Login = () => {

  const {userLogin} = useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  

  const handleLogIn = (e) => {
    e.preventDefault()
    const data  = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    console.log(email,password)

    userLogin(email,password)
    .then(result=>{
      console.log(result)
      navigate(location?.state ? location.state : '/'  )

    })
    .catch(error=>{
      console.log(error)
    })

  }
    return (
        <div>
        <div>
        <Navbar></Navbar>
       
      <h1 className="text-xl font-bold text-center mt-3">Login Your Account</h1>
      <form onSubmit={handleLogIn} className="card-body w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Do not have an Account? please <Link className="text-blue-500" to="/register">Register</Link></p>
         
        </div>

 
        </div>
    );
};

export default Login;