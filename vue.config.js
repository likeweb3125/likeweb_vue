module.exports = {
    productionSourceMap: false,
    transpileDependencies: ["dom7", "swiper"],
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
};
