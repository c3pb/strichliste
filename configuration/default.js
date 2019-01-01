module.exports = {
    host: '0.0.0.0',
    port: 8080,

    database: {
        type: 'SQLITE',
        options: {
            filename: 'data.sqlite'
        }
    },

    mqtt: {
        enabled: false,
        host: 'localhost',
        port: 1883,
        topics: {
            transactionValue: 'strichliste/transactionValue'
        }
    },

    boundaries: {
        account: {
            upper: 200,
            lower: -23
        },
        transaction: {
            upper:  50,
            lower: -50
        }
    },

    logging: {
        active: true
    },

    caching: {
        enabled: false
    },

    metrics: {
        timespan: 30
    }
};
