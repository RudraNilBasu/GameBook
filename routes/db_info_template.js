/* 
 * Rename db_info_template.js => db_info.js and correctly fill up:
 * USER: name of the user for the database
 * PASSWORD: Password for the USER
 * DATABASE: Name of the Database
 */
exports.db_info = function () {
        return {
                user: 'USER',
                password: 'PASSWORD',
                database: 'DATABASE'
        };
};

