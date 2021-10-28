module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/abstracts/_mixins.scss";
          @import "~@/styles/abstracts/_variables.scss";
        `,
      },
    },
  },
  devServer: {
    disableHostCheck: true
  }
};
