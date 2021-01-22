<script>
  import { url, isActive } from "@sveltech/routify";
  import { onMount } from "svelte";

  const links = [
    [$url("../index"), "home"],
    [$url("../produk"), "produk"],
    // ["../detail","blog"]
    [$url("../blog"), "tentang"],
  ];

  let valueSticky = false;
  let height = 0;
  let nav;
  console.log(height);
  let scrollVal = 0;

  onMount(() => {
    let navbar = document.querySelector(".navbar");
    let navbarA = document.querySelector(".navbar a");
    let navItemA = document.querySelectorAll(".nav-item a");
    window.addEventListener("scroll", function () {
      let posY = this.scrollY;

      if (posY > scrollVal) {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "1px 1px 3px grey";
        navbarA.style.color = "black";
        navItemA.forEach(function (e) {
          e.style.color = "black";
        });
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        navbarA.style.color = "white";
        navItemA.forEach(function (e) {
          e.style.color = "white";
        });
      }

      // scrollVal = posY;
    });
  });
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
    <a class="navbar-brand" href={$url("../index")}>
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
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Produk</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tentang
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> -->
        {#each links as [path, name]}
          <li class="nav-item" class:active={$isActive(path)}>
            <a class="nav-link" id="nav-link" href={$url(path)}
              >{name.toUpperCase()}
              <span class="sr-only">(current)</span></a
            >
          </li>
        {/each}
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
    color: white;
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
