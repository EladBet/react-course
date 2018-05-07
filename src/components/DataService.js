const GetData = function () {
    return fetch('http://react-course-resources.playbuzz.com/data-1.json') // Call the fetch function passing the url of the API as a parameter
        .then((resp) => resp.json())
        .catch((error) => {
            console.log('ERROR GetData', error);
            throw error;
        });
};

const Authorized = function () {
    return fetch('http://localhost:5050/analytics', {
        headers: {
            "authorization": "pb-user"
        }
    }).then((resp) => resp.json())
        .catch((error) => {
            console.log('ERROR Authorized', error);
            throw error;
        });
};

const Translate = function (query) {
    const opts = {
        target:'iw',
        q: query

    };
    return fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDas6zCC8djFdaBbuc9G0Z3bOy1SF8ZWPA', {
        method: 'POST',
        body: JSON.stringify(opts),
        headers: {
            "Content-Type": "application/json"
        }}).then((resp) => resp.json())
        .then(data => {
            const [translatedObj] = data.data.translations;
            return translatedObj.translatedText;
        })
        .catch((error) => {
            console.log('Error traslate', error);
            throw error;
        });
};

const GetUrlParam = function (key) {
    return new URLSearchParams(document.location.search.substring(1)).get(key)
};

module.exports = {
    GetData,
    Authorized,
    Translate,
    GetUrlParam
};
