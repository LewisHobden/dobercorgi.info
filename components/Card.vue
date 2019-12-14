<template>
    <div class="card">
        <img v-if="guide.imageUrl" class="card-img-top" :src=guide.imageUrl alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ guide.title }}</h5>
            <p class="card-text">{{ guide.text }}</p>
            <a :href=guide.url target="_blank" class="btn btn-primary">Go There</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        guide: {
            type: Object,
            required: true
        }
    }
}
</script>