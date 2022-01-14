const config_prod = {
    env: "production",
    secretKey: "secretKey",
    dbConfig: {
        host: "localhost",
        database: "football",
        port: 27017
    },
    log: {
        format: "combined",
        dir: "../logs"
    },
    cors: {
        origin: "your.domain.com",
        credentials: true
    }
}

module.exports = config_prod;