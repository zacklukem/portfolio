<template>
  <article>
    <section>
      <p>
        Software Engineer with skills in a variety of Computer Science problems,
        hoping to learn and apply my knowledge to solving interesting software
        problems.
      </p>
    </section>

    <section>
      <h2>Education</h2>
      <p>
        <a href="https://purdue.edu">Purdue University</a> — Computer Science
        B.S. and Chinese Studies B.A. Aug 2021-May 2024
      </p>
    </section>

    <section>
      <h2>Experience</h2>
      <div class="experience no-page-break">
        <h3>Software Engineer 2, <a href="https://sep.com">SEP</a></h3>
        <small>Jun 2024-Present</small>
        <ul class="skills-list">
          <li>TypeScript</li>
          <li>React</li>
          <li>Git</li>
          <li>PostgreSQL</li>
          <li>AWS</li>
          <li>Jira</li>
          <li>GitHub Actions</li>
          <li>Docker</li>
        </ul>
        <ul>
          <li>Developed rich-text editing and PDF rendering for a custom report creation tool</li>
          <li>Created an Excel-like table editor with support for advanced rich text editing</li>
          <li>Developed a React SPA/AWS Lambda web app</li>
          <li>Improved a legacy ASP.NET MVC application for a large multinational company</li>
          <li>Developed a tool for local emulation of AWS Lambda and API Gateway projects</li>
        </ul>
      </div>

      <div class="experience no-page-break">
        <h3>
          Software Engineering Intern,
          <a href="https://xperi.com">Xperi Corporation</a>
        </h3>
        <small>May 2022-Dec 2023</small>
        <ul class="skills-list">
          <li>C++</li>
          <li>OCaml</li>
          <li>Java</li>
          <li>Haxe</li>
          <li>Docker</li>
          <li>Linux</li>
          <li>Android</li>
          <li>Make</li>
        </ul>
        <ul>
          <li>Upgraded legacy build tools using Android NDK with Haxe/Lime</li>
          <li>Optimized compile time using Haxe build tools in a company local fork of the compiler and build tools (400% compile time improvement)</li>
          <li>Contributed to an internal fork of Google ExoPlayer and the public ExoPlayer repository</li>
          <li>Fixed bugs caused by ARM SIMD optimizations on Android TV</li>
          <li>Worked on an internal fork of the Chromium cronet network stack as a backend for collecting video streaming analytics in ExoPlayer</li>
        </ul>
      </div>
    </section>

    <section class="no-page-break">
      <h2>Projects</h2>
      <div class="experience no-page-break">
        <h3>rust</h3>
        <small><a href="https://github.com/rust-lang/rust">github.com/rust-lang/rust</a></small>
        <ul class="skills-list">
          <li>Rust</li>
          <li>Compilers</li>
        </ul>
        <p class="indent">Contributed to the compiler and standard library</p>
      </div>

      <div class="experience no-page-break">
        <h3>pbrtrs</h3>
        <small><a href="https://github.com/zacklukem/pbrtrs">github.com/zacklukem/pbrtrs</a></small>
        <ul class="skills-list">
          <li>Rust</li>
          <li>Graphics</li>
        </ul>
        <p class="indent">
          Physically based ray tracer based on the book
          <a href="https://www.pbr-book.org/">Physically Based Rendering: From Theory To Implementation</a>
        </p>
      </div>

      <div class="experience no-page-break">
        <h3>aoclang</h3>
        <small><a href="https://github.com/zacklukem/aoclang">github.com/zacklukem/aoclang</a></small>
        <ul class="skills-list">
          <li>Scala</li>
          <li>Rust</li>
          <li>Compilers</li>
        </ul>
        <p class="indent">
          Dynamically typed functional programming language with a Scala
          compiler and Rust runtime
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
ul.skills-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  margin-top: 0.5rem;

  li {
    display: block;

    font-size: 0.8rem;
    background-color: var(--zlm-bg-dark-color);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;

    &::before {
      content: unset;
      display: none;
    }
  }

  @media print {
    li {
      padding: 0.15rem 0.3rem;
    }
  }
}

.experience h3 {
  margin: 0;
  font-size: 1.2rem;
}

.indent {
  margin-left: 1.5rem;
}
</style>
