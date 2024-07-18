<template>
    <main id="main">
        <transition name="slide-fade" mode="out-in">
            <router-view :menu="menu" :companyInformation="companyInformation">
            </router-view>
        </transition>
    </main>
</template>

<script>
export default {
    name: "Main",
    props: {
        menu: Array,
        companyInformation: Object,
    },
};
</script>

<style>
.page_sub {
    padding-top: 150px;
}

.sub_title {
    padding-bottom: 95px;
    position: relative;
    z-index: 10;
    background: #fff;
}

.sub_title h2 {
    font-size: 60px;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-weight: 700;
    color: #333;
}

.page_about .tab_menu {
    background: none;
}

.tab_menu {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    position: relative;
    z-index: 20;
}

.tab_menu li {
    margin: 0 5% 15px 0;
}

.tab_menu li:last-of-type {
    margin-right: 0;
}

.tab_menu li a,
.tab_menu li button {
    display: block;
    font-size: 20px;
    color: #999;
    position: relative;
    line-height: 40px;
    transition: all 0.3s;
}

.tab_menu li a:after,
.tab_menu li button:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0);
    transition: all 0.3s;
}

.tab_menu li a.router-link-active {
    color: #333;
}

.tab_menu li a.router-link-active:after {
    transform: scale(1);
}

.tab_menu li a.on,
.tab_menu li button.on {
    color: #333;
}

.tab_menu li a.on:after,
.tab_menu li button.on:after {
    transform: scale(1);
}

.likeweb_img {
    text-align: center;
    padding-top: 150px;
}

.likeweb_img .txt {
    position: relative;
    text-align: center;
    transform: translateY(50px);
    opacity: 0;
    transition: all 1s;
}

.likeweb_img .txt strong {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 140px;
    font-weight: 700;
    opacity: 0.06;
    z-index: -1;
}

.likeweb_img .txt strong em {
    color: #ad2024;
}

.likeweb_img .txt span {
    display: block;
    font-size: 20px;
    color: #333;
}

.likeweb_img .txt span br {
    display: none;
}

.likeweb_img .txt span.txt2 {
    font-size: 30px;
}

.likeweb_img .txt span.txt2 b {
    font-weight: 700;
}

.likeweb_img .img {
    position: relative;
    padding: 100px 25px 0;
    display: inline-block;
    vertical-align: top;
}

.likeweb_img .img:before {
    content: "";
    position: absolute;
    background-size: 100%;
    width: 100%;
    height: 100%;
    transform: translateY(50px);
    opacity: 0;
    transition: all 1s;
}

.likeweb_img.on .txt {
    transform: translateY(0);
    opacity: 1;
}

.likeweb_img.on .img:before {
    transform: translateY(0);
    opacity: 1;
}

.page_contact .likeweb_img .img:before {
    left: 30%;
    top: 20%;
    max-width: 233px;
    max-height: 190px;
    background: url(~@/assets/images/img_contact_bg.png) no-repeat 50% 50%;
}

.page_about .likeweb_img .img:before {
    left: 8%;
    top: 8%;
    max-width: 394px;
    max-height: 282px;
    background: url(~@/assets/images/img_about_bg.png) no-repeat 50% 50%;
}

.page_portfolio .likeweb_img .img:before {
    left: 24%;
    top: 35%;
    max-width: 182px;
    max-height: 76px;
    background: url(~@/assets/images/img_portfolio_bg.png) no-repeat 50% 50%;
}

.btn_more_wrap {
    text-align: center;
    padding: 60px 0;
}

.btn_more_wrap button {
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.btn_more_wrap button:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%) rotateZ(0);
    width: 50px;
    height: 2px;
    background: #ad2024;
    transition: all 0.3s;
}

.btn_more_wrap button:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateY(-50%);
    width: 2px;
    height: 50px;
    background: #ad2024;
    transition: all 0.3s;
}

.btn_more_wrap button span {
    font-size: 18px;
    font-weight: 500;
    color: #ad2024;
    font-family: "Montserrat", sans-serif;
    padding-top: 60px;
    display: block;
}

.btn_more_wrap button:hover:before {
    transform: translate(-50%, -50%) rotateZ(90deg);
}

.btn_more_wrap button:hover:after {
    transform: translate(-50%, -50%) rotateZ(90deg);
}

@media screen and (max-width: 1400px) {
    .sub_title {
        padding: 70px 0 80px;
    }

    .sub_title h2 {
        font-size: 50px;
    }

    .likeweb_img {
        padding-top: 110px;
    }

    .likeweb_img .txt span .tb_br {
        display: block;
    }
}

@media screen and (max-width: 768px) {
    .sub_title {
        padding: 60px 0 40px;
    }

    .sub_title h2 {
        font-size: 30px;
        padding-bottom: 5px;
    }

    .tab_menu li {
        margin: 0 50px 5px 0;
    }

    .tab_menu li a,
    .tab_menu li button {
        font-size: 14px;
        line-height: 30px;
    }

    .likeweb_img {
        padding-top: 80px;
    }

    .likeweb_img .txt strong {
        font-size: 72px;
    }

    .likeweb_img .txt span {
        font-size: 13px;
    }

    .likeweb_img .txt span.txt2 {
        font-size: 20px;
    }

    .likeweb_img .img {
        padding-top: 50px;
    }

    .likeweb_img .txt span br {
        display: block;
    }

    .page_contact .likeweb_img {
        padding-top: 40px;
    }

    .btn_more_wrap {
        padding: 40px 0;
    }

    .btn_more_wrap button:before {
        width: 30px;
        height: 2px;
    }

    .btn_more_wrap button:after {
        width: 2px;
        height: 30px;
    }

    .btn_more_wrap button span {
        font-size: 14px;
        padding-top: 40px;
    }
}
</style>
