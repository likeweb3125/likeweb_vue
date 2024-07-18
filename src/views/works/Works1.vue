<template>
    <section class="page_works1">
        <div class="sub_title">
            <div class="section_inner" ref="subTitle">
                <h2 class="title">
                    WORKS
                </h2>
                <div class="tab_wrap" :class="tabMenuMove" ref="tabMenuWrap">
                    <ul class="tab_menu" ref="tabMenu">
                        <li v-for="(item, i) in menuWorks" :key="i">
                            <a href="javascript: void(0)" @click="tabClick(i)" :class="menuOnClass(i)">
                                {{ item.txt }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page_works_inner">
            <section class="section section1" ref="worksSection1">
                <div class="section_inner">
                    <div class="tit_wrap">
                        <h3>{{ menuWorks[0].txt }}</h3>
                        <span>다년간의 경험으로 성공적인 노하우를 제공합니다.</span>
                    </div>
                    <ul class="list_card" v-if="pcMode">
                        <li>
                            <div class="txt">
                                <span>기업<br>홈페이지</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>브랜드<br>홈페이지</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>원페이지</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>랜딩<br>시스템</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>하이브리드<br>앱</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>맞춤<br>프로그램 개발</span>
                            </div>
                        </li>
                        <li>
                            <div class="txt">
                                <span>무료<br>유지보수</span>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="slider_wrap">
                        <swiper class="works_slider" :options="swiperOptionWorks1">
                            <swiper-slide class="slide slide1">
                                <div class="txt">
                                    <span>기업<br>홈페이지</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide2">
                                <div class="txt">
                                    <span>브랜드<br>홈페이지</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide3">
                                <div class="txt">
                                    <span>원페이지</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide4">
                                <div class="txt">
                                    <span>랜딩<br>시스템</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide5">
                                <div class="txt">
                                    <span>하이브리드<br>앱</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide6">
                                <div class="txt">
                                    <span>맞춤<br>프로그램 개발</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide slide7">
                                <div class="txt">
                                    <span>무료<br>유지보수</span>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination">
                            </div>
                        </swiper>
                    </div>
                </div>
            </section>
            <section class="section section2" ref="worksSection2">
                <div class="section_inner">
                    <div class="tit_wrap">
                        <h3>{{ menuWorks[1].txt }}</h3>
                        <span>고객만족을 위해 사후 마케팅 방법을 제안 드립니다.</span>
                    </div>
                    <div class="con">
                        <div class="img_wrap">
                            <div class="img">
                                <img src="@/assets/images/img_chart.png" alt="차트 이미지">
                            </div>
                            <strong>매출 올리는 쇼핑몰 제작 </strong>
                            <span>고객의 구매 프로세스에 맞는 <br>기능 최적화 및 업그레이드 제작 </span>
                        </div>
                        <div class="box">
                            <ul class="list_tag">
                                <li>&#35;폐쇄몰</li>
                                <li>&#35;입점몰</li>
                                <li>&#35;미니샵 오픈마켓</li>
                                <li>&#35;일반 쇼핑몰</li>
                                <li>&#35;임대몰</li>
                            </ul>
                            <div class="tit">
                                <strong>신용카드&#40;pg사&#41;, 알림톡, SMS, <br>실시간배송추적 서버인프라세팅 및 설치 <br></strong>모든 것을 안내해 드립니다.
                            </div>
                            <div class="txt">
                                <p>업종에 따른 유저의 성향을 분석하여 가장 효과적인 구매 전환구조를 구성하고 업종에 따른 디자인을 제안 드리며 제작 완료 후에도 온라인 마케팅 방안을 제안 드려
                                    제작시작단계부터 운영단계까지 모든 부분에서 온라인 파트너가 되고자 노력하고 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section3">
                <div class="section_inner">
                    <div class="tit_wrap">
                        <h3>Work Process</h3>
                        <span>14단계로 이루어진 체계적인 과정과 피드백을 통해 최상의 결과를 보장합니다.</span>
                    </div>
                    <div class="con" v-if="pcMode">
                        <div class="tab_process">
                            <TabProcessMenu v-for="item in worksProcess" v-bind="item" :key="item.id"
                                v-model="currentProcessId" />
                        </div>
                        <div class="tab_con">
                            <transition name="list-anix" mode="out-in">
                                <div class="process_con" :key="currentProcessId">
                                    <div class="img">
                                        <img :src="worksProcess[currentProcessId].image"
                                            :alt="worksProcess[currentProcessId].titKr">
                                    </div>
                                    <strong>{{ worksProcess[currentProcessId].titKr }}</strong>
                                    <ul class="list_txt">
                                        <li v-for="(item, j) in worksProcess[currentProcessId].txt" :key="j">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="m_con" v-else>
                        <swiper class="process_slider" :options="swiperOptionWorks2">
                            <swiper-slide class="slide" v-for="(item, i) in worksProcess" :key="i">
                                <div class="img">
                                    <img :src="item.image" :alt="item.titKr">
                                </div>
                                <strong>{{ item.titKr }}</strong>
                                <ul class="list_txt">
                                    <li v-for="(txt, j) in item.txt" :key="j">
                                        {{ txt }}
                                    </li>
                                </ul>
                            </swiper-slide>
                            <div class="swiper-scrollbar" slot="scrollbar">
                            </div>
                        </swiper>
                    </div>
                </div>
            </section>
            <section class="section section4">
                <div class="section_inner">
                    <div class="tit_wrap">
                        <h3>Client</h3>
                        <span>우리를 믿어준 고객님입니다.</span>
                    </div>
                    <ul class="list_client">
                        <li v-for="(logo, k) in client" :key="k" @mouseenter="logoChange(k)" @mouseleave="logoChange(null)">
                            <div class="img">
                                <img v-if="k === logoColor" :src="logo.logo" :alt="logo.company">
                                <img v-else :src="logo.logoG" :alt="logo.company">
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="section section5" ref="worksSection3">
                <div class="section_inner">
                    <div class="tit_wrap">
                        <h3>{{ menuWorks[2].txt }}</h3>
                        <span>모든 서비스를 원스톱으로 제공합니다.</span>
                    </div>
                    <div class="con">
                        <div class="tab_hosting">
                            <TabHosting v-for="item in worksHosting" v-bind="item" :key="item.id"
                                v-model="currentHostingId" />
                        </div>
                        <div class="tab_con">
                            <transition name="list-ani" mode="out-in">
                                <ul class="list_hosting" :key="currentHostingId">
                                    <li v-for="(item, i) in worksHosting[currentHostingId].list" :key="i">
                                        <strong>{{ item.tit }}</strong>
                                        <p>{{ item.txt }}</p>
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import TabProcessMenu from '@/components/TabProcessMenu.vue';
import TabHosting from '@/components/TabHosting.vue';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import EventBus from "@/EventBus";

export default {
    name: 'Works1',
    components: {
        TabProcessMenu,
        TabHosting,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            currentProcessId: 0,
            currentHostingId: 0,
            tabMenuMove: {
                on: false,
            },
            menuOn: 0,
            pcMode: true,
            menuWorks: [
                { txt: 'HOMEPAGE & APP' },
                { txt: 'SHOPPINGMALL' },
                { txt: 'SERVER & HOSTING' }
            ],
            swiperOptionWorks1: {
                effect: 'coverflow',
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                coverflowEffect: {
                    rotate: 0,
                    modifier: 2.6,
                    stretch: -20,
                    slideShadows: false,
                },
                pagination: {
                    el: '.works_slider .swiper-pagination',
                    type: 'bullets',
                },
            },
            swiperOptionWorks2: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                scrollbar: {
                    el: '.process_slider .swiper-scrollbar',
                },
            },
            worksHosting: [
                {
                    id: 0,
                    tab: '서버 호스팅',
                    list: [
                        {
                            tit: 'Colocation',
                            txt: '고객님이 이미 서버를 보유하고 계신 경우 해당서버로 인터넷 서비스를 할 수 있도록 기가 회선과 상면 공간을 제공하여 드리는 서비스 입니다.',
                        },
                        {
                            tit: '서버호스팅',
                            txt: '독립된 단독 서버를 고객이 원하는 사양 및 환경으로 구축하여 최고관리자(root)권한으로 서버 자원을 단독으로 사용하는 서비스입니다.',
                        },
                        {
                            tit: '방화벽',
                            txt: '방화벽(Firewall)은 네트워크 보안의 가장 기본이 되는 서비스 입니다. 방화벽(Firewall)은 일반적으로 네트워크 게이트웨이에 위치하고 있어 다른 네트워크 사용자로부터 내부 네트워크 자원들을 보호하고자 할 때 사용됩니다. 방화벽 설정에 의해 특정 IP만 접속을 허용하거나 서버의 특정 포트만을 엑세스 허용할 수 있습니다.',
                        },
                        {
                            tit: '웹방화벽',
                            txt: '웹방화벽이란 방화벽, IDS/IPS 서비스와는 달리 웹 소스의 보안취약점으로 인하여 발생하는 웹 해킹 등의 보안사고 대비하기 위한 서비스입니다. 웹 소스 취약점으로 인한 웹 해킹 등의 보안사고를 근본적으로 해결하기 위해서는 웹 소스 상의 보안 취약점을 보완 수정하는 것이지만 그 작업이 상당히 힘들기 때문에 중소기업 입장에서는 상당히 부담스러울 수 밖에 없습니다. 웹 방화벽 서비스는 어플리케이션 계층(Layer 7) 분석 기술과 정규화 기술을 바탕으로 HTTP/HTTPS 프로토콜에 대한 트래픽을 감시하여 불법적인 공격을 탐지하고, 해당 공격이 고객 웹 서버에 도달하기 전에 차단하는 서비스입니다.',
                        },
                        {
                            tit: '백업',
                            txt: '증분 백업 / 주단위 전체 백업을 지원 하는 데이터  백업 서비스 입니다.',
                        },
                        {
                            tit: 'L4',
                            txt: '웹 서비스 이중화를 위한 Server Load Balance 서비스 입니다.',
                        },
                    ]
                },
                {
                    id: 1,
                    tab: '서버 구매',
                    list: [
                        {
                            tit: 'HP/DELL/IBM',
                            txt: '신규 장비 구매',
                        },
                    ]
                },
                {
                    id: 2,
                    tab: '기술 지원',
                    list: [
                        {
                            tit: 'Linux / Unix',
                            txt: '리눅스(Redhat, CentOS, Ubuntu 등), 유닉스(AIX, HPUX, Solaris, IRIX, Sco 등) 기술지원',
                        },
                        {
                            tit: 'Apache',
                            txt: '오픈 서버 웹 서버 설치, 기술지원, 튜닝 서비스입니다.',
                        },
                        {
                            tit: 'Tomcat',
                            txt: '오픈 서버 WAS 서버 설치, 기술지원, 튜닝 서비스입니다.',
                        },
                        {
                            tit: 'JBOSS',
                            txt: 'Jboss , Wildfly WAS 서버 설치, 기술지원, 튜닝 서비스입니다.',
                        },
                        {
                            tit: 'APM',
                            txt: '무료 Application Performance Monitoring Tool 설치 및 분석 결과 제공 서비스입니다.',
                        },
                        {
                            tit: 'Oracle',
                            txt: 'Oracle 단독 설치 , RAC 설치, 데이터 이관, 장애 처리, 유지보수 서비스입니다.',
                        },
                        {
                            tit: 'Mysql/Maria DB',
                            txt: 'Mysql/MARIA DB 단독설치 , 이중화 설치 , 데이터 이관, 장애 처리, 유지보수 서비스입니다.',
                        },
                        {
                            tit: 'Linux Cluster',
                            txt: '고가용 서비스를 위한 리눅스 클러스터 서비스 설치 및 장애처리,유지보수 서비스입니다.',
                        },
                        {
                            tit: 'VMWARE / KVM',
                            txt: '가상화 지원',
                        },
                        {
                            tit: '통합 유지 보수',
                        },
                    ]
                },
            ],
            worksProcess: [
                {
                    id: 0,
                    titKr: '분석',
                    titEn: 'Analysis',
                    txt: ['1. 킥오프 질의서', '2. 요구사항 분석 / 정의서'],
                    image: require('@/assets/images/img_process1.png'),
                },
                {
                    id: 1,
                    titKr: '기획/설계',
                    titEn: 'Planning',
                    txt: ['3. ToBe I.A 정의서', '4. 사용자모드기획서', '5. 관리자모드 기획서'],
                    image: require('@/assets/images/img_process2.png')
                },
                {
                    id: 2,
                    titKr: '디자인',
                    titEn: 'Design',
                    txt: ['6. 시안 디자인 (2종)', '7. 사용자페이지 디자인'],
                    image: require('@/assets/images/img_process3.png')
                },
                {
                    id: 3,
                    titKr: '퍼블리싱',
                    titEn: 'Publishing',
                    txt: ['8. 퍼블리싱 (CSS/ 퍼블리싱/ Effect) 산출물'],
                    image: require('@/assets/images/img_process4.png')
                },
                {
                    id: 4,
                    titKr: '프로그램',
                    titEn: 'Program',
                    txt: ['9. 프로그램 설계 / 목록 정의서', '10. DB설계서', '11. 개발(Web / Application) 산출물', '12. 테스트 (단위 / 통합 테스트) 결과서'],
                    image: require('@/assets/images/img_process5.png')
                },
                {
                    id: 5,
                    titKr: '완료',
                    titEn: 'Completion',
                    txt: ['13. 완료 보고', '14. 개발 리소스 산출물 일체 전달'],
                    image: require('@/assets/images/img_process6.png')
                },
            ],
            logoColor: null,
            client: [
                {
                    company: 'BMW',
                    logo: require('@/assets/images/logo_bmw.png'),
                    logoG: require('@/assets/images/logo_bmw_g.png')
                },
                {
                    company: 'LG하우시스',
                    logo: require('@/assets/images/logo_lghausys.png'),
                    logoG: require('@/assets/images/logo_lghausys_g.png')
                },
                {
                    company: 'SK ecoplant',
                    logo: require('@/assets/images/logo_skecoplant.png'),
                    logoG: require('@/assets/images/logo_skecoplant_g.png')
                },
                {
                    company: '세스코',
                    logo: require('@/assets/images/logo_cesco.png'),
                    logoG: require('@/assets/images/logo_cesco_g.png')
                },
                {
                    company: '아주대학교병원',
                    logo: require('@/assets/images/logo_ajou.png'),
                    logoG: require('@/assets/images/logo_ajou_g.png')
                },
                {
                    company: 'GUESS',
                    logo: require('@/assets/images/logo_guess.png'),
                    logoG: require('@/assets/images/logo_guess_g.png')
                },
                {
                    company: '삼성SDI',
                    logo: require('@/assets/images/logo_samgsungsdi.png'),
                    logoG: require('@/assets/images/logo_samgsungsdi_g.png')
                },
                {
                    company: 'JAYU',
                    logo: require('@/assets/images/logo_jayu.png'),
                    logoG: require('@/assets/images/logo_jayu_g.png')
                },
                {
                    company: '편강한의원',
                    logo: require('@/assets/images/logo_wwdoctor.png'),
                    logoG: require('@/assets/images/logo_wwdoctor_g.png')
                },
                {
                    company: '경남FC',
                    logo: require('@/assets/images/logo_gyeongnamfc.png'),
                    logoG: require('@/assets/images/logo_gyeongnamfc_g.png')
                },
                {
                    company: '서울대학교',
                    logo: require('@/assets/images/logo_snu.png'),
                    logoG: require('@/assets/images/logo_snu_g.png')
                },
                {
                    company: '롯데ON',
                    logo: require('@/assets/images/logo_lotteon.png'),
                    logoG: require('@/assets/images/logo_lotteon_g.png')
                },
            ],
            headerHeight: 0,
        }
    },
    methods: {
        menuOnClass(i) {
            return i === this.menuOn ? 'on' : '';
        },
        mobileComponent() {
            let winW = window.innerWidth;
            winW < 768 ? this.pcMode = false : this.pcMode = true;
        },
        logoChange(k) {
            this.logoColor = k;
        },
        // tabClick(i) {
        //     this.menuOn = i;
        //     let tabHeight = this.$refs.tabMenuWrap.offsetHeight;
        //     let titleHeight = this.$refs.subTitle.offsetHeight;
        //     let barTop = tabHeight + titleHeight;
        //     let sec2Top = this.$refs.worksSection2.offsetTop - barTop;
        //     let sec3Top = this.$refs.worksSection3.offsetTop - barTop;
        //     if (i === 0) {
        //         window.scrollTo({
        //             top: 0,
        //             left: 0,
        //             behavior: 'smooth'
        //         });
        //     } else if (i === 1) {
        //         window.scrollTo({
        //             top: sec2Top,
        //             left: 0,
        //             behavior: 'smooth'
        //         });
        //     } else if (i === 2) {
        //         window.scrollTo({
        //             top: sec3Top,
        //             left: 0,
        //             behavior: 'smooth'
        //         });
        //     }
        // },
        scrollToPosition(top) {
            window.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            });
        },
        tabClick(i) {
            this.menuOn = i;
            const tabHeight = this.$refs.tabMenuWrap.offsetHeight;
            const titleHeight = this.$refs.subTitle.offsetHeight;
            const barTop = tabHeight + titleHeight;
            const topPositions = [0, this.$refs.worksSection2.offsetTop - barTop, this.$refs.worksSection3.offsetTop - barTop];

            if (i >= 0 && i < topPositions.length) {
                this.scrollToPosition(topPositions[i]);
            }
        },
        scrollMove() {
            let winScroll = window.scrollY;
            let tabHeight = this.$refs.tabMenu.offsetHeight;
            let titleHeight = this.$refs.subTitle.offsetTop + this.$refs.subTitle.clientHeight - this.$refs.tabMenuWrap.offsetHeight - this.headerHeight;
            let barTop = tabHeight + titleHeight + 20;
            let sec2Top = this.$refs.worksSection2.offsetTop - barTop;
            let sec3Top = this.$refs.worksSection3.offsetTop - barTop;
            if (winScroll < sec2Top) {
                this.menuOn = 0;
            } else if (winScroll >= sec2Top && winScroll < sec3Top) {
                this.menuOn = 1;
            } else if (winScroll >= sec3Top) {
                this.menuOn = 2;
            }
            winScroll >= titleHeight ? this.tabMenuMove.on = true : this.tabMenuMove.on = false;
        },
    },
    computed: {
        current() {
            return this.worksProcess.find(el => el.id === this.currentProcessId) || {}
        }
    },
    created() {
        this.mobileComponent();
        window.addEventListener('resize', this.mobileComponent);
    },
    mounted() {
        window.addEventListener('scroll', this.scrollMove);
        EventBus.$on("getHeaderHeight", payload => {
            this.headerHeight = payload;
        });
    },
    destroyed() {
        window.removeEventListener('resize', this.mobileComponent);
        window.removeEventListener('scroll', this.scrollMove);
        EventBus.$off('getHeaderHeight');
    }
}
</script>

