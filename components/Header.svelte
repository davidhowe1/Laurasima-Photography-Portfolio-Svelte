<script>
    import { onMount } from "svelte";
    import MobileMenu from "./MobileMenu.svelte";
    import DimBackground from "./DimBackground.svelte";
    
    let activeTab = ''

    onMount(() => {
        activeTab = window.location.pathname
    })

    let isMobileMenuActive = false;

    const toggleMobileMenu = () => {
        isMobileMenuActive = !isMobileMenuActive
    }
    
</script>

<DimBackground
    isMobileMenuActive={isMobileMenuActive}
    toggleMobileMenu={toggleMobileMenu}
/>

<header>
    <a href="/">
        <h2>Laurasima</h2>
    </a>
    
    <ul>
        <a href="/">
            <li class={activeTab === '/' ? 'active' : ''}>Home</li>
        </a>
    
        <a href="/portfolio">
            <li class={activeTab === '/portfolio' ? 'active' : ''}>Portfolio</li>
        </a>
    
        <a href="/about">
            <li class={activeTab === '/about' ? 'active' : ''}>About</li>
        </a>
        
        <a href="/contact">
            <li class={activeTab === '/contact' ? 'active' : ''}>Contact</li>
        </a>
    </ul>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => toggleMobileMenu()}
    class={isMobileMenuActive 
    ? 'burger-menu active' : 'burger-menu'}>
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
    </div>

</header>

<MobileMenu 
    isMobileMenuActive={isMobileMenuActive}
    activeTab={activeTab}
/>

<style>
    :global(*) {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0px;
    }
    
    :global(body) { 
        margin: 0; 
        padding: 0;
        overflow-x: hidden;
        width: 100%;
    }

    :global(::-webkit-scrollbar) {
        display: none;
    }

    :global(html) {
        width: 100%;
        overflow-x: hidden;
    }

    :global(p) {
        line-height: 1.4rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        padding: 30px 20px;
        align-items: center;
    }

    .burger-menu {
        display: none;
    }

    ul {
        display: flex;
        padding: 0px;
    }

    ul li {
        list-style: none;
        margin: 0px 0px 0px 20px;
        padding: 0px 0px 5px 0px;
        transition: 0.15s;
        border-bottom: 2px solid transparent;
        color: #585858;
    }

    ul li:hover {
        transition: 0.15s;
        border-bottom: 2px solid #2a2a2a;
    }

    ul li.active {
        color: #2a2a2a;
        border-bottom: 2px solid #2a2a2a;
    }

    a {
        text-decoration: none;
        color: #2a2a2a;
    }

    @media screen and (max-width: 1000px) {

        a h2 {
            font-size: 1.1rem;
            margin: 0px 0px 10px 0px;
        }

        ul {
            display: flex;
        }

        ul li {
            font-size: 0.9rem;
        }
    }

    @media screen and (max-width: 500px) {

        ul {
            display: none;
        }

        a h2 {
            margin: 0px;
        }

        .burger-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 20px;
            width: fit-content;
            z-index: 3;
        }

        .burger-menu.active {
            position: fixed;
            right: 10px;
        }

        .burger-menu.active .bar1 {
            transform: rotate(45deg) translate(7px,5.5px);
            transition: 0.2s;
        }

        .burger-menu.active .bar2 {
            opacity: 0%;
            transition: 0.3s;
        }

        .burger-menu.active .bar3 {
            transform: rotate(-45deg) translate(7px,-6px);
            transition: 0.2s;
        }

        .bar1, .bar2, .bar3 {
            opacity: 100%;
            height: 2px;
            border-radius: 999px;
            width: 25px;
            background-color: black;
            transition: 0.3s;
        }

        header {
            padding: 20px 10px;
        }
    }
</style>