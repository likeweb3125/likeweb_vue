<template>
    <header id="header" :class="[headerClass, headerOn, pageMain]" ref="header">
        <div class="header_inner">
            <h1 class="logo">
                <a href="/">LIKEWEB</a>
            </h1>
            <button type="button" class="btn_m" @click="toggleMenu">
                <span>메뉴버튼</span>
            </button>
            <div class="menu_wrap">
                <div class="menu_inner">
                    <nav>
                        <ul class="gnb">
                            <li v-for="(listGnb, i) in menu" :key="i" :class="gnbOnClass(i)"
                                @mouseenter="gnbEvent(i, $event)" @mouseleave="gnbEvent(null, $event)">
                                <router-link v-if="pcGnbShow(listGnb)" :to="listGnb.to" @click.native="closeMenu">
                                    {{ convertToUpperCase(listGnb.txt) }}
                                </router-link>
                                <a v-else href="javascript: void(0)" @click="on = i">
                                    {{ convertToUpperCase(listGnb.txt) }}
                                </a>
                                <transition name="gnb-ani">
                                    <ul class="depth2" v-if="i === on">
                                        <li v-for="(listDepth, j) in listGnb.depth" :key="j">
                                            <router-link :to="listDepth.to" @click.native="closeMenu">
                                                {{ listDepth.txt }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                        </ul>
                    </nav>
                    <div class="gnb_util_wrap">
                        <ul class="gnb_util">
                            <li>
                                <strong>With LIKEWEB</strong>
                                <ul class="list_address">
                                    <li>T : 02-784-3125</li>
                                    <li>M : {{ companyInformation.email }}</li>
                                    <li>
                                        서울특별시 강남구 봉은사로55길 17<br>&#40;삼성동
                                        35-25&#41; 가남빌딩 5층
                                    </li>
                                </ul>
                                <router-link to="/about/about_5" class="btn_map" @click.native="closeMenu">
                                    View Map
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/contact/contact_1" @click.native="closeMenu">
                                    <strong>Contact Us</strong>
                                </router-link>
                            </li>
                            <li>
                                <a href="javascript: void(0)"><strong>Brochure</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="util">
                <li>
                    <router-link to="/contact/contact_1" @click.native="closeMenu">
                        Contact us
                    </router-link>
                </li>
                <li>
                    <router-link to="/about/about_5" @click.native="closeMenu">
                        Location
                    </router-link>
                </li>
            </ul>
        </div>
        <a href="javscript: void(0)" class="btn_brochure">
            <span>Brochure</span>
        </a>
    </header>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "Header",
    props: {
        menu: Array,
        companyInformation: Object,
    },
    data() {
        return {
            on: null,
            idx: 0,
            headerClass: "",
            headerOn: {
                on: false,
            },
            pageMain: false,
            headerHeight: 50,
            about5: false,
        };
    },
    methods: {
        toggleMenu() {
            this.headerOn.on = !this.headerOn.on;
            this.on = null;
        },
        closeMenu() {
            this.headerOn.on = false;
            this.headerClass = "";
        },
        gnbEvent(i, e) {
            let winW = window.innerWidth;
            winW > 1400 ? (this.on = i) : e.preventDefault();
        },
        pcGnbShow(i) {
            let winW = window.innerWidth;
            if (winW < 1400) {
                return i.depth.length > 1 ? false : true;
            } else {
                return true;
            }
        },
        gnbOnClass(i) {
            return i === this.on ? "on" : "";
        },
        sendHeaderHeight() {
            this.headerHeight = this.$refs.header.offsetHeight;
            EventBus.$emit('getHeaderHeight', this.headerHeight);
        },
        convertToUpperCase(str) {
            return str.toUpperCase();
        }
    },
    created() {
        EventBus.$on("changeSlide", payload => {
            this.idx = payload;
            this.idx === 1 || this.idx === 2
                ? (this.headerClass = "header_trans")
                : (this.headerClass = "");
        });
        EventBus.$on("headerMain", payload => {
            this.pageMain = payload;
            this.pageMain
                ? (this.pageMain = "header_main")
                : (this.pageMain = "");
            !this.pageMain ? (this.headerClass = "") : false;
        });
        EventBus.$on("pageAbout5", payload => {
            this.about5 = payload;
            this.about5
                ? (this.pageMain = "header_main")
                : (this.pageMain = "");
        });
    },
    mounted() {
        window.addEventListener("scroll", this.sendHeaderHeight);
    },
    destroyed() {
        window.removeEventListener("scroll", this.sendHeaderHeight);
    },
};
</script>

