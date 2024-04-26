<script>
  import Logo from './logo.svelte';
</script>

<header class="sticky w-full bg-violet-700 text-white max-w-full">
  <div class="w-full h-14 flex justify-center">
    <nav class="flex justify-center">
      <a href="/" class="flex items-center text-base px-4">
        <Logo class="fill-white size-8" />
        <span class="ml-1 uppercase font-light align-middle">odroe</span>
      </a>
      <a href="/" class="nav-item" data-selected="true">Docs</a>
      <a href="/" class="nav-item">Blog</a>
      <a href="/" class="nav-item">Projects</a>
      <a href="/" class="nav-item">About</a>
    </nav>
  </div>
</header>

<style>
  .nav-item {
    @apply flex items-center text-base px-4;
    @apply hover:bg-violet-500 data-[selected=true]:bg-violet-500;
    @apply data-[selected=true]:relative data-[selected=true]:before:block data-[selected=true]:before:w-full data-[selected=true]:before:h-2 data-[selected=true]:before:absolute data-[selected=true]:before:top-0 data-[selected=true]:before:left-0 data-[selected=true]:before:bg-violet-900;
  }
</style>
