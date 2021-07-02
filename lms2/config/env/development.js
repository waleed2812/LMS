const METHOD = 'http',
    IP = '192.168.1.73',
    PORT = process.env.PORT || 6968,
    DB_USER = process.env.DB_USER || 'dbUser',
    DB_PSWRD = process.env.DB_PSWRD || 'dbUserPassword',
    ATLAS = `mongodb+srv://${DB_USER}:${DB_PSWRD}@cluster0.yqhzm.mongodb.net/lms?retryWrites=true&w=majority`,
    HOST = "mongodb://localhost:27017/lms",
    URL = METHOD + "://" + IP,
    URI = URL + ":" + PORT;

module.exports = {
	"METHOD" : METHOD,
    "IP": IP,
    "PORT": PORT,
    "mongodb" : {
        "host": ATLAS,
        "credentials": {
            "username": DB_USER,
            "password": DB_PSWRD
        }
    },
    "enableMongoDebugging": true,
    "session": {
        "secret": "SCM"
    },
    "URL": URL,
    "URI": URI
}