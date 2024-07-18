<template>
    <section class="page_solution4">
        <div class="section_inner">
            <h3><b>그밖의 솔루션</b>.</h3>
            <ul class="list_etc">
                <li v-for="(item, i) in solutionList" :key="i">
                    <div class="img">
                        <img :src="item.image" :alt="item.tit">
                    </div>
                    <div class="txt_wrap">
                        <div class="txt">
                            <strong>{{ item.tit }}</strong>
                            <p v-html="item.txt"></p>
                        </div>
                        <div class="functions_wrap">
                            <em>주요기능</em>
                            <ul class="list_functions">
                                <li v-for="(functionsItem, j) in item.functionsList" :key="j">
                                    {{ functionsItem }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "Solution4",
    data() {
        return {
            solutionList: [
                {
                    tit: '빨래방',
                    txt: '빨래방 솔루션은 앱을 통해 코인 충전, 지점별 세탁 정보 확인, 결제 및 이용 내역 관리 등의 기능을 제공합니다. <br>사용자는 편리하게 세탁 서비스를 이용하고 필요한 정보를 앱에서 확인할 수 있습니다.',
                    image: require('@/assets/images/img_etc_solution1.png'),
                    functionsList: [
                        '전국 지점 검색',
                        '코인충전 및 사용',
                        '결제 및 사용 내역 관리',
                        '세탁, 건조 등 기기 선택 및 사용 확인',
                        '외 다양한 기능 제공'
                    ]
                },
                {
                    tit: '선물하기 쇼핑몰',
                    txt: '선물하기 쇼핑몰은 특별한 순간에 사랑과 감동을 선사하는 온라인 선물 서비스입니다. <br>다양한 아이템과 개성적인 디자인으로 구성된 선물 상품을 제공하여, 소중한 사람들에게 감사와 사랑을 전할 수 있습니다. <br>손쉬운 주문과 신속한 배송으로, 선물을 준비하는 과정도 즐겁고 간편합니다.',
                    image: require('@/assets/images/img_etc_solution2.png'),
                    functionsList: [
                        '쇼핑몰 기능',
                        '포인트 선물',
                        '구매',
                        '이벤트',
                        '쇼핑몰의 모든 기능 제공'
                    ]
                },
                {
                    tit: '사주(타로) 전화상담',
                    txt: '사주 전화상담은 전문 사주 선생님들과의 신뢰할 수 있는 온라인 상담 서비스입니다. <br>운명과 미래에 대한 궁금증을 해소하고, 인생의 방향성을 찾아가는데 도움을 드립니다. 정확한 사주 분석과 신속한 상담을 통해, 개인 맞춤형 조언을 제공하여 더 나은 선택과 행운을 만들어갈 수 있습니다.',
                    image: require('@/assets/images/img_etc_solution3.png'),
                    functionsList: [
                        '상담사 등록',
                        '포인트 결제',
                        '전화상담',
                        '커뮤니티',
                        '이벤트, 쿠폰 등',
                        '사용자, 관리자 모든 설정 기능 제공'
                    ]
                },
                {
                    tit: '메신저 솔루션',
                    txt: '메신져앱 솔루션은 기업과 고객 간의 원활한 소통을 위한 효과적인 커뮤니케이션 플랫폼입니다. <br>사용자 친화적인 인터페이스와 다양한 기능을 제공하여, 실시간 채팅, 파일 공유, 비디오 콜 등의 기능을 통해 원활한 업무 협업과 고객 응대를 실현합니다.',
                    image: require('@/assets/images/img_etc_solution4.png'),
                    functionsList: [
                        '회원가입',
                        '관리자 설정',
                        '1:1 대화기능',
                        '정보수정',
                        '기타 메신저 기능 제공'
                    ]
                }
            ],
        }
    }
};
</script>

<style scoped>
.page_solution4 {
    padding: 90px 0 220px;
}

.page_solution4 h3 {
    font-size: 60px;
    color: #ad2024;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    padding: 20px 0 70px;
    position: relative;
}

.page_solution4 h3:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 4px;
    background: #ad2024;
}

.page_solution4 h3 b {
    color: #000;
}

.list_etc>li {
    display: flex;
    margin-top: 70px;
}

.list_etc>li:first-of-type {
    margin-top: 0;
}

.list_etc>li:nth-of-type(2n) {
    flex-direction: row-reverse;
}

.list_etc .img {
    flex: 1 1 48%;
}

.list_etc .img img {
    width: 100%;
}

.list_etc .txt_wrap {
    flex: 1 1 52%;
    padding: 70px 0 0 120px;
}

.list_etc>li:nth-of-type(2n) .txt_wrap {
    padding: 70px 120px 0 0;
}

.list_etc .txt_wrap strong {
    display: block;
    font-size: 40px;
    font-weight: 700;
    color: #222;
    padding-bottom: 20px;
}

.list_etc .txt_wrap p {
    font-size: 20px;
    color: #222;
}

.functions_wrap {
    padding-top: 85px;
}

.functions_wrap em {
    display: inline-block;
    vertical-align: top;
    line-height: 40px;
    padding: 0 15px;
    border-radius: 20px;
    background: #ad2024;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
}

.list_functions {
    padding-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
}

.list_functions li {
    font-size: 18px;
    color: #666;
}

@media screen and (max-width: 1400px) {
    .page_solution4 {
        padding: 60px 0 120px;
    }

    .list_etc>li {
        display: block;
    }

    .list_etc .txt_wrap {
        padding: 0;
    }

    .list_etc>li:nth-of-type(2n) .txt_wrap {
        padding: inherit;
    }
}

@media screen and (max-width: 768px) {
    .page_solution4 {
        padding: 50px 0 100px;
    }

    .page_solution4 h3 {
        font-size: 40px;
        padding: 15px 0 30px;
    }

    .list_etc>li {
        margin-top: 45px;
    }

    .list_etc .txt_wrap strong {
        font-size: 32px;
        padding-bottom: 15px;
    }

    .list_etc .txt_wrap p {
        font-size: 16px;
    }

    .functions_wrap {
        padding-top: 20px;
    }

    .functions_wrap em {
        line-height: 30px;
        font-size: 14px;
    }

    .list_functions {
        padding-top: 15px;
        display: block;
    }

    .list_functions li {
        line-height: 30px;
        font-size: 16px;
    }
}</style>
