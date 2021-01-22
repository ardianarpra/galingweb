<script>
  import { formatUang } from "../costumLib";
  import { onMount } from "svelte";
  import { url, isActive } from "@sveltech/routify";
  import Id from "../pages/detail/[id].svelte";

  export let dummydata;
  let path;
  onMount(() => {});
</script>

<style>
  .cards-produk {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card-produk {
    margin: 8px;
    /* box-shadow: 1px 1px 3px rgba(red, green, blue, alpha); */
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

  @media (min-width: 640px) {
    .cards-produk {
      display: grid;
      grid-template-columns: repeat(3, minmax(8em, 2fr));
    }
  }
  @media (min-width: 768px) {
    .cards-produk {
      display: grid;
      grid-template-columns: repeat(4, minmax(6em, 2fr));
    }
  }

  @media (min-width: 1024px) {
    .cards-produk {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
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
        {#if data.tester.value}
          <a href="#">
            <div class="card-produk">
              <div class="card-img">
                <img src={data.gambar} alt={data.nama} style="height:100%" />
              </div>

              <div class="text-produk text-center">
                <div class="judul-produk font-weight-bold">{data.nama}</div>
                <div class="harga">
                  Tersedia :
                  <span class="font-weight-bold">{data.tester.qty}</span>
                </div>
              </div>

              <div class="button-produk">
                <button class="btn btn-danger" style="width:100%">Ambil</button>
              </div>
            </div>
          </a>
        {/if}
      {:else}
        <p>Loading ...</p>
      {/each}
    </div>
  </div>
</section>
