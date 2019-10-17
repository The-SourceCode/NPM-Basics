const translate = require('@vitalets/google-translate-api');

const opts = {
    to: translate.languages.getCode("spanish"), // Get code of language.
    from: "en", // Defaults to "auto" which auto detects the language.
};

translate("Hello World!", opts)
    .then(response => {
        console.log(response.text); // Translated text...
        console.log(response.from.text.value); // Return auto-corrected source text highlighting the issue.
        console.log(response.from.language.iso); // Translated from...
    })
    .catch(console.error);
