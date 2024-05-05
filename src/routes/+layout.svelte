<script lang="ts">
  import '../app.css';

  import Brand from '$lib/icons/brand.svelte';
  import NavSocial from '$lib/widgets/nav-social.svelte';
  import Nav from '$lib/widgets/nav.svelte';
  import Search from '$lib/widgets/search.svelte';

  import brand from '$lib/assets/odroe-brand.svg?url';
</script>

<svelte:head>
  <link rel="shortcut icon" href={brand} type="image/svg+xml" color="#000" />
  <link rel="apple-touch-icon" href={brand} />

  <title>Odroe: Create user interfaces from Setup-widget</title>
  <meta
    name="description"
    content="A declarative, efficient, and flexible Flutter UI framework for building user interfaces."
  />
</svelte:head>

<header class="w-full h-14 sticky px-6 flex items-center">
  <a href="/" class="inline-flex space-x-2 items-center" title="Odroe">
    <Brand class="aspect-square h-8 fill-indigo-500" />
    <span class="sr-only">Goto Odroe homepage</span>
    <span class="capitalize text-lg font-semibold">Odroe</span>
  </a>
  <div class="px-8">
    <Search />
  </div>
  <Nav />
  <NavSocial />
</header>

<slot />
