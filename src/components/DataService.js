
export default function GetData() {
    return fetch('http://react-course-resources.playbuzz.com/data-1.json') // Call the fetch function passing the url of the API as a parameter
        .then((resp) => resp.json())
        .catch(() => {
            console.log('ERROR Fetching');
        });
};
