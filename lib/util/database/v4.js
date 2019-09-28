var seq = require('seq');

function userFlagsColumn(db, callback) {
    console.log('running version 4 migration');

    seq()
        .seq(function() {
            db.query('ALTER TABLE users ADD COLUMN flags INTEGER DEFAULT 0', [], this);
        })
        .seq(function() {
            db.query('UPDATE meta SET value=4 WHERE key=\'dbVersion\'', [], this);
        })
        .seq(callback.bind(null, null))
        .catch(callback);

}

module.exports = userFlagsColumn;
