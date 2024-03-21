import { Outlet } from 'react-router-dom';
import FooterSesion from './layout/user/footer';
import HeaderSesion from './layout/user/Header';

function TrangChu() {
  return (
    
    <div>
       <HeaderSesion></HeaderSesion>
          <Outlet></Outlet>
      <FooterSesion></FooterSesion>
    </div>
  );
}

export default TrangChu;