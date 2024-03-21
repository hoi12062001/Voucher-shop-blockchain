import ListAll from "../../ListAll";
function ProductManagement() {
    return (
        <div className="container" >
                <div style={{ paddingLeft: "50rem", paddingTop: "3rem" }}>
                    <ListAll></ListAll>
                </div>
            <div class="input-group flex-nowrap d-flex gap-2" style={{ paddingTop: "6rem" }}>
                <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Username" aria-describedby="addon-wrapping" />
                <button>Tìm kiếm</button>
              
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td class="d-flex gap-2">
                            <a href="" class="btn btn-success">Thêm</a>
                            <a href="" class="btn btn-success">Sửa</a>
                            <a href="" class="btn btn-success">Xóa</a>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ProductManagement;