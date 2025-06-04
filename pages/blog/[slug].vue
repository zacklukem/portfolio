<script setup lang="ts">
const slug = useRoute().params.slug
const { data: post, } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})

</script>

<template>
    <div class="blog-page" v-if="post">
        <h1>{{ post.title }}</h1>
        <ContentRenderer :value="post" />
        <small><em> Published {{ new Date(post.date).toLocaleDateString() }}</em></small>
    </div>
</template>

<style lang="scss">
.blog-page {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        &>a {
            color: var(--zlm-text-color);
            text-decoration: none;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        th,
        td {
            border: 2px solid var(--zlm-hr-color);

            padding: 0.2rem 0.5rem;
        }
    }

    blockquote {
        border-left: 4px solid var(--zlm-text-color);
        padding-left: 1rem;
        margin: 1rem 0;
        color: var(--zlm-text-color);
    }

    code {
        font-family: "Source Code Pro", monospace;
        background-color: var(--zlm-bg-dark-color);
        padding: 0 0.2rem;
    }

    pre.shiki {
        background-color: var(--zlm-bg-dark-color);
        padding: 1rem;

        code {
            display: block;
            width: 100%;
            overflow-x: scroll;
            font-size: 0.9rem;
        }
    }
}
</style>