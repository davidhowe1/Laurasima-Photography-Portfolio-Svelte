
<script>
    export let image;
    export let paragraph;
    export let title;
    export let button;
    export let order;
    export let link;

</script>

<article class={order}>
    <div class="left-side">
        <img src={image} alt="">
    </div>

    <div class="right-side">
        <h1 class="title">{title}</h1>
        <p class="description">{paragraph}</p>
        <a target={link === 'https://www.instagram.com/laur.analogue/' ? '_blank' : ''} 
        href={link}>
            <button>{button}</button>
        </a>
    </div>
</article>

<style>

    article {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 75vh;
    }

    article.reverse div:nth-child(1) {
        order: 2;
    }

    img {
        height: 100%;
        object-fit: contain;
    }

    h1.title {
        font-size: 2.8rem;
    }

    .left-side {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin: 0px 80px;
    }

    p.description {
        font-size: 1.2rem;
        margin: 40px 0px;
    }

    button {
        width: fit-content;
        padding: 10px 15px;
        border: 2px solid black;
        background-color: transparent;
        color: black;
        font-size: 1.1rem;
        align-self: center;
        cursor: pointer;
        transition: 0.15s;
    }

    button:hover {
        color: white;
        background-color: black;
        border: 2px solid black;
        transition: 0.15s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

    @media screen and (max-width: 1200px) {
        .right-side {
            margin: 0px 40px;
        }
    }

    @media screen and (max-width: 1000px) {

        .right-side {
            margin: 50px 35px 100px;
        }

        .left-side {
            height: 45vh;
        }

        .left-side img {
            width: 100%;
            object-fit: cover;
        }

        .right-side a {
            display: flex;
            justify-content: center;
            text-decoration: none;
        }

        article {
            display: flex;
            flex-direction: column;
            height: fit-content;
            margin: 0px 20px;
        }

        h1.title {
            font-size: 2rem;
            font-weight: 500;
        }

        p.description {
            font-size: 1rem;
            margin: 30px 0px;
        }

        button {
            padding: 8px 12px;
        }

        article.reverse div:nth-child(2) {
            order: 2;
        }
    }


    @media screen and (max-width: 500px) {

        .right-side {
            margin: 40px 0px 80px;
        }

        .left-side {
            height: 40vh;
        }

        h1.title {
            font-size: 1.5rem;
            font-weight: 500;
        }

        p.description {
            font-size: 0.9rem;
            margin: 20px 0px;
        }

        article {
            display: flex;
            flex-direction: column;
            height: fit-content;
            margin: 0px 10px;
        }

}

</style>