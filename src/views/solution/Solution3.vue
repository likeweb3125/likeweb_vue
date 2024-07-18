<template>
    <section class="page_solution1">
        <div class="section1">
            <div class="section_inner">
                <div class="txt">
                    <h3><b>입찰/경매 <br>시스템</b>.</h3>
                    <p>PC, Mobile을 통해 실시간 입찰/ 경매는 물론 경매상품 등록, 관리, <br>입찰/경매 현황, 배송에 이르기까지 사용자간 메시지 등 출하주, <br>경매사, 중도매인간의
                        투명하고 정확한 실시간 입찰/경매 <br>시스템입니다.</p>
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
    name: "Solution2",
    components: {
        SolutionContent
    },
    data() {
        return {
            pageClass: 'solution3_section',
            pageTitle: '입찰/경매',
            sectionTitle1: '투명하고 정확한 입찰/경매 시스템',
            menuFunctions: [
                {
                    tit: '송품장 등록',
                    image: require('@/assets/images/ic_functions3_1.svg')
                },
                {
                    tit: '낙찰물품 조회',
                    image: require('@/assets/images/ic_functions3_2.svg')
                },
                {
                    tit: '송품장 조회',
                    image: require('@/assets/images/ic_functions3_3.svg')
                },
                {
                    tit: '온라인 경매',
                    image: require('@/assets/images/ic_functions3_4.svg')
                },
                {
                    tit: '온라인 거래 <br>결과 조회',
                    image: require('@/assets/images/ic_functions3_5.svg')
                },
                {
                    tit: '송품장 등록',
                    image: require('@/assets/images/ic_functions3_6.svg')
                },
                {
                    tit: '낙찰물품 조회',
                    image: require('@/assets/images/ic_functions3_7.svg')
                },
                {
                    tit: '송품장 조회',
                    image: require('@/assets/images/ic_functions3_8.svg')
                },
                {
                    tit: '온라인 경매',
                    image: require('@/assets/images/ic_functions3_9.svg')
                }
            ],
            listCardTitle: '실시간 온라인 경매에 적용되는 필수 기능을 <b>빠르고 정확하게 동작할 수 있도록 지속적인 업데이트를 제공</b>합니다.',
            listCard: [
                {
                    image: require('@/assets/images/img_functions3_1.png'),
                    tit: '송품장 등록',
                    txt: '상품정보, 사진, 동영상 등록, 수정 등 경매진행을 위한 상품 등록 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions3_2.png'),
                    tit: '실시간 경매',
                    txt: '승인된 경매건에 대해 다수의 중도매인과 실시간 커뮤니케이션이 가능한 경매 시스템 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions3_3.png'),
                    tit: '낙찰 물품 조회',
                    txt: '낙찰(유찰)된 경매건 조회, 배송지 정보입력, 배송상황 확인 등을 조회할 수 있습니다.'
                },
                {
                    image: require('@/assets/images/img_functions3_4.png'),
                    tit: '온라인 입찰',
                    txt: '경매 기간이 종료되지 않은 경매 건에 대해 실시간 경매가 아닌 미리 입찰을 할 수 있는 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions3_5.png'),
                    tit: '온라인 거래결과 조회',
                    txt: '경매진행, 종료, 대기중인 경매건 조회 및 수정 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions3_6.png'),
                    tit: 'ETC',
                    txt: '실시간 대화, 문자 발송, 메모, 사전 입찰가 설정, 거래내역 조회 등 원활한 입찰, 경매 진행을 위한 편의 기능을 제공합니다.'
                }
            ],
            useCompanyList: [
                {
                    logoImage: require('@/assets/images/at_logo.png'),
                    companyName: 'AT Center'
                },
                {
                    logoImage: require('@/assets/images/kuri_logo.png'),
                    companyName: '(주)구리청과'
                },
                {
                    logoImage: require('@/assets/images/solomon_logo.png'),
                    companyName: '솔로몬'
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
    background: url(~@/assets/images/img_bid.png) no-repeat 50% 50%/cover;
    z-index: -2;
}

.page_solution1 .section1 .txt h3 {
    padding-top: 25px;
    font-size: 72px;
    font-weight: 700;
    color: #d8a60d;
    position: relative;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    line-height: 1.2;
    position: relative;
    padding-left: 170px;
    text-indent: -170px;
}

.page_solution1 .section1 .txt h3:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 4px;
    background: #d8a60d;
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
        background: url(~@/assets/images/img_bid_tb.png) no-repeat 50% 50%/100%;
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
        padding-left: 100px;
        text-indent: -100px;
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
        background: url(~@/assets/images/img_bid_m.png) no-repeat 100% 50%/contain;
    }
}</style>
