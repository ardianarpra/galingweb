<style>
  * {
    font-size: 14px;
  }

  input {
    width: 100%;
  }

  footer {
    background-color: rgb(247, 247, 247);
    box-shadow: -3px 0 1px rgb(245, 245, 245);
  }

  footer .bottom {
    color: white;
    background-color: #000;
    padding: 10px;
  }

  .text-bottom {
    text-align: center;
    font-size: 0.8em;
  }

  /* .top-footers{
        box-sizing: border-box;
        display: grid;
        grid-template-areas: 
        "section-contact section-category section-subscribe";
        gap: 10px;
	} */

  .section-category {
    box-sizing: border-box;
  }

  /*
    .section-contact{
        grid-area: section-contact;
    }
    .section-category{
        grid-area: section-category;
    }
    .section-subscribe{
        grid-area: section-subscribe;
    } */

  /* .top-footer-section{
        background-color: pink;
        padding: 20px;
    } */

  .title-footer {
    text-align: center;
    /* font-family: "Rancho", cursive; */
    font-family: "Bebas Neue", cursive;
    font-size: 2em;
    font-weight: bold;
  }

  .body-footer span {
    /* font-family: "BenchNine", sans-serif; */
    font-family: "Bebas Neue", cursive;

    font-size: 1.5em;
    font-weight: bold;
  }

  .text-feature {
    font-family: "BenchNine", sans-serif;
    font-size: 1em;
  }
  a {
    color: black;
    text-decoration: none;
    transition: 0.1s;
  }
  a:hover {
    color: red;
    font-size: 1.2em;
    font-weight: bold;
  }
  .address-konten {
    font-family: "BenchNine", sans-serif;
    font-size: 1em;
  }

  .single-address {
    display: flex;
    align-content: space-between;
    justify-content: start;
  }

  .address-icon {
    margin-right: 5px;
    display: flex;
  }
  .address-icon i {
    margin: auto;
    margin-right: 5px;
  }

  .body-contact img {
    margin-right: 0.5em;
  }

  .button-subscribe {
    padding: 2px;
    width: 100%;
    background-color: rgb(235, 40, 50);
    color: white;
    font-weight: normal;
    border: none;
    /* border-radius: 3px; */
  }

  .bottom {
    font-size: medium;
  }

  .social-media {
    text-align: center;
    padding: 5px;
  }

  .social-media i {
    padding: 8px;
    border-radius: 100%;
    color: white;
    cursor: pointer;
    background-color: grey;
    filter: grayscale(100%);
  }

  .wa:hover {
    background-color: limegreen;
    filter: none;
  }

  .fb:hover {
    background-color: rgb(0, 119, 255);
    filter: none;
  }

  .ig:hover {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: none;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .yt:hover {
    background-color: rgb(235, 40, 50);
    filter: none;
  }

  /* @media(max-width:500px){
        .top-footer-section{
            width: 100%;
            background-color: black;
        }
        .top-footers{
            box-sizing: border-box;
            display: grid;
            grid-template-areas: 
            "section-contact"
            "section-category" 
            "section-subscribe";
        }
    } */

  /* =========================================== */

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1px;
  }

  .feature-item {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(224, 224, 224);
  }
  .feature-item:last-child {
    display: flex;
    justify-content: center;
    border-right: none;
  }

  .img-wrapper {
    height: 100px;
    width: 100px;
    overflow: hidden;
    position: relative;
  }

  .img-wrapper img {
    margin: auto;
    padding: 22px;
    /* padding-bottom: 15px; */
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0px;
    object-fit: cover;
    object-position: center;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-wrapper p {
    padding: 0 5px;
    text-align: center;
  }

  /* ================================= */
  .section-customer-care {
    border-top: 1px solid silver;
  }

  .top-footer-section {
    margin-top: 1rem;
  }

  .content-item {
    display: flex;
    flex-direction: column;
  }

  /* ================================= */

  .knowing-section {
    border-top: 2px solid silver;
    display: grid;
    grid-template-areas:
      "text-infos"
      "cols-1"
      "cols-2"
      "cols-3";
  }

  .cols-1 {
    margin: auto;
    /* margin-top: auto;
    margin-bottom: auto; */
  }

  .cols-1 .img-center {
    height: 75px;
    width: 75px;
    position: relative;
    overflow: hidden;
  }
  .cols-1 .img-center img {
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  .text-infos {
    grid-area: text-infos;
    padding: 10px 0;
    font-weight: 600;
  }

  .cols-1 {
    grid-area: cols-1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cols-2 {
    grid-area: cols-2;
    padding: 20px;
    text-align: justify;
  }
  .cols-3 {
    grid-area: cols-3;
    padding: 20px;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
  }

  @media (min-width: 1024px) {
    .knowing-section {
      display: grid;
      grid-template-areas:
        "text-infos text-infos text-infos"
        "cols-1 cols-2 cols-3";
    }
  }
</style>

<footer>
  <div class="container">
    <div class="features">
      <!-- <div class="card-feature"> -->
      <div class="feature-item">
        <div class="img-wrapper">
          <img src="assets/img/piercing/send.png" alt="Galing Send" />
        </div>
        <div class="text-wrapper">
          <div class="title font-weight-bold">Jaminan Pengiriman</div>
          <div class="subtitle">
            <p>
              Kami akan mengganti produk anda apabila produk rusak sesuai dengan
              persyaratan
            </p>
          </div>
        </div>
      </div>
      <div class="feature-item">
        <div class="img-wrapper">
          <img src="assets/img/piercing/original.png" alt="Original galing" />
        </div>
        <div class="text-wrapper">
          <div class="title font-weight-bold">Keaslian Produk</div>
          <div class="subtitle">
            <p>
              Kami menjamin produk yang kami jual berasal dari UMKM berkualitas
            </p>
          </div>
        </div>
      </div>
      <div class="feature-item">
        <div class="img-wrapper">
          <img src="assets/img/piercing/safe.png" alt="safety galing" />
        </div>
        <div class="text-wrapper">
          <div class="title font-weight-bold">Keamanan</div>
          <div class="subtitle">
            <p>
              Kami menjamin produk yang kami jual tidak mengandung unsur yang
              berbahaya
            </p>
          </div>
        </div>
      </div>
      <div class="feature-item">
        <div class="img-wrapper">
          <img src="assets/img/piercing/pay-safe.png" alt="payment safe" />
        </div>
        <div class="text-wrapper">
          <div class="title font-weight-bold">Pembayaran Aman</div>
          <div class="subtitle">
            <p>
              Kami menghadirkan pilihan metode pembayaran yang aman dan
              bervariasi
            </p>
          </div>
        </div>
      </div>
      <div class="feature-item">
        <div class="img-wrapper">
          <img src="assets/img/piercing/fast-respond.png" alt="fast respond" />
        </div>
        <div class="text-wrapper">
          <div class="title font-weight-bold">Respond Cepat</div>
          <div class="subtitle">
            <p>Pertanyaan akan ditanggapi dalam waktu 24 jam</p>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>

  <article class="mb-3 mt-5">
    <div class="container">
      <div class="row section-customer-care">
        <!-- <div class="top-footers"> -->

        <div class="col-lg-3 top-footer-section section-contact">
          <div class="title-footer title-contact">Bantuan</div>
          <ul class="content-item">
            <li><a href="#hubungi">Hubungi Kami</a></li>
            <li><a href="#cara">Cara Berbelanja</a></li>
          </ul>
        </div>

        <div class="col-lg-3 top-footer-section section-category">
          <div class="title-footer title-category">Hubungi Kami</div>
          <div class="content-item ml-3">
            <div class="single-address">
              <div class="address-icon"><i class="fa fa-map-marker" /></div>
              <div class="address-konten">
                Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi,
                Kabupaten Banyuwangi, Jawa Timur 68416
              </div>
            </div>
            <div class="single-address">
              <div class="address-icon"><i class="fa fa-phone" /></div>
              <div class="address-konten">+62 81529303200</div>
            </div>
            <div class="single-address">
              <div class="address-icon"><i class="fa fa-envelope" /></div>
              <div class="address-konten">galing.group@gmail.com</div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 top-footer-section section-subscribe">
          <div class="title-footer title-subscribe">Info Galing</div>
          <ul class="content-item">
            <li><a href="#cara">News</a></li>
            <li><a href="#cara">Tentang Produk</a></li>
            <li><a href="#hubungi">Tentang Galing</a></li>
          </ul>
        </div>
        <div class="col-lg-3 top-footer-section section-subscribe">
          <div class="title-footer title-subscribe">Ikuti Kami</div>
          <div class="body-footer body-subscribe mt-1">
            <div class="subscribe-wrapper">
              <form><input type="text" /></form>
              <button class="button-subscribe">Langganan</button>
            </div>
            <div class="social-media">
              <a href="https://api.whatsapp.com/send?phone=+6282228829804">
                <i class="fab fa-whatsapp wa" />
              </a>
              <a href="https://www.facebook.com/galingbanyuwangi/?ref=py_c">
                <i class="fab fa-facebook fb" />
              </a>
              <a href="https://www.instagram.com/galing.group/">
                <i class="fab fa-instagram ig" />
              </a>
              <a href="#yt"> <i class="fab fa-youtube yt" /> </a>
            </div>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </article>

  <div class="container">
    <div class="knowing-section">
      <div class="text-infos">Mengenal Galing</div>
      <div class="cols-1">
        <div class="img-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/brand%20(2).png?alt=media&token=5ef2c2fc-776e-4f42-b3cd-c25fe8248f51"
            alt="Galing Logo"
            height="75px"
            class="brand-img" />
        </div>
      </div>
      <div class="cols-2">
        Perusahaan GALING adalah perusahaan rintisan (startup) yang berjalan di
        rana distributor yang bertugas memasarkan dan menyalurkan produk-produk
        dari produsen ke konsumen. Perusahaan ini akan membantu meningkatkan
        produktivitas dan kualitas daya jual produk-produk UMKM dengan cara
        memasarkan produk tersebut menggunakan kemasan yang lebih inovatif dan
        berkualitas dari GALING yang kemudian akan disalurkan ke mitra reseller
        dan retailer untuk dijual.
      </div>
      <div class="cols-3">
        <button class="btn btn-danger btn-small">Profil Kami</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="text-bottom">Galing Group All Right Reserved &copy; 2020</div>
  </div>
</footer>
