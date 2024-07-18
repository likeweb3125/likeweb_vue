<template>
    <section class="page_about1">
        <div class="section_inner">
            <div class="top_banner clear" :class="aboutOn1">
                <div class="txt_box fl">
                    <h2 class="f_36 bm30">
                        우리는 웹을 좋아하고 <br>웹에 대한 생각을 나누는
                        <br>전문가들이 모인
                        <span class="bold">웹에이전시입니다.</span>
                    </h2>
                    <p class="f_20">
                        라이크웹은 14년 동안 고객사와 협력하여 노력해 온 값진
                        경험으로 <br>소통하고 나누며 함께 발전하였습니다.
                    </p>
                </div>
                <div class="img_box fr">
                    <img src="@/assets/images/img_about1.png" alt="people image" class="p_img">
                    <img src="@/assets/images/img_about2.png" alt="shape image" class="s_img">
                    <img src="@/assets/images/img_cloud.png" alt="cloud image" class="c_img">
                </div>
            </div>
            <div class="who_wrap" ref="whoWrap" :class="aboutOn2">
                <h3 class="title">Who we are</h3>
                <ul class="clear">
                    <li class="fl">
                        <div class="img_box">
                            <img src="@/assets/images/img_who1.png" alt="promise image">
                        </div>
                        <div class="txt_box">
                            <h4 class="f_40 bold f_gray2 Oxanuum">PROMISE</h4>
                            <h5 class="f_30 bold">약속</h5>
                            <p class="light tm28">
                                수주를 하기 위해 최선을 다하는 것보다 구축과
                                성공을 향해 함께 노력하는 비즈니스 파트너로
                                기억되고 싶습니다. 고객사와 협력하여 노력해 온
                                값진 경험으로 초심을 잃지 않고 소통하고 나누며
                                함께 발전해 나아가겠습니다.
                            </p>
                        </div>
                    </li>
                    <li class="fr">
                        <div class="img_box">
                            <img src="@/assets/images/img_who2.png" alt="identity image">
                        </div>
                        <div class="txt_box">
                            <h4 class="f_40 bold f_gray2 Oxanuum">IDENTITY</h4>
                            <h5 class="f_30 bold">정체성</h5>
                            <p class="light tm28">
                                라이크웹은 창립부터 현재까지 14년 이상의 제작
                                노하우를 바탕으로 최상의 퀄리티와 가치를
                                실현하기 위해 꾸준한 노력을 해오고 있습니다.
                                혁신적인 기술, 다양한 수행 경험과 독창적인
                                아이디어로 항상 노력, 발전하는 기업이
                                되겠습니다.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="value_wrap" ref="valueWrap" :class="aboutOn3">
            <h3 class="title f_white">Our Value</h3>
            <p class="f_white f_20 tm30 tx_c">
                소통을 통해 발전하는 다채로운 색을 가진 라이크웹
            </p>
            <div class="img_box">
                <div class="txt1_img"></div>
                <div class="txt2_img"></div>
                <div class="balloon_box">
                    <img src="@/assets/images/about1_balloon_on.png" alt="balloon image" class="b_img">
                    <div class="b_img_on">
                        <img src="@/assets/images/about1_balloon.png" alt="color balloon image">
                    </div>
                    <img src="@/assets/images/logo2.png" alt="logo" class="logo_img">
                </div>
            </div>
            <p class="f_white tx_c tm80 light">
                <span class="medium">Like</span>(좋아하다, 마음에 들다, 즐거움)
                <span class="medium">+ Web</span> 합성어로 <br>고객에게
                즐거움과 만족을 드리자는 의미입니다.
            </p>
        </div>
    </section>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "About1",
    data() {
        return {
            about5: false,
            aboutOn1: {
                on: false,
            },
            aboutOn2: {
                on: false,
            },
            aboutOn3: {
                on: false,
            },
        };
    },
    methods: {
        scroll() {
            let winH = window.innerHeight / 1.5;
            let winScroll = window.scrollY;
            let whoTop = this.$refs.whoWrap.offsetTop;
            let valueTop = this.$refs.valueWrap.offsetTop;
            winScroll > whoTop - winH ? (this.aboutOn2.on = true) : false;
            winScroll > valueTop - winH ? (this.aboutOn3.on = true) : false;
        }
    },
    created() {
        EventBus.$emit("bgChange", this.about5);
    },
    mounted() {
        this.aboutOn1.on = true;
        window.addEventListener("scroll", this.scroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.scroll);
    },
};
</script>

<style scoped>
@keyframes txt1_ani {
    from {}

    to {
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
    }
}

@keyframes txt2_ani {
    from {}

    to {
        right: 50px;
        bottom: 50%;
        transform: translateY(50%);
    }
}

@keyframes balloon_ani {
    from {
        height: 0;
    }

    to {
        height: 370px;
    }
}

@keyframes about1Ani1 {
    0% {
        transform: translate(180px);
    }

    100% {
        transform: translate(0);
    }
}

