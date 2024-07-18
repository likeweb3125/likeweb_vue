<template>
    <button type="button" class="btn_process" @mouseenter="$emit('input', id)" :class="active">
        <strong>{{ titKr }}</strong>
        <em>{{ titEn }}</em>
    </button>
</template>

<script>
export default {
    name: "TabProcessMenu",
    props: {
        id: Number,
        titKr: String,
        titEn: String,
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
.btn_process {
    width: 120%;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.8s;
    height: 90px;
    margin: 15px 0;
}

.btn_process:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-30px);
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.16);
    opacity: 0;
    background: #e64b4b;
    transition: all 0.4s;
    z-index: 1;
}

.btn_process strong {
    font-size: 24px;
    font-weight: 500;
    color: #333;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
}

.btn_process em {
    font-size: 18px;
    color: #999;
    margin-left: 10px;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
}

.btn_process.active {
    justify-content: center;
}

.btn_process.active:before {
    opacity: 1;
    transform: translateX(0);
}

.btn_process.active strong {
    color: #fff;
}

.btn_process.active em {
    color: #fff;
}
</style>
