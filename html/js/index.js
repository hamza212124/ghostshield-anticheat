var LifeEmail;
var LifeUserName;
var LifePassword;
var LifeClientIp;
var KeyLicenseSelected;

function generateDeviceToken(length = 250) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/{}~'; // Ensemble de caractères possible
    let token = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }
    
    return token;
}

function getClientIp(callback) {
    $.getJSON('https://api.ipify.org?format=json')
        .done(function (data) {
            callback(data.ip);
        })
        .fail(function () {
            console.error("Erreur lors de la récupération de l'IP.");
            callback(null);
        });
}

function getUserCountry(callback) {
    getClientIp(function (userIP) {
        if (!userIP) {
            console.error("Impossible de récupérer l'IP de l'utilisateur.");
            callback(null);
            return;
        }
        $.getJSON("https://ipinfo.io/" + userIP + "/json")
            .done(function (info) {
                if (info.country) {
                    callback(info.country);
                } else {
                    console.error("Aucune information de pays trouvée.");
                    callback(null);
                }
            })
            .fail(function () {
                console.error("Erreur lors de la récupération des informations de pays.");
                callback(null);
            });
    });
}


