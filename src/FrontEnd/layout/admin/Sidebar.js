import React from 'react';

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div class="d-flex justify-content-between">
               
               
            </div>
            <div style={{ width: "40%" }}>

                <div>


                    <div className="d-grid">
                        <Link className="flex" to={'productManagement'}>Quản lí sản phẩm</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;