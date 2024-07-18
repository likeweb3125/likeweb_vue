<template>
    <section class="page_about4">
        <div class="section_inner">
            <div class="top_wrap clear">
                <div class="title_box fl">
                    <h2 class="f_36 bold bm20">
                        자신의 끼와 열정을 <br>마음껏 펼칠 수 있는 회사
                    </h2>
                    <p class="f_24 light">
                        라이크웹에서 가족같이 따뜻한 정을 나누며 일할 <br>근면
                        성실한 좋은 인재 여러분들을 모집합니다.
                    </p>
                    <a :href="`mailto:${companyInformation.email}`" class="btn_mail">
                        {{ companyInformation.email }}
                    </a>
                </div>
                <img src="@/assets/images/img_need.png" alt="people image" class="fr">
            </div>
            <ul class="team_ul">
                <li class="clear">
                    <h4 class="f_30 medium fl">PM</h4>
                    <ul class="txt_ul fl">
                        <li>
                            - 웹사이트 구축 및 온라인 마케팅 실행 PM 경험이 있는
                            자
                        </li>
                        <li>- 프리젠테이션 스킬을 보유한 자</li>
                        <li>- 커뮤니케이션 능력이 뛰어난 자</li>
                        <li>- 효율적인 조직관리 및 운영이 가능한 자</li>
                    </ul>
                </li>
                <li class="clear">
                    <h4 class="f_30 medium fl">웹디자이너</h4>
                    <ul class="txt_ul fl">
                        <li>
                            - 뛰어난 감각과 열정, 그리고 프로젝트 리딩 능력이
                            우수한 자
                        </li>
                        <li>
                            - 제안 및 제작시안 디자인, 프로젝트 메인 디자인 및
                            진행
                        </li>
                    </ul>
                </li>
                <li class="clear">
                    <h4 class="f_30 medium fl">웹기획자</h4>
                    <ul class="txt_ul fl">
                        <li>- 열정을 가지고 전문성을 키우고 싶은자</li>
                        <li>- 책임감이 강한 자</li>
                        <li>- 웹 기획, 온라인 마케팅 기획 경험이 있는자</li>
                    </ul>
                </li>
                <li class="clear">
                    <h4 class="f_30 medium fl">프로그램 <br>개발자</h4>
                    <ul class="txt_ul fl">
                        <li>- 개발언어 : Java, jsp, .net, php, asp</li>
                        <li>- 데이터베이스 : oracle, mysql, mssql</li>
                    </ul>
                </li>
                <li class="clear">
                    <h4 class="f_30 medium fl">웹퍼블리셔</h4>
                    <ul class="txt_ul fl">
                        <li>
                            - 웹표준 퍼블리싱 및 Javascript 함수제작, 클래스
                            제작
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="circle_ul">
                <li>
                    <h3 class="f_30 medium bm10">1차</h3>
                    <p class="f_22 medium">서류전형자 <br>발표</p>
                </li>
                <li>
                    <h3 class="f_30 medium bm10">2차</h3>
                    <p class="f_22 medium">1차 합격자 <br>면접</p>
                </li>
                <li>
                    <h3 class="f_30 medium bm10 f_white">3차</h3>
                    <p class="f_22 medium f_white">최종 합격자 <br>발표</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import EventBus from "@/EventBus";
