<script>
  import { getKategori } from "../../Dummy";
  import { onMount } from "svelte";
  import { params } from "@sveltech/routify";
  import ProdukCards from "../../utils/ProdukCards.svelte";

  function loadData() {
    alert("Tidak Ada Penambahan Data");
  }

  let dummydata = [];
  onMount(() => {
    dummydata = getKategori($params.kat);
    console.log($params);
    console.log(dummydata.length);
  });
</script>

<style>
  select {
    /* outline: none; */
    border: none;
  }
  .breadcrumbs {
    padding-top: 2em;
    /* margin-bottom: 2em; */
    padding: 10px;
    width: 100%;
    border-radius: 1px;
    box-shadow: 1px 1px 3px #999;
    background-color: white;
  }

  .breadcrumbs .text-konten {
    color: #999;
    font-family: "Boogaloo", sans-serif;
    font-weight: 400;
  }

  .banner {
    /* height: 200px; */
    display: block;
    background-color: black;
    /* margin: 0 5em; */
  }
  .content {
    display: absolute;
    margin-bottom: 6em;
    margin-top: 0.2em;
  }

  .indicators {
    padding: 10px;
    border-radius: 2px;
    /* border:1px solid grey; */
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    display: grid;
    grid-template-areas: "filter sorting searching searching searching";
  }

  .filter {
    margin: 5px;
    margin-bottom: 10px;
    grid-area: filter;
    display: flex;
    justify-content: center;
  }
  .sorting {
    margin: 5px;
    margin-bottom: 10px;
    grid-area: sorting;
    display: flex;
    justify-content: center;
  }

  .text-indicator {
    display: flex;
    align-items: center;
  }
  .searching {
    grid-area: searching;
  }

  .indicators input[type="text"] {
    padding: 6px 6x;
    line-height: 6px;
  }

  .button-load {
    margin-top: 1em;
    display: flex;
    justify-content: center;
  }

  .button-load button {
    color: white;
  }

  @media (max-width: 500px) {
    .indicators {
      display: grid;
      grid-template-areas:
        "filter sorting"
        "searching searching";
    }
  }

  .current-indicator {
    text-transform: capitalize;
    font-weight: 800;
    color: black;
  }
</style>

<section>
  <div class="container mt-2">
    <div class="breadcrumbs">
      <div class="text-konten">
        Home / Produk /
        <span class="current-indicator">{$params.kat}</span>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="banner">
      <img src="../assets/img/banner/cemilan.png" width="100%" alt="" />
    </div>
  </div>
  <!-- 
	<div class="animate__animated animate__backInLeft animate__delay-2s">Example</div> -->

  <div class="container content">
    <div class="indicators">
      <div class="filter">
        <div class="text-indicator">filter dari :</div>
        <select class="">
          <option value="" selected>Semua</option>
          <option value="">Manis</option>
          <option value="">Pedas</option>
          <option value="">Gurih</option>
        </select>
      </div>

      <div class="sorting">
        <div class="text-indicator">urutkan dari :</div>
        <select class="">
          <option value="" selected>Terlaris</option>
          <option value="">Termurah</option>
          <option value="">Termahal</option>
        </select>
      </div>

      <div class="searching">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Cari ..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"><i
                class="fa fa-search" /></button>
          </div>
        </div>
      </div>
    </div>

    <ProdukCards urlPath="../detail" {dummydata} />

    {#if dummydata.length >= 10}
      <div class="button-load">
        <button class="btn btn-info btn-warning" on:click={loadData}>Load More</button>
      </div>
    {/if}
  </div>
</section>
