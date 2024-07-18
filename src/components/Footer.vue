<template>
    <footer id="footer">
        <div class="footer_inner">
            <div class="f_logo">
                <img src="@/assets/images/f_logo.png" alt="LIKEWEB">
            </div>
            <div class="pc_address">
                <address>
                    <div class="box">
                        <h5>Information</h5>
                        <span>{{ companyInformation.company }}</span>
                        <span>설립일 : {{ companyInformation.fondation }}</span>
                        <span>주소 : {{ companyInformation.address }}</span>
                        <span>대표 :
                            {{ companyInformation.representative }}</span>
                        <span>사업자번호 :
                            {{ companyInformation.businessNumber }}</span>
                    </div>
                    <div class="box">
                        <h5>Contact</h5>
                        <span>TEL :
                            <a :href="`tel:${companyInformation.tel}`">
                                {{ companyInformation.tel }}
                            </a>
                        </span>
                        <span>FAX : {{ companyInformation.fax }}</span>
                        <span>E-mail :
                            <a :href="`mailto:${companyInformation.email}`">
                                {{ companyInformation.email }}
                            </a>
                        </span>
                    </div>
                </address>
            </div>
            <div class="m_address">
                <address>
                    <div class="box">
                        <span>{{ companyInformation.company }}</span>
                        <span>설립일 : {{ companyInformation.fondation }}</span>
                    </div>
                    <div class="box">
                        <span>주소 : {{ companyInformation.address }}</span>
                    </div>
                    <div class="box">
                        <span>대표 :
                            {{ companyInformation.representative }}</span>
                        <span>사업자번호 :
                            {{ companyInformation.businessNumber }}</span>
                    </div>
                </address>
            </div>
            <p class="copy">&#9426; copyright 2004 likeweb</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        companyInformation: Object,
    },
};
</script>

<style scoped>
#footer {
    background: #f7f7f7;
    padding: 50px 0;
    position: relative;
}

#footer .footer_inner {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
}

#footer .f_logo {
    position: absolute;
    left: 0;
    top: 0;
}

#footer .pc_address {
    display: block;
    text-align: right;
}

#footer .m_address {
    display: none;
    text-align: center;
}

#footer .pc_address .box {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    margin-left: 120px;
}

#footer .pc_address .box:first-of-type {
    margin-left: 0;
}

#footer .pc_address .box h5 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    padding-bottom: 15px;
}

#footer .pc_address .box span {
    display: block;
    font-size: 14px;
    font-weight: 300;
    color: #333;
    margin-top: 5px;
}

#footer .pc_address .box span:first-of-type {
    margin-top: 0;
}

#footer .copy {
    position: absolute;
    left: 0;
    bottom: 0;
    font-family: "Oxanium", 'Noto Sans KR', cursive;
    font-size: 14px;
    font-weight: 300;
    color: #333;
}

@media screen and (max-width: 1400px) {
    #footer {
        text-align: center;
        padding: 30px 0;
    }

    #footer .footer_inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #footer .f_logo {
        position: static;
        width: 100px;
        margin: 0 auto;
    }

    #footer .pc_address {
        display: none;
    }

    #footer .m_address {
        display: block;
        padding-top: 30px;
    }

    #footer .m_address .box {
        margin-top: 10px;
    }

    #footer .m_address .box:first-of-type {
        margin-top: 0;
    }

    #footer .m_address span {
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        font-weight: 300;
        color: #333;
        padding: 0 15px;
        position: relative;
    }

    #footer .m_address span:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 12px;
        background: #ddd;
    }

    #footer .m_address span:first-of-type:before {
        display: none;
    }

    #footer .copy {
        position: static;
        padding-top: 20px;
    }
}

@media screen and (max-width: 768px) {
    #footer {
        padding: 20px 0;
    }

    #footer .f_logo {
        width: 75px;
    }

    #footer .m_address {
        padding-top: 20px;
    }

    #footer .m_address .box {
        margin: 0;
    }

    #footer .m_address span {
        font-size: 10px;
    }

    #footer .copy {
        padding-top: 10px;
        font-size: 10px;
    }
}</style>
