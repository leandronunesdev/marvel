import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoute;
