const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    pluginOptions: {
        i18n: {
            locale: "ar",
            fallbackLocale: "en",
            localeDir: "locales",
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
        },
    },
    publicPath: "/webSite-clinic/",
});