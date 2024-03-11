function Slide() {
  return (
    <div class="banner_section layout_padding">
      <div class="container">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <div class="image_1"><img src="images/Mee-market.png" alt="" /></div>
                </div>
                <div class="col-md-6">
                  <h1 class="banner_taital">Mee-market</h1>
                  <h2>Đồng hành cùng bạn trên suốt chặng đường</h2>
                  <p class="banner_text">Từ giao dịch tiền mã hóa cho đến giao dịch mua NFT đầu tiên,
                    chúng tôi sẽ sát cánh cùng bạn trong toàn bộ quá trình. Luôn hỗ trợ bạn. Không phải chờ đợi.
                    Hãy tin tưởng vào tiền mã hóa của bạn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Card() {
  return (
    <div class="col-2" >
      <div class="box_section">
        <div class="card" style={{ width: "18rem;" }}>
          <img src="./images/type=detail.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title">voucher title</h6>
            <p class="card-text">100$</p>
            <a href="/" class="btn btn-primary">Mua</a>
          </div>
        </div>
      </div>
    </div>
  );
}
function TrangChu() {
  return (
    <div>
      <div>
        <Slide></Slide>
      </div>
      <div class="row">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default TrangChu;