const translate = require("@vitalets/google-translate-api");

translate("Hello World!", {
    to: "spanish"
}).then(res => {
    console.log(res);
});