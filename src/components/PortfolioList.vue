<template>
    <div class="component_portfolio">
        <div class="section_inner">
            <ul class="tab_menu">
                <li v-for="(item, id) in portfolioTabText" :key="id">
                    <button type="button" class="btn_portfolio" @click="tabClick(id)" :class="{ on: tabNum === id }">
                        {{ item }}
                    </button>
                </li>
            </ul>
        </div>
        <div v-if="tabNum === 1" class="app_section1">
            <div class="section_resize" v-if="resizeMode === 'P'">
                <div class="app_list_wrap">
                    <div class="util_wrap" :class="[this.arrowOn !== 0 ? (this.arrowOn === 1 ? 'active top_active' : 'active bottom_active') : '', txtPosition ? 'on' : '']">
                        <button type="button" class="btn_arrow btn_prev" :class="sectionArrow === -1 ? 'disable' : ''" @click="sectionMove(-1)">이전</button>
                        <button type="button" class="btn_arrow btn_next" :class="sectionArrow === 1 ? 'disable' : ''" @click="sectionMove(1)">다음</button>
                        <div class="pagination">
                            <span class="num_current" v-if="currentSectionIndex + 1 < 10">0{{ currentSectionIndex + 1 }}</span>
                            <span class="num_current" v-else>{{ currentSectionIndex + 1 }}</span>
                            <em>/</em> 
                            <span class="num_total" v-if="portfolioList4.length < 10">0{{ portfolioList4.length }}</span>
                            <span class="num_total" v-else>{{ portfolioList4.length }}</span>
                        </div>
                    </div>
                    <div class="app_item_section p_section" v-for="(item, i) in this.portfolioList4" :key="i" ref="itemApp" :style="bgStyle" :class="i === currentSectionIndex ? 'on' : ''">
                        <div class="app_content">
                            <div class="section_inner" :class="txtPosition ? 'on' : ''">
                                <div class="app_tit">
                                    <div class="tit_inner">
                                        <div class="app_logo">
                                            <img :src="`/portfolio_data/app_img/${item.logo}`" :alt="item.project">
                                        </div>
                                        <h3>{{ item.project }}</h3>
                                        <p v-html="item.txt"></p>
                                    </div>
                                    <ul class="app_info">
                                        <li>
                                            <b>CLIENT</b>
                                            <span>{{ item.client }}</span>
                                        </li>
                                        <li>
                                            <b>TYPE</b>
                                            <span>{{ item.type }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="app_content_slider_wrap">
                                <swiper class="app_content_slider" :options="swiperOptionAppContent">
                                    <swiper-slide class="app_content_slide" v-for="(content, j) in item.thumb" :key="j">
                                        <img :src="`/portfolio_data/app_img/${content}`" alt="image">
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_resize" v-else-if="resizeMode === 'T'">
                <div class="t_section" v-for="(item, i) in this.portfolioList4" :key="i" ref="itemApp" :style="bgStyle" :class="i === currentSectionIndex ? 'on' : ''">
                    <div class="app_tit">
                        <div class="app_logo">
                            <img :src="`/portfolio_data/app_img/${item.logo}`" :alt="item.project">
                        </div>
                        <h3>{{ item.project }}</h3>
                        <p v-html="item.txt"></p>
                    </div>
                    <div class="app_content_slider_wrap">
                        <swiper class="app_content_slider" :options="swiperOptionAppContentT">
                            <swiper-slide class="app_content_slide" v-for="(content, j) in item.thumb" :key="j">
                                <img :src="`/portfolio_data/app_img/${content}`" alt="image">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
            <div class="section_resize" v-else>
                <div class="m_portfolio_slider_wrap" :style="bgStyleM">
                    <swiper class="m_portfolio_slider" ref="portfolioMobile" :options="swiperOptionApp" @slideChange="onSlideChange">
                        <swiper-slide class="t_section" v-for="(item, i) in this.portfolioList4" :key="i" :class="slideMobileIdx === i ? 'on' : ''">
                            <div class="app_tit">
                                <div class="app_logo">
                                    <img :src="`/portfolio_data/app_img/${item.logo}`" :alt="item.project">
                                </div>
                                <h3>{{ item.project }}</h3>
                                <p v-html="item.txt"></p>
                            </div>
                            <div class="app_content_slider_wrap">
                                <swiper class="app_content_slider" :options="swiperOptionAppContentT">
                                    <swiper-slide class="app_content_slide" v-for="(content, j) in item.thumb" :key="j">
                                        <img :src="`/portfolio_data/app_img/${content}`" alt="image">
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </swiper-slide>
                        <div class="btn_next" slot="button-next"></div>
                        <div class="txt_pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
        <div v-else class="section1">
            <div class="section_inner">
                <div v-if="tabNum === 0">
                    <ul class="list_portfolio1">
                        <li v-for="(item, i) in portfolioListData1" :key="i">
                            <a :href="item.url" target="_blank">
                                <div class="img">
                                    <img :src="`/portfolio_data/thumb/${item.thumb}`" :alt="`${item.project}`" />
                                </div>
                                <div class="txt_wrap">
                                    <em>{{ item.kind }}</em>
                                    <strong>{{ item.project }}</strong>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="btn_more_wrap" v-if="moreButton1">
                        <button type="button" @click="dataPush1">
                            <span>More</span>
                        </button>
                    </div>
                </div>
                <div v-else>
                    <ul class="list_portfolio1">
                        <li v-for="(item, i) in portfolioListData3" :key="i">
                            <a :href="item.url" target="_blank">
                                <div class="img">
                                    <img :src="`/portfolio_data/vr_thumb/${item.thumb}`" :alt="`${item.project}`" />
                                </div>
                                <div class="txt_wrap">
                                    <em>{{ item.kind }}</em>
                                    <strong>{{ item.project }}</strong>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="btn_more_wrap" v-if="moreButton3">
                        <button type="button" @click="dataPush3">
                            <span>More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tabNum === 1" class="app_section2">
            <div class="app_tit_box">
                <div class="section_inner">
                    <h3>
                        <b>라이크웹은</b>
                        <span>다양한 프로젝트로 보답합니다.</span>
                    </h3>
                    <button type="button" class="ani_toggle" @click="aniToggle" :class="{ '': clickAniBool, 'pause': !clickAniBool }">애니메이션 토글버튼</button>
                </div>
            </div>
            <div class="txt_ani_box">
                <div class="list_app_txt_wrap" 
                    ref="appWrap" 
                    @mouseenter="aniControl(false)"
                    @mouseleave="aniControl(true)"
                >
                    <ul class="list_app_txt" v-for="(wrap, i) in this.repeatCount" :key="i" ref="appWrapItem" :style="aniBool && clickAniBool ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}">
                        <li v-for="(item, j) in portfolioListData4" :key="j">
                            <span>{{ item.project }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else class="section2">
            <div class="section_inner">
                <h3>Our Works</h3>
                <div class="tab_portfolio">
                    <div class="navigator_bar" :style="`left: ${tabOffsetX}px; width: ${tabItemWidth}px`"></div>
                    <button type="button" ref="tabButton" v-for="(button, i) in this.tabCategory" :key="i"
                        @click="[categoryFilter(i), tabOffsetXFn(i)]" :class="{ active: tabNumber === i }">
                        {{ button }}
                    </button>
                </div>
            </div>
            <transition-group tag="ul" class="list_portfolio2" @before-enter="beforeEnter" @after-enter="afterEnter"
                @enter-cancelled="afterEnter">
                <li v-for="(item, i) in portfolioListData2" :key="item.id" :data-index="i">
                    <div class="logo_box">
                        <img :src="`/portfolio_data/logo/${item.logo}`" :alt="`${item.project}`">
                    </div>
                    <div class="txt_wrap">
                        <em>{{ item.category }}</em>
                        <strong>{{ item.project }}</strong>
                    </div>
                </li>
            </transition-group>
            <div class="btn_more_wrap" v-if="moreButton2">
                <button type="button" @click="dataPush2">
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import EventBus from "@/EventBus";

export default {
    name: "PortfolioList",
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        portfolioList1: Array,
        listNum1: Number,
        portfolioList2: Array,
        listNum2: Number,
        portfolioList3: Array,
        listNum3: Number,
        portfolioList4: Array,
        listNum4: Number,
    },
    data() {
        return {
            swiperOptionAppContent: {
                slidesPerView: "auto",
                observeParents: true,
                observe: true,
            },
            swiperOptionAppContentT: {
                slidesPerView: 1.9,
                centeredSlides: true,
                observeParents: true,
                observe: true,
                spaceBetween: 40,
                loop: true,
                breakpoints: {
                    751: {
                        slidesPerView: 2.5,
                        spaceBetween: 50
                    },
                }
            },
            swiperOptionApp: {
                slidesPerView: 1,
                observeParents: true,
                observe: true,
                loop: true,
                navigation: {
                    nextEl: ".m_portfolio_slider > .btn_next",
                },
                pagination: {
                    el: ".m_portfolio_slider > .txt_pagination",
                    type: "custom",
                    renderCustom(swiper, current, total) {
                        const icon = require('@/assets/images/ic_restart.svg')
                        return `<div class="pagination_inner" style="display: flex; justify-content: center; align-items: center; height: 40px; gap: 0 10px; border: 1px solid #fefefe; border-radius: 8px; box-shadow: 0 0 4px 0 #e5e9ee; background: #fff;">
                            <i class="ic" style="width: 25px; height: 24px; background: url(${icon}) no-repeat 50% 50%/100%;"></i>
                            <strong style="font-size: 16px; font-weight: 500; color: #373d49;">APP 더보기</strong>
                            <div class="pagination_num" style="font-size: 16px; font-weight: 400; color: #999;">
                                <span class="num_current" style="font-weight: 500; color: #373d49;">${current}</span> / <span class="num_total">${total}</span>
                            </div>
                        </div>`;
                    },
                },
            },
            pageNum1: 1,
            moreButton1: false,
            listDefaultNum1: 12,
            pageNum2: 1,
            moreButton2: false,
            listDefaultNum2: 20,
            tabNumber: 0,
            tabCategory: ['All', 'Mobile Web', 'App', 'Solution', 'Hardware'],
            tabOffsetX: 0,
            tabItemWidth: 0,
            addEnter: false,
            portfolioTabText: ['홈페이지', 'APP', 'VR홈페이지'],
            tabNum: 0,
            pageNum3: 1,
            moreButton3: false,
            listDefaultNum3: 12,
            currentSectionIndex: 0,
            headerHeight: 0,
            arrowOn: 0,
            txtPosition: false,
            sectionArrow: 1,
            appWrapItemWidth: 0,
            repeatCount: 2,
            aniBool: true,
            clickAniBool: true,
            resizeMode: 'P',
            slideMobileIdx: 0
        }
    },
    methods: {
        onSlideChange() {
            let slideIdx = this.$refs.portfolioMobile.$swiper.realIndex;
            this.slideMobileIdx = slideIdx;
        },
        aniToggle() {
            this.aniBool = !this.aniBool;
            this.aniBool ? this.clickAniBool = true : this.clickAniBool = false;
        },
        aniControl(bool) {
            bool && this.clickAniBool ? this.aniBool = true : this.aniBool = false;
        },
        tabClick(num) {
            this.tabNum = num;
            if(num === 1) {
                this.$nextTick(() => {
                    if(this.$refs.appWrapItem) {
                        this.appWrapItemWidth = this.$refs.appWrapItem[0].clientWidth;
                        this.appListLoop();
                    }
                });
            }
        },
        dataPush1() {
            this.pageNum1++;
        },
        dataPush2() {
            this.pageNum2++;
        },
        dataPush3() {
            this.pageNum3++;
        },
        categoryFilter(id) {
            this.tabNumber = id;
            this.pageNum2 = 1;
        },
        tabOffsetXFn(idx) {
            let offestX = this.$refs.tabButton[idx].offsetLeft;
            let width = this.$refs.tabButton[idx].clientWidth;
            this.tabOffsetX = offestX;
            this.tabItemWidth = width;
        },
        beforeEnter(el) {
            this.$nextTick(() => {
                !this.addEnter
                    ? el.style.transitionDelay = 10 * parseInt(el.dataset.index, 10) + 'ms'
                    : this.addEnter = false;
            })
        },
        afterEnter(el) {
            el.style.transitionDelay = '';
        },
        scrollMove() {
            const itemAppRefs = this.$refs.itemApp;
            if (!itemAppRefs) {
                return false;
            }
            
            if(this.currentSectionIndex === 0) {
                this.arrowOn = 1
            } else if(this.currentSectionIndex === itemAppRefs.length - 1) {
                this.arrowOn = -1
            } else {
                this.arrowOn = 0
            }

            const windowHeight = window.innerHeight;
            const windowHeightHalf = windowHeight / 2;

            for (let i = 0; i < itemAppRefs.length; i++) {
                const firstSectionTop = itemAppRefs[0].getBoundingClientRect().top - this.headerHeight;
                const lastSectionTop = itemAppRefs[itemAppRefs.length - 1].getBoundingClientRect().top - this.headerHeight;
                firstSectionTop <= 0 && lastSectionTop > 0 ? this.txtPosition = true : this.txtPosition = false;

                const currentSectionHeight = itemAppRefs[i].offsetHeight;
                if(i === 0) {
                    this.sectionArrow = -1;
                } else if(i === itemAppRefs.length - 1) {
                    this.sectionArrow = 1;
                } else {
                    this.sectionArrow = 0;
                }

                if (itemAppRefs[i].getBoundingClientRect().top + currentSectionHeight - this.headerHeight - windowHeightHalf > 2) {
                    this.currentSectionIndex = i;
                    break;
                }
            }
        },
        scrollToPosition(top) {
            window.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            });
        },
        sectionMove(direction) {
            const scrollY = window.scrollY;
            const newIndex = this.currentSectionIndex + direction;
            if (newIndex >= 0 && newIndex < this.portfolioList4.length) {
                const topPosition = scrollY + this.$refs.itemApp[newIndex].getBoundingClientRect().top - this.headerHeight;
                this.scrollToPosition(topPosition);
            }
        },
        appListLoop() {
            const windowWidth = window.innerWidth;

            while (this.appWrapItemWidth < windowWidth) {
                if(this.appWrapItemWidth >= windowWidth) {
                    break; 
                }
                this.appWrapItemWidth += (this.appWrapItemWidth / this.repeatCount);
                this.repeatCount++;
            }
        },
        mobileComponent() {
            let winW = window.innerWidth;
            if(winW < 768) {
                this.resizeMode = 'M';
            } else if(winW < 1400) {
                this.resizeMode = 'T'
            } else {
                this.resizeMode = 'P';
            }
        },
    },
    computed: {
        bgStyle() {
            const bgImageUrl = `/portfolio_data/app_img/${this.portfolioList4[this.currentSectionIndex].bg}`;
            return {
                background: `url('${bgImageUrl}') no-repeat 50% 50%/cover fixed`,
                transition: 'background .3s',
            };
        },
        bgStyleM() {
            const bgImageUrl = `/portfolio_data/app_img/${this.portfolioList4[this.slideMobileIdx].bg}`;
            return {
                background: `url('${bgImageUrl}') no-repeat 50% 50%/cover fixed`,
                transition: 'background .3s',
            };
        },
        portfolioListData1() {
            const end = this.pageNum1 * this.listDefaultNum1;
            return this.portfolioList1.slice(0, end);
        },
        portfolioListData2() {
            let listData = '';
            for (let i = 0; i < this.tabCategory.length; i++) {
                if (this.tabNumber === i) {
                    let arr = this.tabCategory[i].split(" ");
                    let str = arr[arr.length - 1];
                    listData = this.portfolioList2.filter(data => data.category.split(" ").includes(str));
                } else if (this.tabNumber === 0) {
                    listData = this.portfolioList2;
                }
            }
            const end = this.pageNum2 * this.listDefaultNum2;
            return listData.slice(0, end);
        },
        portfolioListData3() {
            const end = this.pageNum3 * this.listDefaultNum3;
            return this.portfolioList3.slice(0, end);
        },
        portfolioListData4() {
            return this.portfolioList4;
        },
    },
    created() {
        this.mobileComponent();
        window.addEventListener('resize', this.mobileComponent);
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.scrollMove();
            if(this.$refs.appWrapItem) {
                this.appListLoop();
            }
        });

        window.addEventListener('scroll', this.scrollMove);
        EventBus.$on("getHeaderHeight", payload => {
            this.headerHeight = payload;
        });
        this.tabItemWidth = this.$refs.tabButton[0].clientWidth;
    },
    destroyed() {
        window.removeEventListener('resize', () => {
            this.scrollMove();
            if(this.$refs.appWrapItem) {
                this.appListLoop();
            }
        });
        window.removeEventListener('scroll', this.scrollMove);
        EventBus.$off('getHeaderHeight');
    },
    updated() {
        const listLength1 = this.pageNum1 * this.listDefaultNum1;
        this.portfolioListData1.length >= listLength1
            ? (this.moreButton1 = true)
            : (this.moreButton1 = false);
        const listLength2 = this.pageNum2 * this.listDefaultNum2;
        this.portfolioListData2.length >= listLength2
            ? (this.moreButton2 = true)
            : (this.moreButton2 = false);
        const listLength3 = this.pageNum3 * this.listDefaultNum3;
        this.portfolioListData3.length >= listLength3
            ? (this.moreButton3 = true)
            : (this.moreButton3 = false);
    }
};
</script>

