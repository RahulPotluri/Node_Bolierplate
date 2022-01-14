const config_dev = {
    env: "development",
    secretKey: "secretKey",
    dbConfig: {
        host: "localhost",
        database: "football",
        port: 27017
    },
    log: {
        format: "dev",
        dir: "../logs"
    },
    cors: {
        origin: true,
        credentials: true
    }
}

module.exports = config_dev;