@keyframes about1Ani2 {
    0% {
        opacity: 0;
        transform: translate(180px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

.page_about1 {
    overflow: hidden;
}

.page_about1 .top_banner {
    padding-bottom: 170px;
}

.page_about1 .top_banner .txt_box {
    padding-top: 125px;
}

.page_about1 .top_banner .img_box {
    position: relative;
}

.page_about1 .top_banner .img_box .p_img {
    position: absolute;
    z-index: -1;
    transform: translate(180px, 0);
    animation: about1Ani1 0.8s 0.2s ease-in-out forwards;
}

.page_about1 .top_banner .img_box .s_img {
    position: absolute;
    z-index: -1;
    transform: translate(180px, 0);
    opacity: 0;
    animation: about1Ani2 0.8s 0.2s ease-in-out forwards;
}

.page_about1 .top_banner .img_box .c_img {
    margin-top: 10%;
}

/*.page_about1 .top_banner.on .img_box .p_img{transform: translate(0, 0)}
	.page_about1 .top_banner.on .img_box .s_img{transform: translate(0, 0);opacity: 1;}*/
.page_about1 .title {
    font-size: 40px;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-weight: 600;
    text-align: center;
    padding-top: 120px;
}

.who_wrap ul {
    padding: 0 118px;
    margin: 100px 0 120px;
}

.who_wrap ul li {
    width: calc(50% - 130px);
    text-align: center;
}

.who_wrap ul li:last-child {
    margin-top: 120px;
}

.who_wrap ul li .img_box {
    position: relative;
    width: 300px;
    height: 300px;
    background: #f7f7f7;
    margin: 0 auto;
}

.who_wrap ul li .img_box img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: inherit;
}

.who_wrap ul li:first-child .img_box img {
    transform: translate(-50%, -70%);
    opacity: 0;
}

.who_wrap ul li:last-child .img_box img {
    transform: translate(-50%, -20%);
    opacity: 0;
}

.who_wrap.on ul li .img_box img {
    transform: translate(-50%, -50%);
    transition-delay: 0.1s;
    transition-duration: 0.5s;
    transition-property: transform, opacity;
    transition-timing-function: ease-in-out;
    opacity: 1;
}

.who_wrap ul li .txt_box {
    position: relative;
    margin-top: 48px;
}

.who_wrap ul li .txt_box h5 {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
}

.who_wrap ul li .txt_box p {
    word-break: keep-all;
}

.value_wrap {
    background: url(~@/assets/images/bg_about1.png) no-repeat center;
    background-size: cover;
    padding-bottom: 120px;
}

.value_wrap .img_box {
    position: relative;
    width: 1400px;
    margin: 0 auto;
}

.value_wrap .img_box .txt1_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 384px;
    height: 180px;
    background: url(~@/assets/images/txt_like.png) no-repeat center;
    background-size: contain;
}

.value_wrap .img_box .txt2_img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 360px;
    height: 180px;
    background: url(~@/assets/images/txt_web.png) no-repeat center;
    background-size: contain;
}

.value_wrap .img_box .balloon_box {
    margin: 100px auto 0;
    position: relative;
    width: 300px;
    height: 370px;
}

.value_wrap .img_box .balloon_box>* {
    position: absolute;
}

.value_wrap .img_box .balloon_box .b_img {
    max-width: 360px;
    top: -20px;
    left: -20px;
}

.value_wrap .img_box .balloon_box .b_img_on {
    overflow: hidden;
    z-index: 1;
}

.value_wrap .img_box .balloon_box .b_img_on img {
    max-width: 360px;
    margin-top: -20px;
    margin-left: -20px;
}