<style scoped>
.tab_menu {
    padding-top: 30px;
}

@media screen and (max-width: 768px) {
    .tab_menu {
        padding-top: 20px;
    }
}

.v-enter-active,
.v-leave-active,
.v-move {
    transition: opacity 1s, transform 1s;
}

.v-leave-active {
    position: absolute !important;
}

.v-enter {
    opacity: 0;
    transform: translateY(-20px);
    z-index: 2;
}

.v-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.component_portfolio .section1 {
    padding: 40px 0 80px;
}

.component_portfolio .section2 {
    background: #f5f5f5;
    padding: 140px 0 100px;
}

.component_portfolio .section2 h3 {
    font-size: 36px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-bottom: 30px;
    color: #333;
}

.component_portfolio .btn_more_wrap {
    padding-top: 0;
}

.list_portfolio1:after {
    content: '';
    display: block;
    clear: both;
}

.list_portfolio1 li {
    margin: 0 40px 60px 0;
    float: left;
    width: calc(100% / 3 - 27px);
}

.list_portfolio1 li:nth-of-type(3n) {
    margin-right: 0;
}

.list_portfolio1 li a {
    display: block;
}

.list_portfolio1 .img {
    position: relative;
}

.list_portfolio1 .img:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all .3s;
}

.list_portfolio1 .img:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 63px;
    height: 64px;
    transform: translate(-50%, 0);
    background: url(../assets/images/hover_arrow.png) no-repeat 50% 50%;
    opacity: 0;
    transition: all .4s;
}

