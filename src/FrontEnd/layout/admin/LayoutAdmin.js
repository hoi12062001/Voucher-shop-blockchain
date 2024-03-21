import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import HeaderAdmin from './HeaderAdmin';

function LayoutAdmin() {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div class="d-flex pt-2">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
        </div>
    </div>


  );
}
export default LayoutAdmin;