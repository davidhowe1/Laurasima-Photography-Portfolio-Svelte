<script>
    import Footer from "../components/Footer.svelte";
    import GridCard from "../components/GridCard.svelte";
    import Header from "../components/Header.svelte";
    import "./styles.css"

    import image1 from "../static/images/18.jpeg"
    import image2 from "../static/images/instagram-2.png"

    let title1 = 'Thanks for viewing my portfolio'
    let title2 = 'Check out my Instagram'

    let paragraph1 = 'I shoot in 35mm film on my olympus OM-1n and mainly capture life in and around Liverpool. Take a look at my portfolio and take a trip around Liverpool told in analogue film.'
    let paragraph2 = 'My Instagram is the best place to see my more candid shots. Send me a message and comment on my pictures there to engage with me and others in the photography community.'

    let button1 = 'Portfolio'
    let button2 = 'Instagram'

    let reverse = 'reverse'
    let normal = 'normal'

    let portfolioLink = '/portfolio'
    let instagramLink = 'https://www.instagram.com/laur.analogue/'

</script>

<Header/>

<GridCard 
    order={normal}
    image={image1}
    paragraph={paragraph1}
    title={title1}
    button={button1}
    link={portfolioLink}
    />

<GridCard 
    order={reverse}
    image={image2}
    paragraph={paragraph2}
    title={title2}
    button={button2}
    link={instagramLink}
    />
<Footer/>