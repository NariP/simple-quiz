import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RootElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate replace to="/start" />;
  }

  return <Outlet />;
};

export default RootElement;
