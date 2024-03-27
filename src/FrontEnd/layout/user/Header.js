import ListAll from "../../../ListAll";
function HeaderSesion() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="logo">
          <a href="index.html">
            <img class="w-25 " src="images/logo.png" alt="" />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.okx.com/vi/web3/marketplace/nft"
              >
                {" "}
                Thị trường NFTs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://solana.com/vi/events">
                Sự kiện
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://solana.com/vi/docs">
                Xây dựng
              </a>
            </li>
          </ul>
          <ListAll></ListAll>
        </div>
      </nav>
    </div>
  );
}
export default HeaderSesion;
