<script>
  import jquery from "jquery";

  function truncate(input) {
    let end = 120;
    if (input.length > end) {
      return input.substring(0, end) + "...";
    }
    return input;
  }

  let deskripsi =
    "Shopee akan menggelar 12.12 Birthday Sale yang dimulai tepat pukul 00.00 WIB (12/12/2019). Birthday Sale ini merupakan ajang perayaan ulang tahun Shopee yang keempat dan sekaligus perayaan Hari Belanja Nasional (Harbolnas) 2019.";
  let deskripsi1 =
    "Menikmati kopi, belakangan berkembang dengan berbagai cara penyajian dan bahan campuran. Berbagai kedai dan coffee shop bermunculan, seakan berlomba menyajikan kopi terbaik, dengan segudang cita rasa berbeda. Sesuatu yang mengarah ke gaya hidup.";
</script>

<style>
  section {
    margin-bottom: 3rem;
  }
  .judul .text {
    text-transform: capitalize;
    font-family: "Rancho", cursive;
    font-size: 1.8em;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .contents {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    gap: 10px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content:hover img {
    transform: scale(1.3);
  }

  .content:hover {
    cursor: pointer;
  }
  .content:hover .description {
    color: #fdb90e;
  }

  .content .header {
    height: 8em;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .header img {
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s ease all;
  }

  .body .description {
    padding-top: 8px;
    width: 100%;
    height: 5em;
    text-overflow: ellipsis;
    text-align: justify;
  }

  .content .body .title {
    font-size: 1.3em;
    font-weight: bolder;
    text-align: justify;
  }

  .content .body .wrap-dakat {
    margin: 3px 0;
    display: flex;
    justify-content: space-between;
  }

  .wrap-dakat .category {
    text-transform: uppercase;
    color: #dc4535;
    font-weight: bold;
  }
  .wrap-dakat .date {
    color: gray;
    font-weight: bold;
  }

  .button-load {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    .content {
      margin: 8px;
    }
    .content .header {
      height: 8em;
      width: 16em;
      overflow: hidden;
      position: relative;
    }
    .body .description {
      padding-top: 8px;
      width: 16em;
      height: 5em;
      text-overflow: ellipsis;
    }
  }
</style>

<section>
  <div class="contents">
    {#each [1, 2, 3, 4] as a}
      <a href="news/:id">
        <div class="content">
          <div class="header">
            <img
              src="https://scontent-sin6-1.cdninstagram.com/v/t51.29350-15/127972898_838119503417316_6134853078957714693_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=1VgUbxMWngEAX97KZM8&_nc_ht=scontent-sin6-1.cdninstagram.com&oh=1f27cf8590c83cb175f5a2ce208a0b77&oe=5FEB2AA3"
              alt="" />
          </div>
          <div class="body">
            <div class="title">Nikmatnya Menjajal Kopi Cokot Gula Aren</div>
            <div class="wrap-dakat">
              <div class="date">Sen, 12/11/2020</div>
              <div class="category">Penyajian</div>
            </div>
            <p class="description">{truncate(deskripsi1)}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div class="button-load">
    <a class="btn btn-info btn-danger text-white" href="news"> Read More</a>
  </div>
</section>
