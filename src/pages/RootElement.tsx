import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const RootElement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/start', { replace: true });
  }, []);

  return <Outlet />;
};

export default RootElement;
