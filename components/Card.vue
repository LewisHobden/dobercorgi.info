<template>
    <div class="card">
        <img v-if="resource.imageUrl" class="card-img-top" :src=resource.imageUrl alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ resource.title }}</h5>
            <p class="card-text">{{ resource.content }}</p>
            <a :href=resource.action target="_blank" class="btn btn-primary">Go There</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        resource: {
            type: Object,
            required: true
        }
    }
}
</script>