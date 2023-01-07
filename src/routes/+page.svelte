<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<svelte:head>
  <title>Natcel Nieves Arce</title>
</svelte:head>

<Seo title="Natcel Nieves Arce" description="Software developer." />

<div class="container py-6">
  <h2 class="text-3xl font-serif mb-2">About</h2>
  <div class="grid grid-cols-3 gap-4 lg:gap-6 mb-4">
    <section class="col-span-3 sm:col-span-2 space-y-2">
      <p>
        I am a programmer who enjoys creating CLI tools, APIs, Web development
        with a minimalistic tone. I have a preference with staticlly typed
        languages (C#, TypeScript, Golang) and among the work I've done, which
        you can find on my github, include projects like:
      </p>
      <ul>
        <li>
          <Link to="https://github.com/Natcel0711/Ecommercecsharp"
            ><strong>Ecommmerce Stores</strong></Link
          >, ecommerce stores made in Blazor and Svelte Kit.
        </li>
        <li>
          <Link
            to="https://github.com/Natcel0711?tab=repositories&q=svelte&type=&language=&sort="
            ><strong>Svelte Kit</strong></Link
          >, projects made in Svelte ft. JavaScript/TypeScript, PocketBase.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/GoPay"
            ><strong>CLI tools</strong></Link
          >, CLI tools for day to day stuff.
        </li>
        <li>
          <Link
            to="https://github.com/Natcel0711?tab=repositories&q=api&type=&language=&sort="
            ><strong>APIs</strong></Link
          >, APIs that serves data, authenticates users.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/blazor"
            ><strong>CRUD Apps</strong></Link
          >, crud apps made in Blazor and Svelte.
        </li>
      </ul>
      <p>
        I currently live in Aguadilla where I studied in the University of
        Puerto Rico from Aguadilla with a bachelor's degree in Business
        Administration with a concentration in Computerized Systems and couple
        of classes in finance.
      </p>
      <p>
        In my spare time I like to work on my personal projects where I get the
        opportunity to experiment on new technologies. Among these I've enjoyed
        making web apps with TypeScript and Golang using my favorite UI
        framework SvelteKit, CLI tools (C#, Golang) for productivity, web
        servers (C#, TypeScript, Golang, Python) or just read books in topics
        I'm interested in.
      </p>
    </section>
    <section class="col-span-3 sm:col-span-1">
      <img
        class="img-fluid h-72"
        alt="Natcel Nieves Arce"
        src="https://avatars.githubusercontent.com/u/106360899?v=4"
      />
    </section>
  </div>

  <div class="grid grid-cols-2 gap-4 lg:gap-6">
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Work Experience</h2>
      <p>
        Currently I work as a full-stack developer in a .Net
        environment, some of the work includes creating company tools using web
        frameworks like ASP.NET, MVC (Model-View-Controller), Blazor Server, Web
        API.
      </p>
      <ul>
        <li>
          <strong>Blazor Server</strong>, database first project using EF,
          JavaScript, CRUD, MS Office interop, Payment Gateway, email, credit
          check, authentification and SQL Server.
        </li>
        <li>
          <strong>ASP.NET</strong>
          , CRUD projects with JavaScript, JQuery, EF, MS Office interop and SQL
          Server
        </li>
        <li>
          <strong>ASP.NET Web API</strong>
          , API using EF, MS Office interop, JavaScript, Json, JQuery, web tokens auth
        </li>
        <li>
          <strong>ASP.NET MVC</strong>
          , Model-View-Controller project paired with Web API 
        </li>
      </ul>
    </section>
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Courses and books</h2>
      <p>Among the books and Courses I've taken include:</p>
      <h3 class="text-xl">Books</h3>
      <ul>
        <li>
          <em>C# 10 in a nutshell</em> (<Link
            external
            to="https://www.oreilly.com/library/view/learning-go/9781492077206/"
            >Link</Link
          >)
        </li>
        <li>
          <em>C# notes for professionals</em> (<Link
            external
            to="https://www.computer-pdf.com/programming/csharp/820-tutorial-c-notes-for-professionals-book.html"
            >Link</Link
          >)
        </li>
        <li>
          <em>Learning Go</em> (<Link
            external
            to="https://www.computer-pdf.com/programming/csharp/820-tutorial-c-notes-for-professionals-book.html"
            >Link</Link
          >)
        </li>
        <li>
          <em>C# Programming Yellow Book</em> (<Link
            external
            to="https://www.google.com/search?q=C%23+Programming+Yellow+Book&client=firefox-b-d&sxsrf=ALiCzsYeRNk1EXP3QNlkvkJVmqx3GCg3Cg%3A1663026373251&ei=xcQfY4n3DuznkvQP7N6LwAw&ved=0ahUKEwjJ7eqBuJD6AhXss4QIHWzvAsgQ4dUDCA4&uact=5&oq=C%23+Programming+Yellow+Book&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUILhCABDIGCAAQHhAWOgoIABBHENYEELADOgcIABCwAxBDSgQIQRgASgQIRhgAUPMCWPMCYI4IaAJwAXgAgAF-iAF-kgEDMC4xmAEAoAECoAEByAEJwAEB&sclient=gws-wiz"
            >Link</Link
          >)
        </li>
        <li>
          <em>Effective C An Introduction to Professional C Programming</em>
          (<Link external to="https://nostarch.com/Effective_C">Link</Link>)
        </li>
        <li>
          <em>Introduction to Algorithms</em> (<Link
            external
            to="https://www.google.com/search?q=Introduction+to+Algorithms&client=firefox-b-d&sxsrf=ALiCzsYk6V-k-0ZNE4CsrmvQjbf3vREYkw%3A1663026403144&ei=48QfY_erCKWZwbkPpMm3-AQ&ved=0ahUKEwi3qYuQuJD6AhWlTDABHaTkDU8Q4dUDCA4&uact=5&oq=Introduction+to+Algorithms&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQhgMyBQgAEIYDOgoIABBHENYEELADOgcIABCwAxBDSgQIQRgASgQIRhgAULIDWLIDYJMJaANwAXgAgAGzAYgBswGSAQMwLjGYAQCgAQKgAQHIAQnAAQE&sclient=gws-wiz"
            >Link</Link
          >)
        </li>
        <li>
          <em>JavaScript and jQuery: Interactive Front-End Web Development</em>
          (<Link
            external
            to="https://www.google.com/search?q=JavaScript+and+jQuery%3A+Interactive+Front-End+Web+Development&client=firefox-b-d&sxsrf=ALiCzsYgPdS4bzoDfSz4vKH2jSFB-2nz9w%3A1663026422552&ei=9sQfY8qdIeCQwbkP57aGgAQ&ved=0ahUKEwjK8KuZuJD6AhVgSDABHWebAUAQ4dUDCA4&uact=5&oq=JavaScript+and+jQuery%3A+Interactive+Front-End+Web+Development&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUILhCABDIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCSgQIQRgASgQIRhgBULUDWLUDYOgJaANwAXgAgAF9iAF9kgEDMC4xmAEAoAECoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz"
            >Link</Link
          >)
        </li>
      </ul>

      <h3 class="text-xl">Video courses</h3>
      <ul>
        <li>
          <em>Complete C# Masterclass</em> (<Link
            external
            to="https://www.udemy.com/course/complete-csharp-masterclass/"
            >Link</Link
          >)
        </li>
        <li>
          <em>The Complete SQL Bootcamp 2022: Go from Zero to Hero</em> (<Link
            external
            to="https://www.udemy.com/course/the-complete-sql-bootcamp/"
            >Link</Link
          >)
        </li>
        <li>
          <em>JavaScript Algorithms and Data Structures Masterclass</em> (<Link
            external
            to="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
            >Link</Link
          >)
        </li>
        <li>
          <em>100 Days of Code: The Complete Python Pro </em> (<Link
            external
            to="https://www.udemy.com/course/100-days-of-code/">Link</Link
          >)
        </li>
      </ul>
    </section>
  </div>
</div>
