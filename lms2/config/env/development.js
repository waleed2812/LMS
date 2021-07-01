const METHOD = 'http',
    IP = '192.168.1.73',
    PORT = process.env.PORT || 6968,
    HOST = "mongodb://localhost:27017/lms",
    URL = METHOD + "://" + IP,
    URI = URL + ":" + PORT;



module.exports = {
	"METHOD" : METHOD,
    "IP": IP,
    "PORT": PORT,
    "mongodb" : {
        "host": HOST,
        "credentials": {
            "username": "",
            "password": ""
        }
    },
    "enableMongoDebugging": true,
    "session": {
        "secret": "SCM"
    },
    "URL": URL,
    "URI": URI
}