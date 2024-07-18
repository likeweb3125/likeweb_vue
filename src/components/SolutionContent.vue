<template>
    <div class="solution_component" :class="pageClass">
        <div class="section2">
            <div class="section_inner">
                <div class="tit">
                    <em>주요기능</em>
                    <h3 v-html="sectionTitle1"></h3>
                </div>
                <ul class="list_functions" :class="listStyleMany()">
                    <li v-for="(item, i) in menuFunctions" :key="i">
                        <div class="ic">
                            <img :src="item.image" :alt="`${item.tit} 아이콘`">
                        </div>
                        <span v-html="item.tit"></span>
                    </li>
                </ul>
            </div>
            <div class="list_card_wrap">
                <div class="section_inner">
                    <h4 v-html="listCardTitle"></h4>
                    <ul class="list_card">
                        <li v-for="(item, i) in listCard" :key="i">
                            <div class="img">
                                <img :src="item.image" :alt="`${item.tit} 이미지`">
                            </div>
                            <div class="txt_wrap">
                                <strong>{{ item.tit }}</strong>
                                <p>{{ item.txt }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section3">
            <div class="section_inner">
                <div class="tit">
                    <em>사용기업</em>
                    <h3>라이크웹의 {{ pageTitle }} 솔루션과 <br>함께 합니다.</h3>
                </div>
                <ul class="list_logo" :class="listStyleSingle()">
                    <li v-for="(item, i) in useCompanyList" :key="i">
                        <div class="img">
                            <img :src="item.logoImage" :alt="`${item.companyName}`">
                        </div>
                        <strong v-html="item.companyName"></strong>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SolutionContent",
    props: [
        'pageClass',
        'pageTitle',
        'sectionTitle1',
        'menuFunctions',
        'listCardTitle',
        'listCard',
        'useCompanyList'
    ],
    methods: {
        listStyleSingle() {
            return this.useCompanyList.length <= 1 ? 'list_single' : false;
        },
        listStyleMany() {
            return this.menuFunctions.length > 8 ? 'list_many' : false;
        }
    }
};
</script>

<style>
.solution_component .section2 {
    padding-top: 100px;
}

.solution_component .tit {
    text-align: center;
    padding-bottom: 60px;
}

.solution_component .tit em {
    display: inline-block;
    padding: 0 16px;
    line-height: 38px;
    border: 1px solid #ad2024;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #ad2024;
}

.solution_component .tit h3 {
    font-size: 32px;
    font-weight: 700;
    color: #000;
    padding-top: 10px;
}

.solution_component .tit h3 br {
    display: none;
}

.solution_component .list_functions {
    padding: 40px 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 20px;
}

.solution_component .list_functions li {
    text-align: center;
}

.solution_component .list_functions .ic {
    margin: 0 auto;
    width: 61px;
    height: 60px;
    display: block;
}

.solution_component .list_functions .ic img {
    width: 100%;
}

.solution_component .list_functions span {
    display: block;
    padding-top: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
}

.solution_component .list_card_wrap {
    position: relative;
    padding: 40px 0 120px;
}

.solution_component .list_card_wrap:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100% + 90px);
    background: rgba(246, 229, 227, 0.4);
    z-index: -1;
}

.solution_component .list_card_wrap h4 {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: #666;
    padding-top: 75px;
    position: relative;
}

.solution_component .list_card_wrap h4 b {
    font-weight: 500;
    color: #333;
}

.solution_component .list_card_wrap h4:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 48px;
    background: #ad2024;
}

.solution_component .list_card {
    padding-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
    counter-reset: counter;
}

.solution_component .list_card li {
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 0;
    box-shadow: 8px 8px 32px 0 rgba(173, 32, 36, 0);
    transition: all .3s;
}

.solution_component .list_card img {
    width: 100%;
}

.solution_component .list_card .txt_wrap {
    padding: 25px 35px;
    background: #fff;
}

.solution_component .list_card .txt_wrap strong {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: #333;
    display: flex;
    align-items: center;
}

.solution_component .list_card .txt_wrap strong:before {
    content: counter(counter, decimal-leading-zero);
    counter-increment: counter;
    margin-right: 10px;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 18px;
    font-weight: 700;
    color: #ad2024;
}

.solution_component .list_card .txt_wrap p {
    padding-top: 10px;
    font-size: 18px;
    color: #666;
    min-height: 91px;
}

.solution_component .list_card li:hover {
    border-color: rgba(173, 32, 36, 0.6);
    border-radius: 20px;
    box-shadow: 8px 8px 32px 0 rgba(173, 32, 36, 0.2);
}

.solution_component .section3 {
    position: relative;
    padding-top: 120px;
}

.solution_component .section3:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 554px;
    height: 563px;
    background: url(~@/assets/images/bg_shoppingmall.png) no-repeat 50% 50%/100%;
}

.solution_component .list_logo {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    padding-bottom: 160px;
}

.solution_component .list_logo li {
    flex: 1 0 30%;
    text-align: center;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.08);
    background: #fff;
}

