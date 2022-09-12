<script lang="ts">
    import Fa from "svelte-fa";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import {
      faGithub,
      faTwitter,
      faFacebook,
      faQuora,
    } from "@fortawesome/free-brands-svg-icons";
  
    const links = [
      {
        name: "GitHub",
        href: "https://github.com/Natcel0711",
        icon: faGithub,
        color: "#24292e",
      },
      {
        name: "Mail",
        href: "mailto:natcelnieves@gmail.com",
        icon: faEnvelope,
        color: "#333",
      },
    ];
  </script>
  
  <footer class="p-6 pb-8 space-y-4">
    <div class="flex justify-center space-x-4">
      {#each links as link (link)}
        <a style="color: {link.color}" href={link.href}>
          <Fa
            icon={link.icon}
            size="2x"
            class="opacity-75 transition-opacity hover:opacity-100"
          />
        </a>
      {/each}
    </div>
  </footer>