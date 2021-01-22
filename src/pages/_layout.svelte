<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  .icon-bar {
    border-radius: 100%;
    background-color: #4caf50;
    position: fixed;
    bottom: 5%;
    right: 1%;
    z-index: 1;
    box-shadow: 0 0 5px grey;
    transition: 0.5s;
  }

  .icon-bar:hover {
    background-color: #3e8e41;
  }
  .icon-bar a {
    display: block;
    text-align: center;
    transition: all 0.3s ease;
    font-size: 2.7em;
    color: white;
  }

  .icon-bar a:active {
    border-radius: 100%;
    background-color: #3e8e41;
    /* box-shadow: 0 0 5px grey; */
    transform: translateY(4px);
  }

  i.fab {
    display: inline-block;
    padding: 0.1em 0.3em;
  }
</style>

<Nav />
<slot />

<div class="icon-bar">
  <a
    href="https://api.whatsapp.com/send?phone=+6282228829804&text=Halo saya ingin memesan "><i
      class="fab fa-whatsapp" /></a>
</div>
<Footer />

<!-- {#if $isChangingPage}
  <Spinner />
{/if} -->
