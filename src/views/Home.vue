<template>
    <div class="main_page" :class="transClass" ref="sliderMain">
        <swiper ref="mainSwiper" class="main_slider" :options="swiperOptionMain" @slideChange="onSlideChange"
            @slideChangeTransitionEnd="onSlideChangeTransitionEnd">
            <swiper-slide class="main_slide slide1">
                <section class="page_inner" :class="mainOn1">
                    <h2 class="blind">메인1페이지</h2>
                    <div class="section_inner">
                        <div class="txt">
                            <b>WITH</b>
                            <strong>LIKE <span>WEB</span></strong>
                            <p>
                                <span>우리는 <i>웹을 좋아</i>하고
                                    <i>웹에 대한 생각</i>을 나눕니다</span>
                                <span>웹기획, 디자인, 코딩, 개발, 서버인프라구축,
                                    클라우드 구축, 유지관리까지 원스톱으로
                                    끝!</span>
                            </p>
                        </div>
                        <div class="img_wrap">
                            <div class="img_txt txt1">
                                <div class="img_area">
                                    <img src="@/assets/images/txt_l.png" alt="L">
                                    <img class="img img_main1_1" src="@/assets/images/img_main1_1.gif"
                                        alt="animation image">
                                    <img class="img img_main1_1_1" src="@/assets/images/img_cup.png" alt="image">
                                </div>
                                <div class="img_area">
                                    <img src="@/assets/images/txt_i.png" alt="I">
                                    <img class="img img_main1_2" src="@/assets/images/img_main1_2.gif"
                                        alt="animation image">
                                </div>
                            </div>
                            <div class="img_txt txt2">
                                <div class="img_area">
                                    <img src="@/assets/images/txt_k.png" alt="K">
                                    <img class="img img_main1_3" src="@/assets/images/img_main1_3.gif"
                                        alt="animation image">
                                    <img class="img img_main1_3_1" src="@/assets/images/img_flower.png" alt="image">
                                </div>
                                <div class="img_area">
                                    <img src="@/assets/images/txt_e.png" alt="E">
                                    <img class="img img_main1_4" src="@/assets/images/img_main1_4.gif"
                                        alt="animation image">
                                    <img class="img img_main1_4_1" src="@/assets/images/img_book.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </swiper-slide>
            <swiper-slide class="main_slide slide2">
                <section class="page_inner" :class="mainOn2">
                    <h2 class="blind">메인2페이지</h2>
                    <div class="section_inner">
                        <div class="txt">
                            <b>We Like</b>
                            <strong>Creative</strong>
                            <p>
                                <span>참된 마음, 참된 기술로 참된 디자인을
                                    <br>라이크웹이 만들어가겠습니다.</span>
                            </p>
                        </div>
                        <div class="img_wrap">
                            <span class="figure">What<br>We Do</span>
                            <strong class="txt1">Design</strong>
                            <strong class="txt2">Publishing</strong>
                            <strong class="txt3">Server</strong>
                            <strong class="txt4">Program</strong>
                        </div>
                    </div>
                </section>
            </swiper-slide>
            <swiper-slide class="main_slide slide3">
                <section class="page_inner" :class="mainOn3">
                    <h2 class="blind">메인3페이지</h2>
                    <div class="section_inner">
                        <div class="txt">
                            <b>We Like</b>
                            <strong>
                                Good Quality
                                <i class="ic_dot"></i>
                                <i class="ic_dot"></i>
                                <i class="ic_dot"></i>
                            </strong>
                            <p>
                                <span>라이크웹만의 다양한 디바이스 환경에 맞춘
                                    프로젝트를 소개합니다.</span>
                            </p>
                        </div>
                        <div class="slider_wrap">
                            <swiper ref="portfolioSwiper" class="portfolio_slider" :options="swiperOptionPortfolio">
                                <swiper-slide class="portfolio_slide" v-for="(item, index) in portfolioListData"
                                    :key="index">
                                    <a href="javascript: void(0)" v-if="item.url === ''">
                                        <div class="img" :style="{
                                            backgroundImage: `url('/portfolio_data/thumb/${item.thumb}')`,
                                        }"></div>
                                        <strong>{{ item.project }}</strong>
                                    </a>
                                    <a :href="item.url" target="_blank" v-else>
                                        <div class="img" :style="{
                                            backgroundImage: `url('/portfolio_data/thumb/${item.thumb}')`,
                                        }"></div>
                                        <strong>{{ item.project }}</strong>
                                    </a>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev btn_arrow" slot="button-prev"></div>
                                <div class="swiper-button-next btn_arrow" slot="button-next"></div>
                            </swiper>
                            <router-link to="/portfolio/portfolio_1" class="btn_more">
                                More View
                            </router-link>
                        </div>
                    </div>
                </section>
            </swiper-slide>
            <swiper-slide class="main_slide slide4">
                <section class="page_inner" :class="mainOn4">
                    <h2 class="blind">메인4페이지</h2>
                    <div class="section_inner">
                        <div class="txt">
                            <b>We Like</b>
                            <strong>&#34;Communication&#34;</strong>
                            <p>
                                <span>고객과 협력하여 노력해 온 값진 경험으로
                                    초심을 잃지 않고,
                                </span>
                                <span>소통을 통해 발전하는 다채로운 색을 가진
                                    여러분의 파트너가 되겠습니다.</span>
                            </p>
                        </div>
                        <div class="img_wrap">
                            <img class="img img_main4" src="@/assets/images/img_main4.png" alt="image">
                        </div>
                    </div>
                </section>
            </swiper-slide>
            <swiper-slide class="main_slide footer_slide">
                <Footer :companyInformation="companyInformation" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev btn_arrow" slot="button-prev"></div>
            <div class="swiper-button-next btn_arrow" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import Vue from "vue";
