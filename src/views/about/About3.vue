<template>
    <section class="page_about3">
        <div class="section_inner">
            <div class="title_box">
                <p class="f_24 bm5">
                    웹기획, 디자인, 코딩, 개발, 서버인프라구축, <br>클라우드 구축, 유지관리까지
                </p>
                <h2 class="f_36 bold">라이크웹에선 원스톱으로 끝!</h2>
            </div>
        </div>
        <div class="img">
            <img src="@/assets/images/img_about3.jpg" alt="image">
        </div>
        <div class="section_inner">
            <ul class="list_about3">
                <li>
                    <div class="box">
                        <strong>영업기획</strong>
                        <ul>
                            <li>고객컨설팅</li>
                            <li>브랜드개발</li>
                            <li>고객관리</li>
                            <li>마케팅 기획</li>
                            <li>컨텐츠 기획</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="box">
                        <strong>디자인</strong>
                        <ul>
                            <li>UI·UX 디자인/기획</li>
                            <li>컨텐츠 디자인</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="box">
                        <strong>개발</strong>
                        <ul>
                            <li>Jquery 개발</li>
                            <li>asp, php, jsp 개발</li>
                            <li>DB 설계</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="box">
                        <strong>네트워크</strong>
                        <ul>
                            <li>서버관리</li>
                            <li>웹호스팅서비스</li>
                            <li>도메인관리</li>
                            <li>기업메일 서비스</li>
                            <li>서버매니져먼트</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="box">
                        <strong>유지보수</strong>
                        <ul>
                            <li>메인, 서브 리뉴얼</li>
                            <li>오류 및 오타수정</li>
                            <li>컨텐츠 추가, 수정</li>
                            <li>추가개발</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="box">
                        <strong>관리</strong>
                        <ul>
                            <li>재무회계</li>
                            <li>고객서비스</li>
                            <li>인사</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "About3",
    data() {
        return {
            about5: false,
        };
    },
    created() {
        EventBus.$emit("bgChange", this.about5);
    },
};
</script>

<style scoped>
.page_about3 .title_box br {
    display: none;
}

.page_about3 .img {
    padding-top: 80px;
    max-width: 1400px;
    margin: 0 auto;
}

.page_about3 .img img {
    width: 100%;
}

.list_about3 {
    padding-top: 100px;
    display: flex;
    flex-wrap: wrap;
}

.list_about3>li {
    flex: 1 0 30%;
    padding: 0 0 120px;
}

.list_about3 .box {
    position: relative;
    width: 80%;
    padding: 20px 10px 0;
}

.list_about3 .box:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: #222;
}

.list_about3 strong {
    display: block;
    font-size: 30px;
    font-weight: 700;
    color: #333;
}

.list_about3 ul {
    padding-top: 25px;
    display: flex;
    flex-wrap: wrap;
}

.list_about3 ul li {
    width: 50%;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    padding-left: 15px;
    position: relative;
    margin-top: 10px;
}

.list_about3 ul li:nth-of-type(1) {
    margin-top: 0;
}

.list_about3 ul li:nth-of-type(2) {
    margin-top: 0;
}

.list_about3 ul li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 5px;
    height: 5px;
    background: #222;
}

@media screen and (max-width: 1023px) {
    .page_about3 .img {
        padding-top: 50px;
    }

    .list_about3 {
        padding-top: 60px;
    }

    .list_about3>li {
        margin: 0 60px 0 0;
        flex: 1 0 40%;
        padding-bottom: 80px;
    }

    .list_about3>li:nth-of-type(2n) {
        margin-right: 0;
    }

    .list_about3 .box {
        width: 100%;
        padding: 20px 20px 0;
    }

    .list_about3 strong {
        font-size: 24px;
    }

    .list_about3 ul {
        padding-top: 20px;
    }

    .list_about3 ul li {
        font-size: 16px;
    }

    .list_about3 ul li:before {
        top: 10px;
    }
}

@media screen and (max-width: 767px) {
    .page_about3 .title_box br {
        display: block;
    }

    .page_about3 .img {
        padding-top: 40px;
    }

    .list_about3 {
        display: block;
        padding-top: 30px;
    }

    .list_about3 .box {
        padding: 15px 10px;
    }

    .list_about3 strong {
        font-size: 20px;
    }

    .list_about3>li {
        margin: 0 !important;
        flex: 1 0 40%;
        padding-bottom: 50px;
    }

    .list_about3>li:last-of-type {
        padding-bottom: 0;
    }

    .list_about3 ul li {
        font-size: 14px;
        margin-top: 5px;
    }

    .list_about3 ul li:before {
        top: 9px;
        width: 4px;
        height: 4px;
    }
}</style>
