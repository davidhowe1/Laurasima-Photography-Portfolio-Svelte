<script>
// @ts-nocheck
    import images from '../data/imagedata.js'

    import image1 from "../static/images/8.jpeg"
    import image2 from "../static/images/2.jpeg"
    import image3 from "../static/images/11.jpeg"
    import image4 from "../static/images/7.jpeg"
    import image5 from "../static/images/10.jpeg"
    import image6 from "../static/images/1.jpeg"
    import image7 from "../static/images/9.jpeg"
    import image8 from "../static/images/6.jpeg"
    import image9 from "../static/images/17.jpeg"
    import image10 from "../static/images/14.jpeg"
    import image11 from "../static/images/15.jpeg"
    import image12 from "../static/images/20.jpeg"

    let imageArray = [
      image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
    ]

  let detailedViewVisible = false;
  let detailedView = [];
  let detailedViewImageSrc;

  const renderDetailedView = (index) => {
    detailedViewVisible = true;
    detailedView = [images[index]];
    detailedViewImageSrc = imageArray[index]
  };

  const hideDetailedView = () => {
    detailedViewVisible = false;
  };
</script>

<section class="portfolio-items">
  {#each images as image, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => renderDetailedView(i)} class="image-container">
        <div class="overlay">
            {image.title}
            <button>View</button>
            <div> </div>
        </div>

      <img src={imageArray[i]} alt={image.title} title={image.title} />
    </div>
  {/each}
</section>

<section class={detailedViewVisible ? "detailed-view active" : "detailed-view"}>
    {#each detailedView as image, i}
      <div class="image-container">
        <img src={detailedViewImageSrc} alt={image.title}/>
      </div>

      <div class="text">
        <h1 class="title">{image.title}</h1>
        <p class="description">{image.description}</p>
        <button class="overlay-close" on:click={() => hideDetailedView()}>Close</button>
      </div>

    {/each}
</section>

<style>
  .portfolio-items {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 10px;
  }

  .image-container {
    position: relative;
    height: 550px;
    width: 380px;
    margin: 0px 10px 100px;
    cursor: pointer;

  }

  .image-container .overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.1rem;
    font-weight: 500;
    color: white;
    padding: 0px 25px;
    opacity: 0%;
    box-sizing: border-box;
    transition: 0.15s;
  }

  button {
    width: fit-content;
    padding: 10px 15px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 1.1rem;
    align-self: center;
    cursor: pointer;
  }

  .image-container:hover .overlay {
    transition: 0.15s;
    opacity: 100%;
    padding: 25px 25px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .image-container:hover img {
    filter: brightness(20%);
    transition: 0.15s;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.15s;
  }

  :global(h1.title) {
      font-size: 3.5rem;
      font-weight: 500;
  }

  p.description {
      font-size: 1.2rem;
      margin: 40px 0px;
  }

  button.overlay-close {
    color: black;
    border: 2px solid black;
    transition: 0.15s;
  }

  button.overlay-close:hover {
    color: white;
    background-color: black;
    border: 2px solid black;
    transition: 0.15s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .detailed-view.active .image-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 92vh;
    margin: 0px;
    box-sizing: border-box;
  }

  .detailed-view.active .image-container img {
    position: relative;
    object-fit: contain;
    filter: brightness(100%);
  }

  .detailed-view {
    display: grid;
    grid-template-columns: 1fr 35%;
    align-items: center;
    position: absolute;
    background-color: white;
    top: -1000px;
    padding: 30px;
    box-sizing: border-box;
  }

  .detailed-view.active {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: fixed;
    z-index: 2;
  }

  .detailed-view .text {
      margin: 0px 0px 0px 30px;
  }

  @media screen and (max-width: 1000px) {

    .detailed-view.active {
      padding: 30px 30px;
      box-sizing: border-box;
    }

    .detailed-view.active {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 70% 30%;
      justify-content: space-between;
    }

    .detailed-view.active .image-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      width: 100%;
      padding: 0px;
    }

    h1.title {
      font-size: 2rem;
    }

    p.description {
        font-size: 1rem;
        margin: 30px 0px;
    }

    .detailed-view.active .image-container img {
      height: 100%;
      width: 100%;
    }

    .detailed-view .text {
      display: flex;
      justify-self: center;
      flex-direction: column;
      width: 75%;
      margin: 0px;
      box-sizing: border-box;
      text-align: center;
    }

    .image-container {
      margin: 0px 0px 2.5%;
      width: 48.8%;
    }

    .portfolio-items {
      margin: 0px 20px;
    }

  }

  @media screen and (max-width: 500px) {

    .detailed-view.active {
      grid-template-rows: 65% 35%;
      box-sizing: border-box;
      justify-content: space-evenly;
      box-sizing: border-box;
      z-index: 4;
    }

    .detailed-view .text {
      width: 90vw;
      margin: 30px 0px 0px;
    }

    h1.title {
      font-size: 1.5rem;
    }

    p.description {
      font-size: 0.9rem;
      margin: 10px 0px 20px;
    }

    .image-container {
      width: 48.5%;
      height: 300px;
      margin: 0px 0px 10px;
    }    
    
    .portfolio-items {
      margin: 0px 10px;
    }

    .image-container .overlay {
      font-size: 1.4rem;
      padding: 0px 15px;
    }

    .image-container .overlay:hover {
      font-size: 1.4rem;
      padding: 15px 15px;
    }

    button {
      font-size: 0.8rem;
      padding: 4px 8px;
    }
}
</style>
