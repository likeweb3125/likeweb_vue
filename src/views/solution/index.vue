<template>
    <div class="page_solution page_sub">
        <div class="sub_title" ref="subTitle">
            <div class="section_inner">
                <h2 class="title">Like WEB Solutions</h2>
                <div class="tit_txt">
                    Like WEB의 솔루션은
                    <strong><b>기업의 서비스를 만들어가는</b> <br>온라인 세상의 <i>Flying Carpet</i> 입니다.</strong>
                </div>
            </div>
            <div class="tab_wrap" :class="tabMenuMove" ref="tabMenu">
                <ul class="tab_menu2">
                    <li v-for="(item, i) in menuDepth" :key="i">
                        <router-link :to="`${item.to}`">
                            {{ item.txt }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="page_solution_inner">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="bottom_section">
            <div class="section_inner">
                <div class="txt">
                    <span><strong>with <b>LIKEWEB</b></strong>.</span>
                    <p>지금 바로, 라이크웹에 프로젝트를 의뢰해보세요!</p>
                </div>
                <a :href="`tel:${companyInformation.tel}`">상세내용 전화 문의하기</a>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "Solution1",
    props: {
        menu: Array,
        companyInformation: Object
    },
    data() {
        return {
            tabMenuMove: {
                on: false,
            },
            headerHeight: 0
        };
    },
    methods: {
        scrollMove() {
            let winScroll = window.scrollY;
            let titleHeight = this.$refs.subTitle.offsetTop + this.$refs.subTitle.clientHeight - this.$refs.tabMenu.offsetHeight - this.headerHeight;
            winScroll >= titleHeight ? this.tabMenuMove.on = true : this.tabMenuMove.on = false;
        },
    },
    computed: {
        menuDepth() {
            const aboutMenu = this.menu.find((menu) => menu.txt === "Solution");
            return aboutMenu ? aboutMenu.depth : [];
        },
    },
    mounted() {
        window.addEventListener("scroll", this.scrollMove);
        EventBus.$on("getHeaderHeight", payload => {
            this.headerHeight = payload;
        });
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollMove);
        EventBus.$off('getHeaderHeight');
    },
};
</script>

<style scoped>
.page_solution {
    word-break: keep-all;
}

.tab_menu2 {
    display: flex;
    background: #fff;
    transition: padding .3s;
}

.tab_menu2 li {
    flex: 1 1 0;
    position: relative;
}

.tab_menu2 li a {
    display: block;
    line-height: 40px;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 20px;
    color: #999;
    position: relative;
    text-align: center;
}

.tab_menu2 li a:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0);
    transition: all 0.3s;
}

.tab_menu2 li a.router-link-active {
    font-weight: 500;
    color: #333;
}

.tab_menu2 li a.router-link-active:after {
    transform: scale(1);
}

.page_solution_inner {
    padding-top: 50px;
    overflow: hidden;
}

.page_solution .sub_title {
    padding-bottom: 0;
}

.page_solution .sub_title .tab_wrap.on {
    padding-top: 40px;
}

.page_solution .sub_title .tab_wrap.on .tab_menu2 {
    position: fixed;
    left: 50%;
    top: 150px;
    width: 100%;
    justify-content: center;
    /*max-width: 1400px;*/
    transform: translateX(-50%);
    padding-top: 20px;
    z-index: 10;
}

.page_solution .sub_title .tab_wrap.on .tab_menu2 li {
    text-align: center;
}

.page_solution .tit_txt {
    padding: 50px 0 60px;
    font-size: 24px;
    color: #333;
}

.page_solution .tit_txt strong {
    display: block;
    font-size: 40px;
    font-weight: 400;
    color: inherit;
}

.page_solution .tit_txt strong b {
    font-weight: 700;
}

.page_solution .tit_txt strong i {
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-weight: 700;
}

.bottom_section {
    background: url(~@/assets/images/bg_bottom.png) no-repeat 0% 50%/cover;
    padding: 90px 0;
    position: relative;
    text-align: center;
}

.bottom_section .section_inner {
    position: relative;
}

.bottom_section .txt {
    text-align: center;
    padding: 0 25px;
}

.bottom_section .txt span {
    display: block;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 60px;
    font-weight: 700;
    color: #ad2024;
}

.bottom_section .txt span strong {
    color: #fff;
    font-weight: 400;
}

.bottom_section .txt span strong b {
    font-weight: 700;
}

.bottom_section .txt p {
    padding-top: 5px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
}

.bottom_section a {
    display: inline-block;
    vertical-align: top;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 26px;
    padding: 15px 40px;
    background: #fff;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #222;
}

@media screen and (max-width: 1400px) {
    .page_solution .tit_txt {
        padding-bottom: 20px;
    }

    .page_solution .tit_txt strong {
        font-size: 36px;
    }

    .page_solution .sub_title .tab_wrap.on .tab_menu2 {
        top: 100px;
    }

    .page_solution_inner {
        padding-top: 0;
    }

    .bottom_section {
        padding: 50px 0;
        background-image: url(~@/assets/images/bg_bottom_tb.png);
    }

    .bottom_section .txt {
        padding-bottom: 35px;
    }

    .bottom_section .txt p {
        padding-top: 0;
    }

    .bottom_section a {
        position: static;
        transform: none;
    }
}

@media screen and (max-width: 768px) {
    .tab_menu2 {
        overflow: auto;
        white-space: nowrap;
    }

    .tab_menu2 li {
        flex: 1 0 140px;
    }

    .tab_menu2 li a {
        font-size: 12px;
        line-height: 30px;
    }

    .page_solution .sub_title {
        padding-top: 50px;
    }

    .page_solution .tit_txt {
        padding: 25px 0 20px;
        font-size: 14px;
    }

    .page_solution .tit_txt strong {
        font-size: 22px;
    }

    .page_solution .sub_title .tab_wrap.on .tab_menu2 {
        top: 70px;
        padding-top: 10px;
        justify-content: flex-start;
    }

    .bottom_section {
        padding: 30px 0;
        background-image: url(~@/assets/images/bg_bottom_m.png);
    }

    .bottom_section .txt {
        padding-bottom: 24px;
    }

    .bottom_section .txt span {
        font-size: 36px;
    }

    .bottom_section .txt p {
        font-size: 16px;
    }

    .bottom_section a {
        padding: 10px 30px;
        font-size: 16px;
    }
}</style>
