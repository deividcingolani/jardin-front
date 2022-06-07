const { client } = require("../dao/db/db");

module.exports = class {
    async getAllStudents() {
        try {
            let response;
            const sql = "SELECT * FROM student";
            const res = await client.query(sql);
            if (res.rows.length > 0) {
                response = {
                    msg: res.rows,
                    success: true,
                    status: 200,
                };
            } else {
                response = {
                    msg: "No items",
                    success: false,
                    status: 203,
                };
            }
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};