<style>
/* 리스트애니메이션Y */
.list-ani-enter {
    transform: translateY(-10px);
    opacity: 0;
}

.list-ani-enter-active,
.list-ani-leave-active {
    transition: all .3s;
}

.list-ani-leave-to {
    transform: translateY(10px);
    opacity: 0;
}

/* 리스트애니메이션X */
.list-anix-enter {
    transform: translateX(-20px);
    opacity: 0;
}

.list-anix-enter-active,
.list-anix-leave-active {
    transition: all .2s;
}

.list-anix-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.page_works_inner {
    padding-top: 95px;
}

.page_works1 .sub_title {
    padding-bottom: 0;
    position: static;
}

.page_works1 .sub_title .tab_menu {
    transition: padding .3s;
}

.page_works1 .sub_title .tab_menu li {
    margin-bottom: 0;
}

.page_works1 .sub_title .tab_menu li a {
    font-family: 'Oxanium', cursive;
}

.page_works1 .sub_title .tab_wrap.on {
    padding-bottom: 40px
}

.page_works1 .sub_title .tab_wrap.on .tab_menu {
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

.page_works1 .sub_title .tab_wrap.on .tab_menu li {
    text-align: center;
    flex: 1 0 auto;
}

.page_works1 .tit_wrap {
    text-align: center;
    color: #333;
    padding-bottom: 80px;
}

.page_works1 .tit_wrap h3 {
    font-family: 'Oxanium', cursive;
    font-size: 40px;
    font-weight: 600;
    color: inherit;
}

.page_works1 .tit_wrap span {
    display: block;
    font-size: 20px;
    color: inherit;
    padding-top: 15px;
}

.page_works1 .section1 {
    padding: 25px 0 130px;
}

.page_works1 .list_card {
    text-align: center;
}

.page_works1 .list_card li {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: calc(100% / 7 - 18px);
    margin-right: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.12);
    padding: 40px 0 30px;
}

