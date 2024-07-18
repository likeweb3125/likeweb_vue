<template>
    <section class="page_solution1">
        <div class="section1">
            <div class="section_inner">
                <div class="txt">
                    <h3><b>B to B, B to C <br>Shopping mall</b>.</h3>
                    <p>2B 쇼핑몰은 기업 간 거래를 위한 전자상거래 플랫폼으로, <br>대량 주문과 도매 거래를 지원하며 <br>공급망을 효율적으로 관리하는 역할을 합니다.</p>
                </div>
            </div>
        </div>
        <SolutionContent :pageClass="pageClass" :pageTitle="pageTitle" :sectionTitle1="sectionTitle1"
            :menuFunctions="menuFunctions" :listCardTitle="listCardTitle" :listCard="listCard"
            :useCompanyList="useCompanyList" />
    </section>
</template>

<script>
import SolutionContent from "@/components/SolutionContent";
export default {
    name: "Solution1",
    components: {
        SolutionContent
    },
    data() {
        return {
            pageClass: 'solution1_section',
            pageTitle: '쇼핑몰',
            sectionTitle1: '정확하고 편리한 <br>라이크웹만의 쇼핑몰 시스템',
            menuFunctions: [
                {
                    tit: '디자인 설정',
                    image: require('@/assets/images/ic_functions1_1.svg')
                },
                {
                    tit: '회원관리',
                    image: require('@/assets/images/ic_functions1_2.svg')
                },
                {
                    tit: '상품관리',
                    image: require('@/assets/images/ic_functions1_3.svg')
                },
                {
                    tit: '통계분석',
                    image: require('@/assets/images/ic_functions1_4.svg')
                },
                {
                    tit: '주문 매출 관리',
                    image: require('@/assets/images/ic_functions1_5.svg')
                },
                {
                    tit: '입점 업체 관리',
                    image: require('@/assets/images/ic_functions1_6.svg')
                },
                {
                    tit: '운영관리',
                    image: require('@/assets/images/ic_functions1_7.svg')
                },
                {
                    tit: '정산관리',
                    image: require('@/assets/images/ic_functions1_8.svg')
                }
            ],
            listCardTitle: '<b>B to B, B to C 쇼핑몰의 다양한 기능</b>을 제공합니다.',
            listCard: [
                {
                    image: require('@/assets/images/img_functions1_1.png'),
                    tit: '상품관리',
                    txt: '카테고리 설정부터 등록 관리, 노출 형태 변경, 상품 이벤트, 타임세일 등 그외 다양한 상품관리 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions1_2.png'),
                    tit: '회원관리',
                    txt: '각 회원정보 관리 및 구매, 배송, 적립금, 쿠폰 등 회원관리 다양한 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions1_3.png'),
                    tit: '입점사 관리',
                    txt: '입점사 기본정보, 수수료율, 상품등록, 상품 판매 승인 등 그외 다양한 관리 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions1_4.png'),
                    tit: '통계분석',
                    txt: '입점사 별, 상품별 판매 추이는 물론, 브랜드별 판매 순위, 장바구나 순위 등 다양한 관리 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions1_5.png'),
                    tit: '정산 관리',
                    txt: '입점사 별 정산금액, 현황, 내역 확인 및 세부 판매내역 확인 등 자동화 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions1_6.png'),
                    tit: 'ETC',
                    txt: '그 밖에 홍보 및 이벤트 기능 등 다양한 쇼핑몰 기능을 제공합니다.'
                }
            ],
            useCompanyList: [
                {
                    logoImage: require('@/assets/images/bmw_logo.png'),
                    companyName: 'BMW Membership Mall'
                },
                {
                    logoImage: require('@/assets/images/paycoin_logo.png'),
                    companyName: '(주)다날핀테크 <i>페이코인 <br>Coin Shopping Mall</i>'
                }
            ]
        };
    },
};
</script>

<style scoped>
.page_solution1 .section1 {
    padding: 165px 0 190px;
    position: relative;
}

.page_solution1 .section1:before {
    content: '';
    position: absolute;
    left: -9%;
    bottom: -25%;
    width: 573px;
    height: 573px;
    border: 80px solid rgba(255, 247, 245, 0.6);
    border-radius: 100%;
    z-index: -1;
    box-sizing: border-box;
}

.page_solution1 .section1:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background: url(~@/assets/images/img_shoppingmall.png) no-repeat 50% 50%/cover;
    z-index: -2;
}

.page_solution1 .section1 .txt h3 {
    padding-top: 25px;
    font-size: 72px;
    font-weight: 700;
    color: #ad2024;
    position: relative;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    line-height: 1.2;
    position: relative;
}

.page_solution1 .section1 .txt h3:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 4px;
    background: #ad2024;
}

.page_solution1 .section1 .txt h3 b {
    font-size: inherit;
    font-weight: inherit;
    color: #000;
}

.page_solution1 .section1 .txt p {
    padding: 40px 0 0 60px;
    font-size: 18px;
    color: #666;
}

@media screen and (max-width: 1400px) {
    .page_solution1 .section1 {
        padding: 60px 0 0;
    }

    .page_solution1 .section1 .txt h3 {
        padding-top: 25px;
        font-size: 66px;
    }

    .page_solution1 .section1 .txt p {
        padding-top: 30px;
    }

    .page_solution1 .section1:before {
        width: 500px;
        height: 500px;
        bottom: auto;
        top: -30%;
        left: -15%;
        border-width: 60px;
    }

    .page_solution1 .section1:after {
        position: relative;
        top: -15px;
        display: block;
        margin-left: auto;
        width: 620px;
        height: 448px;
        background: url(~@/assets/images/img_shoppingmall_tb.png) no-repeat 50% 50%/100%;
    }
}

@media screen and (max-width: 768px) {
    .page_solution1 .section1 {
        padding-top: 50px;
    }

    .page_solution1 .section1:before {
        display: none;
    }

    .page_solution1 .section1 .txt h3 {
        font-size: 40px;
        padding-top: 20px;
    }

    .page_solution1 .section1 .txt p {
        padding: 30px 0 0;
        font-size: 14px;
    }

    .page_solution1 .section1 .txt p br {
        display: none;
    }

    .page_solution1 .section1:after {
        width: 100%;
        height: 280px;
        top: 0;
        background: url(~@/assets/images/img_shoppingmall_m.png) no-repeat 100% 50%/contain;
    }
}</style>