<style scoped>
#header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 200;
    padding: 0 60px;
    z-index: 9999;
    transition: all 0.3s;
}

#header:not(.header_main) {
    background: #fff;
}

#header.about_header {
    background: transparent;
}

#header .header_inner {
    position: relative;
    padding: 50px 0;
}

#header .logo {
    position: relative;
    width: 133px;
    height: 50px;
    display: inline-block;
    vertical-align: top;
    background: url(~@/assets/images/logo.png) no-repeat 50% 50%;
    background-size: 100%;
    z-index: 500;
    transition: all 0.3s;
}

#header .logo a {
    display: block;
    width: 100%;
    height: 100%;
    text-indent: -9999px;
}

#header .btn_m {
    position: absolute;
    right: -6px;
    top: 50px;
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 50px;
    z-index: 350;
}

#header .btn_m:before {
    content: "";
    position: absolute;
    right: 6px;
    top: 13px;
    width: 36px;
    height: 3px;
    background: #333;
    transform: rotateZ(0);
    transition: all 0.3s;
}

#header .btn_m:after {
    content: "";
    position: absolute;
    right: 6px;
    top: 39px;
    width: 20px;
    height: 3px;
    background: #333;
    transform: rotateZ(0);
    transition: all 0.3s;
}

#header .btn_m span {
    position: absolute;
    right: 6px;
    top: 26px;
    display: block;
    text-indent: -9999px;
    width: 40px;
    height: 3px;
    background: #333;
    opacity: 1;
    transition: all 0.3s;
}

#header .util {
    position: absolute;
    right: 0;
    top: 150px;
    text-align: right;
}

#header .util li {
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    margin-top: 20px;
    transition: all 0.3s;
}

#header .util li:first-of-type {
    margin-top: 0;
}

#header .util li a {
    display: inline-block;
    vertical-align: top;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
}

#header .util li span {
    display: inline-block;
    vertical-align: top;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
}

#header .btn_brochure {
    position: fixed;
    right: 60px;
    bottom: 50px;
    width: 91px;
    height: 108px;
    background: url(~@/assets/images/btn_brochure.png) no-repeat 50% 50%;
    background-size: 100%;
    transition: all 0.3s;
    z-index: 100;
}

#header .btn_brochure span {
    position: absolute;
    left: 50%;
    top: 45px;
    transform: translate(-50%, -50%);
    display: block;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 14px;
    font-weight: 500;
    color: #ad2024;
    text-align: center;
    transition: all 0.3s;
}

#header .btn_brochure span:before {
    content: "";
    display: block;
    margin: 0 auto 10px;
    width: 18px;
    height: 16px;
    background: url(~@/assets/images/ic_download.png) no-repeat 50% 50%;
    background-size: 100%;
    transition: all 0.3s;
}

#header.header_trans .logo {
    background-image: url(~@/assets/images/logo_w.png);
}

#header.header_trans .btn_m:before {
    background: #fff;
}

#header.header_trans .btn_m:after {
    background: #fff;
}

#header.header_trans .btn_m span {
    background: #fff;
}

#header.header_trans .util li {
    color: #fff;
}

#header.header_trans .btn_brochure {
    background-image: url(~@/assets/images/btn_brochure_w.png);
}

#header.header_trans .btn_brochure span {
    color: #fff;
}

#header.header_trans .btn_brochure span:before {
    background-image: url(~@/assets/images/ic_download_w.png);
}

#header .menu_wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 300;
    background: #ad2024;
    padding: 0 60px;
    transform: translateY(-100%);
    transition: all 0.8s;
    min-width: 360px;
}

#header .menu_inner {
    max-width: 1310px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
}

#header nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

