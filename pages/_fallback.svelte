<script>
    import { url } from '@roxi/routify'
</script>

<style>
  .huge {
    font-size: 8rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<div class="e404">
  <div class="huge">404</div>
  <h1>Woops! We couldn't find that page... <a href={$url('../')}>Go back</a></h1>
</div>