.page_works1 .list_card li:last-of-type {
    margin-right: 0;
}

.page_works1 .list_card li:before {
    content: '';
    display: inline-block;
    vertical-align: top;
    width: 80px;
    height: 80px;
    background: url(~@/assets/images/ic_works1.png) no-repeat 50% 50%;
}

.page_works1 .list_card li:nth-of-type(2):before {
    background-image: url(~@/assets/images/ic_works2.png);
}

.page_works1 .list_card li:nth-of-type(3):before {
    background-image: url(~@/assets/images/ic_works3.png);
}

.page_works1 .list_card li:nth-of-type(4):before {
    background-image: url(~@/assets/images/ic_works4.png);
}

.page_works1 .list_card li:nth-of-type(5):before {
    background-image: url(~@/assets/images/ic_works5.png);
}

.page_works1 .list_card li:nth-of-type(6):before {
    background-image: url(~@/assets/images/ic_works6.png);
}

.page_works1 .list_card li:nth-of-type(7):before {
    background-image: url(~@/assets/images/ic_works7.png);
}

.page_works1 .list_card .txt {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
}

.page_works1 .list_card .txt span {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #333;
}

.page_works1 .section2 {
    padding: 120px 0;
    background: rgba(246, 229, 227, 0.4);
}

.page_works1 .section2 .con {
    font-size: 0;
}

