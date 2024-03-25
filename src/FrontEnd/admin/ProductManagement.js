import { useEffect } from "react";
function ProductManagement() {
  return (
    <div class="container ">
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <a href="AddProduct">
          <button class="btn btn-success my-2">Thêm mã giảm giá</button>
        </a>

        <table class="table table-striped" style={{ marginTop: "2rem" }}>
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
              <td class="d-flex">
                <a
                  href="EditProduct"
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <button class="btn btn-warning ">Sửa</button>
                </a>
                <form action="">
                  <button class="btn btn-danger ">Xóa</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductManagement;
