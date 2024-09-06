var appName = "vue-ecom";
var appVersion = "1.0.0";
var appAuthor = "Vuestic";
var appDescription = "Vuestic UI for Vue.js 3";


function getInfo(){
    return 'App name: ' + appName + '\nApp version: ' + appVersion + '\nApp author: ' + appAuthor + '\nApp description: ' + appDescription;
}

export {
    appName,
    appVersion,
    appAuthor,
    appDescription,
    getInfo
};