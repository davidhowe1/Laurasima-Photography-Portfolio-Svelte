
<script>
    import heroImage from "../static/images/20.jpeg"
</script>

<section>
    <div class="image-container">
        <img src={heroImage} alt="">
    </div>
</section>

<style>

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        height: 90vh;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

</style>