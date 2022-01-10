const config_prod = {
    env: "production",
    secretKey: "secretKey",
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