.list_portfolio1 li a:hover .img:before {
    opacity: 1;
}

.list_portfolio1 li a:hover .img:after {
    opacity: 1;
    transform: translate(-50%, -50%);
}

.list_portfolio1 .img img {
    width: 100%;
}

.list_portfolio1 .txt_wrap {
    padding: 20px;
}

.list_portfolio1 .txt_wrap em {
    display: block;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #999;
}

.list_portfolio1 .txt_wrap strong {
    display: block;
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-top: 5px;
}

.tab_portfolio {
    position: relative;
    display: flex;
    overflow: auto;
    flex-wrap: nowrap;
}

.tab_portfolio .navigator_bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #000;
    border-radius: 10px;
    transition: all .3s;
}

.tab_portfolio button {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #999;
    line-height: 30px;
    padding: 5px 15px;
    transition: all .3s;
    white-space: nowrap;
}

.tab_portfolio button.active {
    color: #fff;
    font-weight: 500;
}

.list_portfolio2 {
    padding-top: 60px;
    min-height: 600px;
    max-width: 1420px;
    margin: 0 auto;
}

.list_portfolio2:after {
    content: '';
    display: block;
    clear: both;
}

.list_portfolio2 li {
    float: left;
    margin: 0 10px 40px;
    width: calc(20% - 20px);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
}