import Footer from "@/components/Footer";
import EventBus from "@/EventBus";
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import {
    Swiper as SwiperClass,
    Pagination,
    Mousewheel,
    Autoplay,
} from "swiper/js/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));

export default Vue.extend({
    components: {
        Swiper,
        SwiperSlide,
        Footer,
    },
    data() {
        return {
            swiperOptionMain: {
                direction: "vertical",
                slidesPerView: "auto",
                navigation: {
                    nextEl: ".main_slider > .swiper-button-next",
                    prevEl: ".main_slider > .swiper-button-prev",
                },
                speed: 600,
                pagination: {
                    el: ".main_slider > .swiper-pagination",
                    type: "custom",
                    renderCustom(swiper, current, total) {
                        total -= 1;
                        current >= swiper.slides.length ? (current -= 1) : current;
                        total < 10 ? (total = "0" + total) : total;
                        current < 10 ? (current = "0" + current) : current;
                        return `<span class="num_current">${current}</span><span class="num_total">${total}</span>`;
                    },
                },
            },
            swiperOptionPortfolio: {
                effect: "fade",
                loop: true,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".portfolio_slider > .swiper-button-next",
                    prevEl: ".portfolio_slider > .swiper-button-prev",
                },
                pagination: {
                    el: ".portfolio_slider > .swiper-pagination",
                    type: "custom",
                    renderCustom(swiper, current, total) {
                        total < 10 ? (total = "0" + total) : total;
                        current < 10 ? (current = "0" + current) : current;
                        return `<span class="num_current">${current}</span> / <span class="num_total">${total}</span>`;
                    },
                },
            },
            transClass: "main1",
            mainOn1: {
                on: false,
            },
            mainOn2: {
                on: false,
            },
            mainOn3: {
                on: false,
            },
            mainOn4: {
                on: false,
            },
            pageMain: true,
            listDefaultNum: 10,
            portfolioList: [],
        };
    },
    props: {
        companyInformation: Object,
    },
    methods: {
        onSlideChange() {
            const mainClass = ["main1", "main2", "main3", "main4"];
            let slideIdx = this.swiper.activeIndex;
            this.transClass = mainClass[slideIdx];
            EventBus.$emit("changeSlide", slideIdx);
        },
        onSlideChangeTransitionEnd() {
            let slideIdx = this.swiper.activeIndex;
            if (slideIdx === 1) {
                this.mainOn2.on = true;
            } else if (slideIdx === 2) {
                this.mainOn3.on = true;
            } else if (slideIdx === 3) {
                this.mainOn4.on = true;
            }
        },
    },
    computed: {
        swiper() {
            return this.$refs.mainSwiper.$swiper;
        },
        portfolioListData() {
            const end = this.listDefaultNum;
            return this.portfolioList.slice(0, end);
        },
    },
    mounted() {
        this.mainOn1.on = true;
        this.$refs.sliderMain.addEventListener("wheel", e => {
            e.deltaY < 0 ? this.swiper.slidePrev() : this.swiper.slideNext();
        });
    },
    created() {
        EventBus.$emit("headerMain", this.pageMain);
        axios
            .get(process.env.BASE_URL + "portfolio_data/portfoilo1.json")
            .then(response => {
                this.portfolioList = response.data.portfolioList;
            })
            .catch(err => {
                console.log(err);
                alert('포트폴리오 리스트를 불러오지 못했습니다.');
                this.$router.push(process.env.BASE_URL);
            });
    },
    destroyed() {
        this.pageMain = false;
        EventBus.$emit("headerMain", this.pageMain);
    },
});
</script>

