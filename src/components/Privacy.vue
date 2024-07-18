<template>
    <div class="pop_privacy">
        <div class="dimm"></div>
        <div class="pop_con">
            <h2>개인정보 수집 및 이용에 대한 안내</h2>
            <div class="con scroll_box">
                <p>
                    &lt;(주)라이크웹&gt;('likeweb.co.kr'이하
                    '(주)라이크웹')은(는) 개인정보보호법에 따라 이용자의
                    개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
                    고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고
                    있습니다. &lt;(주)라이크웹&gt;('(주)라이크웹') 은(는) 회사는
                    개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는
                    개별공지)을 통하여 공지할 것입니다. ○ 본 방침은부터 2016년
                    3월 1일부터 시행됩니다. 1. 개인정보의 처리 목적
                    &lt;(주)라이크웹&gt;('likeweb.co.kr'이하
                    '(주)라이크웹')은(는) 개인정보를 다음의 목적을 위해
                    처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는
                    사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할
                    예정입니다. 가. 홈페이지 회원가입 및 관리 회원 가입의사
                    확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격
                    유지·관리, 서비스 부정이용 방지 등을 목적으로 개인정보를
                    처리합니다. 나. 민원사무 처리 민원사항 확인, 사실조사를 위한
                    연락·통지, 처리결과 통보 등을 목적으로 개인정보를
                    처리합니다. 다. 재화 또는 서비스 제공 서비스 제공 등을
                    목적으로 개인정보를 처리합니다. 2. 개인정보 파일 현황 1.
                    개인정보 파일명 : 견적문의 - 개인정보 항목 : 휴대전화번호,
                    이름, 이메일 - 수집방법 : 홈페이지 - 보유근거 : 홈페이지
                </p>
            </div>
            <div class="btn_wrap">
                <button type="button" class="btn_confirm" @click="privacyClose">
                    확인
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Privacy",
    props: {
        privacy: Boolean,
    },
    methods: {
        privacyClose() {
            this.$emit("privacyClose", this.privacy);
        },
    },
};
</script>

<style scoped>
.pop_privacy {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
}

.pop_privacy .dimm {
    width: 100%;
    height: 100%;
    background: rgba(4, 4, 4, 0.3);
}

.pop_privacy .pop_con {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 1200px;
    width: 100%;
    max-height: 730px;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 0 115px;
}

.pop_privacy h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding: 40px 0 30px;
}

.pop_privacy .pop_con .con {
    height: calc(100% - 200px);
    overflow: auto;
    font-size: 16px;
    font-weight: 300;
    color: #333;
}

.pop_privacy .pop_con .con p {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
}

.pop_privacy .btn_wrap {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: calc(100% - 230px);
    text-align: center;
    padding-top: 15px;
}

.pop_privacy .btn_confirm {
    border-top: 1px solid #ddd;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #ad2024;
    padding: 25px 0;
}

@media screen and (max-width: 1400px) {
    .pop_privacy .pop_con {
        max-width: 600px;
        padding: 0 60px;
    }

    .pop_privacy .btn_wrap {
        width: calc(100% - 120px);
    }
}

@media screen and (max-width: 768px) {
    .pop_privacy h2 {
        font-size: 13px;
        padding: 30px 0 15px;
    }

    .pop_privacy .pop_con {
        width: calc(100% - 40px);
        height: calc(100% - 80px);
        padding: 0 30px;
    }

    .pop_privacy .pop_con .con {
        font-size: 11px;
        height: calc(100% - 130px);
    }

    .pop_privacy .btn_wrap {
        width: calc(100% - 30px);
    }

    .pop_privacy .btn_confirm {
        font-size: 13px;
        padding: 16px 0;
    }
}</style>
