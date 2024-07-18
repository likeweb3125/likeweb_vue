<template>
    <div class="page_contact page_sub">
        <div class="sub_title">
            <div class="section_inner">
                <h2 class="title">CONTACT US</h2>
            </div>
        </div>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <div class="likeweb_img" :class="onClass" ref="txtLikeweb">
            <div class="txt">
                <strong>LIKE <em>WEB</em></strong>
                <span class="txt1">14년의 제작 노하우로</span>
                <span class="txt2">고객님들과 함께 <br><b>성공적인 웹사이트</b>를 만들어갑니다!</span>
            </div>
            <div class="img">
                <img src="@/assets/images/img_contact.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
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

<style scoped></style>
