<template>
    <div class="page_about page_sub"
        :style="[about5 ? { backgroundImage: `url(${bgAbout5.image})`, transition: 'all .3s', } : { background: 'transparent', transition: 'all .3s' },]">
        <div class="sub_title" :style="about5 ? {background: 'transparent'} : {}">
            <div class="section_inner">
                <h2 class="title">ABOUT</h2>
                <ul class="tab_menu">
                    <li v-for="(item, i) in menuDepth" :key="i">
                        <router-link :to="`${item.to}`">
                            {{ item.txt }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="slide-fade" mode="out-in">
            <router-view :companyInformation="companyInformation">
            </router-view>
        </transition>
        <div class="likeweb_img" :class="onClass" ref="txtLikeweb" v-if="!about5">
            <div class="txt">
                <strong>LIKE <em>WEB</em></strong>
                <span class="txt1">고객 만족 + 즐거움</span>
                <span class="txt2"><b>라이크웹</b>과 함께 시작하세요!</span>
            </div>
            <div class="img">
                <img src="@/assets/images/img_about.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "About",
    props: {
        menu: Array,
        companyInformation: Object,
    },
    data() {
        return {
            bgAbout5: {
                image: require("@/assets/images/img_map.png"),
            },
            about5: false,
            onClass: {
                on: false,
            },
        };
    },
    methods: {
        scroll() {
            if (!this.about5) {
                let winH = window.innerHeight / 1.5;
                let winScroll = window.scrollY;
                let txtTop = this.$refs.txtLikeweb.offsetTop;
                winScroll > txtTop - winH
                    ? (this.onClass.on = true)
                    : (this.onClass.on = false);
            }
        },
    },
    computed: {
        menuDepth() {
            const aboutMenu = this.menu.find((menu) => menu.txt === "About");
            return aboutMenu ? aboutMenu.depth : [];
        },
    },
    created() {
        EventBus.$on("pageAbout5", payload => {
            this.about5 = payload;
        });
    },
    mounted() {
        window.addEventListener("scroll", this.scroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.scroll);
    },
};
</script>

<style>
.page_about {
    background: transparent;
    background-position: right 20% center;
    background-repeat: no-repeat;
}

@media screen and (max-width: 1023px) {
    .page_about {
        background-position: right 30% center;
    }
}

@media screen and (max-width: 767px) {
    .page_about {
        background: none !important;
    }
}
</style>