.list_portfolio2 .logo_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    position: relative;
}

.list_portfolio2 .logo_box:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    height: 1px;
    background: #efefef;
}

.list_portfolio2 .logo_box img {
    max-width: calc(100% - 20px);
    max-height: 100%;
}

.list_portfolio2 .txt_wrap {
    padding: 20px 20px 30px;
}

.list_portfolio2 .txt_wrap em {
    display: block;
    font-size: 18px;
    color: #999;
    font-family: "Montserrat", sans-serif;
}

.list_portfolio2 .txt_wrap strong {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    min-height: 62px;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
}

@media screen and (max-width: 1400px) {
    .component_portfolio .section1 {
        padding: 40px 0 0;
    }

    .component_portfolio .section2 {
        padding: 80px 0 0;
    }

    .list_portfolio1 li {
        margin: 0 28px 40px 0;
        width: calc(50% - 14px);
    }

    .list_portfolio1 li:nth-of-type(3n) {
        margin-right: 28px;
    }

    .list_portfolio1 li:nth-of-type(2n) {
        margin-right: 0;
    }

    .list_portfolio1 .txt_wrap {
        padding: 20px 0;
    }

    .list_portfolio1 .txt_wrap strong {
        padding-top: 0;
    }

    .list_portfolio2 {
        padding: 60px 18px 0;
    }

    .list_portfolio2 li {
        margin: 0 7px 30px;
        width: calc(33.333% - 14px);
    }

    .list_portfolio2 .logo_box {
        padding: 0;
    }

    .list_portfolio2 .logo_box:after {
        width: calc(100% - 40px);
    }

    .list_portfolio2 .txt_wrap {
        padding: 20px 20px 30px;
    }
}

