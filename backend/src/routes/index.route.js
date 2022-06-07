const { getAllStudents } = require("../controllers/index.controller");

module.exports = (router) => {
    router.get("/api/students/", getAllStudents);

    return router;
};