.solution_component .list_logo .img {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.solution_component .list_logo strong {
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    padding-top: 20px;
}

.solution_component .list_logo strong i {
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #666;
}

.solution_component .list_logo strong br {
    display: none;
}

.solution_component.solution2_section .list_card_wrap:before {
    background: #f4f8fa;
}

.solution_component.solution2_section .list_card_wrap h4:before {
    background: #46a6f7;
}

.solution_component.solution2_section .tit em {
    color: #46a6f7;
    border-color: #46a6f7;
}

.solution_component.solution2_section .list_card .txt_wrap strong:before {
    color: #46a6f7;
}

.solution_component.solution2_section .list_card li:hover {
    border-color: #46a6f7;
    box-shadow: 8px 8px 32px 0 rgba(70, 166, 247, 0.2);
}


.solution_component.solution3_section .list_card_wrap:before {
    background: #fdf8f0;
}

.solution_component.solution3_section .list_card_wrap h4:before {
    background: #d8a60d;
}

.solution_component.solution3_section .tit em {
    color: #d8a60d;
    border-color: #d8a60d;
}

.solution_component.solution3_section .list_card .txt_wrap strong:before {
    color: #d8a60d;
}

.solution_component.solution3_section .list_card li:hover {
    border-color: #d8a60d;
    box-shadow: 8px 8px 32px 0 rgba(216, 166, 13, 0.2);
}


.solution_component .list_logo.list_single li {
    flex: 1 0 auto;
}

.solution_component .list_functions.list_many {
    display: flex;
    row-gap: 66px;
    flex-wrap: wrap;
    column-gap: 0;
    justify-content: center;
}

.solution_component .list_functions.list_many li {
    flex: 0 1 20%;
}


@media screen and (max-width: 1400px) {
    .solution_component .section2 {
        padding-top: 85px;
    }

    .solution_component .list_functions {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 24px;
    }

    .solution_component .tit {
        padding-bottom: 50px;
    }

    .solution_component .list_card_wrap {
        padding: 30px 0 80px;
    }

    .solution_component .list_card_wrap h4 {
        padding-top: 70px;
    }

    .solution_component .list_card {
        grid-template-columns: 1fr 1fr;
        column-gap: 26px;
        row-gap: 32px;
    }

    .solution_component .list_card .txt_wrap {
        padding: 20px 24px;
    }

    .solution_component .list_card .txt_wrap p {
        padding-top: 5px;
        min-height: 86px;
    }

    .solution_component .section3 {
        padding-top: 80px;
    }

    .solution_component .list_logo {
        padding-bottom: 120px;
        column-gap: 26px;
        row-gap: 24px;
    }

    .solution_component .list_logo li {
        flex: 0 0 calc(50% - 13px);
    }

    .solution_component .section3:before {
        width: 418px;
        height: 418px;
    }

    .solution_component .list_functions.list_many {
        row-gap: 24px;
    }
}

@media screen and (max-width: 768px) {
    .solution_component .section2 {
        padding-top: 60px;
    }

    .solution_component .tit {
        padding-bottom: 30px;
    }

    .solution_component .tit h3 {
        font-size: 24px;
    }

    .solution_component .tit h3 br {
        display: block;
    }

    .solution_component .tit em {
        line-height: 28px;
        font-size: 14px;
        padding: 0 15px;
    }

    .solution_component .list_functions {
        grid-template-columns: 1fr 1fr;
        column-gap: 12px;
        row-gap: 24px;
        padding: 25px 20px;
    }

    .solution_component .list_functions .ic {
        width: 41px;
        height: 40px;
    }

    .solution_component .list_functions span {
        padding-top: 10px;
        font-size: 16px;
    }

    .solution_component .list_card_wrap {
        padding-bottom: 60px;
    }

    .solution_component .list_card_wrap h4 {
        padding-top: 40px;
        font-size: 20px;
    }

    .solution_component .list_card_wrap h4:before {
        height: 24px;
    }

    .solution_component .list_card {
        padding-top: 25px;
        display: block;
    }

    .solution_component .list_card li {
        margin-top: 24px;
    }

    .solution_component .list_card li:first-of-type {
        margin-top: 0;
    }

    .solution_component .list_card .txt_wrap {
        padding: 15px 20px;
    }

    .solution_component .list_card .txt_wrap strong {
        font-size: 20px;
    }

    .solution_component .list_card .txt_wrap strong:before {
        font-size: 14px;
        margin-right: 8px;
    }

    .solution_component .list_card .txt_wrap p {
        font-size: 14px;
        min-height: auto;
    }

    .solution_component .section3 {
        padding-top: 60px;
    }

    .solution_component .section3:before {
        width: 274px;
        height: 274px;
    }

    .solution_component .list_logo {
        padding-bottom: 100px;
        column-gap: 12px;
    }

    .solution_component .list_logo li {
        padding: 0 20px;
        height: 200px;
        flex: 0 0 calc(50% - 6px);
    }

    .solution_component .list_logo .img {
        height: 70px;
    }

    .solution_component .list_logo .img img {
        max-height: 100%;
    }

    .solution_component .list_logo strong {
        padding-top: 20px;
        font-size: 16px;
    }

    .solution_component .list_logo strong i {
        font-size: 14px;
        line-height: 1.2;
    }

    .solution_component .list_logo strong br {
        display: block;
    }

    .solution_component .list_functions.list_many {
        display: grid;
    }
}</style>

