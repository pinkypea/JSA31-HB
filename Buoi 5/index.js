// document.getElementById('submitBtn').addEventListener('click', function() {
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const email = document.getElementById('email').value;
//     const errorMessage = document.getElementById('error-message');
  
//     // Kiểm tra nếu input rỗng
//     if (!name || !age || !email) {
//       errorMessage.textContent = 'Vui lòng nhập đầy đủ thông tin.';
//       return;
//     } else {
//       errorMessage.textContent = ''; // Xóa thông báo lỗi nếu không có lỗi
//     }
  
//     // Tạo object chứa thông tin đăng ký
//     const userInfo = {
//       name: name,
//       age: age,
//       email: email
//     };
  
//     // Lưu thông tin vào LocalStorage
//     localStorage.setItem('user', JSON.stringify(userInfo));
  
//     // Chuyển hướng sang trang show.html
//     window.location.href = 'show.html';
//   });

// function tinh_dien_tich_hcn(chieu_dai, chieu_rong) {
//     console.log(chieu_dai * chieu_rong);
// }

// tinh_dien_tich_hcn(10, 5);

// function add (a, b) {
//     sum = a + b;
//     return sum;
// }

// let result = add(5, 3) + 10;
// console.log(result);

// function tinh_tong(n) {
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// let result = tinh_tong(10);
// console.log(result);

// function convert_to_F (n) {
//     return (n * 9/5) + 32;
// }

// let result = convert_to_F(100);
// console.log(result);

// // Lưu trữ giá trị trong local storage
// localStorage.setItem("name", "Kiên");

// // Truy vấn giá trị trong local storage
// let getData = localStorage.getItem("name");
// console.log(getData);

// // Xoá 1 giá trị trong local storage
// localStorage.removeItem("name");

// // Xoá toàn bộ giá trị trong local storage
// localStorage.clear();

const students = [
    { name: "Nguyễn Văn A", age: 15},
    { name: "Nguyễn Văn B", age: 16},
    { name: "Nguyễn Văn C", age: 17}
]

let setData = localStorage.setItem("students_list", JSON.stringify(students));
