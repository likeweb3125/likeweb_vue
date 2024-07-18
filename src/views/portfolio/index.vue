<template>
    <div class="page_portfolio page_sub">
        <div class="sub_title">
            <div class="section_inner">
                <h2 class="title">PORTFOLIO</h2>
            </div>
        </div>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <div class="likeweb_img" :class="onClass" ref="txtLikeweb">
            <div class="txt">
                <strong>LIKE <em>WEB</em></strong>
                <span class="txt1">홈페이지, 쇼핑몰, 모바일까지.</span>
                <span class="txt2"><b>라이크웹</b>은 사용자 편의성을 생각하고
                    <br class="tb_br">웹표준을 준수합니다.</span>
            </div>
            <div class="img">
                <img src="@/assets/images/img_portfolio.png" alt="image">
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

<style>
@media screen and (max-width: 1500px) {
    .cont {
        max-width: 100%;
        padding: 0 25px;
    }

    .top_banner {
        width: 90%;
        margin: 0 auto;
    }

    .value_wrap .img_box {
        width: 90%;
    }
}

@media screen and (max-width: 1023px) {
    .port1 .title_box p {
        font-size: 20px;
    }
}

@media screen and (max-width: 767px) {
    .port1 .title_box p {
        font-size: 13px;
    }
}
</style>
