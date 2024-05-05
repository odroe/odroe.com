<script lang="ts"></script>

<nav
  class="flex flex-1 items-center justify-end space-x-1 text-base leading-6 font-medium"
>
  <a class="nav-item" href="/products" data-selected="true">Products</a>
  <a class="nav-item" href="/docs">Documentation</a>
  <a class="nav-item" href="/blog">Blog</a>
  <a class="nav-item" href="/about">About</a>
</nav>

<style lang="postcss">
  .nav-item {
    @apply text-black px-3 py-1.5 rounded-full capitalize;
    @apply hover:bg-gray-100;
    @apply data-[selected="true"]:bg-indigo-50 data-[selected="true"]:text-indigo-600;
  }
</style>
