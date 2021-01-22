<script>
  import { formatUang } from "../costumLib";
  import { onMount } from "svelte";
  import { url, isActive } from "@sveltech/routify";
  import Id from "../pages/detail/[id].svelte";

  export let urlPath;
  export let data;
  export let dummydata;
  let path;
  onMount(() => {
    data = {};
    path = window.location.pathname.split("/")[1];
    console.log(path);
    console.log(window.location.pathname);
  });
</script>

<style>
  .cards-produk {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* gap: 5px; */
  }

  .card-produk {
    margin: 8px;
  }

  .card-img {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card-img img {
    width: 100%; /* you can use % */
  }

  .text-produk {
    margin: 10px;
  }

  .card-produk .button-produk button {
    visibility: hidden;
    width: 100%;
    border-radius: 0;
  }

  .card-produk:hover {
    box-shadow: 0 0 3px grey;
    /* display: block; */
  }

  .card-produk:hover button {
    box-shadow: 0 0 3px red;
    visibility: visible;
  }

  .wrap-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .harga-straight {
    text-decoration: line-through;
    color: grey;
  }

  .harga-promo {
    font-size: 1.2em;
  }

  .text-promo {
    border: 1px solid red;
    border-radius: 3px;
    padding: 3px;
    font-size: 0.8em;
  }

  /* Ribbon */
  .ribbon {
    z-index: 1;
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 14px;
    font-family: "BenchNine", sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }

  /* top right*/
  .ribbon-top-right {
    top: -10px;
    right: -10px;
  }
  .ribbon-top-right::before,
  .ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  .ribbon-top-right::before {
    top: 0;
    left: 0;
  }
  .ribbon-top-right::after {
    bottom: 0;
    right: 0;
  }
  .ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }

  @media (max-width: 500px) {
    .cards-produk {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8em, 2fr));
    }

    .wrap-price {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .text-promo {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>

<section>
  <div class="container">
    <div class="cards-produk">
      {#each dummydata as data, i}
        {#if data.promo.value}
          <div class="swiper-slide animate__animated animate__fadeIn">
            <a href="{urlPath}/{data.id}">
              <div class="card-produk">
                <div class="ribbon ribbon-top-right">
                  <span class="bg-danger">PROMO</span>
                </div>
                <div class="card-img">
                  <img src={data.gambar} alt={data.nama} style="" />
                </div>
                <div class="text-produk">
                  <div class="judul-produk">{data.nama}</div>
                  <div class="wrap-price">
                    {#if data.promo.type == 'price'}
                      <div class="harga-straight">
                        Rp.
                        {formatUang(data.harga)}
                      </div>
                      <div class="harga-promo text-danger">
                        Rp.
                        {formatUang(data.promo.desc)}
                      </div>
                    {:else if data.promo.type == 'text'}
                      <div class="harga">Rp. {formatUang(data.harga)}</div>
                      <div class="text-promo text-danger">
                        {data.promo.desc}
                      </div>
                    {:else}
                      <div class="harga">Rp. {formatUang(data.harga)}</div>
                    {/if}
                  </div>
                </div>
                <div class="button-produk">
                  <button
                    class="btn btn-danger"
                    style="width:100%">Detail</button>
                </div>
              </div>
            </a>
          </div>
        {:else}
          <a href="{urlPath}/{data.id}">
            <div class="card-produk">
              <div class="card-img">
                <img src={data.gambar} alt={data.nama} style="height:100%" />
              </div>

              <div class="text-produk">
                <div class="judul-produk">{data.nama}</div>
                <div class="harga">Rp. {formatUang(data.harga)}</div>
              </div>

              <div class="button-produk">
                <button
                  class="btn btn-danger"
                  style="width:100%">Detail</button>
              </div>
            </div>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</section>
