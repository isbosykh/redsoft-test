module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/redsoft-test/'
        : '/',
    lintOnSave: false,
    outputDir: 'docs',
    assetsDir: "assets"
};