@media screen and (max-width: 768px) {
    .component_portfolio .section1 {
        padding: 20px 0 0;
    }

    .component_portfolio .section2 h3 {
        font-size: 22px;
    }

    .list_portfolio1 li {
        margin: 0 0 40px 0 !important;
        width: 100%;
    }

    .list_portfolio1 .txt_wrap {
        padding: 10px 0 0;
    }

    .list_portfolio1 .txt_wrap em {
        font-size: 14px;
    }

    .list_portfolio1 .txt_wrap strong {
        font-size: 20px;
    }

    .list_portfolio2 {
        padding: 60px 10px 30px;
    }

    .list_portfolio2 li {
        margin: 0 5px 20px;
        width: calc(50% - 10px);
    }

    .list_portfolio2 .logo_box {
        height: 80px;
    }

    .list_portfolio2 .logo_box:after {
        width: calc(100% - 20px);
    }

    .list_portfolio2 .txt_wrap {
        padding: 10px 10px 20px;
    }

    .list_portfolio2 .txt_wrap em {
        font-size: 14px;
    }

    .list_portfolio2 .txt_wrap strong {
        font-size: 15px;
    }
}

/* 231004 포트폴리오 app페이지 추가 */
.app_section1 .section_inner {
    height: calc(100% - 150px);
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
}

.app_slider_wrap {
    position: relative;
    height: 100%;
}

.app_slider {
    height: 100%;
    overflow: visible;
}

.app_slider .app_slide {
    height: 100%;
}

.p_section .app_tit {
    position: relative;
}
.p_section .app_tit .tit_inner .app_logo {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s;
}
.p_section .app_tit .tit_inner h3 {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .05s;
}
.p_section .app_tit .tit_inner p {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .1s;
}

.p_section .app_tit .app_info li {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .15s;
}
.p_section .app_tit .app_info li:nth-of-type(2) {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .2s;
}

.app_section1 .btn_arrow {
    z-index: 20;
    margin: 0;
    position: relative;
    right: auto;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 100%;
    transition: all .3s;
    text-indent: -9999px;
}
.app_section1 .btn_arrow.disable {
    opacity: .3;
    cursor: auto;
    pointer-events: none;
}
.app_section1 .btn_arrow.disable:hover:before {
    display: none;
}
.app_section1 .btn_arrow.disable:hover:after {
    border-bottom-color: #222;
    border-left-color: #222;
}

.app_section1 .btn_arrow.swiper-button-next:after, .app_section1 .btn_arrow.btn_next:after {
    transform: translate(-50%, -50%) rotateZ(-135deg) skew(-3deg, -3deg);
    margin-left: -5px;
}

.app_section1 .btn_arrow:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 66px;
    height: 66px;
    background: transparent;
    box-shadow: 0 0 12px 0 rgba(116, 124, 155, 0);
    border-radius: 100%;
    transition: all .3s;
}

.app_section1 .btn_arrow:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: 5px;
    transform: translate(-50%, -50%) rotateZ(45deg) skew(-3deg, -3deg);
    width: 18px;
    height: 18px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 3px solid #222;
    border-top-color: transparent;
    border-right-color: transparent;
    background: none;
}

.app_section1 .btn_arrow:hover:before {
    background: #fff;
    box-shadow: 0 0 12px 0 rgba(116, 124, 155, 0.08);
}

.app_section1 .btn_arrow:hover:after {
    border-bottom-color: #ad2024;
    border-left-color: #ad2024;
}

.app_section1 .swiper-pagination, .app_section1 .pagination {
    position: absolute;
    right: auto;
    left: 50%;
    top: 0;
    bottom: auto;
    height: 80px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    font-size: 20px;
    transform: translateX(-50%);
    color: rgba(34, 34, 34, 0.6);
    font-family: "Oxanium", 'Noto Sans KR', cursive;
}

