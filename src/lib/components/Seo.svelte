<script lang="ts">
    export let title: string;
    export let ogTitle: string | null = null;
    export let description: string;
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={ogTitle ?? title} />
    <meta name="description" property="og:description" content={description} />
    <meta
      property="og:image"
      content="https://www.ekzhang.com/assets/images/hudson-landscape.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </svelte:head>