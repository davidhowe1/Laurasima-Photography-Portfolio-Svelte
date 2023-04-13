
<script>
    import image from '../static/images/3.jpeg';

    let buttonContent = 'Send Message'
    let senderName = '';
    let email = '';
    let message = '';

    const resetInputFields = () => {
        senderName = '';
        email = '';
        message = '';
    }

    const showSuccessMessage = () => {
        buttonContent = 'Your message has been sent!'
        setTimeout(() => {
            buttonContent = 'Send Message'
        }, 5000)
    }

    // @ts-ignore
    const setName = (e) => { senderName = e.target.value }
    // @ts-ignore
    const setEmail = (e) => { email = e.target.value }
    // @ts-ignore
    const setMessage = (e) => { message = e.target.value }
    
    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            buttonContent = 'Sending message...'

            try {
            const response = await fetch('https://us-central1-laurasima-website---svelte.cloudfunctions.net/sendMessage', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: senderName,
                    email: email,
                    message: message
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            showSuccessMessage();
            resetInputFields();

            } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message.');
            }
        }
    };

    const validateForm = () => {
        const emailRegex = /^\S+@\S+\.\S+$/

        if (senderName.length <= 0) {
            alert('Please enter your name')
            return false
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address')
            return false
        }

        if (message.length <= 0) {
            alert('Please enter your message')
            return false
        }

        return true
    };

</script>

<article>
    <div class="left-side">
        <img src={image} alt="">
    </div>

    <div class="right-side">
        <h1 class="title">Contact Me</h1>

        <p class="description">
            The best way to contact me is via Instagram. 
            You can private message there for inquiries 
            and general questions about my work and pricing.

            Alternatively, use the form below to send me a message.
        </p>

        <form on:submit={handleSubmit} action="submit">
            <label for="name">Name</label>
            <input bind:value={senderName} on:input={setName} type="text" id="name">
        
            <label for="email">Email</label>
            <input bind:value={email} on:input={setEmail} type="email" id="email">
        
            <label for="message">Message</label>
            <textarea bind:value={message} on:input={setMessage} id="message" cols="30" rows="10"></textarea>
        
            <button type="submit">{buttonContent}</button>
        </form>
    </div>
</article>

<style>

    article {
        display: grid;
        grid-template-columns: 50% 50%;
        height: fit-content;
    }

    img {
        object-fit: contain;
    }

    h1.title {
        font-size: 2.8rem;
    }

    .left-side {
        display: flex;
        justify-content: flex-end;
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
        margin: 40px 0px 0px;
    }

    button {
        width: fit-content;
        padding: 10px 15px;
        border: 2px solid black;
        background-color: transparent;
        color: black;
        font-size: 1.1rem;
        font-weight: 300;
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

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin: 30px 0px 10px;
    }

    input {
        border: none;
        background-color: #f0f0f0;
        height: 15px;
        padding: 10px;
    }

    textarea {
        border: none;
        background-color: #f0f0f0;
        resize: none;
        padding: 10px;
        margin: 0px 0px 50px;
    }

    @media screen and (max-width: 1000px) {
        article {
            display: flex;
            flex-direction: column;
        }

        .left-side {
            height: 60vh;
            align-items: center;
            justify-content: center;
            margin: 0px 20px;
        }

        img {
            width: 100%;
            object-fit: cover;
        }

        .right-side {
            margin: 50px;
        }

        h1.title {
            font-size: 2rem;
            font-weight: 500;
        }

        p.description {
            font-size: 1rem;
            margin: 40px 0px 0px;
        }
    }

    @media screen and (max-width: 500px) {
        .left-side {
            height: 48vh;
            margin: 0px 10px;       
        }

        .right-side {
            margin: 40px 10px;
        }

        h1.title {
            font-size: 1.5rem;
            font-weight: 500;
        }

        p.description {
            font-size: 0.9rem;
            margin: 20px 0px;
        }
    }

</style>