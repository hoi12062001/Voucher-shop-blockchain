import React from 'react';

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={{ width: "20%" }} class="shadow-lg p-3 mb-5 bg-body rounded"> 
                    <div className="d-grid" >
                        <Link class="btn btn-primary my-2" to={'Dashboard'}>Trang chủ</Link>
                        <Link class="btn btn-primary my-2" to={'productManagement'}>Quản lí sản phẩm</Link>
                    </div>
        </div>
    );
}

export default Sidebar;