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
        I am a software developer with extensive experience in web development
        using tools like Blazor Server (C#, JavaScript), Svelte Kit (JavaScript,
        TypeScript) and developing scripts using Python and C#. All my projects
        are hosted on github and among these include:
      </p>
      <ul>
        <li>
          <Link to="https://github.com/Natcel0711/Ecommercecsharp"
            ><strong>Ecommmerce Stores</strong></Link
          >, ecommerce stores made in Blazor and Svelte Kit.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/SvelteTailwind-Ecommerce"
            ><strong>Svelte Kit Ecommerce Store</strong></Link
          >, ecommerce store made in Svelte.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/AutoMover"
            ><strong>Python file organizer</strong></Link
          >, automatic file organizer script.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/CsharpImageScraper"
            ><strong>APIs</strong></Link
          >, APIs that serves data from the Luma outages reports in Json format.
        </li>
        <li>
          <Link to="https://github.com/Natcel0711/blazor"><strong>CRUD Apps</strong></Link>,
          crud apps made in Blazor and Svelte.
        </li>
      </ul>
      <p>
        I currently live in Aguadilla where I studied in the University of
        Puerto Rico from Aguadilla with a bachelor's degree in Business
        Administration with a concentration in Computerized Systems and couple of classes in finance.
      </p>
      <p>
        For the majority of the day I work full time writing code in C# and JavaScript 
        but in my spare time I enjoy working with Python making quick scripts for 
        scraping data or making simple APIs that don't need much boilerplate. I use 
        JavaScript/TypeScript for any ideas on web apps, usually if I want to make a UI 
        for my APIs or just to have fun with Svelte. Currently trying to make my way 
        into low level programming by learning C and doing some embedded programming. 
        And if I'm not coding, I'm at the gym.
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
        I currently work a .Net developer in the insurance industry, mainly doing web developing using frameworks like Blazor Server, ASP.NET and creating APIs.
      </p>
      <ul>
        <li>
          <strong>Blazor Server</strong>, database first project using EF, JavaScript, CRUD, MS Office interop, Payment Gateway, email, authentification and SQL Server.
        </li>
        <li>
          <strong>ASP.NET</strong>
          , CRUD projects with JavaScript, JQuery, EF, MS Office interop and SQL Server
        </li>
        <li>
          <strong>ASP.NET Web API</strong>
          , API using EF, MS Office interop, JavaScript, Json, JQuery
        </li>
      </ul>
      <p>
        I have written programs with multiple tools and languages for the company I work at to solve various problems and needs the employees have, some of these include:
      </p>
      <p>
        Additionally in my spare time I write hobby applications with python and JavaScript/TypeScript. Some of these include web apps (Svelte), API's (FastAPI), web scrapers (Selenium, beautiful soup, puppeteer), etc. 
      </p>
      <p>
        Every day I am learning new things about development, frameworks, tools that make me a better programmer and a better asset whenever I need to be.  
      </p>
    </section>
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Courses and books</h2>

      <h3 class="text-xl">Books</h3>
      <ul>
        <li>
          <em>C# 10 in a nutshell</em> (<Link
            external
            to="https://www.google.com/search?client=firefox-b-d&q=c%23+10+in+a+nutshell">Link</Link
          >)
        </li>
        <li>
          <em>C# notes for professionals</em> (<Link
            external
            to="https://www.computer-pdf.com/programming/csharp/820-tutorial-c-notes-for-professionals-book.html">Link</Link
          >)
        </li>
        <li>
          <em>C# Programming Yellow Book</em> (<Link
            external
            to="https://www.google.com/search?q=C%23+Programming+Yellow+Book&client=firefox-b-d&sxsrf=ALiCzsYeRNk1EXP3QNlkvkJVmqx3GCg3Cg%3A1663026373251&ei=xcQfY4n3DuznkvQP7N6LwAw&ved=0ahUKEwjJ7eqBuJD6AhXss4QIHWzvAsgQ4dUDCA4&uact=5&oq=C%23+Programming+Yellow+Book&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUILhCABDIGCAAQHhAWOgoIABBHENYEELADOgcIABCwAxBDSgQIQRgASgQIRhgAUPMCWPMCYI4IaAJwAXgAgAF-iAF-kgEDMC4xmAEAoAECoAEByAEJwAEB&sclient=gws-wiz">Link</Link
          >)
        </li>
        <li>
          <em>Effective C An Introduction to Professional C Programming</em> (<Link
            external
            to="https://nostarch.com/Effective_C">Link</Link
          >)
        </li>
        <li><em>Introduction to Algorithms</em> (<Link
          external
          to="https://www.google.com/search?q=Introduction+to+Algorithms&client=firefox-b-d&sxsrf=ALiCzsYk6V-k-0ZNE4CsrmvQjbf3vREYkw%3A1663026403144&ei=48QfY_erCKWZwbkPpMm3-AQ&ved=0ahUKEwi3qYuQuJD6AhWlTDABHaTkDU8Q4dUDCA4&uact=5&oq=Introduction+to+Algorithms&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQhgMyBQgAEIYDOgoIABBHENYEELADOgcIABCwAxBDSgQIQRgASgQIRhgAULIDWLIDYJMJaANwAXgAgAGzAYgBswGSAQMwLjGYAQCgAQKgAQHIAQnAAQE&sclient=gws-wiz">Link</Link
        >)</li>
        <li><em>JavaScript and jQuery: Interactive Front-End Web Development</em> (<Link
          external
          to="https://www.google.com/search?q=JavaScript+and+jQuery%3A+Interactive+Front-End+Web+Development&client=firefox-b-d&sxsrf=ALiCzsYgPdS4bzoDfSz4vKH2jSFB-2nz9w%3A1663026422552&ei=9sQfY8qdIeCQwbkP57aGgAQ&ved=0ahUKEwjK8KuZuJD6AhVgSDABHWebAUAQ4dUDCA4&uact=5&oq=JavaScript+and+jQuery%3A+Interactive+Front-End+Web+Development&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUILhCABDIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCSgQIQRgASgQIRhgBULUDWLUDYOgJaANwAXgAgAF9iAF9kgEDMC4xmAEAoAECoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz">Link</Link
        >)</li>
      </ul>

      <h3 class="text-xl">Video courses</h3>
      <ul>
        <li>
          <em>Complete C# Masterclass</em> (<Link
            external
            to="https://www.udemy.com/course/complete-csharp-masterclass/">Link</Link
          >)
        </li>
        <li>
          <em>The Complete SQL Bootcamp 2022: Go from Zero to Hero</em> (<Link
            external
            to="https://www.udemy.com/course/the-complete-sql-bootcamp/">Link</Link
          >)
        </li>
        <li>
          <em>JavaScript Algorithms and Data Structures Masterclass</em> (<Link
            external
            to="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">Link</Link
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
