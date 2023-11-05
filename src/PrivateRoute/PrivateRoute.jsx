
import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return (
            <div className="flex justify-center items-center mt-20 mb-72">
                <Spinner></Spinner>  
            </div>
        )


    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivateRoute;