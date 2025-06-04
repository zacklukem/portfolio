<template>
    <div class="body-wrapper">
        <div class="layout-container">
            <nav class="navbar">
                <div class="nav-left">
                    <h1><a class="simple" href="/">Zachary Mayhew</a></h1>
                </div>
                <div class="nav-right">
                    <PrintLink href="https://github.com/zacklukem">GitHub</PrintLink>
                    <PrintLink href="https://linkedin.com/in/zacklukem">LinkedIn</PrintLink>
                </div>
            </nav>
            <main class="main-content">
                <slot />
            </main>
            <footer class="footer print-hidden">
                <hr>
                <div class="footer-content">
                    <div>
                        Copyright (c) {{ new Date().getFullYear() }} Zachary Mayhew
                    </div>
                    <div>
                        All text, images and diagrams (unless otherwise noted) are licensed under the <a
                            href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> license.
                    </div>
                    <div>
                        All code snipbits (unless otherwise noted) are licensed under the <a
                            href="https://opensource.org/license/mit/">MIT License</a>.
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout-container {
    max-width: 800px;
    flex-grow: 1;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 20px;

    .nav-left h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }

    .nav-right {
        justify-content: space-around;
        display: flex;
        gap: 20px;
        row-gap: 3px;
        flex-wrap: wrap;
    }
}

.main-content {
    padding: 0 20px;
}

.body-wrapper {
    display: flex;
    justify-content: center;
}

.footer {
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
    font-size: 0.8rem;
}

.footer-content {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
}

@media print {
    .layout-container {
        max-width: none;
    }

    .navbar {
        padding: 0;
        margin-bottom: 0;
    }

    .main-content {
        padding: 0 0;
    }
}
</style>