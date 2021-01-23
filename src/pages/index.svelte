<script>
  // import MediaQuery from '../MediaQuery.svelte';
  import { onMount } from "svelte";
  import { dataAll, dataKategori } from "../Dummy";
  import ProdukCards from "../utils/ProdukCards.svelte";
  import Berita from "../utils/Berita.svelte";
  import Tester from "../utils/Tester.svelte";
  import { url } from "@sveltech/routify";
  import CountDown from "../components/CountDownPromo.svelte";
  import { bind } from "svelte/internal";
  import jquery from "jquery";

  let scroll;
  $: console.log(scroll);
  let arr = [];
  let tmp = [];

  async function getBan() {
    let url = "http://localhost:8080/admin/post_api";
    const reult = fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => response.text())
      .then((contents) => console.log(contents))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
    console.log("data banner");
    const result = await res.json();
    console.log(result);
  }

  async function getIg() {
    const res = await fetch(
      "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=IGQVJYU0x4Ung3Y1JXcUtSMlJLRHZASeUt2SVNtUnV3Q1NiQTNiSjJqVXNFdWd6Y2hQVVRqSjFHUzljWkt1R0xfOUpqcnRoRzdtOXYwRWE1azNick1NUUE0cVFsNGVsaUc0dWt0VTJn"
    );

    const result = await res.json();

    if (result) {
      tmp = result.data;
      for (let index = 0; index < tmp.length; index++) {
        if (arr.length > 3) {
          break;
        }
        arr[index] = tmp[index];
      }
      return arr;
    } else {
      console.log(err);
      // throw new Error(text);
    }

    // if(result.ok){
  }

  function loadData() {
    alert("Tidak Ada Penambahan Data");
  }

  let promise = getIg();
  let dummydata = [];
  let kategori;
  let makanan;

  $: dummydata = dataAll();

  let modal;
  let imgShow;
  let currentImg;
  let captions;
  let close;

  onMount(() => {
    getBan();
    getIg();
    dummydata = dataAll();
    kategori = dataKategori();
    makanan = kategori[0];
  });
</script>

<svelte:head>
  <title>Galing Group | Home</title>
</svelte:head>
<svelte:window bind:scrollY={scroll} />

<!-- <button
  class="btn-top"
  on:click={() => {
    let body = document.body;

    body.animate({ scroll: 0 }, 1000, 'swing');
  }}>Top</button> -->

<div id="demo" class="carousel slide" data-ride="carousel">
  <div class="carousel circle" />
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active" />
    <li data-target="#demo" data-slide-to="1" />
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="wrap-slider-content">
        <div class="left-side">
          <div class="main-content">
            <div class="title">Nikmatnya Menjajal Kopi Cokot Gula Aren</div>
            <div class="subtitle">Senin, 12/12/2020</div>
            <div class="description">
              Namun sejatinya, menikmati kopi yang sebenarnya, adalah menikmati
              kopi murni, bukan dengan bahan campuran dan rasa bermacam-macam.
              Paling tidak, konsep itu yang diterapkan Wahyudi, pemilik Wakoka
              (warung kopi kawula alit). Sebuah kedai kopi di Jalan Menur,
              Kabupaten Ponorogo, Jawa Timur.
            </div>
            <div class="wrap-footer">
              <div class="button-description">
                <a href="#lihat" class="text-white font-weight-bold"
                  >Pelajari Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side">
          <img
            src="https://thumb.viva.co.id/media/frontend/thumbs3/2015/01/09/289249_kopi-cokot-madiun_665_374.jpg"
            alt="Kopi Cokot"
          />
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="wrap-slider-content">
        <div class="left-side">
          <div class="main-content">
            <div class="title">Varian Baru Minuman Galing</div>
            <div class="subtitle">
              Minuman Kopi Murni asli tanpa bahan campuran 100%,
              @secangkirkopisejutainspirasi
            </div>
            <div class="wrap-footer">
              <div class="button-description">
                <a href="#lihat" class="text-white font-weight-bold"
                  >Pelajari Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/unggulan2.png?alt=media&token=caa23b2a-9c11-4671-8cca-9f70d11febda"
            alt="Kopi Cokot"
          />
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon" />
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon" />
  </a>
</div>

<!-- <div class="container">
  <div class="keunggulan">
    <div class="article">
      <section>
        <header><img src="assets/img/piercing/fast.png" alt="" /></header>

        <div class="text-unggul">Respon Cepat</div>
      </section>

      <section>
        <header><img src="assets/img/piercing/mantap.png" alt="" /></header>

        <div class="text-unggul">Kualitas Terjamin</div>
      </section>

      <section>
        <header><img src="assets/img/piercing/fast.png" alt="" /></header>

        <div class="text-unggul">Respon Cepat</div>
      </section>

      <section>
        <header><img src="assets/img/piercing/mantap.png" alt="" /></header>

        <div class="text-unggul">Kualitas Terjamin</div>
      </section>
    </div>
  </div>
</div> -->

<div class="container mt-4">
  <div class="judul">
    <div class="text">Tester</div>
    <div class="garis-bawah">""</div>
  </div>

  <Tester {dummydata} />
