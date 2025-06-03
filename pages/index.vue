<template>
    <article>
        <section>
            <p>Software Engineer with skills in a variety of Computer Science problems, hoping to learn and apply my
                knowledge to solving interesting software problems.</p>
        </section>

        <section>
            <h2>Education</h2>
            <p><a href="https://purdue.edu">Purdue University</a> — Computer Science B.S. and Chinese Studies B.A. Aug
                2021-May 2024</p>
        </section>

        <section>
            <h2>Skills</h2>
            <ul class="skills-list">
                <li>Rust</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Scala</li>
                <li>OCaml</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Python</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Makefiles</li>
                <li>Shell scripting</li>
                <li>Perforce</li>
                <li>Gradle</li>
                <li>SQL</li>
                <li>Docker</li>
                <li>React.js</li>
                <li>OpenGL</li>
                <li>Android</li>
                <li>Firebase</li>
                <li>Agile</li>
                <li>Jira</li>
                <li>GitHub Actions</li>
            </ul>
        </section>
        <section>
            <h2>Experience</h2>
            <div class="experience">
                <h3>Software Engineer, <a href="https://sep.com">SEP</a></h3>
                <small>Jun 2024-Present</small>
                <ul>
                    <li>Improved a legacy ASP.NET MVC application for a client</li>
                    <li>Developed a tool for local emulation of AWS Lambda and API Gateway projects</li>
                    <li>Worked on a React SPA/AWS Lambda web app for a client</li>
                </ul>
            </div>

            <div class="experience">
                <h3>Software Engineering Intern, <a href="https://xperi.com">Xperi Corporation</a></h3>
                <small>May 2022-Dec 2023</small>
                <ul>
                    <li>Upgraded legacy build tools using Android NDK with Haxe/Lime</li>
                    <li>Optimized compile time using Haxe build tools in a company local fork of the compiler and build
                        tools (400% compile time improvement)</li>
                    <li>Contributed to an internal fork of Google ExoPlayer and the public ExoPlayer repository</li>
                    <li>Fixed bugs caused by ARM SIMD optimizations on Android TV</li>
                    <li>Worked on an internal fork of the Chromium cronet network stack as a backend for collecting
                        video streaming analytics in ExoPlayer</li>
                </ul>
            </div>

            <div class="experience">
                <h3>Web Developer and Tutor, TechLab Education</h3>
                <small>Jun 2018-Jul 2020</small>
                <ul>
                    <li>Converted existing web platform from a custom Google Cloud backend to TypeScript running on
                        Firebase with Hosting, Functions and Firestore</li>
                    <li>Maintained the company website, enrollment system, sign up system and Stripe based payment
                        system</li>
                    <li>Taught classes on Python and Java</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Projects</h2>
            <div class="experience">
                <h3>rust</h3>
                <small><a href="https://github.com/rust-lang/rust">github.com/rust-lang/rust</a></small>
                <p class="indent">Contributed to the compiler and standard library</p>
            </div>

            <div class="experience">
                <h3>pbrtrs</h3>
                <small><a href="https://github.com/zacklukem/pbrtrs">github.com/zacklukem/pbrtrs</a></small>
                <p class="indent">Physically based ray tracer based on the book <a
                        href="https://www.pbr-book.org/">Physically Based
                        Rendering: From Theory To Implementation</a></p>
            </div>

            <div class="experience">
                <h3>aoclang</h3>
                <small><a href="https://github.com/zacklukem/aoclang">github.com/zacklukem/aoclang</a></small>
                <p class="indent">Dynamically typed functional programming language with a Scala compiler and Rust
                    runtime</p>
            </div>
        </section>
    </article>
</template>

<style scoped>
.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    column-gap: 10px;
    gap: 1px;
}

.experience h3 {
    margin: 0;
    font-size: 1.2rem;
}

.indent {
    margin-left: 1.5rem;
}
</style>