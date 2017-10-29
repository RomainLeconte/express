if (localStorage) {
    var tokenUser = localStorage.token;
    if (tokenUser) {

        if (typeof document.querySelector('#connexion') !== "undefined" && document.querySelector('#connexion') != null) {
            var loginLink = document.querySelector('#connexion');
            loginLink.style.display = "none";
        }

        if (typeof document.querySelector('#deconnection') !== "undefined" && document.querySelector('#deconnection') != null) {
            var deconnexionLink = document.querySelector('#deconnection');
            deconnexionLink.addEventListener('click', disconnect);
            deconnexionLink.style.display = "block";
        }

        function disconnect() {
            console.log('deco');
            localStorage.removeItem('token');
        }
        function parseJwt() {
            var base64Payload = tokenUser.split('.')[1];
            var baseParse = JSON.parse(window.atob(base64Payload));
            console.log(JSON.parse(window.atob(base64Payload)));
            document.querySelector('#userName').innerHTML = baseParse.user + ' | ' + baseParse.role;
            return JSON.parse(window.atob(base64Payload));
            module.exports = UserObject;
        };
        parseJwt();

        function makeRequestWithToken() {
            var config = '';

            if (tokenUser) {
                console.log('test');
                config.headers = { 'Authorization': 'Bearer ' + JSON.parse(tokenUser) }
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
        //makeRequestWithToken();

    } else {
        console.log('localStorage.token is not defined');
    }
}