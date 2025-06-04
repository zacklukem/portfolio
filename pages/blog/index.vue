<script setup lang="ts">
const { data: posts } = await useAsyncData(`blog-index-view`, () => {
    return queryCollection('blog').order('date', 'DESC').all();
})

</script>

<template>
    <h1>Blog</h1>
    <div class="posts" v-if="posts">
        <div v-for="post in posts" :key="post.id" class="blog-post">
            <h2><a :href="post.path">{{ post.title }}</a></h2>
            <small><em> Published {{ new Date(post.date).toLocaleDateString() }}</em></small>
            <p>{{ post.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-post {
    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    p {
        margin: 0.5rem 0;
        color: var(--zlm-text-color);
    }
}

.posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>