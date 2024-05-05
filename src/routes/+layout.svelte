<script lang="ts">
  import logo from '$lib/logo.svg?url';
</script>

<svelte:head>
  <link rel="shortcut icon" href={logo} type="image/svg+xml" color="red" />
</svelte:head>

<slot />