</div>

<!-- <div class="container mt-4">
  <div class="judul">
    <div class="text">News !</div>
    <div class="garis-bawah">""</div>
  </div>
  <Berita />
</div> -->

<CountDown {dummydata} />

<div class="container">
  <div class="kategori">
    <a href="produk/makanan">
      <div class="bg-kategori" id="kat-id">
        <div class="text-kategori ">Cemilan</div>
        <img src="assets/img/kategori/cemilan.png" alt="" />
      </div>
    </a>
    <a href="produk/minuman">
      <div class="bg-kategori" id="kat-id">
        <div class="text-kategori ">Minuman dan Kopi</div>
        <img src="assets/img/kategori/kopi.png" alt="" />
      </div>
    </a>
  </div>
</div>

<div class="container mt-4">
  <div class="judul">
    <div class="text">rekomendasi buat kamu</div>
    <div class="garis-bawah">""</div>
  </div>
  <ProdukCards {dummydata} />
  <div class="button-load">
    <button class="btn btn-info btn-warning" on:click={loadData}>
      Load More</button
    >
  </div>
</div>

<div class="container mt-4 mb-4">
  <div class="judul">
    <div class="text">Instagram Galery</div>
    <div class="garis-bawah">""</div>
  </div>
  <div class="instagram-section">
    {#await promise}
      {#each [1, 2, 3, 4] as iterat}
        <div class="shine box">Loading ...</div>
      {/each}
    {:then data}
      {#each data as { media_type, media_url, caption }}
        {#if media_type == "IMAGE"}
          <div class="instagram-image">
            <img
              src={media_url}
              id="img-ig"
              bind:this={currentImg}
              width="100%"
              alt=""
              on:click={() => {
                console.log("Oke");
                modal.style.display = "block";
                imgShow.src = media_url;
                captions = caption;
                console.log(captions);
              }}
            />
          </div>
        {:else if media_type == "VIDEO"}
          <video width="100%" controls>
            <source src={media_url} type="video/mp4" />
          </video>
        {:else if media_type == "CAROUSEL_ALBUM"}
          <div class="instagram-image">
            <img src={media_url} width="100%" alt="" />
          </div>
        {/if}
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>
<!-- 
<div class="container">
  <div class="row">
    <div class="col-12 py-4">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui itaque
        rerum dolorem ipsam vitae error atque iusto quisquam debitis, ipsa
        beatae dolorum in? Aliquam at itaque porro laudantium doloribus minima
        animi adipisci, sequi molestias cum voluptatibus fuga iure eligendi
        dolorem.
      </p>
      <hr />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi soluta
        voluptate eaque dolores debitis id aperiam, exercitationem deleniti
        repellat impedit. Voluptatem illo ipsam nihil tempora beatae sunt nam
        dolores vitae! Atque repellendus facilis fuga, dignissimos sequi quo
        enim tenetur numquam ratione. Voluptas quis autem, natus illo fugit hic
        aut nihil reiciendis corporis sapiente accusantium reprehenderit quasi
        provident deleniti tenetur ex.
      </p>

      <hr />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex expedita
        doloribus nostrum fugit esse culpa quod sunt soluta vel natus
        perferendis veritatis ut consequuntur ipsam ab incidunt modi iste
        distinctio voluptatem, est reiciendis placeat omnis! Deserunt in eos
        totam voluptatem eum sequi, numquam odit ex, sint atque voluptate quo
        consequuntur.
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quasi
        neque unde aperiam. Ut vero earum, numquam id quas, velit et quaerat
        officia adipisci harum unde iusto nobis ad qui architecto aliquam
        explicabo voluptatem quo voluptatum? Accusantium maiores exercitationem
        necessitatibus?
      </p>

      <hr />
    </div>
  </div>
</div> -->

<div bind:this={modal} class="modal">
  <div class="wrap-post">
    <div class="img-section">
      <img src="" class="modal-ig-img" bind:this={imgShow} alt="" />
    </div>

    <div class="caption-section">
      <div class="header">
        <a href="https://www.instagram.com/galing.group/">
          <span class="brand">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/brand%20(1).png?alt=media&token=eafa1d7b-2ae2-43e8-9070-972d9b71b421"
              height="40px"
              alt="Galing group"
            />
          </span><span>Galing.Group</span>
        </a>
        <span
          class="close"
          on:click={() => {
            modal.style.display = "none";
          }}>&times;</span
        >
        <hr />
      </div>
      <div class="caption">
        {@html captions}
      </div>
    </div>
  </div>
</div>

<!-- 
{#each arr as {media_type,media_url} }
	{#if media_type == "IMAGE"}
		<div class="instagram-image">
			<img src={media_url} width="100%" alt="">
		</div>
	{:else if media_type == "VIDEO"}
	<video width='100%' controls>
		<source src={media_url} type='video/mp4'>
	</video>
	{:else if media_type == "CAROUSEL_ALBUM"}
		<div class="instagram-image">
			<img src={media_url} width="100%" alt="">
		</div>
	{/if}
{/each} -->
<style src="./style.css">
</style>
