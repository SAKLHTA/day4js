// Khai báo đối tượng mô tả bản thân
const myself = {
  name: "Nguyen The Anh",
  age: 22,
  address: "Hanoi, Vietnam",
  gender: "Nam",
  hobbies: ["Đọc sách", "Chơi thể thao", "Du lịch"],
  height: 175, // cm
  weight: 70, // kg
  maritalStatus: "Single",
  phoneNumber: "0123456789",
};

// Khai báo đối tượng bạn gái/bạn trai
const partner = {
  name: "Luu Thanh Huyen",
  age: 22,
  kindness: 8, // 1-10
  wealthy: true,
};

// Kiểm tra độ tuổi và in ra kết quả
if (banThan.tuoi > 20 && banGai.tuoi > 20) {
  console.log("Tầm này cưới được rồi");
} else {
  console.log("Chờ thêm chút nữa");
}

//============================quizz 2============================//
// 1. Hàm để in ra "Hello world, " + name
function greet(name) {
  console.log("Xin chào thế giới, " + name);
}

// 2. Hàm để tính (a + b)^2
function calculateSquare(a, b) {
  return Math.pow(a + b, 2);
}

// 3. Hàm để nhập a cho đến khi a lớn hơn 0
function inputPositiveNumber() {
  let a;
  do {
    a = parseFloat(prompt("Vui lòng nhập một số lớn hơn 0:"));
  } while (isNaN(a) || a <= 0);
  return a;
}

greet("Alice"); // Xuất ra: Xin chào thế giới, Alice

const result = calculateSquare(3, 4);
console.log("Kết quả của (3 + 4)^2:", result); // Xuất ra: Kết quả của (3 + 4)^2: 49

const positiveNumber = inputPositiveNumber();
console.log("Bạn đã nhập một số dương:", positiveNumber);

//============Thực Hành==================//
// 1. Hàm tìm nghiệm của phương trình bậc 2 a*x^2 + b*x + c = 0
function findRoots(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  c;
  let roots = [];

  if (discriminant > 0) {
    // Hai nghiệm phân biệt
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    // Một nghiệm
    const root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}

// 2. Hàm kiểm tra xem a, b, c có tạo thành tam giác không
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 3. Hàm kiểm tra ngày tháng năm hợp lệ
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day); // Tháng bắt đầu từ 0
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// 4. Dữ liệu về users (giả sử đã được nhập vào từ file data.js)
const users = [
  // Ví dụ dữ liệu
  {
    id: 1,
    first_name: "Nguyen The",
    last_name: "Anh",
    age: 55,
    email: "saklhta1617@gmail.com",
    married: false,
    profession: "Lap Trinh",
  },
  {
    id: 2,
    first_name: "Luu Thanh",
    last_name: "Huyen",
    age: 30,
    email: "luuthanhhuyen17@gmail.com",
    married: false,
    profession: "Giao Vien",
  },
  // ... thêm các user khác
];

// Hàm tìm user theo id
function findUserById(n) {
  const user = users.find((user) => user.id === n);
  return user ? user : null;
}

// Hàm tìm email của user theo keyword
function findEmailsByKeyword(keyword) {
  return users
    .filter((user) =>
      (user.first_name + " " + user.last_name).includes(keyword)
    )
    .map((user) => user.email);
}

// Hàm đếm số lượng user có age > 50
function countUsersOlderThan50() {
  return users.filter((user) => user.age > 50).length;
}

// Hàm đếm số lượng user đã kết hôn và chưa kết hôn
function countMaritalStatus() {
  const marriedCount = users.filter((user) => user.married).length;
  const unmarriedCount = users.filter((user) => !user.married).length;
  return {married: marriedCount, unmarried: unmarriedCount};
}

// Hàm đếm số lượng user theo từng ngành nghề
function countUsersByProfession() {
  const professionCount = {};

  users.forEach((user) => {
    if (professionCount[user.profession]) {
      professionCount[user.profession]++;
    } else {
      professionCount[user.profession] = 1;
    }
  });

  return professionCount;
}

// Ví dụ sử dụng các hàm
console.log("Nghiệm của phương trình: ", findRoots(1, -3, 2)); // Ví dụ phương trình x^2 - 3x + 2 = 0
console.log("Có tạo thành tam giác không: ", isTriangle(3, 4, 5)); // Xuất ra: true
console.log("Ngày tháng năm hợp lệ không: ", isValidDate(29, 2, 2020)); // Xuất ra: true
console.log("Tìm user có id = 1: ", findUserById(1)); // Xuất ra thông tin user
console.log("Email của user chứa keyword 'Anh': ", findEmailsByKeyword("Anh")); // Xuất ra email
console.log("Số lượng user có age > 50: ", countUsersOlderThan50()); // Xuất ra số lượng
console.log("Số lượng user đã và chưa kết hôn: ", countMaritalStatus()); // Xuất ra số lượng đã và chưa kết hôn
console.log("Số lượng user theo từng ngành nghề: ", countUsersByProfession()); // Xuất ra số lượng theo nghề
