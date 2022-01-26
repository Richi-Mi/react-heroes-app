import { useContext } from 'react';
import AuthContext from '../auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext( AuthContext );
    const { pathname, search } = useLocation()

    let url = pathname

    if( search !== '' ) {
        url = pathname + search
    }

    localStorage.setItem('lastPath', url )

    return user.logged 
        ? children
        : <Navigate to='/login'/> 
};

export default PrivateRoutes;