.value_wrap .img_box .balloon_box .logo_img {
    top: 119px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.value_wrap.on .txt1_img {
    animation: txt1_ani 0.6s 0s ease forwards;
    background: url(~@/assets/images/txt_like_on.png) no-repeat center;
    background-size: contain;
}

.value_wrap.on .txt2_img {
    animation: txt2_ani 0.6s 0s ease forwards;
    background: url(~@/assets/images/txt_web_on.png) no-repeat center;
    background-size: contain;
}

.value_wrap.on .b_img_on {
    animation: balloon_ani 0.5s 0s linear forwards;
    animation-direction: reverse;
}

@media screen and (max-width: 1500px) {
    .page_about1 .top_banner {
        width: 90%;
        margin: 0 auto;
    }

    .value_wrap .img_box {
        width: 90%;
    }
}

@media screen and (max-width: 1300px) {
    .page_about1 .top_banner {
        width: 100%;
    }

    .value_wrap .img_box {
        width: 100%;
    }
}

@media screen and (max-width: 1200px) {
    .page_about1 .tab_wrap {
        margin-bottom: 80px;
    }

    .page_about1 .top_banner {
        padding-bottom: 50px;
    }

    .page_about1 .top_banner .txt_box {
        padding-top: 0;
        width: 100%;
    }

    .page_about1 .top_banner .img_box {
        width: 60%;
        margin-top: 40px;
        height: 503px;
    }

    .who_wrap ul li {
        width: 300px;
    }

    .value_wrap .img_box .txt1_img {
        width: 277px;
        height: 130px;
    }

    .value_wrap .img_box .txt2_img {
        width: 260px;
        height: 130px;
    }
}

@media screen and (max-width: 1023px) {
    @keyframes txt1_ani {
        from {}

        to {
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    @keyframes txt2_ani {
        from {}

        to {
            right: 25px;
            bottom: 50%;
            transform: translateY(50%);
        }
    }

    @keyframes balloon_ani {
        from {
            height: 0;
        }

        to {
            height: 308px;
        }
    }

    .page_about1 .top_banner .txt_box h2 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .page_about1 .top_banner .txt_box p {
        font-size: 16px;
    }

    .page_about1 .top_banner .img_box {
        width: 440px;
        height: 367px;
    }

    .page_about1 .title {
        padding-top: 80px;
        font-size: 36px;
    }

    .who_wrap ul {
        margin: 140px auto 110px;
        padding: 0 38px;
    }

    .who_wrap ul li .img_box {
        width: 240px;
        height: 240px;
    }

    .who_wrap.on ul li .img_box img {
        max-width: 300px;
    }

    .who_wrap ul li .txt_box {
        margin-top: 30px;
    }

    .who_wrap ul li .txt_box h4 {
        font-size: 30px;
    }

    .who_wrap ul li .txt_box h5 {
        font-size: 24px;
        top: 2px;
    }

    .who_wrap ul li .txt_box p {
        font-size: 16px;
        margin-top: 20px;
    }

    .value_wrap {
        padding-bottom: 80px;
    }

    .value_wrap .title+p {
        font-size: 20px;
        margin-top: 15px;
    }

    .value_wrap .img_box .balloon_box {
        width: 250px;
        height: 308px;
    }

    .value_wrap .img_box .balloon_box .b_img {
        max-width: 297px;
        top: -15px;
        left: -16px;
    }

    .value_wrap .img_box .balloon_box .b_img_on img {
        max-width: 297px;
        margin-top: -15px;
        margin-left: -16px;
    }

    .value_wrap .img_box .balloon_box .logo_img {
        top: 98px;
        max-width: 120px;
    }

    .value_wrap .img_box .txt1_img {
        width: 213px;
        height: 100px;
    }

    .value_wrap .img_box .txt2_img {
        width: 200px;
        height: 100px;
    }

    .value_wrap .img_box+p {
        font-size: 16px;
        margin-top: 60px;
    }
}

@media screen and (max-width: 767px) {
    .page_about1 .top_banner .txt_box h2 {
        font-size: 22px;
    }

    .page_about1 .top_banner .txt_box p {
        font-size: 14px;
    }

    .page_about1 .top_banner .txt_box p br {
        display: none;
    }

    .page_about1 .top_banner .img_box {
        width: 260px;
        height: 216px;
    }

    .page_about1 .title {
        padding-top: 60px;
        font-size: 22px;
    }

    .who_wrap ul {
        margin: 38px auto 60px;
        padding: 0;
    }

    .who_wrap ul li {
        float: none;
        margin: 0 auto;
        width: 90%;
    }

    .who_wrap ul li .img_box {
        width: 240px;
        height: 240px;
    }

    .who_wrap.on ul li .img_box img {
        max-width: 260px;
    }

    .who_wrap ul li .txt_box h5 {
        font-size: 20px;
        top: 5px;
    }

    .who_wrap ul li .txt_box p {
        margin-top: 16px;
        font-size: 13px;
    }

    .value_wrap {
        padding-bottom: 60px;
    }

    .value_wrap .title+p {
        font-size: 14px;
        margin-top: 10px;
    }

    .value_wrap .img_box .balloon_box {
        width: 120px;
        height: 147px;
        margin-top: 40px;
    }

    .value_wrap .img_box .balloon_box .b_img {
        max-width: 142px;
        top: -8px;
        left: -8px;
    }

    .value_wrap .img_box .balloon_box .b_img_on img {
        max-width: 142px;
        margin-top: -8px;
        margin-left: -8px;
    }

    .value_wrap .img_box .balloon_box .logo_img {
        top: 50px;
        max-width: 60px;
    }

    .value_wrap .img_box .txt1_img {
        width: 77px;
        height: 36px;
    }

    .value_wrap .img_box .txt2_img {
        width: 72px;
        height: 36px;
    }

    .value_wrap .img_box+p {
        font-size: 13px;
        margin-top: 40px;
    }
}

@media screen and (max-height: 680px) {
    @keyframes txt1_ani {
        from {}

        to {
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    @keyframes txt2_ani {
        from {}

        to {
            right: 5px;
            bottom: 50%;
            transform: translateY(50%);
        }
    }

    .about1 .top_banner .txt_box p br {
        display: none;
    }

    .value_wrap {
        padding: 0 10px 60px;
    }
}</style>
