// ----------------------------------
// اختيار الدور (Role)
// ----------------------------------
let selectedRole = "";

function selectRole(element) {
  const buttons = document.querySelectorAll('.role-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  selectedRole = element.textContent.trim();
}

// ----------------------------------
// إظهار/إخفاء الباسورد
// ----------------------------------
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

// ----------------------------------
// رفع الملفات
// ----------------------------------
const uploadBtn = document.querySelector('.action div');
const fileInput = document.getElementById('fileInput');

if (uploadBtn && fileInput) {
  uploadBtn.addEventListener('click', () => { 
    fileInput.click(); 
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) 
      alert('تم اختيار الملف: ' + e.target.files[0].name);
  });
}
// ----------------------------------
// فتح/قفل السايدبار
// ----------------------------------
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("open");
}

// ----------------------------------
// الانتقال لصفحة بروفايل الطالب أو المعلم
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // صفحة الطلاب
  if(document.body.classList.contains("students-page")) {
    const studentLinks = document.querySelectorAll(".student-info a");
    studentLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const studentName = link.textContent.trim();
        const studentId = link.getAttribute("data-id");
        window.location.href = `profile-student.html?id=${studentId}&name=${encodeURIComponent(studentName)}`;
      });
    });
  }

  // صفحة المعلمين
  if(document.body.classList.contains("teachers-page")) {
    const teacherLinks = document.querySelectorAll(".student-info a");
    teacherLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const teacherName = link.textContent.trim();
        const teacherId = link.getAttribute("data-id");
        window.location.href = `profile-teacher.html?id=${teacherId}&name=${encodeURIComponent(teacherName)}`;
      });
    });
  }
});

// ----------------------------------
// بيانات المعلمين (مثال ثابت)
// ----------------------------------
const teachersData = {
  "EMP001": {
    name: "Kristin Watson",
    gender: "Female",
    birth: "10/10/1985",
    address: "القاهرة",
    blood: "O+",
    religion: "مسلمة",
    email: "michelle.rivera@example.com",
    id: "EMP001",
    nationality: "مصرية",
    phone: "01012345678",
    empcode: "EMP001",
    degree: "بكالوريوس تعليم",
    subject: "English",
    classes: "JSS 2",
    time: "دوام كامل",
    salary: "15000 ج.م"
  },
  "EMP002": {
    name: "Jane Cooper",
    gender: "Female",
    birth: "15/08/1980",
    address: "الإسكندرية",
    blood: "A+",
    religion: "مسلمة",
    email: "jane.cooper@example.com",
    id: "EMP002",
    nationality: "مصرية",
    phone: "01098765432",
    empcode: "EMP002",
    degree: "بكالوريوس علوم",
    subject: "Biology",
    classes: "SS 1",
    time: "دوام كامل",
    salary: "14000 ج.م"
  }
};

// ----------------------------------
//  بيانات المعلم
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const empId = urlParams.get('id');

  if (empId && teachersData[empId]) {
    const teacher = teachersData[empId];
    document.getElementById("teacher-name").textContent = teacher.name;
    document.getElementById("teacher-gender").textContent = teacher.gender;
    document.getElementById("teacher-birth").textContent = teacher.birth;
    document.getElementById("teacher-address").textContent = teacher.address;
    document.getElementById("teacher-blood").textContent = teacher.blood;
    document.getElementById("teacher-religion").textContent = teacher.religion;
    document.getElementById("teacher-email").textContent = teacher.email;
    document.getElementById("teacher-id").textContent = teacher.id;
    document.getElementById("teacher-nationality").textContent = teacher.nationality;
    document.getElementById("teacher-phone").textContent = teacher.phone;
    document.getElementById("teacher-empcode").textContent = teacher.empcode;
    document.getElementById("teacher-degree").textContent = teacher.degree;
    document.getElementById("teacher-subject").textContent = teacher.subject;
    document.getElementById("teacher-classes").textContent = teacher.classes;
    document.getElementById("teacher-time").textContent = teacher.time;
    document.getElementById("teacher-salary").textContent = teacher.salary;
  }
});

// ----------------------------------
//  بيانات الطالب
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  document.getElementById("student-name").textContent = urlParams.get("name") || "اسم الطالب";
  document.getElementById("student-id").textContent = urlParams.get("id") || "ID الطالب";

  document.getElementById("student-gender").textContent = "Female";
  document.getElementById("student-age").textContent = "15";
  document.getElementById("student-nationality").textContent = "مصري";
  document.getElementById("student-address").textContent = "القاهرة";
  document.getElementById("student-blood").textContent = "O+";
  document.getElementById("student-email").textContent = "example@student.com";
  document.getElementById("student-phone").textContent = "01012345678";
  document.getElementById("student-birth").textContent = "01/01/2008";
  document.getElementById("student-wristband").textContent = "WB123456";
  document.getElementById("student-religion").textContent = "مسلم";
  document.getElementById("student-illness").textContent = "لا يوجد";
  document.getElementById("student-identity").textContent = "12345678901234";
});