<style>
@keyframes mainAni11 {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-20%);
    }
}

@keyframes mainAni12 {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(20%);
    }
}

@keyframes fadeEffect {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.main_page {
    width: 100%;
    height: 100vh;
    background: #fff;
    transition: background 0.3s;
}

.main_page.main1 {
    background: #fff;
}

.main_page.main2 {
    background: #da283a;
}

.main_page.main3 {
    background: #5526ff;
}

.main_page.main4 {
    background: #fff;
}

.main_page .main_slider {
    width: 100%;
    height: 100%;
    position: relative;
}

.main_page .main_slider>.btn_arrow {
    position: absolute;
    left: auto;
    right: 60px;
    top: 50%;
    bottom: auto;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid #1a1311;
    opacity: 0.8;
    background: url(../assets/images/btn_prev.png) no-repeat 50% 50%;
    margin: -60px 0 0 0;
    transition: all 0.3s;
}

.main_page .main_slider>.btn_arrow:after {
    display: none;
}

.main_page .main_slider>.btn_arrow.swiper-button-next {
    background: url(../assets/images/btn_next.png) no-repeat 50% 50%;
    margin: 20px 0 0 0;
}

.main_page .main_slider>.btn_arrow.swiper-button-disabled {
    opacity: 0.2;
}

.main_page.main2 .main_slider>.btn_arrow,
.main_page.main3 .main_slider>.btn_arrow {
    border-color: #fff;
    background-image: url(../assets/images/btn_prev_w.png);
}

.main_page.main2 .main_slider>.btn_arrow.swiper-button-next,
.main_page.main3>.main_slider>.btn_arrow.swiper-button-next {
    border-color: #fff;
    background-image: url(../assets/images/btn_next_w.png);
}

.main_page .main_slider>.swiper-pagination {
    position: absolute;
    left: 60px;
    right: auto;
    top: 50%;
    bottom: auto;
    margin: 0;
    transform: translateY(-50%);
    width: auto;
}

.main_page .main_slider>.swiper-pagination span {
    display: block;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    transition: all 0.3s;
}

.main_page .main_slider>.swiper-pagination .num_current {
    padding-bottom: 30px;
}

.main_page .main_slider>.swiper-pagination .num_total {
    padding-top: 30px;
    opacity: 0.2;
}

.main_page.main2 .main_slider>.swiper-pagination span,
.main_page.main3 .main_slider>.swiper-pagination span {
    color: #fff;
}

.main_page .main_slide {
    width: 100%;
    height: 100%;
}

.main_page .page_inner:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: #ddd;
}

.main_page .page_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.main_page .page_inner .section_inner {
    width: 100%;
    display: flex;
    align-items: center;
}

/* .main_page .page_inner:before {content: ''; position: absolute; left: 0; top: 50%; width: 100%; height: 1px; background: #ddd;} */
.main_page .main_slider .img_wrap {
    width: 45%;
    position: relative;
}

.main_page .main_slider .slide1 .img_wrap:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    background: url(../assets/images/bg_main1.png) no-repeat 50% 50%;
    background-size: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: fadeEffect 0.6s 0.5s linear forwards;
}

.main_page .main_slider .slide1 .img_wrap .img_txt {
    display: flex;
}

.main_page .main_slider .slide1 .img_wrap .img_txt.txt1 {
    padding-bottom: 60px;
}

