<template>
    <section class="page_portfolio1">
        <div class="cont">
            <div class="title_box">
                <p class="f_24 bm5">
                    비즈니스에 대한 이해를 바탕으로 기획 및 설계를 하여
                </p>
                <h2 class="f_36">
                    고객사의 기대를 뛰어넘는 <br><span class="bold">브랜드 가치</span>를 제공합니다.
                </h2>
            </div>
        </div>
        <PortfolioList :portfolioList1="portfolioList1" :listNum1="listNum1" :portfolioList2="portfolioList2"
            :listNum2="listNum2" :portfolioList3="portfolioList3" :listNum3="listNum3" :portfolioList4="portfolioList4"
            :listNum4="listNum4" />
    </section>
</template>

<script>
import axios from "axios";
import PortfolioList from "@/components/PortfolioList";
export default {
    name: "Portfolio1",
    components: {
        PortfolioList,
    },
    data() {
        return {
            portfolioList1: [],
            listNum1: 0,
            portfolioList2: [],
            listNum2: 0,
            portfolioList3: [],
            listNum3: 0,
            portfolioList4: [],
            listNum4: 0,
        };
    },
    created() {
        const axiosrequest1 = axios.get(process.env.BASE_URL + "portfolio_data/portfoilo1.json");
        const axiosrequest2 = axios.get(process.env.BASE_URL + "portfolio_data/portfoilo2.json");
        const axiosrequest3 = axios.get(process.env.BASE_URL + "portfolio_data/portfoilo_vr.json");
        const axiosrequest4 = axios.get(process.env.BASE_URL + "portfolio_data/portfoilo_app.json");
        axios
            .all([axiosrequest1, axiosrequest2, axiosrequest3, axiosrequest4])
            .then(axios.spread((...responses) => {
                const response1 = responses[0];
                const response2 = responses[1];
                const response3 = responses[2];
                const response4 = responses[3];
                this.portfolioList1 = response1.data.portfolioList;
                this.listNum1 = this.portfolioList1.length;
                this.portfolioList2 = response2.data.portfolioList;
                this.listNum2 = this.portfolioList2.length;
                this.portfolioList3 = response3.data.portfolioList;
                this.listNum3 = this.portfolioList3.length;
                this.portfolioList4 = response4.data.portfolioList;
                this.listNum4 = this.portfolioList4.length;
            })).catch(err => {
                console.log(err);
                alert('포트폴리오 리스트를 불러오지 못했습니다.');
                this.$router.push(process.env.BASE_URL);
            })
    },
};
</script>
