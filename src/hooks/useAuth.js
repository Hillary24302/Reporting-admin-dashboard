import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
//import { authState } from 'src/store/slices/auth/authSlice';


export const CheckAuth = ({
  redirectPath = '/auth/login', 
  children,
  layout: Layout
}) => {
  //const isAuth = useSelector(authState.isAuthenticated);
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Layout>{children ? children : <Outlet />}</Layout>;
};
