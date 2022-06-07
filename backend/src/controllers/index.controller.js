const StudentService = require("../services/index.service");
const studentService = new StudentService();

exports.getAllStudents = async(req, res, next) => {
    console.log("controller");
    const studentRetrieved = await studentService.getAllStudents();

    const { msg, status, success } = studentRetrieved;

    try {
        res.status(status).json({
            msg,
            success,
        });
    } catch (error) {
        console.log(error);
    }
};