#header nav .gnb {
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

#header nav .gnb>li {
    position: relative;
    padding-left: 0;
    transition: all 0.3s;
}

#header nav .gnb>li>a {
    display: inline-block;
    vertical-align: top;
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    color: #ad2024;
    transition: all 0.1s;
}

#header nav .gnb>li>a:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 1px;
    background: #fff;
    transition: all 0.3s;
}

#header nav .gnb .depth2 {
    position: absolute;
    left: 0;
    top: 70px;
    padding: 20px 20px 20px 80px;
}

#header nav .gnb .depth2.gnb-ani-enter-active,
#header nav .gnb .depth2.gnb-ani-leave-active {
    transition: all 0.2s;
}

#header nav .gnb .depth2.gnb-ani-enter,
#header nav .gnb .depth2.gnb-ani-leave-to {
    opacity: 0;
    transform: translateX(-80px);
}

#header nav .gnb .depth2 li {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px;
}

#header nav .gnb .depth2 li:last-of-type {
    margin-right: 0;
}

#header nav .gnb .depth2 li a {
    display: block;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.1s;
}

#header nav .gnb .depth2 li a:hover {
    color: #fff;
}

#header nav .gnb>li.on {
    padding-left: 80px;
}

#header nav .gnb>li.on>a {
    color: #fff;
}

#header nav .gnb>li.on>a:before {
    width: 60px;
}

#header nav .gnb .m_gnb_link {
    display: none;
}

#header nav .gnb .depth2 li a:hover {
    color: #fff;
}

#header .gnb_util_wrap {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    display: flex;
    align-items: flex-end;
}

#header .gnb_util>li {
    margin-top: 40px;
}

#header .gnb_util>li:first-of-type {
    margin-top: 0;
}

#header .gnb_util>li>a {
    display: inline-block;
    vertical-align: top;
}

#header .gnb_util strong {
    display: inline-block;
    vertical-align: top;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
}

#header .gnb_util .list_address {
    padding: 10px 0 20px;
}

#header .gnb_util .list_address li {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
}

#header .gnb_util .list_address li:first-of-type {
    margin-top: 0;
}

#header .gnb_util .btn_map {
    display: inline-block;
    vertical-align: top;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    position: relative;
}

#header .gnb_util .btn_map:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 1px;
    background: #fff;
    transition: all 0.3s;
}

#header .gnb_util .btn_map:hover:after {
    width: 100%;
}

#header.on .menu_wrap {
    transform: translateY(0);
}

#header.on .logo {
    background-image: url(~@/assets/images/logo_w.png);
}

#header.on .btn_m span {
    opacity: 0;
}

#header.on .btn_m:before {
    background: #fff;
    right: 9px;
    top: 24px;
    width: 30px;
    transform: rotateZ(-45deg);
}

#header.on .btn_m:after {
    background: #fff;
    right: 9px;
    top: 24px;
    width: 30px;
    transform: rotateZ(45deg);
}

