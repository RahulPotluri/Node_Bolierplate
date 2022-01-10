const config_dev = {
    env: "development",
    secretKey: "secretKey",
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