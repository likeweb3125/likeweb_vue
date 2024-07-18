<template>
    <section class="page_contact1" ref="pageTop">
        <div class="section_inner">
            <h3 :style="titTop">
                <strong>날카로운 통찰력</strong>으로<br>고객에 맞는 트렌드 선도
            </h3>
            <div class="contact_con">
                <strong class="txt"><span>Let's work together on your next project</span></strong>
                <ul class="list_address">
                    <li>
                        <span>Tel.</span>
                        <em>02-784-3125</em>
                    </li>
                    <li>
                        <span>온라인문의</span>
                        <em>likeweb@likeweb.co.kr</em>
                    </li>
                    <li>
                        <span>Address.</span>
                        <em>서울특별시 강남구 봉은사로55길 17, 가남빌딩5층</em>
                    </li>
                </ul>
                <div class="map_area">
                    <iframe class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.84427951606!2d127.04191045128246!3d37.511590734930856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca40b963ca6f5%3A0x7fd4356a78a6022e!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5kgMzUtMjU!5e0!3m2!1sko!2skr!4v1642553997995!5m2!1sko!2skr"
                        style="border:0;width:100%;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact1",
    data() {
        return {
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
        window.addEventListener("scroll", this.scrollEvent);
        window.addEventListener("resize", this.resizeFn);
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollEvent);
        window.removeEventListener("resize", this.resizeFn);
    },
};
</script>

<style scoped>
.page_contact1 .section_inner {
    position: relative;
}

.page_contact1 h3 {
    font-size: 36px;
    color: #333;
    position: absolute;
    left: 0;
    top: 0;
    width: 35%;
}

.page_contact1 h3 b {
    font-weight: 700;
}

.page_contact1 .contact_con {
    width: 65%;
    margin-left: auto;
}

.page_contact1 .contact_con .txt {
    display: block;
    position: relative;
}

.page_contact1 .contact_con .txt:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: #333;
    z-index: -1;
}

.page_contact1 .contact_con .txt span {
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-right: 15px;
    background: #fff;
}

.page_contact1 .contact_con .list_address {
    padding: 70px 0 30px;
}

.page_contact1 .contact_con .list_address li {
    margin-top: 15px;
    display: flex;
}

.page_contact1 .contact_con .list_address li:first-of-type {
    margin-top: 0;
}

.page_contact1 .contact_con .list_address span {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    line-height: 30px;
    width: 110px;
}

.page_contact1 .contact_con .list_address em {
    font-size: 20px;
    font-weight: 300;
    color: #333;
    line-height: 30px;
    width: calc(100% - 110px);
}

.page_contact1 .map_area {
    display: block;
}

.page_contact1 .map_area .map {
    height: 480px;
}

@media screen and (max-width: 1400px) {
    .page_contact1 h3 {
        position: static;
        font-size: 36px;
        width: 100%;
        padding-bottom: 60px;
    }

    .page_contact1 .contact_con {
        width: 100%;
        margin: 0 auto;
    }

    .page_contact1 .contact_con .txt {
        padding-top: 20px;
    }

    .page_contact1 .contact_con .txt span {
        padding-right: 0;
    }

    .page_contact1 .contact_con .txt:before {
        top: 0;
    }

    .page_contact1 .contact_con .list_address {
        padding-top: 45px;
    }

    .page_contact1 .contact_con .list_address li {
        margin-top: 10px;
    }

    .page_contact1 .contact_con .list_address span {
        font-size: 16px;
        width: 90px;
    }

    .page_contact1 .contact_con .list_address em {
        font-size: 16px;
        width: calc(100% - 90px);
    }

    .page_contact1 .map_area .map {
        height: 375px;
    }
}

@media screen and (max-width: 768px) {
    .page_contact1 h3 {
        font-size: 22px;
        padding-bottom: 40px;
    }

    .page_contact1 .contact_con .txt span {
        font-size: 14px;
    }

    .page_contact1 .contact_con .list_address {
        padding: 30px 0 20px;
    }

    .page_contact1 .contact_con .list_address li {
        margin-top: 5px;
    }

    .page_contact1 .contact_con .list_address span {
        font-size: 13px;
        width: 60px;
        line-height: 24px;

    }

    .page_contact1 .contact_con .list_address em {
        font-size: 13px;
        width: calc(100% - 60px);
        line-height: 24px;
    }

    .page_contact1 .map_area .map {
        height: 170px;
    }
}</style>
