import SessionContextProvider from '../context/session-context';
import Content from './Content';
import { useRouter } from 'next/router';
import HomeNavbar from './Navbar/HomeNavbar';

const Layout = ({ children }: any) => {
  const router = useRouter();

  return (
    <div className='h-screen w-full flex flex-col '>
      <SessionContextProvider>
        <HomeNavbar />
        <Content>{children}</Content>
      </SessionContextProvider>
    </div>
  );
};

export default Layout;