.app_section1 .pagination span {
    font-size: 20px; 
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    color: rgba(34, 34, 34, 0.6);
}
.app_section1 .pagination span.num_current {
    font-size: 24px;
    font-weight: 500;
    color: #222;
}
.app_section1 .pagination em {
    font-size: 20px;
    transform: translateX(-50%);
    color: rgba(34, 34, 34, 0.6);
    font-family: "Oxanium", 'Noto Sans KR', cursive;
}

.app_section1 .app_content {
    display: flex;
    height: 100%;
    position: relative;
    z-index: 1;
}

.app_section1 .app_logo {
    height: 40px;
}

.app_section1 .app_logo img {
    height: 100%;
}

.app_section1 .p_section .app_tit {
    width: 35%;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
}

.app_section1 .p_section .app_tit h3 {
    font-size: 52px;
    font-weight: 700;
    color: #222;
    padding-top: 20px;
}

.app_section1 .p_section .app_tit p {
    font-size: 24px;
    font-weight: 500;
    color: #222;
    padding-top: 10px;
}

.app_section1 .p_section .app_tit .app_info {
    padding-top: 15vh;
}

.app_section1 .p_section .app_tit .app_info li {
    margin-top: 24px;
}

.app_section1 .p_section .app_tit .app_info li:first-of-type {
    margin-top: 0;
}

.app_section1 .p_section .app_tit .app_info b {
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: #222;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
}

.app_section1 .p_section .app_tit .app_info span {
    display: block;
    font-size: 22px;
    color: rgba(34, 34, 34, 0.8);
    padding-top: 3px;
}

.p_section .app_content_slider_wrap {
    width: 60%;
    margin-left: auto;
    display: flex; 
    align-items: center;
    position: relative;
    z-index: 20;
    cursor: url(../assets/images/cursor.png), auto;
}

.p_section .app_content_slider_wrap .app_content_slider {
    padding: 60px 300px 60px 0;
}

.app_content_slider .app_content_slide {
    transform: translateY(0);
    border-radius: 40px;
    overflow: hidden;
    box-shadow: inset 23.6px 1.6px 23.6px 0 rgba(255, 255, 255, 0), inset -23.6px -1.6px 23.6px 0 rgba(64, 82, 128, 0), 60px 48px 48px 0 rgba(107, 127, 153, 0);
    transition: all .3s;
}

.p_section .app_content_slider .app_content_slide {
    margin-right: 88px;
    width: 346px;
}

.p_section .app_content_slider .app_content_slide:last-of-type {
    margin-right: 0;
}

.app_content_slider .app_content_slide img {
    width: 100%;
}

.app_content_slider .app_content_slide.swiper-slide-active {
    box-shadow: inset 23.6px 1.6px 23.6px 0 rgba(255, 255, 255, 0.8), inset -23.6px -1.6px 23.6px 0 rgba(64, 82, 128, 0.1), 60px 48px 48px 0 rgba(107, 127, 153, 0.2);
}

.p_section .app_content_slider .app_content_slide.swiper-slide-active {
    transform: translateY(-60px);
}

.app_list_wrap {
    position: relative; 
    overflow: hidden;
}

.app_item_section {
    height: 100vh; 
    position: relative;
}

.app_section1 .util_wrap {
    position: absolute; 
    left: 50%; 
    top: 350px; 
    z-index: 50;
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: -700px;
}

.app_section1 .util_wrap.bottom_active {
    top: auto;
    bottom: calc(100vh - 430px);
}

.app_section1 .util_wrap.on {
    position: fixed;
    top: 500px !important;
    bottom: auto !important;
}

.app_section1 .section_inner.on {
    position: fixed;
    top: 150px;
}

.app_section1 .app_item_section.on {
    z-index: 20;
}

.app_section1 .app_item_section.on .app_tit .tit_inner .app_logo {
    opacity: 1;
    transform: translateY(0);
}
.app_section1 .app_item_section.on .app_tit .tit_inner h3 {
    opacity: 1;
    transform: translateY(0);
}
.app_section1 .app_item_section.on .app_tit .tit_inner p {
    opacity: 1;
    transform: translateY(0);
}
.app_section1 .app_item_section.on .app_tit .app_info li {
    opacity: 1;
    transform: translateY(0);
}
.app_section2 .app_tit_box {
    padding: 40px 0;
}
.app_section2 .app_tit_box h3 {
    display: inline-block;
    font-size: 32px;
    font-weight: 700;
    color: #000;
}

.app_section2 .app_tit_box h3 b {
    display: block;
    font-size: 40px;
}

.app_section2 .app_tit_box .ani_toggle {
    position: relative;
    display: inline-block;
    vertical-align: bottom;
    text-indent: -9999px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #222;
    margin-left: 10px;
    background-position: 0% 0%;
    transition: transform 0.3s;
    backface-visibility: hidden;
}

.app_section2 .app_tit_box .ani_toggle:before {
    content: '';
    position: absolute;
    left: 14px;
    top: 14px;
    width: 4px;
    height: 14px;
    background: #fff;
    backface-visibility: hidden;
    transform-origin: 50% 100%;
    transform: translateX(0) translateZ(0);
    clip-path: polygon(0 0, 5px 0, 5px 14px, 0 14px);
    transition: clip-path 0.3s ease, width .3s;
    transition-delay: 0s;
}

