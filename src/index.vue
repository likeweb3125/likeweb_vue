<template>
    <div id="wrap">
        <Header :menu="menu" :companyInformation="companyInformation" />
        <Main :menu="menu" :companyInformation="companyInformation" />
        <Footer v-if="$route.name !== 'Home'" :companyInformation="companyInformation" />
    </div>
</template>

<script>
import router from "@/router/index.js";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
    name: "Content",
    components: {
        Header,
        Main,
        Footer,
    },
    data() {
        return {
            menu: [],
            companyInformation: {
                company: "(주)라이크웹",
                fondation: "2004년 03월 08일",
                address: "서울특별시 강남구 봉은사로55길 17 (삼성동 35-25) 가남빌딩 5층",
                representative: "권성한",
                businessNumber: "107-87-13883",
                tel: "02-784-3125 ",
                fax: "02-6442-3125",
                email: "likeweb@likeweb.co.kr",
            },
        };
    },
    created() {
        const routes = router.options.routes;
        this.menu = routes
            .filter(route => route.name === "About" || route.name === "Solution" || route.name === "Portfolio" || route.name === "Works")
            .map((route, index) => {
                const menuEntry = {
                    id: index + 1,
                    to: route.path,
                    txt: route.name,
                };
                if (route.children) {
                    menuEntry.depth = route.children.map((child, depthIndex) => ({
                        id: depthIndex + 1,
                        to: `${route.path}/${child.path}`,
                        txt: child.name,
                    }));
                }
                return menuEntry;
            });
    }
};
</script>

<style>
@import "~@/assets/css/common.css";
@import "~@/assets/css/form.css";

@font-face {
    font-family: "InkLipquid";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}

html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    color: #666;
    letter-spacing: -0.025em;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
main {
    display: block;
}

body,
td,
select,
textarea,
input {
    font-size: 16px;
    font-family: "Noto Sans KR", "맑은 고딕", "Malgun Gothic", sans-serif;
    color: #666;
    font-weight: 400;
}

*:focus {
    outline: none;
}

::-moz-selection {
    background: #0e559b;
    color: #fff;
}

::selection {
    background: #0e559b;
    color: #fff;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
blockquote {
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
}

ol,
ul {
    list-style: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0px;
}

fieldset,
img,
iframe {
    border: 0;
    vertical-align: top;
}

img {
    vertical-align: top;
    max-width: 100%;
}

iframe {
    padding: 0;
    margin: 0;
}

caption {
    text-align: left;
}

input,
radio {
    vertical-align: middle;
}

a {
    color: #666;
    text-decoration: none;
    padding: 0;
    margin: 0;
}

a:link {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

caption {
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    visibility: hidden;
}

.hide_con,
hr {
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    visibility: hidden;
}

.Roboto {
    font-family: "Roboto";
}

.Noto {
    font-weight: 400;
}

.Noto_B {
    font-weight: 700;
}

.Noto_M {
    font-weight: 500;
}

.Noto_L {
    font-weight: 300;
}

img {
    max-width: 100%;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

body {
    line-height: 1.5;
    -webkit-text-size-adjust: none;
}

body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
address,
code,
em,
img,
strong,
sub,
sup,
b,
u,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
section,
main,
audio,
video {
    box-sizing: border-box;
}

.edit div {
    box-sizing: content-box !important;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    table-layout: fixed;
}

iframe {
    overflow: hidden;
    border: 0;
}

address,
em,
i {
    font-style: normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    font-size: 100%;
}

legend,
.blind {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
}

caption {
    width: 1px;
    height: 1px;
    font-size: 1px;
    line-height: normal;
    visibility: visible;
    clip: rect(0 0 0 0);
    overflow: hidden;
    color: transparent;
}

textarea {
    width: 100%;
    border: 1px solid #ddd;
    background: none;
    box-sizing: border-box;
    resize: none;
}

textarea:focus {
    outline: none;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

input::-ms-clear,
input::-ms-reveal {
    display: none;
}

select::-ms-expand {
    display: none;
}

em,
i {
    font-style: normal;
}

p {
    margin: 0;
}

button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
}

label {
    cursor: pointer;
}

body.on {
    overflow: hidden;
}

/* placeholder color */
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 300;
}

/* WebKit, Blink, Edge */
input:-moz-placeholder,
textarea:-moz-placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 300;
    opacity: 1;
}

/* Firefox 4 to 18 */
input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 300;
    opacity: 1;
}