.page_works1 .section2 .img_wrap {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    text-align: center;
    color: #333;
    background: #fff;
    padding: 50px 0;
}

.page_works1 .section2 .img_wrap strong {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: inherit;
    padding-top: 40px;
}

.page_works1 .section2 .img_wrap span {
    display: block;
    font-size: 18px;
    font-weight: 300;
    color: inherit;
    padding-top: 5px;
}

.page_works1 .section2 .img_wrap span br {
    display: none;
}

.page_works1 .section2 .box {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    padding-left: 50px;
}

.page_works1 .section2 .box .list_tag {
    font-size: 0;
}

.page_works1 .section2 .box .list_tag li {
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #ad2024;
    line-height: 30px;
    padding: 8px 15px;
    background: #fff;
    border-radius: 25px;
    transition: all .1s;
}

.page_works1 .section2 .box .list_tag li:last-of-type {
    margin-right: 0;
}

.page_works1 .section2 .box .list_tag li:hover {
    background: #ad2024;
    color: #fff;
}

.page_works1 .section2 .box .tit {
    font-size: 30px;
    color: #333;
    padding-top: 30px;
}

.page_works1 .section2 .box .tit strong {
    font-weight: 500;
}

.page_works1 .section2 .box .txt {
    padding-top: 60px;
    font-size: 18px;
    font-weight: 300;
    color: #333;
}