.main_page .main_slider .slide1 .img_wrap .img_txt.txt2 {
    padding-top: 60px;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area {
    margin-right: 60px;
    position: relative;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img {
    position: absolute;
    opacity: 0;
    animation: fadeEffect 0.6s 0.5s linear forwards;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_1 {
    right: -22%;
    bottom: -5%;
    max-width: 157px;
    max-height: 207px;
    /* width: 73%; */
    width: 162px;
    max-width: none;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_1_1 {
    left: 28%;
    bottom: -10px;
    max-width: 24px;
    width: 11%;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_2 {
    right: -85%;
    bottom: -10px;
    max-width: none;
    width: 107px;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_3 {
    left: -19%;
    top: -33%;
    max-width: 153px;
    max-height: 201px;
    /* width: 60%; */
    width: 155px;
    max-width: none;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_3_1 {
    right: 0;
    bottom: -3%;
    max-width: 35px;
    width: 14%;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_4 {
    right: 12px;
    bottom: 21%;
    max-width: 126px;
    max-height: 105px;
    /* width: 56%; */
    width: 126px;
    max-width: none;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_4_1 {
    right: 22%;
    top: 0;
    max-width: 54px;
    width: 24%;
}

.main_page .main_slider .slide1 .img_wrap .img_txt .img_area:last-of-type {
    margin-left: 0 !important;
}

.main_page .main_slider .slide1 .img_wrap .img_txt.txt2 .img_area {
    margin-right: 20px;
}

.main_page .main_slider .txt {
    position: relative;
    width: 55%;
}

.main_page .main_slider .txt b {
    display: block;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 120px;
    font-weight: 700;
    color: #fff;
    line-height: 100px;
    padding: 60px 0;
}

.main_page .main_slider .slide1 .txt b {
    color: #333;
    font-size: 160px;
}

.main_page .main_slider .slide4 .txt b {
    color: #333;
}

.main_page .main_slider .txt strong {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 120px;
    font-weight: 700;
    color: #ad2024;
    line-height: 100px;
    margin: 60px 0;
    transform: translateY(-50px);
    opacity: 0;
    transition: all 0.5s 0.1s;
}

.main_page .main_slider .txt span {
    font-weight: 300;
    color: #333;
}

.main_page .main_slider .txt p {
    position: absolute;
    left: 0;
    bottom: -50px;
}

.main_page .main_slider .txt p span {
    display: block;
    font-size: 20px;
    color: #333;
}

.main_page .main_slider .txt p span:nth-of-type(2) {
    font-size: 18px;
}

.main_page .main_slider .txt p span i {
    font-weight: 500;
}

.main_page .page_inner .img_txt.txt1 {
    animation: mainAni11 0.4s linear forwards;
}

.main_page .page_inner .img_txt.txt2 {
    animation: mainAni12 0.4s linear forwards;
}

.main_page .main_slider .slide2 .txt strong {
    font-size: 120px;
    font-weight: 400;
    color: #fff;
    padding: 0 80px;
    font-family: "Caveat", cursive;
}

.main_page .main_slider .slide2 .txt strong:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 100px;
    border: 10px solid #fff;
    border-right: none;
    box-sizing: border-box;
}

.main_page .main_slider .slide2 .txt strong:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 100px;
    border: 10px solid #fff;
    border-left: none;
    box-sizing: border-box;
}

.main_page .main_slider .slide2 .txt p span {
    color: #fff;
}

.main_page .main_slider .slide2 .txt p br {
    display: none;
}

.main_page .main_slider .slide3 .txt strong {
    font-family: "Caveat", cursive;
    font-size: 120px;
    font-weight: 400;
    color: #fff;
    /*margin: 40px 0; line-height: 130px;*/
}

.main_page .main_slider .slide3 .txt strong:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    border: 1px dashed #fff;
    transform: translateY(-50%);
}

.main_page .main_slider .slide3 .txt strong .ic_dot {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:before {
    content: "";
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    background: #fff;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:after {
    content: "";
    position: absolute;
    left: -3px;
    bottom: -3px;
    width: 6px;
    height: 6px;
    background: #fff;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:nth-of-type(2):before {
    left: 50%;
    top: -3px;
    margin-left: -3px;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:nth-of-type(2):after {
    left: 50%;
    bottom: -3px;
    margin-left: -3px;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:nth-of-type(3):before {
    left: auto;
    right: -3px;
    top: -3px;
}

.main_page .main_slider .slide3 .txt strong .ic_dot:nth-of-type(3):after {
    left: auto;
    right: -3px;
    bottom: -3px;
}

.main_page .main_slider .slide3 .txt p span {
    color: #fff;
}

.main_page .main_slider .slide4 .txt strong {
    font-family: "Caveat", cursive;
    color: #333;
    font-weight: 300;
}

.main_page .main_slider .slide4 .img_wrap:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    height: 445px;
    margin: -222px 0 0 -180px;
    background: url(../assets/images/img_main4_1.png) no-repeat 50% 50%;
    background-size: 100%;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s;
}

.main_page .main_slider .slide4 .img_wrap img {
    position: relative;
    z-index: 10;
}

.main_page .main_slider .slide4 .page_inner.on .img_wrap:before {
    transform: translateY(0);
    opacity: 1;
}

.main_page .main_slider .slider_wrap {
    width: 45%;
    position: relative;
}

.main_page .main_slider .slider_wrap .btn_more {
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 90px;
    display: inline-block;
    vertical-align: top;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
}

.main_page .main_slider .slider_wrap .btn_more:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 1px;
    background: #fff;
    transition: all 0.3s;
}

.main_page .main_slider .slider_wrap .btn_more:hover:after {
    width: 100%;
}

.main_page .main_slider .slide2 .img_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.main_page .main_slider .slide2 .img_wrap:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 618px;
    height: 618px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    transition: all 0.4s;
}

.main_page .main_slider .slide2 .img_wrap:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translateX(-50%);
    width: 358px;
    height: 453px;
    background: url(../assets/images/img_main2.png) no-repeat 50% 50%;
    background-size: 100%;
    z-index: 20;
}

.main_page .main_slider .slide2 .img_wrap .figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    text-align: center;
    background: #000;
    box-shadow: 0 0 0 0 transparent;
    z-index: 10;
    transition: all 0.4s;
}

.main_page .main_slider .slide2 .img_wrap .figure:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 2px solid #fff;
    box-sizing: border-box;
    transition: all 0.4s;
}

.main_page .main_slider .slide2 .img_wrap .figure:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 515px;
    height: 515px;
    border-radius: 100%;
    border: 2px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    transition: all 0.4s;
}

.main_page .main_slider .slide2 .img_wrap strong {
    position: absolute;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    border-radius: 100%;
    opacity: 0;
    transition: all 0.6s;
    z-index: 20;
}

.main_page .main_slider .slide2 .img_wrap strong.txt1 {
    left: 6%;
    top: -100%;
    width: 120px;
    height: 120px;
}

.main_page .main_slider .slide2 .img_wrap strong.txt2 {
    left: 15%;
    top: 125%;
    width: 128px;
    height: 128px;
}

.main_page .main_slider .slide2 .img_wrap strong.txt3 {
    right: 14%;
    top: -80%;
    width: 90px;
    height: 90px;
}

.main_page .main_slider .slide2 .img_wrap strong.txt4 {
    right: 12%;
    top: 80%;
    width: 110px;
    height: 110px;
}

.main_page .main_slider .slide2 .img_wrap strong.txt1:before {
    content: "";
    position: absolute;
    left: -30px;
    top: 30px;
    width: 170px;
    height: 50px;
    border: 4px solid #fff;
    border-radius: 30px;
    border-radius: 100%;
    transform: rotateZ(145deg);
    z-index: -1;
}

.main_page .main_slider .slide2 .img_wrap strong:after {
    content: "";
    position: absolute;
    border-radius: 100%;
    z-index: 30;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background: transparent;
    transform: scale(0);
    transition: all 0.6s;
}

.main_page .main_slider .slide2 .img_wrap strong.txt2:after {
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background: transparent;
    transform: scale(0);
    transition: all 0.6s;
}

.main_page .main_slider .slide2 .img_wrap strong.txt3:after {
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background: transparent;
    transform: scale(0);
    transition: all 0.6s;
}

.main_page .main_slider .slide2 .img_wrap strong.txt4:after {
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    background: transparent;
    transform: scale(0);
    transition: all 0.6s;
}

.main_page .page_inner.on .txt strong {
    opacity: 1;
    transform: translateY(0);
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap .figure {
    box-shadow: 0 0 40px 0 rgb(255 228 228 / 55%);
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap:before {
    transform: translate(-50%, -50%) scale(1);
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap .figure:before {
    transform: translate(-50%, -50%) scale(1);
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap .figure:after {
    transform: translate(-50%, -50%) scale(1);
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap strong {
    opacity: 1;
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt1:after {
    left: -85%;
    top: 85%;
    width: 42px;
    height: 42px;
    transform: scale(1);
    background: #00ebb4;
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt2:after {
    left: 12%;
    top: -140%;
    width: 20px;
    height: 20px;
    transform: scale(1);
    background: #ffc21c;
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt3:after {
    left: -17%;
    top: -65%;
    width: 35px;
    height: 35px;
    transform: scale(1);
    background: #ff4e6c;
}

.main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt4:after {
    left: auto;
    right: -45%;
    top: 190%;
    width: 42px;
    height: 42px;
    transform: scale(1);
    background: #bc0b1d;
}

.main_page .portfolio_slider {
    height: 500px;
    position: static;
    box-shadow: 20px 20px 30px 0 rgba(0, 0, 0, 0.16);
}

.main_page .portfolio_slider .portfolio_slide a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    text-align: right;
    overflow: hidden;
}

.main_page .portfolio_slider .portfolio_slide a .img {
    width: 100%;
    height: 100%;
    position: relative;
    background: transparent 50% 50%;
    background-size: cover;
    transform: scale(1);
    transition: all 2s;
}

.main_page .portfolio_slider .portfolio_slide a .img:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
    transition: all 0.5s;
}

.main_page .portfolio_slider .portfolio_slide a strong {
    position: absolute;
    right: 30px;
    bottom: 30px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 30px);
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    z-index: 20;
}

.main_page .portfolio_slider .portfolio_slide a:hover .img:before {
    opacity: 0.2;
}

.main_page .portfolio_slider .portfolio_slide a:hover .img {
    transform: scale(1.05);
}

.main_page .portfolio_slider .btn_arrow {
    opacity: 1;
    margin: 0;
    position: absolute;
    left: 15px;
    top: auto;
    bottom: -55px;
    width: 40px;
    height: 40px;
    background: url(../assets/images/btn_prev.png) no-repeat 50% 50%;
}

.main_page .portfolio_slider .btn_arrow:after {
    display: none;
}

.main_page .portfolio_slider .btn_arrow.swiper-button-prev {
    transform: rotateZ(-90deg);
}

.main_page .portfolio_slider .btn_arrow.swiper-button-next {
    transform: rotateZ(90deg);
    left: 145px;
}

.main_page .portfolio_slider .swiper-pagination {
    left: 0;
    bottom: -70px;
    width: 200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    color: #ddd;
}

.main_page .portfolio_slider .swiper-pagination span {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
}

.main_page .portfolio_slider .swiper-pagination span.num_current {
    font-weight: 500;
    color: #333;
    margin-right: 10px;
}

.main_page .portfolio_slider .swiper-pagination span.num_total {
    margin-left: 10px;
}

.main_page .footer_slide {
    height: 260px;
}

.main_page .footer_slide #footer {
    height: 100%;
}

@media screen and (max-width: 1400px) {
    .main_page .footer_slide {
        height: 250px;
    }

    .main_page .page_inner:before {
        display: none;
    }

    .main_page .page_inner .section_inner {
        /*display: block;*/
        flex-direction: column;
        padding: 0 25px;
    }

    .main_page .main_slide:not(.footer_slide) {
        padding-top: 100px;
    }

    .main_page .main_slider .txt {
        width: 100%;
    }

    .main_page .main_slider .txt b {
        font-size: 100px;
        padding: 0 0 20px;
    }

    .main_page .main_slider .img_wrap {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .main_page .main_slider .slide1 .img_wrap {
        max-width: 50%;
        padding-top: 35px;
    }

    .main_page .main_slider .slide1 .img_wrap:before {
        background-size: 60%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt {
        justify-content: center;
    }

    .main_page .main_slider .txt p {
        position: static;
        padding-top: 10px;
    }

    .main_page .main_slider .slide1 .txt b {
        font-size: 100px;
        padding: 0;
        line-height: normal;
    }

    .main_page .main_slider .txt strong {
        margin: 0;
        line-height: normal;
        font-size: 80px;
    }

    .main_page .main_slider .txt p span {
        margin-top: 10px;
        font-size: 18px;
    }

    .main_page .main_slider .txt p span:first-of-type {
        margin-top: 0;
    }

    .main_page .main_slider .txt p span:nth-of-type(2) {
        font-size: 16px;
    }

    .main_page .main_slider>.swiper-pagination {
        display: none;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt img:nth-of-type(1) {
        max-height: 234px;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt.txt1 {
        padding-bottom: 10%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt.txt2 {
        padding-top: 10%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_1 {
        width: 73%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_2 {
        width: 100%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_3 {
        width: 60%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt .img_area .img_main1_4 {
        width: 56%;
    }

    .main_page .main_slider>.btn_arrow {
        right: 25px;
    }

    .main_page .main_slider .slide2 .page_inner {
        display: block;
    }

    .main_page .main_slider .slide2 .img_wrap {
        max-width: 100%;
    }

    .main_page .main_slider .slide2 .img_wrap:before {
        width: 480px;
        height: 480px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure {
        width: 140px;
        height: 140px;
        font-size: 20px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure:before {
        width: 310px;
        height: 310px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure:after {
        width: 400px;
        height: 400px;
    }

    .main_page .main_slider .slide2 .txt {
        padding: 90px 0 230px;
        /*padding-bottom: 230px;*/
    }

    .main_page .main_slider .slide2 .txt strong {
        font-size: 100px;
        padding: 0 60px;
    }

    .main_page .main_slider .slide2 .txt strong:before {
        width: 30px;
        height: 80px;
    }

    .main_page .main_slider .slide2 .txt strong:after {
        width: 30px;
        height: 80px;
    }

    .main_page .main_slider .slide2 .img_wrap {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }

    .main_page .main_slider .slide2 .img_wrap:after {
        width: 260px;
        height: 351px;
    }

    .main_page .main_slider .slide2 .img_wrap strong {
        font-size: 13px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt1 {
        width: 90px;
        height: 90px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt2 {
        width: 100px;
        height: 100px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt3 {
        width: 70px;
        height: 70px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt4 {
        width: 88px;
        height: 88px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt1:before {
        left: -23px;
        top: 28px;
        width: 130px;
        height: 32px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt1:after {
        width: 32px;
        height: 32px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt2:after {
        width: 15px;
        height: 15px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt3:after {
        width: 27px;
        height: 27px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt4:after {
        width: 32px;
        height: 32px;
    }

    .main_page .main_slider .slider_wrap {
        width: 100%;
        max-width: 540px;
        margin: 0 auto;
        padding-top: 100px;
    }

    .main_page .portfolio_slider {
        height: 400px;
    }

    .main_page .portfolio_slider .swiper-pagination {
        bottom: 0;
    }

    .main_page .portfolio_slider .btn_arrow {
        bottom: 15px;
    }

    .main_page .main_slider .slider_wrap .btn_more {
        left: 0;
        right: auto;
    }

    .main_page .main_slider .slider_wrap .btn_more:after {
        width: 100%;
    }

    .main_page .main_slider .slide3 .txt strong {
        font-size: 100px;
    }

    .main_page .main_slider .slide4 .img_wrap:before {
        width: 320px;
        height: 396px;
        margin: -198px 0 0 -160px;
    }
}

@media screen and (max-width: 768px) {
    .main_page .footer_slide {
        height: 200px;
    }

    .main_page .footer_slide #footer {
        padding: 0;
    }

    .main_page .main_slide:not(.footer_slide) {
        padding-top: 0;
    }

    .main_page .main_slider>.btn_arrow {
        margin: -25px 0 0;
        right: auto;
        left: 15px;
        width: 30px;
        height: 30px;
        background-size: 15px;
    }

    .main_page .main_slider>.btn_arrow.swiper-button-next {
        margin: -25px 0 0;
        left: 60px;
        background-size: 15px;
    }

    .main_page .main_slider .txt b {
        font-size: 70px;
        padding-bottom: 0;
        line-height: normal;
    }

    .main_page .main_slider .txt strong {
        font-size: 50px;
    }

    .main_page .main_slider .txt p span {
        font-size: 14px;
    }

    .main_page .main_slider .slide1 .txt b {
        font-size: 70px;
    }

    .main_page .main_slider .slide1 .txt p {
        padding-top: 0;
    }

    .main_page .main_slider .slide1 .txt p span:last-of-type {
        display: none;
    }

    .main_page .main_slider .slide1 .img_wrap {
        max-width: calc(100% - 80px);
    }

    .main_page .main_slider .slide1 .img_wrap:before {
        background-size: 100%;
    }

    .main_page .main_slider .slide1 .img_wrap .img_txt img:nth-of-type(1) {
        max-height: 110px;
        height: 100%;
    }

    .main_page .main_slider .slide2 .txt {
        padding: 70px 0 100px;
    }

    .main_page .main_slider .slide2 .txt p br {
        display: block;
    }

    .main_page .main_slider .slide2 .txt strong {
        font-size: 60px;
        padding: 0 40px;
    }

    .main_page .main_slider .slide2 .txt strong:before {
        border-width: 5px;
        width: 20px;
        height: 50px;
    }

    .main_page .main_slider .slide2 .txt strong:after {
        border-width: 5px;
        width: 20px;
        height: 50px;
    }

    .main_page .main_slider .slide2 .img_wrap {
        max-width: 300px;
    }

    .main_page .main_slider .slide2 .img_wrap:after {
        width: 173px;
        height: 219px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure {
        font-size: 13px;
        width: 90px;
        height: 90px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure:before {
        width: 190px;
        height: 190px;
    }

    .main_page .main_slider .slide2 .img_wrap .figure:after {
        width: 250px;
        height: 250px;
    }

    .main_page .main_slider .slide2 .img_wrap:before {
        width: 300px;
        height: 300px;
    }

    .main_page .main_slider .slide2 .img_wrap strong {
        font-size: 10px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt1 {
        width: 60px;
        height: 60px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt1:before {
        border-width: 2px;
        left: -17px;
        top: 20px;
        width: 90px;
        height: 20px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt2 {
        width: 60px;
        height: 60px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt3 {
        width: 40px;
        height: 40px;
    }

    .main_page .main_slider .slide2 .img_wrap strong.txt4 {
        width: 50px;
        height: 50px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt1:after {
        width: 20px;
        height: 20px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt2:after {
        width: 10px;
        height: 10px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt3:after {
        width: 18px;
        height: 18px;
    }

    .main_page .main_slider .slide2 .page_inner.on .img_wrap strong.txt4:after {
        width: 20px;
        height: 20px;
    }

    .main_page .main_slider .slide3 .section_inner {
        padding: 0;
    }

    .main_page .main_slider .slide3 .txt {
        padding: 70px 25px 0;
    }

    .main_page .main_slider .slide3 .txt strong {
        font-size: 60px;
    }

    .main_page .main_slider .slider_wrap {
        padding-top: 53px;
    }

    .main_page .main_slider .slider_wrap .btn_more {
        display: none;
    }

    .main_page .portfolio_slider {
        height: 300px;
        box-shadow: none;
    }

    .main_page .portfolio_slider .portfolio_slide a strong {
        font-size: 30px;
        right: 15px;
        width: calc(100% - 15px);
    }

    .main_page .portfolio_slider .swiper-pagination {
        background: none;
        font-size: 10px;
        width: 120px;
    }

    .main_page .portfolio_slider .swiper-pagination span.num_current {
        color: #fff;
    }

    .main_page .portfolio_slider .btn_arrow {
        background-image: url(../assets/images/btn_prev_w.png);
        background-size: 8px;
        left: 0;
    }

    .main_page .portfolio_slider .btn_arrow.swiper-button-next {
        left: 80px;
    }

    .main_page .main_slider .slide4 .txt {
        padding-bottom: 40px;
    }

    .main_page .main_slider .slide4 .txt p span {
        font-size: 13px;
    }

    .main_page .main_slider .slide4 .txt p span {
        margin-top: 5px;
    }

    .main_page .main_slider .slide4 .txt p span:first-of-type {
        margin-top: 0;
    }

    .main_page .main_slider .slide4 .img_wrap:before {
        width: 170px;
        height: 220px;
        margin: -110px 0 0 -85px;
    }
}
</style>