/* Firefox 19+ */
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #999 !important;
    font-size: 16px !important;
    font-weight: 300 !important;
}

/* Internet Explorer 10-11 */
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 300;
}

/* Microsoft Edge */
input::placeholder,
textarea::placeholder {
    color: #999;
    font-size: 16px;
    font-weight: 300;
}

/* Most modern browsers support this now */
#wrap {
    width: 100%;
    text-align: left;
    min-width: 360px;
    overflow: hidden;
}

body,
button,
input,
select,
textarea,
table {
    /*font-family: 'Noto Sans KR',"微软雅黑",'맑은 고딕','malgun gothic',sans-serif;*/
    font-family: "Noto Sans KR", "맑은 고딕", "malgun gothic", sans-serif;
    font-size: 16px;
    color: #333;
    /*word-break: keep-all;*/
    /*word-wrap: break-word;*/
    letter-spacing: -0.025em;
}

/* 스크롤 */
.scroll_box::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
}

.scroll_box::-webkit-scrollbar-track {
    background-color: #fbf5f4;
    border-radius: 0;
}

.scroll_box::-webkit-scrollbar-thumb {
    background-color: #ad2024;
    border-radius: 0;
}

/* 공통input */
.input_box input {
    border: none;
    border-radius: 0;
    width: 100%;
    font-size: 16px;
    color: #666;
}

.input_box input[type="file"] {
    width: auto;
}

.radio_box {
    display: inline-block;
    vertical-align: top;
}

.radio_box input[type="radio"]+label {
    font-size: 18px;
    font-weight: 300;
    color: #333;
    padding-left: 30px;
    position: relative;
}

.radio_box input[type="radio"]+label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 3px;
    transition: all 0.1s;
}

.radio_box input[type="radio"]+label:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 6px;
    background: url(~@/assets/images/ic_chk.png) no-repeat 50% 50%;
    background-size: 100%;
    opacity: 0;
    transition: all 0.1s;
}

.radio_box input[type="radio"]:checked+label:before {
    border-color: #ad2024;
}

.radio_box input[type="radio"]:checked+label:after {
    opacity: 1;
}

.chk_box input[type="checkbox"]+label {
    font-size: 18px;
    font-weight: 400;
    color: #333;
    padding-left: 30px;
    position: relative;
}

.chk_box input[type="checkbox"]+label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 3px;
    transition: all 0.1s;
}

.chk_box input[type="checkbox"]+label:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 6px;
    background: url(~@/assets/images/ic_chk.png) no-repeat 50% 50%;
    background-size: 100%;
    opacity: 0;
    transition: all 0.1s;
}

.chk_box input[type="checkbox"]:checked+label:before {
    border-color: #ad2024;
}

.chk_box input[type="checkbox"]:checked+label:after {
    opacity: 1;
}

.select_box {
    position: relative;
}

.select_box select {
    border: none;
    width: 100%;
    font-size: 16px;
    color: #666;
    margin: 0;
    padding: 0;
    border-radius: 0;
    background: none;
}

.select_box:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 19px;
    height: 10px;
    transform: translateY(-50%);
    background: url(~@/assets/images/ic_arr1.png) no-repeat 50% 50%;
    background-size: 100%;
}

.textarea_box {
    border: 1px solid #ddd;
}

.textarea_box textarea {
    border: none;
    padding: 20px;
    border-radius: 0;
}

