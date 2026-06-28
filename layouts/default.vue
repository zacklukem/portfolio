<script setup lang="ts">
const route = useRoute();

// Just to trick the scrapers ;)
let l1: string, l2: string;
if (process.env.NODE_ENV === "development") {
  l1 = atob(atob("YldGNWFHVjNMbnBoWTJoaGNua3lNREF6UUdkdFlXbHNMbU52YlFvPQo="));
  l2 = atob(atob("TkRBNExUY3dOeTB3TURRNENnPT0K"));
}
</script>

<template>
  <div class="body-wrapper">
    <div class="layout-container">
      <nav class="navbar">
        <div class="nav-left">
          <h1><a class="simple" href="/">Zachary Mayhew</a></h1>
        </div>
        <div class="nav-right">
          <dev-only>
            <a :href="'te' + 'l' + ':' + l2" class="screen-hidden">{{ l2 }}</a>
            <a :href="'mail' + 'to' + ':' + l1" class="screen-hidden">
              {{ l1 }}
            </a>
          </dev-only>
          <print-link href="https://github.com/zacklukem">GitHub</print-link>
          <print-link href="https://linkedin.com/in/zacklukem">
            LinkedIn
          </print-link>
        </div>
      </nav>
      <main class="main-content">
        <slot />
      </main>
      <footer class="footer print-hidden">
        <hr />
        <div class="footer-content">
          <div>Copyright (c) {{ new Date().getFullYear() }} Zachary Mayhew</div>
          <template v-if="route.path.startsWith('/blog')">
            <div>
              All text, images and diagrams (unless otherwise noted) are
              licensed under the
              <a href="https://creativecommons.org/licenses/by-nc/4.0/"
                >CC BY-NC 4.0</a
              >
              license.
            </div>
            <div>
              All code snipbits (unless otherwise noted) are licensed under the
              <a href="https://opensource.org/license/mit/">MIT License</a>.
            </div>
          </template>
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
  margin-top: 60px;
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
    padding: 0 0;
    gap: 0;

    h1 {
      margin: 0;
    }
  }

  .main-content {
    padding: 0 0;
  }

  .nav-right {
    gap: 0px;
    font-size: 0.8rem;
  }
}
</style>