@media screen and (max-width: 1400px) {
    #header {
        padding: 0 25px;
    }

    #header.about_header {
        background: none;
    }

    #header .logo {
        width: 106px;
        height: 40px;
    }

    #header .header_inner {
        padding: 30px 0;
    }

    #header:not(.header_main) {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
    }

    #header .btn_m {
        top: 28px;
    }

    #header .btn_m:before {
        width: 26px;
    }

    #header .btn_m span {
        width: 30px;
        top: 22px;
    }

    #header .btn_m:after {
        top: 31px;
    }

    #header .btn_brochure {
        width: 70px;
        height: 83px;
        right: 30px;
        bottom: 30px;
    }

    #header .btn_brochure span {
        font-size: 13px;
        top: 34px;
    }

    #header .btn_brochure span:before {
        width: 12px;
        margin: 0 auto 5px;
    }

    #header .util {
        display: none;
    }

    #header .menu_wrap {
        padding: 0 95px;
    }

    #header nav {
        height: 65%;
    }

    #header nav .gnb {
        width: 100%;
        height: 75%;
    }

    #header nav .gnb>li>a {
        font-size: 50px;
        line-height: normal;
    }

    #header nav .gnb .depth2 {
        top: 60px;
    }

    #header nav .gnb .depth2.gnb-ani-enter-active,
    #header nav .gnb .depth2.gnb-ani-leave-active {
        transition: all 0.2s;
    }

    #header nav .gnb .depth2.gnb-ani-enter,
    #header nav .gnb .depth2.gnb-ani-leave-to {
        opacity: 0;
        transform: translateX(-20px);
        padding: 10px 10px 10px 80px;
    }

    #header .gnb_util {
        display: flex;
        flex-wrap: wrap;
    }

    #header .gnb_util_wrap {
        position: static;
        transform: none;
        height: 35%;
        display: block;
    }

    #header .gnb_util strong {
        font-size: 24px;
    }

    #header .gnb_util>li {
        margin-top: 40px;
        line-height: 30px;
    }

    #header .gnb_util>li:first-of-type {
        width: 100%;
    }

    #header .gnb_util>li:last-of-type {
        margin-left: 60px;
    }

    #header .gnb_util .list_address {
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
    }

    #header .gnb_util .list_address br {
        display: none;
    }

    #header .gnb_util .list_address li {
        margin: 0;
        font-size: 16px;
    }

    #header .gnb_util .list_address li:nth-of-type(2) {
        margin-left: 40px;
    }

    #header .gnb_util .list_address li:last-of-type {
        width: 100%;
        margin-top: 10px;
    }

    #header .gnb_util .btn_map:after {
        width: 100%;
    }
}

@media screen and (max-width: 800px) {
    #header nav .gnb .depth2 li a {
        font-size: 18px;
    }
}

@media screen and (max-width: 768px) {
    #header {
        padding: 0 15px;
    }

    #header .header_inner {
        padding: 20px 0;
    }

    #header .logo {
        width: 80px;
        height: 30px;
    }

    #header .btn_m {
        width: 30px;
        height: 30px;
        right: 0;
        top: 21px;
    }

    #header .btn_m span {
        right: 0;
        top: 12px;
    }

    #header .btn_m:before {
        right: 0;
        top: 3px;
    }

    #header .btn_m:after {
        right: 0;
        top: 21px;
    }

    #header .menu_wrap {
        padding: 0 35px;
    }

    #header nav .gnb {
        height: 60%;
    }

    #header nav .gnb>li>a {
        font-size: 30px;
    }

    #header nav .gnb .depth2 {
        position: static;
        padding: 5px 0 0;
        height: auto;
    }

    #header nav .gnb .depth2.gnb-ani-enter-active,
    #header nav .gnb .depth2.gnb-ani-leave-active {
        transition: all 0.2s;
    }

    #header nav .gnb .depth2.gnb-ani-enter,
    #header nav .gnb .depth2.gnb-ani-leave-to {
        opacity: 0;
        transform: translate(0, -20px);
        height: 0;
        padding: 0;
    }

    #header nav .gnb .depth2 li {
        margin-top: 5px;
        margin-right: 7%;
    }

    #header nav .gnb .depth2 li a {
        font-size: 14px;
    }

    #header nav .gnb>li.on {
        padding-left: 50px;
    }

    #header nav .gnb>li.on>a:before {
        width: 30px;
    }

    #header nav .gnb>li>a:before {
        top: 18px;
    }

    #header .gnb_util>li {
        line-height: normal;
    }

    #header .gnb_util strong {
        font-size: 20px;
    }

    #header .gnb_util .list_address {
        padding: 15px 0;
    }

    #header .gnb_util .list_address li {
        font-size: 13px;
    }

    #header .gnb_util .list_address li br {
        display: block;
    }

    #header .gnb_util .list_address li:last-of-type {
        margin-top: 5px;
    }

    #header .gnb_util .list_address li:nth-of-type(2) {
        margin-left: 30px;
    }

    #header .gnb_util .btn_map {
        font-size: 16px;
        line-height: 26px;
    }

    #header .btn_brochure {
        display: none;
    }

    #header.on .btn_m:before {
        right: 0;
        top: 14px;
    }

    #header.on .btn_m:after {
        right: 0;
        top: 14px;
    }
}</style>
