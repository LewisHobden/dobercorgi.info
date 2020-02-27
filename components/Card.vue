<template>
<div class="card">
    <img v-if="resource.imageUrl" class="card-img-top" :src=resource.imageUrl alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{ resource.title }}</h5>
        <h6 class="dc-card-subtext">{{ shortUrl(resource.action) }}</h6>

        <p class="card-text">{{ resource.content }}</p>
        <a :href=resource.action target="_blank" class="btn btn-primary">Go There</a>
    </div>
</div>
</template>

<script>
export default {
    name: "Card",
    methods: {
        shortUrl(toShorten) {
            // A not pretty way to shorten the URL. It removes the protocol and aims to just show the hostname.
            return toShorten.replace("https://","").replace("http://","").replace("www.","").split("/")[0];
        }
    },
    props: {
        resource: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.dc-card-subtext {
    font-style: italic;
    font-size: 0.75rem;
}

.card-title {
    margin-bottom: 2px;
}
</style>