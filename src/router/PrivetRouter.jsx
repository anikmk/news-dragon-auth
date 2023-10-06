import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    
    if(loading){
        return <span className="loading loading-infinity loading-lg mt-96 ml-96"></span>
    }
    if(user){
       return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRouter;
PrivetRouter.propTypes = {
    children: PropTypes.func
}