.app_section2 .app_tit_box .ani_toggle:after {
    content: '';
    position: absolute;
    left: 16px;
    top: 14px;
    width: 4px;
    height: 14px;
    background: #fff;
    backface-visibility: hidden;
    transform-origin: 50% 100%;
    transform: translateX(6px) translateZ(0);
    clip-path: polygon(0 0, 5px 0, 5px 14px, 0 14px);
    transition: clip-path 0.3s ease;
    animation: to-pause 1s ease forwards;
}

.app_section2 .app_tit_box .ani_toggle.pause:before {
    width: 14px;
    clip-path: polygon(0 0, 14px 8px, 14px 8px, 0 15px);
    transition-delay: 0.6s;
}

.app_section2 .app_tit_box .ani_toggle.pause:after {
    animation: to-play 0.6s ease forwards;
}

@keyframes to-play {
    15% {
        transform: translateX(6px) scaleY(1.1);
    }
    30% {
        transform: translateX(6px) scaleY(0.9);
    }
    45% {
        transform: translateX(6px) scaleY(1.15);
        clip-path: polygon(0 0, 5px 0, 5px 14px, 0 14px);
        transform-origin: 50% 100%;
    }
    60% {
        clip-path: polygon(0 9px, 5px 9px, 5px 14px, 0 14px);
        transform-origin: 50% 10.5px;
        transform: translateX(6px);
    }
    99% {
        transform: translateX(0) rotate(-270deg);
    }
    100% {
        clip-path: polygon(0 9px, 5px 9px, 5px 14px, 0 14px);
        transform-origin: 50% 10.5px;
        transform: translateX(0) rotate(-270deg) scale(0);
    }
}

@keyframes to-pause {
    0% {
        clip-path: polygon(0 9px, 5px 9px, 5px 14px, 0 14px);
        transform-origin: 50% 10.5px;
        transform: translateX(0) rotate(-270deg) scale(0);
    }
    39% {
        transform: translateX(0) rotate(-270deg) scale(0);
    }
    40% {
        transform: translateX(0) rotate(-270deg);
    }
    50% {
        clip-path: polygon(0 9px, 5px 9px, 5px 14px, 0 14px);
        transform-origin: 50% 10.5px;
        transform: translateX(6px) rotate(0deg);
    }
    60% {
        clip-path: polygon(0 0, 5px 0, 5px 14px, 0 14px);
        transform-origin: 50% 100%;
    }
    70% {
        transform: translateX(6px) scaleY(1.15);
    }
    80% {
        transform: translateX(6px) scaleY(0.9);
    }
    90% {
        transform: translateX(6px) scaleY(1.05);
    }
    100% {
        clip-path: polygon(0 0, 5px 0, 5px 14px, 0 14px);
        transform-origin: 50% 100%;
        transform: translateX(6px);
    }
}

.app_section2 .list_app_txt_wrap {
    overflow: hidden; 
    display: flex;
}

.txt_ani_box {
    overflow: hidden;
    width: 100%;
}

.list_app_txt {
    display: flex;
    animation: ticker 20s linear infinite;
}

.list_app_txt li {
    flex: 0 0 auto;
    padding: 0 40px;
}

.list_app_txt span {
    white-space: nowrap;
    overflow: hidden;
    font-size: 50px;
    font-weight: 700;
    color: #c3c3c3;
    transition: all .3s;
}

.list_app_txt span:hover {
    color: #000;
}

