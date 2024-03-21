import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


function LayoutAdmin() {
  return (
    
    <div class="d-flex">
        <Sidebar></Sidebar>
          <Outlet></Outlet>

    </div>
  );
}

export default LayoutAdmin;