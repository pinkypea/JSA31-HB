arr = [1, 2, "three", null, undefined];
console.log(arr[2]); 

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.push(true, false); // thêm phần tử vào cuối mảng

arr.splice(0, 0, "Phần tử mới được thêm vào"); // thêm phần tử vào vị trí bất kỳ

arr[2] = "ten"; // cập nhật giá trị mới cho phần tử

console.log(arr.indexOf(null)); // tìm kiếm phần tử đầu tiên trong mảng

C = [16, 28, 11, 28, 8, 10, 21, 4, 30];
// Tính tổng các số chẵn và tổng các số ở vị trí lẻ.

sum_even_element = 0 // khai báo biến lưu tổng các số chẵn
sum_odd_index = 0 // khai báo biến lưu tổng các số ở vị trí lẻ

for (let i = 0; i < C.length; i++){
    if (C[i] % 2 == 0){
        sum_even_element += C[i];
    }
    if (i % 2 != 0){
        sum_odd_index += C[i];
    }
}

console.log("Tổng các số chẵn là", sum_even_element);
console.log("Tổng các số ở vị trí lẻ là", sum_odd_index);

// Object
let person = {
    name: "John",
    age: 30,
    job: "Developer"
}
console.log(person.name);

// Lệnh duyện object
for (key in person) {
    console.log(key);
}

// Thay đổi value thông qua key
person.hometown = "Melbourn";
person.age = 20;
console.log(person.hometown);
console.log(person.age);

// Kiểm tra xem 1 key có nằm trong object hay không
if ("name" in person){
    console.log("Key name có trong object person");
}

// xoá key trong object
delete person.hometown;
console.log(person);

// Bài tập thực hành object
let hocsinh = [
    {ten: "An", tuoi: 15, lop: "10A1"},
    {ten: "Bình", tuoi: 16, lop: "11A2"},
    {ten: "Châu", tuoi: 15, lop: "10A1"}
];

hocsinh.push({ten: "Dũng", tuoi: 17, lop: "10A3"});

for (let i = 0; i < hocsinh.length; i++){
    console.log(`Tên: ${hocsinh[i].ten}; Tuổi: ${hocsinh[i].tuoi}; Lớp: ${hocsinh[i].lop}`);
}

for (let i = 0; i < hocsinh.length; i++){
    if (hocsinh[i].ten == "Bình"){
        hocsinh[i].tuoi = 17;
    }
}

hocsinh.splice(2, 1);