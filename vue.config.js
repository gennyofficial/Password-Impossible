module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Password-Impossible/" : "/",
  chainWebpack: config => {
    config.resolve.set('fallback', {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    });
  }
}