.page_works1 .section3 {
    padding: 120px 0 20px;
}

.page_works1 .section3 .con {
    display: flex;
}

.page_works1 .tab_process {
    width: 30%;
}

.page_works1 .section3 .tab_con {
    width: 70%;
    background: #f7f7f7;
    overflow: hidden;
}

.page_works1 .process_con {
    text-align: center;
    padding: 50px 0 20px;
}

.page_works1 .process_con .img {
    padding-bottom: 20px;
}

.page_works1 .process_con strong {
    display: inline-block;
    vertical-align: top;
    font-size: 30px;
    font-weight: 500;
    color: #333;
    position: relative;
}

.page_works1 .process_con strong:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #333;
}

.page_works1 .process_con .list_txt {
    font-size: 20px;
    color: #333;
    padding-top: 20px;
}

.page_works1 .section4 {
    padding: 120px 0;
}

.page_works1 .list_client li {
    display: inline-block;
    vertical-align: top;
    margin: 20px 20px 0 0;
    width: calc(25% - 15px);
    text-align: center;
    height: 150px;
    background: #f7f7f7;
}

.page_works1 .list_client li:nth-of-type(4n) {
    margin-right: 0;
}

.page_works1 .list_client li:nth-of-type(1) {
    margin-top: 0;
}

