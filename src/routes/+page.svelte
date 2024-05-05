<script lang="ts">
  import Brand from '$lib/icons/brand.svelte';
  import Nav from '$lib/widgets/nav.svelte';
  import Search from '$lib/widgets/search.svelte';

  import '$app/navigation';
  import { base } from '$app/paths';
</script>

<header class="w-full h-14 sticky px-6 flex items-center">
  <a href="/" class="inline-flex space-x-2 items-center">
    <Brand class="aspect-square h-8 fill-indigo-500" />
    <span class="capitalize text-lg">Odroe</span>
  </a>
  <div class="px-8">
    <Search />
  </div>
  <Nav />
</header>