export default {
    name: "About4",
    props: {
        companyInformation: Object,
    },
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
.page_about4 .top_wrap {
    border-bottom: 2px solid #333;
    overflow: hidden;
}

.page_about4 .top_wrap>img {
    margin-bottom: -1px;
}

.page_about4 .btn_mail {
    margin-top: 40px;
    width: 350px;
    height: 50px;
    color: #ad2024;
    font-size: 20px;
    padding-left: 94px;
    border: 1px solid #ad2024;
    border-radius: 25px;
    background: url(~@/assets/images/ic_mail.png) no-repeat left 40px center;
    display: block;
    line-height: 50px;
}

.page_about4 .btn_mail:hover {
    color: #fff;
    background: #ad2024 url(~@/assets/images/ic_mail_on.png) no-repeat left 40px center;
}

.page_about4 .team_ul {
    margin-top: 90px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.page_about4 .team_ul>li {
    width: 50%;
    margin-bottom: 104px;
}

.page_about4 .team_ul>li h4 {
    width: 30%;
}

.page_about4 .team_ul>li .txt_ul {
    width: 70%;
}

.page_about4 .team_ul>li .txt_ul li {
    margin-bottom: 8px;
    font-weight: 300;
}

.page_about4 .team_ul>li .txt_ul li:last-child {
    margin-bottom: 0;
}

.page_about4 .circle_ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.page_about4 .circle_ul::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
}

.page_about4 .circle_ul li {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 1px solid #333;
    text-align: center;
    padding-top: 90px;
    background: #fff;
}

.page_about4 .circle_ul li:last-child {
    border-color: #ad2024;
    background: #ad2024;
}

@media screen and (max-width: 1300px) {
    .page_about4 .top_wrap>img {
        max-width: 50%;
    }

    .page_about4 .team_ul>li {
        width: 100%;
        margin-bottom: 80px;
    }

    .page_about4 .team_ul>li h4 {
        width: 20%;
    }

    .page_about4 .team_ul>li .txt_ul {
        width: 80%;
    }
}

@media screen and (max-width: 1100px) {
    .page_about4 .top_wrap {
        text-align: center;
    }

    .page_about4 .top_wrap .title_box {
        text-align: left;
        float: none;
    }

    .page_about4 .top_wrap>img {
        float: none;
        max-width: 100%;
    }

    .page_about4 .circle_ul li {
        width: 250px;
        height: 250px;
        padding-top: 63px;
    }
}

@media screen and (max-width: 1023px) {
    .page_about4 .btn_mail {
        margin-top: 30px;
        width: 276px;
        height: 40px;
        font-size: 16px;
        padding-left: 74px;
        line-height: 37px;
        background-position-x: 30px;
        background-size: 24px;
    }

    .page_about4 .btn_mail:hover {
        background-position-x: 30px;
        background-size: 24px;
    }

    .page_about4 .team_ul {
        margin-top: 60px;
        padding-bottom: 30px;
    }

    .page_about4 .team_ul>li {
        margin-bottom: 50px;
    }

    .page_about4 .team_ul>li h4 {
        font-size: 24px;
    }

    .page_about4 .team_ul>li .txt_ul li {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .page_about4 .circle_ul li {
        width: 200px;
        height: 200px;
        padding-top: 50px;
    }

    .page_about4 .circle_ul li h3 {
        font-size: 23px;
    }

    .page_about4 .circle_ul li p {
        font-size: 16px;
        padding-top: 10px;
    }
}

@media screen and (max-width: 767px) {
    .page_about4 .top_wrap .title_box {
        margin-bottom: 40px;
    }

    .page_about4 .btn_mail {
        width: 228px;
        height: 32px;
        line-height: 30px;
        font-size: 14px;
        padding-left: 58px;
        background-position-x: 20px;
        background-size: 18px;
    }

    .page_about4 .btn_mail:hover {
        background-position-x: 20px;
        background-size: 18px;
    }

    .page_about4 .team_ul {
        margin-top: 30px;
        padding-bottom: 10px;
    }

    .page_about4 .team_ul>li {
        margin-bottom: 30px;
    }

    .page_about4 .team_ul>li h4 {
        width: 100%;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .page_about4 .team_ul>li h4 br {
        display: none;
    }

    .page_about4 .team_ul>li .txt_ul {
        width: 100%;
    }

    .page_about4 .team_ul>li .txt_ul li {
        font-size: 13px;
    }

    .page_about4 .circle_ul li {
        width: 100px;
        height: 100px;
        padding-top: 17px;
    }

    .page_about4 .circle_ul li h3 {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .page_about4 .circle_ul li p {
        font-size: 13px;
        padding-top: 0;
    }
}

@media screen and (max-width: 680px) {
    .page_about4 .circle_ul li {
        width: 83px;
        height: 83px;
        padding-top: 13px;
    }

    .page_about4 .circle_ul li h3 {
        font-size: 14px;
        margin-bottom: 0;
    }
}</style>
