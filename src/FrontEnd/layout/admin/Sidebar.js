import React from 'react';

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={{ width: "20%" }}> 
                    <div  class="shadow-lg p-3 mb-5 bg-body rounded">
                        <Link class="btn btn-primary my-2  " style={{ width: "10rem" }} to={'Dashboard'}>Trang chủ</Link>
                        <Link class="btn btn-primary my-2" style={{ width: "10rem" }} to={'productManagement'}>Quản lí sản phẩm</Link>
                    </div>
        </div>
    );
}

export default Sidebar;