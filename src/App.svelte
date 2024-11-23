<script lang="ts">
  // import Counter from "./components/Counter.svelte";
</script>

<div class="flex justify-center">
  <main class="max-w-2xl flex-grow">
    <header class="bg-back-400 container px-4 py-28 text-center">
      <h1 class="mb-5 text-4xl font-bold">Zachary Mayhew</h1>
      <h2 class="text-3 mb-2 font-bold">
        Software Engineer at <a href="https://sep.com">SEP</a>
      </h2>
      <div class="row flex justify-center gap-4">
        <a href="https://github.com/zacklukem">GitHub</a>
        <a href="https://linkedin.com/in/zacklukem">LinkedIn</a>
      </div>
    </header>

    <section class="my-8 px-4">
      <h2 class="mb-4 text-2xl font-bold">About</h2>
      <p>
        Software Engineer with skills in a variety of Computer Science problems, hoping to learn and
        apply my knowledge to solving interesting software problems.
      </p>
    </section>

    <section class="my-8 px-4">
      <h2 class="mb-4 text-2xl font-bold">Education</h2>
      <p>
        <a href="https://purdue.edu">Purdue University</a> — Computer Science B.S. and Chinese Studies
        B.A. Grad. May 2024
      </p>
    </section>

    <section class="my-8 px-4">
      <h2 class="mb-4 text-2xl font-bold">Skills</h2>
      <div class="flex flex-col justify-evenly gap-5 md:flex-row">
        <div class="px-2">
          <h3 class="font-bold">Languages</h3>
          <ol class="list-disc pl-6">
            <li>Rust</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Scala</li>
            <li>OCaml</li>
            <li>JavaScript, TypeScript</li>
            <li>C#</li>
            <li>Python</li>
          </ol>
        </div>
        <div class="px-2">
          <h3 class="font-bold">Tools</h3>
          <ol class="list-disc pl-6">
            <li>Git</li>
            <li>Linux</li>
            <li>Makefiles</li>
            <li>Shell scripting</li>
            <li>Perforce</li>
            <li>Gradle</li>
            <li>SQL</li>
            <li>Docker</li>
          </ol>
        </div>
        <div class="px-2">
          <h3 class="font-bold">Tools</h3>
          <ol class="list-disc pl-6">
            <li>OpenGL</li>
            <li>React.js</li>
            <li>Android</li>
            <li>Firebase</li>
          </ol>
          <h3 class="font-bold">Other</h3>
          <ol class="list-disc pl-6">
            <li>Agile</li>
            <li>Jira</li>
            <li>GitHub Actions</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="my-8 px-4">
      <h2 class="mb-4 text-2xl font-bold">Experience</h2>

      <div class="mb-6">
        <p>
          <a href="https://sep.com">Software Engineer at SEP</a> — June 2024 - Present
        </p>
      </div>

      <div class="mb-6">
        <p>
          <a href="https://xperi.com">Software Engineering Intern at Xperi Corporation</a> — May 2022
          - Dec 2023
        </p>
        <ol class="list-disc pl-6">
          <li>
            Upgraded legacy build tools using Android NDK with Haxe/Lime Optimized compile time
            using Haxe build tools in a company local fork of the compiler and build tools (~400%
            compile time improvement)
          </li>
          <li>
            Contributed to an internal fork of Google ExoPlayer and the public ExoPlayer repository
          </li>
          <li>Fixed bugs caused by ARM SIMD optimizations on Android TV</li>
          <li>
            Worked on an internal fork of the Chromium cronet network stack as a backend for
            collecting video streaming analytics in ExoPlayer
          </li>
        </ol>
      </div>
    </section>
  </main>
</div>