.page_works1 .list_client li:nth-of-type(2) {
    margin-top: 0;
}

.page_works1 .list_client li:nth-of-type(3) {
    margin-top: 0;
}

.page_works1 .list_client li:nth-of-type(4) {
    margin-top: 0;
}

.page_works1 .list_client .img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
}

.page_works1 .list_client .img img {
    flex: 0 0 auto;
    max-height: 100%;
}

.page_works1 .section5 {
    padding: 130px 0 0;
    position: relative;
}

.page_works1 .section5:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 497px;
    background: url(~@/assets/images/bg_works.jpg) no-repeat 50% 50%;
    background-size: cover;
}

.page_works1 .section5 .tit_wrap {
    color: #fff;
    padding-bottom: 40px;
}

.page_works1 .tab_hosting {
    text-align: center;
}

.page_works1 .section5 .tab_con {
    padding-top: 60px;
}

.page_works1 .list_hosting {
    display: flex;
    flex-wrap: wrap;
}

.page_works1 .list_hosting>li {
    display: flex;
    width: calc(50% - 15px);
    margin: 30px 30px 0 0;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 50px;
    color: #333;
}

.page_works1 .list_hosting>li:nth-of-type(2n) {
    margin-right: 0;
}

.page_works1 .list_hosting>li:nth-of-type(1) {
    margin-top: 0;
}

.page_works1 .list_hosting>li:nth-of-type(2) {
    margin-top: 0;
}

.page_works1 .list_hosting strong {
    width: 35%;
    font-size: 30px;
    font-weight: 500;
    color: inherit;
    line-height: 30px;
}

.page_works1 .list_hosting p {
    width: 65%;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
}

