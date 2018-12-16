// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-pxtorem")({
                        rootValue: 75,
                        unitPrecision: 5,
                        propList: ["*", "!font-size", "!line-height"],
                        selectorBlackList: [],
                        minPixelValue: 12
                    })
                ]
            }
        }
    }
};
