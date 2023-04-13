
<script>
// @ts-nocheck
    export let isMobileMenuActive;
    export let activeTab;
    
</script>

<section class={isMobileMenuActive ? 'mobile-menu active' : 'mobile-menu'}>
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
</section>

<style>

    section.mobile-menu, section.mobile-menu.active {
        display: none;
    }

    @media screen and (max-width: 500px) {
        
        section.mobile-menu.active {
            display: flex;
            justify-content: center;
            position: fixed;
            height: 100%;
            width: 50%;
            background-color: white;
            z-index: 2;
            top: 0;
            right: 0;
            transform: translate(0px);
            transition: 0.3s;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 0px 0px;
            width: 100%;
        }

        ul a {
            text-decoration: none;
            color: black;
        }

        ul li {
            color: #585858;
            list-style-type: none;
            margin: 35px 0px;
        }

        ul li.active {
            padding: 0px 0px 10px;
            color: black;
            border-bottom: 2px solid black;
        }

        section.mobile-menu {
            display: flex;
            justify-content: center;
            position: fixed;
            right: -500px;
            transition: 0.3s;
            z-index: 2;
            height: 100%;
            width: 50%;
            top: 0;
            background-color: white;
        }
}

</style>