@media screen and (max-width: 1400px) {
    .page_works_inner {
        padding-top: 80px;
    }

    .page_works1 .sub_title .tab_wrap.on .tab_menu {
        top: 100px;
        /*width: calc(100% - 50px);*/
    }

    .page_works1 .tit_wrap {
        padding-bottom: 60px;
    }

    .page_works1 .tit_wrap h3 {
        font-size: 36px
    }

    .page_works1 .tit_wrap span {
        padding-top: 5px;
    }

    .page_works1 .section1 {
        padding-bottom: 80px;
    }

    .page_works1 .list_card li {
        width: calc(100% / 4 - 20px);
        margin-top: 30px;
    }

    .page_works1 .list_card li:nth-of-type(1) {
        margin-top: 0;
    }

    .page_works1 .list_card li:nth-of-type(2) {
        margin-top: 0;
    }

    .page_works1 .list_card li:nth-of-type(3) {
        margin-top: 0;
    }

    .page_works1 .list_card li:nth-of-type(4) {
        margin-top: 0;
    }

    .page_works1 .section2 {
        padding: 80px 0;
    }

    .page_works1 .section2 .img_wrap {
        width: 100%;
    }

    .page_works1 .section2 .box {
        width: 100%;
        padding: 0;
        text-align: center;
    }

    .page_works1 .section2 .box .list_tag {
        padding-top: 40px;
        text-align: center;
    }

    .page_works1 .section2 .box .txt {
        padding-top: 20px;
    }

    .page_works1 .process_con {
        padding: 50px 30px 20px;
    }

    .page_works1 .process_con .img {
        padding-bottom: 60px;
    }

    .page_works1 .section3 {
        padding-top: 80px;
    }

    .page_works1 .list_client li {
        height: 100px;
        width: calc(100% / 3 - 10px);
        margin: 20px 15px 0 0;
    }

    .page_works1 .list_client li:nth-of-type(4n) {
        margin-right: 15px;
    }

    .page_works1 .list_client li:nth-of-type(3n) {
        margin-right: 0;
    }

    .page_works1 .list_client li:nth-of-type(4) {
        margin-top: 20px;
    }

    .page_works1 .section4 {
        padding: 80px 0;
    }

    .page_works1 .section5 {
        padding-top: 80px;
    }

    .page_works1 .section5:before {
        height: 400px;
    }

    .page_works1 .list_hosting>li {
        display: block;
        padding: 40px 30px;
    }

    .page_works1 .list_hosting strong {
        width: 100%;
        display: block;
    }

    .page_works1 .list_hosting p {
        width: 100%;
        padding-top: 30px;
    }
}

