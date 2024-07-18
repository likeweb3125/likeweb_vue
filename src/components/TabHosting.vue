<template>
    <button type="button" class="btn_Hosting" @click="$emit('input', id)" :class="active">
        {{ tab }}
    </button>
</template>

<script>
export default {
    name: "TabHosting",
    props: {
        id: Number,
        tab: String,
        list: Array,
        value: Number,
    },
    computed: {
        active() {
            return this.value === this.id ? "active" : false;
        },
    },
};
</script>

<style scoped>
.btn_Hosting {
    margin: 0 7px;
    display: inline-block;
    vertical-align: top;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    line-height: 20px;
    padding: 15px 20px;
    border-radius: 6px;
    background: #ad2024;
    box-shadow: 3px 3px 6px 0 rgba(129, 15, 18, 0.3);
    transition: all 0.2s;
}

.btn_Hosting.active {
    background: #fff;
    color: #ad2024;
    font-weight: 500;
}

@media screen and (max-width: 1400px) {
    .btn_Hosting {
        font-size: 14px;
        padding: 8px 10px;
    }
}
</style>
