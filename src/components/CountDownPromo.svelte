<script>
  import { onMount } from "svelte";
  import { formatUang } from "../costumLib";
  export let dummydata;
  import { Swiper, SwiperSlide } from "swiper/svelte";
  // let date = new Date("2020-07-28T02:38:20.000Z");
  let date = new Date("2020-12-08T19:43:20.000Z").getTime();
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let distance;
  let loading = false;
  $: width = window.innerWidth;

  onMount(async () => {
    loading = true;
    setInterval(function () {
      // Untuk mendapatkan tanggal dan waktu hari ini
      let now = new Date().getTime();

      // Temukan jarak antara sekarang dan tanggal hitung mundur
      distance = date - now;

      // Perhitungan waktu untuk hari, jam, menit dan detik
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Jika hitungan mundur selesai, tulis beberapa teks
      if (distance < 0) {
        // clearInterval(x);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
        // }
        return null;
      }
    }, 1000);

    loading = false;
  });
</script>

<style>
  section {
    margin-bottom: 2rem;
  }
  .header {
    font-weight: bold;
    width: 60%;
    display: grid;
    grid-template-areas: "text-header text-sub-header  days hours minutes seconds";
    gap: 1px;
    align-items: center;
  }

  .text-header {
    grid-area: text-header;
    font-weight: bolder;
  }

  .text-sub-header {
    grid-area: text-sub-header;
  }

  .days {
    grid-area: days;
  }

  .hours {
    grid-area: hours;
  }

  .minutes {
    grid-area: minutes;
  }

  .seconds {
    grid-area: seconds;
  }

  .date {
    display: flex;
    align-items: center;
  }

  .box-time {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    color: white;
    padding: 0.4em 0;
    width: 2em;
    margin-left: 5px;
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

  .card-produk {
    position: relative;
  }

  .card-produk .button-produk button {
    visibility: hidden;
    width: 100%;
    border-radius: 0;
  }

  .card-img {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card-img {
    background-color: #eaeaea;
    width: 100%;
  }

  .card-img img {
    width: 100%; /* you can use % */
    height: auto;
  }

  .text-produk {
    margin: 10px;
  }

  .card-produk:hover {
    box-shadow: 0 0 5px grey;
    /* display: block; */
  }

  .card-produk:hover button {
    box-shadow: 0 0 3px red;
    visibility: visible;
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
    .header {
      width: 100%;
      display: grid;
      grid-template-areas:
        "text-header text-header text-header text-header text-header text-header"
        "text-sub-header text-sub-header days hours minutes seconds";
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

{#if loading}
  Tunggu...
{:else if distance > 0}
  <section>
    <!-- Swiper -->
    <div class="container">
      <div class="header mb-3">
        <h3 class="text-header">Kejar Promo</h3>
        <div class="text-sub-header mr-2">Berakhir Dalam</div>
        <div class="date">
          <div class="box-time days bg-danger">{days}</div>
          Hari.
          <div class="box-time hours bg-danger">{hours}</div>
          Jam.
          <div class="box-time minutes bg-danger">{minutes}</div>
          Menit.
          <div class="box-time seconds bg-danger">{seconds}</div>
          Detik
        </div>
      </div>

      <div class="swiper-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={width >= 900 ? 5 : width >= 640 && width <= 899 ? 3 : 2}
          on:slideChange={() => console.log('slide change')}
          on:swiper={(e) => console.log(e.detail[0])}>
          {#each dummydata as data, i}
            {#if data.promo.value}
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="detail/{data.id}">
                    <div class="card-produk">
                      <div class="ribbon ribbon-top-right">
                        <span class="bg-danger">PROMO</span>
                      </div>
                      <div class="card-img">
                        <img src={data.gambar} alt={data.nama} />
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
                            <div class="harga">
                              Rp.
                              {formatUang(data.harga)}
                            </div>
                            <div class="text-promo text-danger">
                              {data.promo.desc}
                            </div>
                          {:else}
                            <div class="harga">
                              Rp.
                              {formatUang(data.harga)}
                            </div>
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
              </SwiperSlide>
            {/if}
          {/each}
        </Swiper>
        <div class="swiper-pagination" />
      </div>
    </div>
  </section>
{/if}
