const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
		loaderOptions: {
			sass: {
				additionalData: `@/assets/scss/style.scss';`
			}
		}
	},
	devServer: {
		host: '0.0.0.0'
	}
})