@keyframes ticker {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

/* 태블릿 */
.t_section {
    padding: 120px 0 0;
}
.t_section .app_tit {
    text-align: center; 
    padding-bottom: 30px;
}
.t_section .app_tit .app_logo {
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s;
}
.t_section .app_tit h3 {
    padding-top: 15px;
    font-size: 36px;
    font-weight: 700;
    color: #222;
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .05s;
}
.t_section .app_tit p {
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #222;
    opacity: 0;
    transform: translateY(30px);
    transition: all .3s .1s;
}
.t_section.on .app_tit .app_logo {
    opacity: 1;
    transform: translateY(0);
}
.t_section.on .app_tit h3 {
    opacity: 1;
    transform: translateY(0);
}
.t_section.on .app_tit p {
    opacity: 1;
    transform: translateY(0);
}

.t_section .app_content_slider_wrap .app_content_slider {
    padding: 30px 0;
}

.t_section .app_content_slider .app_content_slide {
    border-radius: 35px;
}

.t_section .app_content_slider .app_content_slide.swiper-slide-active {
    box-shadow: inset 21px 1.4px 21px 0 rgba(255, 255, 255, 0.8), inset -21px -1.4px 21px 0 rgba(64, 82, 128, 0.1), 50px 40px 40px 0 rgba(107, 127, 153, 0.2);
    transform: translateY(-30px);
}

.m_portfolio_slider {
    padding-bottom: 70px;
}
.m_portfolio_slider .txt_pagination {
    position: absolute;
    left: 0;
    top: auto;
    bottom: 10px;
    width: 100%;
    padding: 0 20px;
}

.m_portfolio_slider .btn_next {
    position: absolute;
    left: 50%;
    top: auto;
    bottom: 10px;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    height: 40px;
    z-index: 100;
    cursor: pointer;
}

@media screen and (max-width: 1400px) {
    .app_section2 .app_tit_box {
        padding-top: 80px;
    }
}

@media screen and (max-width: 768px) {
    .t_section {
        padding: 90px 0 0;
    }
    .t_section .app_tit {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0 10px;
        padding-bottom: 25px;
    }
    .t_section .app_tit .app_logo {
        height: 28px;
    }
    .t_section .app_tit h3 {
        padding-top: 0;
        font-size: 22px;
    }
    .t_section .app_tit p {
        flex: 0 0 100%;
    }
    .t_section .app_content_slider_wrap .app_content_slider {
        padding: 20px 0;
    }
    .t_section .app_content_slider .app_content_slide {
        border-radius: 20px;
    }
    .t_section .app_content_slider .app_content_slide.swiper-slide-active {
        transform: translateY(-20px);
        box-shadow: inset 12.4px 0.8px 12.4px 0 rgba(255, 255, 255, 0.8), inset -12.4px -0.8px 12.4px 0 rgba(64, 82, 128, 0.1), 18px 18px 18px 0 rgba(107, 127, 153, 0.16);
    }
    .app_section2 .app_tit_box {
        padding: 40px 0 20px;
    }
    .app_section2 .app_tit_box h3 {
        font-size: 22px;
    }
    .app_section2 .app_tit_box h3 b {
        font-size: 28px;
    }
    .list_app_txt li {
        padding: 0 20px;
    }
    .list_app_txt span {
        font-size: 28px;
    }
    .app_section2 .app_tit_box .ani_toggle {
        position: absolute;
        right: 20px;
        bottom: 0;
        width: 30px;
        height: 30px;
    }
    .app_section2 .app_tit_box .ani_toggle:before {
        width: 3px;
        height: 10px;
        left: 10px;
        top: 10px;
    }
    .app_section2 .app_tit_box .ani_toggle:after {
        width: 3px;
        height: 10px;
        left: 10px;
        top: 10px;
    }
    .app_section2 .app_tit_box .ani_toggle.pause:before {
        width: 10px;
        clip-path: polygon(0 0, 10px 6px, 10px 6px, 0 10px)
    }

    .app_section2 .app_tit_box .ani_toggle {
        position: absolute;
        right: 20px;
        bottom: 0;
        width: 30px;
        height: 30px;
    }

    .app_section2 .app_tit_box .ani_toggle:before {
        left: 10px;
        top: 10px;
        width: 3px;
        height: 10px;
        clip-path: polygon(0 0, 3px 0, 3px 10px, 0 10px);
    }

    .app_section2 .app_tit_box .ani_toggle:after {
        left: 10px;
        top: 10px;
        width: 3px;
        height: 10px;
        clip-path: polygon(0 0, 3px 0, 3px 10px, 0 10px);
    }

    .app_section2 .app_tit_box .ani_toggle.pause:before {
        width: 10px;
        clip-path: polygon(0 0, 10px 6px, 10px 6px, 0 10px);
    }

    @keyframes to-play {
        15% {
            transform: translateX(6px) scaleY(1.1);
        }
        30% {
            transform: translateX(6px) scaleY(0.9);
        }
        45% {
            transform: translateX(6px) scaleY(1.15);
            clip-path: polygon(0 0, 3px 0, 3px 10px, 0 10px);
            transform-origin: 50% 100%;
        }
        60% {
            clip-path: polygon(0 9px, 3px 9px, 3px 10px, 0 10px);
            transform-origin: 50% 9.5px;
            transform: translateX(6px);
        }
        99% {
            transform: translateX(0) rotate(-270deg);
        }
        100% {
            clip-path: polygon(0 9px, 3px 9px, 3px 10px, 0 10px);
            transform-origin: 50% 9.5px;
            transform: translateX(0) rotate(-270deg) scale(0);
        }
    }

    @keyframes to-pause {
        0% {
            clip-path: polygon(0 9px, 3px 9px, 3px 10px, 0 10px);
            transform-origin: 50% 9.5px;
            transform: translateX(0) rotate(-270deg) scale(0);
        }
        39% {
            transform: translateX(0) rotate(-270deg) scale(0);
        }
        40% {
            transform: translateX(0) rotate(-270deg);
        }
        50% {
            clip-path: polygon(0 9px, 3px 9px, 3px 10px, 0 10px);
            transform-origin: 50% 9.5px;
            transform: translateX(6px) rotate(0deg);
        }
        60% {
            clip-path: polygon(0 0, 3px 0, 3px 10px, 0 10px);
            transform-origin: 50% 100%;
        }
        70% {
            transform: translateX(6px) scaleY(1.15);
        }
        80% {
            transform: translateX(6px) scaleY(0.9);
        }
        90% {
            transform: translateX(6px) scaleY(1.05);
        }
        100% {
            clip-path: polygon(0 0, 3px 0, 3px 10px, 0 10px);
            transform-origin: 50% 100%;
            transform: translateX(6px);
        }
    }

}




</style>
