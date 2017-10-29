var tokenUser = localStorage.token;

if (tokenUser) {

    var loginLink = document.querySelector('#connexion');
    var deconnexionLink = document.querySelector('.deconnection');
    deconnexionLink.addEventListener('click', disconnect);


    loginLink.style.display = "none";
    deconnexionLink.style.display = "block";

    function disconnect() {
        console.log('deco');
        localStorage.removeItem('token');
    }
    function parseJwt() {
        tokenFromStorage = localStorage.getItem('token');
        if (tokenFromStorage) {
            var base64Payload = tokenFromStorage.split('.')[1];
            console.log(JSON.parse(window.atob(base64Payload)));
            return JSON.parse(window.atob(base64Payload));
        } else {
            return 'no token to parse';
        }
    };
    parseJwt();


    function makeRequestWithToken() {
        var config= '';

        if (tokenUser){
            console.log('test');
            config.headers = {'Authorization':'Bearer '+ JSON.parse(tokenUser)}
        }

        axios.get(
            'http://localhost:3000/profile',
            config
        ).then(res => {
            console.loge('success');
            console.log(res);
        }).catch(err => {
            console.log('makeRequestWithToken', err);
        });
    }
    makeRequestWithToken();

} else {
    console.log('localStorage.token is not defined');
}