const storage = {
  name: "Fake Storage",
  address: "HN",
  owner: "Dung Tien",
  items: [
    {
      id: 1,
      name: "Product 1",
      category: "Furniture",
      price: 20,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Device",
      price: 110,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Cloth",
      price: 2,
    },
  ],

  // Hàm để cập nhật thông tin kho hàng
  updateInfo(name, address, owner) {
    this.name = name;
    this.address = address;
    this.owner = owner;
    console.log("Thông tin kho hàng đã cập nhật:");
    console.log(this);
  },

  // Hàm để tạo mặt hàng mới
  addItem(id, name, category, price) {
    const exists = this.items.some((item) => item.id === id);
    if (exists) {
      console.log("Mã mặt hàng đã tồn tại. Vui lòng nhập mã khác.");
      return;
    }
    this.items.push({id, name, category, price});
    console.log("Thông tin các mặt hàng hiện có:");
    console.log(this.items);
  },

  // Hàm để tìm kiếm mặt hàng
  searchItems(keyword) {
    const results = this.items.filter((item) => item.name.includes(keyword));
    if (results.length > 0) {
      console.log("Kết quả tìm kiếm:");
      console.log(results);
    } else {
      console.log("Không tìm thấy mặt hàng. Danh sách tất cả mặt hàng:");
      console.log(this.items);
    }
  },

  // Hàm để xóa mặt hàng
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      console.log("Không tìm thấy mặt hàng với mã:", id);
    } else {
      this.items.splice(index, 1);
      console.log("Mặt hàng đã được xóa. Danh sách hiện tại:");
      console.log(this.items);
    }
  },
};

// Hàm để tương tác với người dùng
function interactWithStorage() {
  const prompt = require("prompt-sync")(); // Thêm thư viện prompt-sync để nhập dữ liệu từ bàn phím

  while (true) {
    const action = prompt(
      "Nhập action (1: Sửa thông tin kho, 2: Tạo mặt hàng, 3: Tìm kiếm mặt hàng, 4: Xóa mặt hàng, 0: Thoát): "
    );

    if (action === "1") {
      const name = prompt("Nhập tên kho hàng: ");
      const address = prompt("Nhập địa chỉ: ");
      const owner = prompt("Nhập người sở hữu: ");
      storage.updateInfo(name, address, owner);
    } else if (action === "2") {
      const id = parseInt(prompt("Nhập mã mặt hàng: "));
      const name = prompt("Nhập tên mặt hàng: ");
      const category = prompt("Nhập loại mặt hàng: ");
      const price = parseFloat(prompt("Nhập giá cả: "));
      storage.addItem(id, name, category, price);
    } else if (action === "3") {
      const keyword = prompt("Nhập từ khóa tìm kiếm: ");
      storage.searchItems(keyword);
    } else if (action === "4") {
      const id = parseInt(prompt("Nhập mã mặt hàng cần xóa: "));
      storage.removeItem(id);
    } else if (action === "0") {
      console.log("Kết thúc chương trình.");
      break;
    } else {
      console.log("Hành động không hợp lệ. Vui lòng thử lại.");
    }
  }
}

// Bắt đầu tương tác
interactWithStorage();
