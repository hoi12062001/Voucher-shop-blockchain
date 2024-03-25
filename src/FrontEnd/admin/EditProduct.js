
function EditProduct() {
    return (
        <div class="container">
        <form action="" class="shadow-lg p-3 mb-5 bg-body rounded">
            <fieldset disabled>
           
                <h2 class="text-center">Sửa giảm giá</h2>
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Tên sản phẩm</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Tên sản mã giảm giá" />
                </div>
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Giá sản phẩm</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Giá" />
                </div>
                <div class="mb-3">
                    <label for="disabledTextInput" class="form-label">Giảm giá</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Giảm giá" />
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
                <a href="productManagement" ><button class="btn btn-warning m-2">Trở về</button></a>
            </fieldset>
        </form>
       
        </div>
    )
}
export default EditProduct;