@media screen and (max-width: 768px) {
    .page_works_inner {
        padding-top: 40px;
    }

    .page_works1 .sub_title .tab_menu li a {
        font-size: 13px;
    }

    .page_works1 .sub_title .tab_menu {
        justify-content: space-between;
        flex-wrap: nowrap;
    }

    .page_works1 .sub_title .tab_menu li {
        margin: 0;
    }

    .page_works1 .sub_title .tab_wrap.on .tab_menu {
        top: 70px;
        /*width: calc(100% - 30px);*/
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-top: 10px;
    }

    .page_works1 .tit_wrap {
        padding-bottom: 40px;
    }

    .page_works1 .tit_wrap h3 {
        font-size: 22px;
    }

    .page_works1 .tit_wrap span {
        font-size: 14px;
        padding-top: 10px;
    }

    .page_works1 .section1 {
        padding-bottom: 30px;
    }

    .page_works1 .section1 .section_inner {
        padding: 0;
    }

    .works_slider {
        padding: 10px 0;
    }

    .works_slider .slide {
        width: 220px;
        text-align: center;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.12);
        background: #fff;
        height: 200px;
    }

    .works_slider .slide .txt {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .works_slider .slide .txt:before {
        content: '';
        display: inline-block;
        vertical-align: top;
        width: 74px;
        height: 74px;
        background: url(~@/assets/images/ic_works1.png) no-repeat 50% 50%;
    }

    .works_slider .slide2 .txt:before {
        background-image: url(~@/assets/images/ic_works2.png);
    }

    .works_slider .slide3 .txt:before {
        background-image: url(~@/assets/images/ic_works3.png);
    }

    .works_slider .slide4 .txt:before {
        background-image: url(~@/assets/images/ic_works4.png);
    }

    .works_slider .slide5 .txt:before {
        background-image: url(~@/assets/images/ic_works5.png);
    }

    .works_slider .slide6 .txt:before {
        background-image: url(~@/assets/images/ic_works6.png);
    }

    .works_slider .slide7 .txt:before {
        background-image: url(~@/assets/images/ic_works7.png);
    }

    .works_slider .slide .txt span {
        display: block;
        font-size: 16px;
        color: #333;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        transition: all .3s;
    }

    .works_slider .slide.swiper-slide-active .txt span {
        font-size: 20px;
        font-weight: 500;
    }

    .works_slider .swiper-pagination {
        position: static;
        padding-top: 40px;
    }

    .works_slider .swiper-pagination span {
        width: 16px;
        height: 2px;
        background: #ddd;
        border-radius: 0;
        opacity: 1;
        margin: 0 3px;
        display: inline-block;
        vertical-align: top;
        transition: all .3s;
    }

    .works_slider .swiper-pagination .swiper-pagination-bullet-active {
        width: 20px;
        background: #ad2024;
    }

    .page_works1 .section2 {
        padding: 60px 0;
    }

    .page_works1 .section2 .img_wrap {
        padding: 30px 0;
    }

    .page_works1 .section2 .img_wrap .img {
        width: 70%;
        margin: 0 auto;
    }

    .page_works1 .section2 .img_wrap strong {
        padding-top: 20px;
        font-size: 14px;
    }

    .page_works1 .section2 .img_wrap span {
        padding-top: 10px;
        font-size: 13px;
    }

    .page_works1 .section2 .img_wrap span br {
        display: block;
    }

    .page_works1 .section2 .box .list_tag {
        padding-top: 10px;
    }

    .page_works1 .section2 .box .list_tag li {
        padding: 0 10px;
        margin: 10px 10px 0 0;
        font-size: 14px;
    }

    .page_works1 .section2 .box .tit {
        font-size: 20px;
    }

    .page_works1 .section2 .box .txt {
        font-size: 13px;
    }

    .page_works1 .section3 {
        padding-top: 60px;
    }

    .page_works1 .process_slider {
        height: 415px;
        padding-bottom: 35px;
    }

    .page_works1 .process_slider .swiper-scrollbar {
        background: #fbf5f4;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 4px;
        border-radius: 0;
    }

    .page_works1 .process_slider .swiper-scrollbar .swiper-scrollbar-drag {
        background: #ad2024;
        border-radius: 0;
    }

    .page_works1 .process_slider .slide {
        width: 280px;
        height: 100%;
        background: #f7f7f7;
        padding: 30px 15px;
        text-align: center;
    }

    .page_works1 .process_slider .slide .img {
        max-height: 150px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page_works1 .process_slider .slide .img img {
        max-height: 100%;
    }

    .page_works1 .process_slider .slide strong {
        font-size: 20px;
        font-weight: 500;
        color: #333;
        position: relative;
        display: inline-block;
        vertical-align: top;
        line-height: 2;
        padding-top: 20px;
    }

    .page_works1 .process_slider .slide strong:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #333;
    }

    .page_works1 .process_slider .slide .list_txt {
        padding-top: 15px;
    }

    .page_works1 .process_slider .slide .list_txt li {
        margin-top: 5px;
        font-size: 14px;
        color: #333;
    }

    .page_works1 .process_slider .slide .list_txt li:first-of-type {
        margin-top: 0;
    }

    .page_works1 .list_client li {
        width: calc(100% / 2 - 5px);
        margin: 10px 10px 0 0;
        height: 65px;
    }

    .page_works1 .list_client li:nth-of-type(3n) {
        margin: 10px 10px 0 0;
    }

    .page_works1 .list_client li:nth-of-type(2n) {
        margin: 10px 0 0 0;
    }

    .page_works1 .list_client li:nth-of-type(2) {
        margin-top: 0;
    }

    .page_works1 .list_client .img {
        padding: 10px 30px;
    }

    .page_works1 .section5 {
        padding: 40px 0 0;
    }

    .page_works1 .section5:before {
        height: 260px;
    }

    .page_works1 .section5 .tit_wrap {
        padding-bottom: 30px;
    }

    .page_works1 .section5 .tab_con {
        padding-top: 40px;
    }

    .page_works1 .list_hosting {
        display: block;
    }

    .page_works1 .list_hosting>li {
        margin: 20px 0 0 0 !important;
        width: 100%;
        padding: 30px 20px;
    }

    .page_works1 .list_hosting>li:first-of-type {
        margin-top: 0 !important;
    }

    .page_works1 .list_hosting strong {
        font-size: 20px;
    }

    .page_works1 .list_hosting p {
        font-size: 13px;
        line-height: 20px;
        padding-top: 15px;
    }

}</style>