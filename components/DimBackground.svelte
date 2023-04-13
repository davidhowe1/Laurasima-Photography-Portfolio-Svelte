
<script>
// @ts-nocheck
    export let isMobileMenuActive = false
    export let toggleMobileMenu;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section 
    on:click={() => toggleMobileMenu()}
    class={isMobileMenuActive ? 'dim-background active' : 'dim-background'}>
</section>

<style>
    section.dim-background {
        position: fixed;
        opacity: calc(80%);
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    section.dim-background.active {
        z-index: 1;
        background-color: black;
    }
</style>