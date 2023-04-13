

<footer>
    <span>
        <p class="copyright">© Laurasima 2023</p>

        <p class="credit">
            Made by <a target="_blank" href="https://david-howe.co.uk">david-howe.co.uk</a>
        </p>
    </span>

    <ul>
        <a href="/">
            <li>Home</li>
        </a>
    
        <a href="/portfolio">
            <li>Portfolio</li>
        </a>
    
        <a href="/about">
            <li>About</li>
        </a>
        
        <a href="/contact">
            <li>Contact</li>
        </a>
    </ul>
</footer>

<style>

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10vh;
        margin: 0px 20px;
    }

    ul {
        display: flex;
        padding: 0px;
    }

    ul li {
        font-size: 0.9rem;
        list-style: none;
        margin: 0px 0px 0px 20px;
        transition: 0.15s;
        border-bottom: 2px solid transparent;
        color: #818181;
    }

    ul li:hover {
        transition: 0.15s;
        border-bottom: 2px solid #2a2a2a;
    }

    a {
        text-decoration: none;
        color: #2a2a2a;
    }

    span {
        display: flex;
    }

    p.copyright {
        font-size: 0.8rem;
        color: #bebebe;
        margin-right: 20px;
    }

    p.credit, p.credit a {
        font-size: 0.8rem;
        color: #bebebe;
        transition: 0.15s;
    } 

    p.credit a:hover {
        color: #4a4a4a;
        transition: 0.15s;
        text-decoration: underline;
    }

    @media screen and (max-width: 500px) {
        footer {
            display: flex;
            flex-direction: column-reverse;
            margin: 0px 10px;
        }

        span {
            width: 100%;
            justify-content: center;
        }

        p.copyright {
            font-size: 0.4rem;
            color: #bebebe;
            margin: 0px 10px 5px;
        }

        p.credit {
            margin: 0px 10px 5px;
        }

        p.credit, p.credit a {
            font-size: 0.4rem;
            color: #bebebe;
            transition: 0.15s;
        } 

        ul {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            margin: 15px 0px 0px;
        }

        ul li {
            margin: 0px;
            font-size: 0.75rem;
        }
    }
    
</style>