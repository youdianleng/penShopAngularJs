export default () => ({
    host: process.env["DB_HOST"],
    port:  3306,
    username: process.env["DB_USERNAME"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_DATABASE"],
});