/* 페이지슬라이드애니메이션 */
.slide-fade-enter {
    transform: translateX(-50px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s;
}

.slide-fade-leave-to {
    transform: translateX(-50px);
    opacity: 0;
}

/* 슬라이드애니메이션100% */
.slide-ani-enter {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-ani-enter-active,
.slide-ani-leave-active {
    transition: all 0.3s;
}

.slide-ani-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

/* 팝업애니메이션 */
.pop-ani-enter {
    opacity: 0;
}

.pop-ani-enter-active,
.pop-ani-leave-active {
    transition: all 0.3s;
}

.pop-ani-leave-to {
    opacity: 0;
}

.section_inner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
}

.page_sub {
    padding-top: 150px;
}

@media screen and (max-width: 1400px) {
    .radio_box input[type="radio"]+label {
        font-size: 14px;
        padding-left: 25px;
    }

    .radio_box input[type="radio"]+label:before {
        width: 14px;
        height: 14px;
    }

    .radio_box input[type="radio"]+label:after {
        left: 5px;
        width: 7px;
        height: 5px;
    }

    .page_sub {
        padding-top: 100px;
    }

    .section_inner {
        padding: 0 25px;
    }
}

@media screen and (max-width: 768px) {
    .page_sub {
        padding-top: 70px;
    }

    .section_inner {
        padding: 0 15px;
    }

    .input_box input {
        font-size: 13px;
    }

    .select_box:after {
        width: 12px;
        height: 7px;
    }

    .select_box select {
        font-size: 13px;
    }

    .textarea_box textarea {
        padding: 10px;
        font-size: 13px;
    }

    .chk_box input[type="checkbox"]+label {
        font-size: 13px;
        padding-left: 25px;
    }

    .chk_box input[type="checkbox"]+label:before {
        width: 14px;
        height: 14px;
    }

    .chk_box input[type="checkbox"]+label:after {
        left: 5px;
        width: 7px;
        height: 5px;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #999;
        font-size: 13px;
        font-weight: 300;
    }

    /* WebKit, Blink, Edge */
    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #999;
        font-size: 13px;
        font-weight: 300;
        opacity: 1;
    }

    /* Firefox 4 to 18 */
    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: #999;
        font-size: 13px;
        font-weight: 300;
        opacity: 1;
    }

    /* Firefox 19+ */
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #999 !important;
        font-size: 12px !important;
        font-weight: 300 !important;
    }

    /* Internet Explorer 10-11 */
    input::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
        color: #999;
        font-size: 13px;
        font-weight: 300;
    }

    /* Microsoft Edge */
    input::placeholder,
    textarea::placeholder {
        color: #999;
        font-size: 13px;
        font-weight: 300;
    }

    /* Most modern browsers support this now */
}

/* 공통 */
.btn_more.on img {
    transform: rotate(90deg);
    transition: ease 0.3s;
}

.btn_more.off img {
    transform: rotate(0deg);
    transition: ease 0.3s;
}

.btn_inquiry {
    width: 320px;
    height: 60px;
    color: #fff;
    background: #ad2024;
    font-size: 20px;
    font-weight: 500;
    display: block;
    text-align: center;
    line-height: 58px;
}

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {

    /* IE10+ CSS styles goes underneath */
    .fixed_box.on {
        position: sticky;
        top: 100px;
        left: 0;
    }

    .fixed_box.on.bottom {
        position: absolute;
        top: inherit;
        bottom: 0;
    }
}

.cont {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    background: #fff;
}

.clear::after {
    clear: both;
    content: "";
    display: block;
}

.btn_more {
    text-align: center;
    display: block;
    width: 50px;
    margin: 0 auto;
}

.btn_more span {
    display: block;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #ad2024;
    margin-top: 15px;
}

.btn_more.on img {
    transform: rotate(90deg);
    transition: ease 0.3s;
}

.btn_more.off img {
    transform: rotate(0deg);
    transition: ease 0.3s;
}

.ani_box {
    text-align: center;
    margin: 160px auto 0;
    position: relative;
    max-width: 1400px;
}

.ani_box .txt1 {
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 140px;
    font-weight: bold;
    color: #ad2024;
    line-height: 1;
    margin-bottom: 30px;
    transform: translate(0, 60px);
    opacity: 0;
}

.ani_box .txt1 span {
    color: #333333;
}

