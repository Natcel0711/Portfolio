<script lang="ts">
    import { page } from "$app/stores";
  
    const links = [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
    ];
  </script>
  
  <header>
    <h1 class="font-serif text-[2.8rem] mt-5 mb-2 text-center">Natcel Nieves Arce</h1>
    <nav
      class="flex justify-center text-xl sm:text-2xl font-light mb-4 space-x-3"
    >
      {#each links as link (link)}
        <a
          href={link.href}
          class="nav-link"
          class:active={$page.url.pathname === link.href}
        >
          {link.name}
        </a>
      {/each}
    </nav>
  </header>
  
  <style lang="postcss">
    .nav-link {
      @apply border-b border-transparent transition-colors text-blue-700;
    }
  
    .nav-link:is(:hover, .active) {
      @apply border-blue-700;
    }
  </style>