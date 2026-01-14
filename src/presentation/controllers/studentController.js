const studentService = require('../../business/services/studentService');

class StudentController {
    getAllStudents = async (req, res, next) => {
        try {
            const { major, status } = req.query;
            const result = await studentService.getAllStudents(major, status);
            res.json(result);
        } catch (error) {
            next(error);
        }
    };

    getStudentById = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const student = await studentService.getStudentById(id);
            res.json(student);
        } catch (error) {
            next(error);
        }
    };

    createStudent = async (req, res, next) => {
        try {
            const studentData = req.body;
            const newStudent = await studentService.createStudent(studentData);
            res.status(201).json(newStudent);
        } catch (error) {
            next(error);
        }
    };

    updateStudent = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const studentData = req.body;
            const updatedStudent = await studentService.updateStudent(id, studentData);
            res.json(updatedStudent);
        } catch (error) {
            next(error);
        }
    };

    updateGPA = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const { gpa } = req.body;
            const updatedStudent = await studentService.updateGPA(id, gpa);
            res.json(updatedStudent);
        } catch (error) {
            next(error);
        }
    };

    updateStatus = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const { status } = req.body;
            const updatedStudent = await studentService.updateStatus(id, status);
            res.json(updatedStudent);
        } catch (error) {
            next(error);
        }
    };

    deleteStudent = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const result = await studentService.deleteStudent(id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new StudentController();
