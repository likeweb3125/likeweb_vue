<template>
    <section class="page_about2" ref="pageTop">
        <div class="section_inner">
            <div class="clear">
                <div class="title_box fixed_box fl on" :style="titTop">
                    <h2 class="f_36 bm5"><b>라이크웹</b>은</h2>
                    <p class="f_24">
                        끊임없는 노력과 발전으로 <br>고객님의 바른 길잡이가
                        되겠습니다.
                    </p>
                    <img src="@/assets/images/fixed_img.png" alt="image">
                </div>
                <ul class="history_ul fl">
                    <li v-for="(history, i) in historyList" :key="i">
                        <h5 class="year">{{ history.year }}</h5>
                        <ul class="txt_ul">
                            <li v-for="(item, j) in history.txtList" :key="j">{{ item.txt }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import EventBus from "@/EventBus";
export default {
    name: "About2",
    data() {
        return {
            about5: false,
            historyList: [],
            titTop: {
                top: "0px",
            },
            pcMode: true,
        };
    },
    methods: {
        scrollEvent() {
            this.pcMode ? this.titScroll() : (this.titTop.top = 0);
        },
        titScroll() {
            const headerH = 150;
            let winScroll = window.scrollY;
            const titleTop = this.$refs.pageTop.offsetTop - headerH;
            winScroll > titleTop
                ? (this.titTop.top = `${winScroll - titleTop}px`)
                : (this.titTop.top = "0px");
        },
        resizeFn() {
            let winW = window.innerWidth;
            winW < 1400 ? (this.pcMode = false) : (this.pcMode = true);
        },
    },
    created() {
        EventBus.$emit("bgChange", this.about5);
        axios
            .get(process.env.BASE_URL + "history.json")
            .then(response => {
                this.historyList = response.data.historyList;
            })
            .catch(err => {
                console.log(err);
                alert('리스트를 불러오지 못했습니다.');
                this.$router.push(process.env.BASE_URL);
            });
    },
    mounted() {
        window.addEventListener("scroll", this.scrollEvent);
        window.addEventListener("resize", this.resizeFn);
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollEvent);
        window.removeEventListener("resize", this.resizeFn);
    },
}
</script>

<style scoped>
.page_about2 .fixed_box {
    position: relative;
    margin-right: 355px;
}

.page_about2 .fixed_box img {
    margin-top: 60px;
}

.history_ul>li {
    margin-bottom: 120px;
}

.history_ul>li:last-child {
    margin-bottom: 0;
}

.history_ul>li .year {
    font-size: 40px;
    color: #ad2024;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-weight: 600;
    margin-bottom: 30px;
}

.history_ul>li .txt_ul li {
    font-weight: 300;
    margin-bottom: 10px;
}

.history_ul>li .txt_ul li:before {
    content: "-";
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
}

.history_ul>li .txt_ul li:last-child {
    margin-bottom: 0;
}

@media screen and (max-width: 1023px) {
    .page_about2 .title_box {
        padding-right: 10%;
    }

    .history_ul>li {
        margin-bottom: 80px;
    }
}

@media screen and (max-width: 767px) {
    .page_about2 .fixed_box img {
        display: none;
    }

    .history_ul>li {
        margin-bottom: 45px;
    }

    .history_ul>li .year {
        font-size: 22px;
        margin-bottom: 5px;
    }

    .history_ul>li .txt_ul li {
        font-size: 14px;
        margin-bottom: 3px;
    }
}</style>
