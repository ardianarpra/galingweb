<script>
  import { onMount } from "svelte";
  export let segment;

  let height = 0;
  console.log(height);
  let scrollVal = 0;

  onMount(() => {});
</script>

<svelte:window bind:scrollY={height} />
<!-- <div class="top-header">
      <div class="row">
        <div class="col-6">Contact Person</div>
        <div class="col-6 text-right">+62 8222 8829 804</div>
      </div>
    </div> -->

<nav id="navbar" class="navbar navbar-expand-sm fixed-top">
  <div class="container">
    <a class="navbar-brand" href=".">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/brand%20(1).png?alt=media&token=eafa1d7b-2ae2-43e8-9070-972d9b71b421"
        height="40px"
        alt="Galing group"
      />
      Galing Group
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" class:active={segment === "home"}>
          <a class="nav-link" id="nav-link" href="."
            >HOME
            <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item" class:active={segment === "produk"}>
          <a class="nav-link" id="nav-link" href="produk">PRODUK </a>
        </li>
        <li class="nav-item" class:active={segment === "tentang"}>
          <a class="nav-link" id="nav-link" href="tentang">TENTANG </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbar {
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
    font-size: 1em;
    transition: all 0.5s;
  }

  a {
    color: black !important;
  }

  .navbar-brand {
    font-family: "Rancho", cursive;
    font-size: 1.5em;
    font-weight: bold;
  }

  .nav-link {
    font-weight: bold;
  }

  .navbar.sticky {
    background-color: white;
  }
</style>
