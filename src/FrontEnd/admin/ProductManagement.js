
function ProductManagement() {
    return (
        <div class="container ">
            <div class="input-group flex-nowrap d-flex gap-2">
                <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Username" aria-describedby="addon-wrapping" />
                <button>Tìm kiếm</button>
            </div>
            <table class="table text-center">
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
                        <td>
                            <a href="" class="btn btn-success">Thêm</a>
                            <a href="" class="btn btn-success " style={{ marginLeft: "1rem",marginRight: "1rem" }}>Sửa</a>
                            <a href="" class="btn btn-success">Xóa</a>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ProductManagement;