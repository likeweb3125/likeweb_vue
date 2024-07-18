<template>
    <div class="page_about5">
        <div class="section_inner">
            <div class="map_box">
                <div class="map_img"></div>
                <div class="info_box">
                    <h3 class="f_36 bold bm30">Our Office</h3>
                    <p class="f_20 ligth">
                        서울 강남구 봉은사로55길 17<br>(삼성동 35-25) 가남빌딩
                        5층
                    </p>
                    <ul class="txt_ul tm30">
                        <li>
                            <span class="f_20">Tel.</span><span class="f_20 light">02 - 784 - 3125</span>
                        </li>
                        <li>
                            <span class="f_20">Fax.</span><span class="f_20 light">02 - 6442 - 3125</span>
                        </li>
                        <li>
                            <span class="f_20">E-Mail.</span><span class="f_20 light">likeweb@likeweb.co.kr</span>
                        </li>
                    </ul>
                    <div class="btn_box">
                        <a href="http://naver.me/xv0eBAk0" class="rm20" target="_blank"><img
                                src="@/assets/images/ic_naver.png" alt="naver icon"></a>
                        <a href="http://kko.to/x9NgnJTf0" target="_blank"><img src="@/assets/images/ic_kakao.png"
                                alt="kakao icon"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "About5",
    data() {
        return {
            about5: true,
        };
    },
    created() {
        EventBus.$emit("pageAbout5", this.about5);
    },
    destroyed() {
        this.about5 = false;
        EventBus.$emit("pageAbout5", this.about5);
    },
};
</script>

<style scoped>
.map_box {
    margin-top: 500px;
}

.map_box .map_img {
    display: none;
}

.map_box .info_box {
    padding-bottom: 120px;
}

.map_box .info_box p br {
    display: none;
}

.map_box .txt_ul li {
    font-size: 0;
    margin-bottom: 10px;
}

.map_box .txt_ul li span {
    display: inline-block;
}

.map_box .txt_ul li span:first-of-type {
    width: 6%;
}

.map_box .btn_box {
    padding-top: 20px;
    font-size: 0;
}

.map_box .btn_box a {
    display: inline-block;
}

@media screen and (max-width: 1500px) {
    .page_about {
        background-position: right 28% center;
    }

    .map_box {
        margin-top: 650px;
    }

    .map_box .info_box {
        padding-bottom: 30px;
    }
}

@media screen and (max-width: 1023px) {
    .page_about {
        background-position: right 30% center;
        background-size: 200%;
    }

    .map_box {
        position: static;
        bottom: 30px;
        width: 90%;
        margin-top: 0;
    }

    .map_box .info_box {
        padding-bottom: 30px;
    }

    .map_box .info_box h3 {
        font-size: 36px;
        margin-bottom: 10px;
    }

    .map_box .info_box p {
        font-size: 16px;
    }

    .map_box .info_box p br {
        display: block;
    }

    .map_box .txt_ul {
        margin-top: 15px;
    }

    .map_box .txt_ul li span {
        font-size: 16px;
    }

    .map_box .txt_ul li span:first-of-type {
        width: 76px;
    }
}

@media screen and (max-width: 767px) {
    .map_box {
        width: 100%;
        margin-top: -5px;
    }

    .map_box .map_img {
        display: block;
        background: url(~@/assets/images/img_map.png) no-repeat top 60% right 20%;
        width: calc(100% + 30px);
        margin-left: -15px;
        height: 350px;
        background-size: 150%;
    }

    .map_box .info_box {
        margin-top: 30px;
    }

    .map_box .info_box h3 {
        font-size: 22px;
    }

    .map_box .info_box p {
        font-size: 13px;
    }

    .map_box .info_box p br {
        display: none;
    }

    .map_box .txt_ul li {
        margin-bottom: 5px;
    }

    .map_box .txt_ul li span {
        font-size: 13px;
    }

    .map_box .txt_ul li span:first-of-type {
        width: 50px;
    }

    .map_box .btn_box {
        padding: 10px 0 0;
    }

    .map_box .btn_box a {
        width: 30px;
        margin-right: 12px;
    }
}

@media screen and (max-width: 680px) {
    .map_box .map_img {
        background: url(~@/assets/images/img_map_mo.png) no-repeat center right 28%;
        background-size: cover;
    }
}

@media screen and (max-width: 500px) {
    .map_box .map_img {
        height: 250px;
        background-size: 100%;
    }
}</style>