.ani_box .txt2 {
    position: absolute;
    top: 20px;
    left: 50%;
    left: 0;
    width: 100%;
    transform: translate(0, 60px);
    opacity: 0;
}

.ani_box1 .txt2 {
    font-size: 20px;
}

.ani_box1 .txt2 span {
    font-size: 30px;
}

.ani_box2 .txt1 {
    margin-bottom: 110px;
}

.ani_box3 .txt1 {
    margin-bottom: 96px;
}

.ani_box .ani_img {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.ani_box1 .ani_img {
    bottom: 180px;
    left: 40%;
    transform: translate(0, 60px);
}

.ani_box2 .ani_img {
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 60px);
}

.ani_box3 .ani_img {
    bottom: 50px;
    left: 53%;
    transform: translate(-50%, 60px);
}

.ani_box.on .txt1 {
    transform: translate(0px, 0);
    transition-delay: 0.2s;
    transition-duration: 1s, 1s;
    transition-property: transform, opacity;
    transition-timing-function: ease, ease;
    opacity: 0.1;
}

.ani_box.on .txt2 {
    transform: translate(0px, 0);
    transition-delay: 0.2s;
    transition-duration: 1s, 1s;
    transition-property: transform, opacity;
    transition-timing-function: ease, ease;
    opacity: 1;
}

.ani_box.on .ani_img {
    transform: translate(0px, 0);
    transition-delay: 0.2s;
    transition-duration: 1s, 1s;
    transition-property: transform, opacity;
    transition-timing-function: ease, ease;
    opacity: 1;
}

.ani_box2.on .ani_img {
    transform: translate(-50%, 0);
}

.ani_box3.on .ani_img {
    transform: translate(-50%, 0);
}

/* font */
.Oxanuum {
    font-family: "Oxanium", 'Noto Sans KR', cursive;
}

.Caveat {
    font-family: "Caveat", cursive;
}

.Mont {
    font-family: "Montserrat", sans-serif;
}

.light {
    font-weight: 300;
}

.normal {
    font-weight: 400;
}

.medium {
    font-weight: 500;
}

.s_bold {
    font-weight: 600;
}

.bold {
    font-weight: 700;
}

.bolder {
    font-weight: 800;
}

@media screen and (max-width: 1500px) {
    .cont {
        max-width: 100%;
        padding: 0 25px;
    }
}

@media screen and (max-width: 1300px) {
    .fixed_box {
        width: 50%;
        margin-right: 0;
    }

    .fixed_box+* {
        width: 50%;
    }
}

@media screen and (max-width: 1023px) {
    .ani_box {
        margin-top: 120px;
    }

    .title_box h2 {
        font-size: 36px;
    }

    .title_box p {
        font-size: 16px;
    }

    .btn_inquiry {
        margin-top: 30px;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
    }
}

@media screen and (max-width: 767px) {
    .title_box h2 {
        font-size: 22px;
    }

    .title_box p {
        font-size: 14px;
    }

    .fixed_box {
        width: 100%;
        margin-bottom: 50px;
        padding-right: 0;
    }

    .fixed_box+* {
        width: 100%;
    }

    .ani_box {
        margin-top: 80px;
    }

    .ani_box .txt1 {
        font-size: 72px;
    }

    .ani_box .txt2 {
        font-size: 13px;
        top: -2px;
        line-height: 1.3;
    }

    .ani_box .txt2 span {
        font-size: 20px;
    }

    .ani_box2 .txt1 {
        margin-bottom: 60px;
    }

    .ani_box2 .txt2 {
        top: 13px;
    }

    .ani_box2 .ani_img {
        max-width: 70%;
    }

    .ani_box3 .ani_img {
        max-width: 200px;
        bottom: 70px;
        left: 58%;
    }

    .btn_inquiry {
        margin-top: 30px;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
    }
}

@media screen and (max-height: 680px) {

    /* sub_page */
    .ani_box {
        width: calc(100% + 30px);
        margin-left: -15px;
    }

    .ani_box .p_img {
        max-width: 90%;
    }

    .ani_box3 .ani_img {
        max-width: 180px;
        bottom: 60px;
        left: 63%;
    }
}</style>
