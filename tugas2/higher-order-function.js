const students = [
    { name: 'Bryan Soto', nim: '120140101', active: true },
    { name: 'Genevieve Welsh', nim: '120140102', active: false },
    { name: 'Abigail French', nim: '120140103', active: true },
];

const getActiveStudents = () => {
    const data = students.filter((student) => student.active);
    return data;
};

const showStudentActiveName = () => {
    const activeStudents = getActiveStudents();
    activeStudents.forEach((student) => {
        console.log(`${student.nim} ${student.name}`);
    });
};

showStudentActiveName();
/**
 * Output:
 * 120140101 Bryan Soto
 * 120140103 Abigail French
 */
