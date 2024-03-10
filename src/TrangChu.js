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
    <div class="row">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
  );
}

export default TrangChu;