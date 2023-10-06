import { Link } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')

    console.log(name,email,password)
    createUser(email,password)
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error.code)
    })



  }
    return (
        <div>
        <div>
        <Navbar></Navbar>

        
      <h1 className="text-xl font-bold text-center mt-3">Login Your Account</h1>
      <form onSubmit={handleRegister} className="card-body w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">photo URL</span>
          </label>
          <input type="photo" placeholder="photo url" className="input input-bordered"/>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already you have an Account? please <Link className="text-blue-500" to="/login">Login</Link></p>
         
        </div>

 
        </div>
    );
};

export default Register;