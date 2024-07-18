<template>
    <div class="page_works page_sub">
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <div class="likeweb_img" :class="onClass" ref="txtLikeweb">
            <div class="txt">
                <strong>LIKE <em>WEB</em></strong>
                <span class="txt1">간편하고 쉽게 관리하는</span>
                <span class="txt2">편리하고 획기적인 <b>웹사이트</b></span>
            </div>
            <div class="img">
                <img src="@/assets/images/img_works.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Works",
    data() {
        return {
            onClass: {
                on: false,
            },
        };
    },
    mounted() {
        window.addEventListener("scroll", this.scroll);
    },
    methods: {
        scroll() {
            let winH = window.innerHeight / 1.5;
            let winScroll = window.scrollY;
            let txtTop = this.$refs.txtLikeweb.offsetTop;
            winScroll > txtTop - winH
                ? (this.onClass.on = true)
                : (this.onClass.on = false);
        },
    },
    destroyed() {
        window.removeEventListener("scroll", this.scroll);
    },
};
</script>

<style scoped>
.page_works .likeweb_img .img:before {
    display: none;
}
</style>
