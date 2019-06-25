import auth0 from 'auth0-js';

const Auth = () => {
    const Client = new auth0.WebAuth({
        domain: process.env.REACT_APP_JWT_DOMAIN,
        clientID: process.env.REACT_APP_JWT_CLIENT_ID,
        redirectUri: process.env.REACT_APP_JWT_REDIRECT_URI,
        responseType: 'token id_token'
    });

    const credsEmpty = creds => !creds.access_token || !creds.id_token || !creds.expires_in;

    return {
        login: () => Client.authorize(),
        storeCredentials: () => {
            return new Promise((resolve, reject) => {
                Client.parseHash({ hash: window.location.hash }, (err, authResult) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(authResult);
                });
            }).then(authResult => {
                const keys = Object.getOwnPropertyNames(authResult);

                keys.forEach(key => {
                    if (authResult[key] !== null) {
                        localStorage.setItem(key, authResult[key]);
                    }
                });

                window.location.hash = '';
            });
        },
        getCredentials: () => {
            const credentials = {
                access_token: localStorage.getItem('accessToken'),
                scope: localStorage.getItem('scope'),
                expires_in: localStorage.getItem('expiresIn'),
                token_type: localStorage.getItem('tokenType'),
                state: localStorage.getItem('state'),
                id_token: localStorage.getItem('idToken')
            };

            if (credsEmpty(credentials)) {
                return null;
            }

            return credentials;
        },
        getUser: callbackFn => {
            return null;
        }
    };
};

export default Auth();
