//Select all elements of interest
const nameEle = document.querySelector("#name");
const emailEle = document.querySelector("#email");
const genderEle = document.querySelector("#gender");
const courseEle = document.querySelector("#course")
const addBtn = document.querySelector("#addBtn");
const studentTable = document.querySelector("#studentList");
const info = document.querySelector("#info")
//Event Listeners
addBtn.addEventListener('click', addStudent)

//Functions
function displayStudents(){
    const students = fetchStudents()

    for (const student of students){
        addStudentToTable(student);
    }

}


function addStudentToTable(student){
    let row = document.createElement("tr")
    row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.gender}</td>
    <td>${student.course}</td>
    <td><a href="#" class= "btn btn-danger btn-sm" id= "delete">Delete</a></td>
    `;

    studentTable.appendChild(row);
}
function addStudent(){
    let student = {
        name : nameEle.value,
        email : emailEle.value,
        gender : genderEle.value,
        course : courseEle.value
    };

    addStudentToTable(student);
    storeStudent(student);
    clearFields();
}


function storeStudent(student){
    //let counter;
    let students = [];
    if(localStorage.getItem('students') == null){
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students))
        alert("New student Added");
    } else{
        students = JSON.parse(localStorage.getItem('students'));
        students.push(student);
        alert("New student Added");
        localStorage.setItem('students',JSON.stringify(students));
    }
    //localStorage.setItem('counter');
}

function fetchStudents(){
    let students;
    if(localStorage.getItem('students') == null){
        students = [];
    } else{
        students = JSON.parse(localStorage.getItem('students'));
        info.innerHTML = `${students.length} students registered`
    }
    return students;
}

function clearFields(){
    nameEle.value = "";
    emailEle.value = "";
    genderEle.value = "";
    courseEle.value = "";
}

console.log(students.length)