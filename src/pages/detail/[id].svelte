<script>
  import { onMount } from "svelte";
  import { params, url } from "@sveltech/routify";
  import { formatUang } from "../../costumLib";
  import { getData, dataAll } from "../../Dummy";
  import ProductCards from "../../utils/ProdukCards.svelte";
  import ProdukCards from "../../utils/ProdukCards.svelte";
  import NavShow from "../../components/NavShow.svelte";

  let param = $params.id;
  let dummydata = [];
  let data = {};
  let promo;
  let promoType;
  let price;
  let varian = [];
  let selectedVarian = "";
  let urlapp = "";

  data = {};
  promo;
  promoType;
  price;
  varian = [];
  selectedVarian = "";
  urlapp = "";
  dummydata = dataAll();
  data = getData(param);
  promo = data.promo.value;
  promoType = data.promo.type;
  price = data.promo.desc;
  varian = data.varian;
  urlapp = data.urlapp.shopee;

  console.log("berjalan");
</script>

<NavShow />
<section>
  <div class="container">
    <div class="breadcrumbs">
      <div class="text-konten">
        Home / Product / Detail / <strong> {data.nama}</strong>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-2 image-slide">
          <img src={data.gambar} alt={data.nama} />
        </div>

        <div class="col-lg-5 col-sm-9 product-image">
          <img src={data.gambar} width="100%" alt={data.nama} />
        </div>

        <div class="col-lg-5 col-sm-12 product-content">
          {#if promo}
            <div class="banner-promo bg-danger text-center text-light mb-1">
              Promo
            </div>
          {/if}
          <div class="product-category">
            <div class="title">{data.nama}</div>
            <div class="rating">
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
              <i class="fa fa-star" />
            </div>
          </div>

          <div class="product-description">{data.description}</div>

          <div
            class="availability"
            style="border-top:1px solid black;border-bottom:1px solid black"
          >
            <div class="item">Availablility : Tersedia</div>
          </div>

          {#if promo}
            {#if promoType == "price"}
              <div class="wrap-price mr-2" style="align-content:center">
                <span
                  class="product-price"
                  style="text-decoration: line-through;font-size:1.3em;color:grey">
                  IDR
                  {formatUang(data.harga)}
                </span>
                <span
                  class="product-price text-danger"
                  style="font-weight:bold;font-size:1.5em">
                  IDR
                  {formatUang(price)}
                </span>
              </div>
            {:else if promoType == "text"}
              <div
                class="wrap-price mr-2"
                style="display:flex;justify-content:space-between"
              >
                <div class="product-price">IDR {formatUang(data.harga)}</div>
                <div
                  class="product-price text-danger"
                  style="padding:5px;border:1px solid red;font-size:1.3em"
                >
                  {price}
                </div>
              </div>
            {/if}
          {:else}
            <div class="wrap-price">
              <div class="product-price">IDR {formatUang(data.harga)}</div>
            </div>
          {/if}

          {#if varian.length != 0}
            <div class="varian-wrapper">
              {#each varian as v}
                <button
                  class="btn-varian"
                  class:selected-varian={selectedVarian === v}
                  on:click={() => (selectedVarian = v)}>
                  {v}
                </button>
              {/each}
            </div>
            <div class="order-wrapper">
              <div class="btn-wa-wrap">
                <a
                  class=""
                  href="https://api.whatsapp.com/send?phone=+6282228829804&text=Halo%20saya%20ingin%20membeli%20{data.nama}%3A%0AVarian%20%20%20%20%20%3A%20{selectedVarian}%0AJumlah%20%20%20%20%3A%20"
                  style="font-size:1.4em">
                  <div class="btn-wa">
                    Whatsapp
                    <span><i class="fab fa-whatsapp" /></span>
                  </div>
                </a>
              </div>
              <div class="btn-shopee-wrap">
                <a class="" href={urlapp}>
                  <div class="btn-shopee">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/shopeeorange.png?alt=media&token=fe45b42a-d6e5-4ee4-9e11-6e3626c2fdae"
                      width="90em"
                      alt="shopee"
                    />
                  </div>
                </a>
              </div>
            </div>
          {:else}
            <div class="order-wrapper">
              <div class="btn-wa-wrap">
                <a
                  class=""
                  href="https://api.whatsapp.com/send?phone=+6282228829804&text=Halo%20saya%20ingin%20membeli%20{data.nama}%3A%0AJumlah%20%20%20%20%3A%20"
                  style="font-size:1.4em">
                  <div class="btn-wa">
                    Whatsapp
                    <span><i class="fab fa-whatsapp" /></span>
                  </div>
                </a>
              </div>
              <div class="btn-shopee-wrap">
                <a class="" href={urlapp}>
                  <div class="btn-shopee">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/shopeeorange.png?alt=media&token=fe45b42a-d6e5-4ee4-9e11-6e3626c2fdae"
                      width="90em"
                      alt="shopee"
                    />
                  </div>
                </a>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>

    <!-- <div class="container mt-5">

		<ul class="nav nav-tabs border-0" id="myTab" role="tablist">
			<li class="nav-item"><a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a></li>
			<li class="nav-item"><a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a></li>
		</ul>
		<div class="tab-content mb-5" id="myTabContent">
			<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
			<div class="p-4 p-lg-5 bg-white">
				<h6 class="text-uppercase">Product description </h6>
				<p class="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			</div>
			<div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
			<div class="p-4 p-lg-5 bg-white">
				<div class="row">
				<div class="col-lg-8">
					<div class="media mb-3"><img class="rounded-circle" src="../assets/img/logo/brand.png" alt="" width="50">
					<div class="media-body ml-3">
						<h6 class="mb-0 text-uppercase">Galing</h6>
						<p class="small text-muted mb-0 text-uppercase">20 May 2020</p>
						<ul class="list-inline mb-1 text-xs">
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star-half-alt text-warning"></i></li>
						</ul>
						<p class="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					</div>
					<div class="media"><img class="rounded-circle" src="../assets/img/logo/brand.png" alt="" width="50">
					<div class="media-body ml-3">
						<h6 class="mb-0 text-uppercase">Galing</h6>
						<p class="small text-muted mb-0 text-uppercase">20 May 2020</p>
						<ul class="list-inline mb-1 text-xs">
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star text-warning"></i></li>
						<li class="list-inline-item m-0"><i class="fas fa-star-half-alt text-warning"></i></li>
						</ul>
						<p class="text-small mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	</div> -->

    <div class="container mt-4">
      <div class="judul">
        <div class="text">rekomendasi buat kamu</div>
        <div class="garis-bawah">""</div>
      </div>

      <ProdukCards {dummydata} />
    </div>
  </div>
</section>

<style>
  section {
    padding-top: 4rem;
    background-color: #fff;
  }

  .breadcrumbs {
    padding-top: 4em;
    margin-bottom: 2em;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #999;
    background-color: white;
  }

  .breadcrumbs .text-konten {
    color: #999;
    font-family: "Open Sand Consended";
  }

  .fa {
    color: gold;
  }
  .product-image {
    display: flex;
    justify-content: center;
  }

  .product-content .banner-promo {
    padding: 10px 0;
    font-family: "Open Sans Condensed", sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3em;
  }

  .product-category {
    display: flex;
    justify-content: space-between;
  }

  .product-category .title {
    font-family: "Open Sans Condensed", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5em;
  }

  .product-description {
    margin: 10px 0;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 400;
  }

  .availability .item {
    padding: 5px 0;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 500;
  }

  .wrap-price .product-price {
    margin: 10px 0;
    font-family: "Open Sans Condensed", sans-serif;
  }

  .image-slide img {
    width: 100%;
  }

  .wrap-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-price {
    font-size: 1.3em;
    font-weight: bolder;
  }

  .varian-wrapper {
    margin: auto;
  }

  .btn-varian {
    text-transform: uppercase;
    width: 6em;
    margin: 6px;
    font-family: "Open Sans Condensed", sans-serif;
    padding: 2px;
    border: none;
    color: white;
    background-color: rgb(189, 186, 186);
  }

  .selected-varian {
    background-color: #dc3545;
    color: white;
    border: none;
  }

  button:focus {
    outline: 0;
  }

  .order-wrapper {
    display: flex;
    box-sizing: border-box;
  }

  .btn-wa-wrap,
  .btn-shopee-wrap {
    display: 1;
    width: 100%;
  }

  .btn-wa {
    padding: 6px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    background-color: #3e8e41;
    box-shadow: 0 0 3px #3e8e41;
  }

  .btn-wa-wrap a {
    text-decoration: none;
    color: white;
  }

  .btn-shopee {
    cursor: pointer;
    padding: 6px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    background-color: rgb(250, 83, 43);
    box-shadow: 0 0 3px rgb(250, 83, 43);
  }

  /* .button-order a{
		width:100%;
	} */

  @media (max-width: 500px) {
    .product-image {
      margin: 10px 0;
    }
    .product-content {
      margin: 10px 0;
    }

    .image-slide img {
      width: 22%;
    }
  }

  @media (max-width: 1024px) {
  }
</style>
