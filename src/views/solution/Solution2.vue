<template>
    <section class="page_solution1">
        <div class="section1">
            <div class="section_inner">
                <div class="txt">
                    <h3><b>e-Learning <br>Solutions</b>.</h3>
                    <p>사용자의 온라인 콘텐츠 소비가 가속화 됨에따라 오프라인 학원의 <br>실시간 온라인 강의에서 부터 온라인 강좌에 이르기 까지 효율적인 <br>e-Learning Solution으로
                        운영 관리 가능합니다.</p>
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
            pageClass: 'solution2_section',
            pageTitle: '동영상 강의',
            sectionTitle1: '데이터 기반의 창의성에 집중한 동영상 강의 솔루션',
            menuFunctions: [
                {
                    tit: '서비스 설정관리',
                    image: require('@/assets/images/ic_functions2_1.svg')
                },
                {
                    tit: '회원관리',
                    image: require('@/assets/images/ic_functions2_2.svg')
                },
                {
                    tit: '강의 상품 관리',
                    image: require('@/assets/images/ic_functions2_3.svg')
                },
                {
                    tit: '통계분석',
                    image: require('@/assets/images/ic_functions2_4.svg')
                },
                {
                    tit: '상품 설정 관리',
                    image: require('@/assets/images/ic_functions2_5.svg')
                },
                {
                    tit: '단체회원 관리',
                    image: require('@/assets/images/ic_functions2_6.svg')
                },
                {
                    tit: '결제 관리',
                    image: require('@/assets/images/ic_functions2_7.svg')
                },
                {
                    tit: '수료증 발행',
                    image: require('@/assets/images/ic_functions2_8.svg')
                }
            ],
            listCardTitle: '<b>동영상 강좌 카테고리 분류, 과정생성, 커리큘럼에 따른 강의 구성까지</b> 상세한 관리 기능을 제공합니다.',
            listCard: [
                {
                    image: require('@/assets/images/img_functions2_1.png'),
                    tit: '강의 상품관리',
                    txt: '구성된 커리큘럼 설정, 영상 강의 등록 및 교재 다운로드 까지 온라인 강의에 필요한 모든 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions2_2.png'),
                    tit: '회원관리',
                    txt: '수강생 수강 상태, 진도, 수료증 발급, 강의 결제의 이르기까지 구매 부터 수료까지 모든 관리 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions2_3.png'),
                    tit: '포인트 및 결제관리',
                    txt: '포인트 지급 및 회수, 포인트를 포함한 일반 결제까지 포인트 활용 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions2_4.png'),
                    tit: '통계분석',
                    txt: '접속통계, 판매통계, 검색 통계, 화면 노출 통계 까지 다양한 통계 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions2_5.png'),
                    tit: '단체 회원',
                    txt: '단체 회원등록, 단체별 커뮤니티, 커리큘럼 수강 적용까지 단체 회원 관리 기능을 제공합니다.'
                },
                {
                    image: require('@/assets/images/img_functions2_6.png'),
                    tit: 'ETC',
                    txt: '그 밖에 홍보 및 이벤트 기능 등 다양한 동영상 강의 기능을 제공합니다.'
                }
            ],
            useCompanyList: [
                {
                    logoImage: require('@/assets/images/winner_logo.png'),
                    companyName: '위너넷 온라인교육센터'
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
    background: url(~@/assets/images/img_learning.png) no-repeat 50% 50%/cover;
    z-index: -2;
}

.page_solution1 .section1 .txt h3 {
    padding-top: 25px;
    font-size: 72px;
    font-weight: 700;
    color: #46a6f7;
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
    background: #46a6f7;
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
        background: url(~@/assets/images/img_learning_tb.png) no-repeat 50% 50%/100%;
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
        background: url(~@/assets/images/img_learning_m.png) no-repeat 100% 50%/contain;
    }
}
</style>
