let mangSoNguyen = [];

function layMang() {
    let input = document.getElementById("arrayInput").value;
    let tempArray = input.split(',').map(Number);
    mangSoNguyen = mangSoNguyen.concat(tempArray);
    document.getElementById("ketqua").innerHTML = "Mảng hiện tại: " + mangSoNguyen.join(", ");
}

// Tong cac so duong
function tongSoDuong() {
    let tong = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            tong += mangSoNguyen[i];
        }
    }
    document.getElementById("ketqua").innerText = "Tổng các số dương: " + tong;
}

// Dem so duong

function demSoDuong() {
    let soLuong = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            soLuong++;
        }
    }
    document.getElementById("ketqua").innerText = "Số lượng số dương: " + soLuong;
}

// Tim so nho nhat
function timSoNhoNhat() {
    let soNhoNhat = mangSoNguyen[0];
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] < soNhoNhat) {
            soNhoNhat = mangSoNguyen[i];
        }
    }
    document.getElementById("ketqua").innerText = "Số nhỏ nhất: " + soNhoNhat;
}

// tim so duong nho nhat

function timSoDuongNhoNhat() {
    let soDuongNhoNhat = mangSoNguyen[0];
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0 && (soDuongNhoNhat === null || mangSoNguyen[i] < soDuongNhoNhat)) {
            soDuongNhoNhat = mangSoNguyen[i];
        }
    }
    let ketqua = soDuongNhoNhat !== null ? soDuongNhoNhat : "Không có số dương";
    document.getElementById("ketqua").innerText = "Số dương nhỏ nhất: " + ketqua;
}

// tim so chan cuoi cung
function timSoChanCuoiCung() {
    let soChanCuoi = -1;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] % 2 === 0) {
            soChanCuoi = mangSoNguyen[i];
        }
    }
    document.getElementById("ketqua").innerText = "Số chẵn cuối cùng: " + soChanCuoi;
}

//doi cho 2 gia tri trong mang
function DoiCho() {
    let viTri1 = parseInt(prompt("Nhập vị trí thứ nhất (0-based index):"));
    let viTri2 = parseInt(prompt("Nhập vị trí thứ hai (0-based index):"));
    if (viTri1 >= 0 && viTri2 >= 0 && viTri1 < mangSoNguyen.length && viTri2 < mangSoNguyen.length) {
        let tam = mangSoNguyen[viTri1];
        mangSoNguyen[viTri1] = mangSoNguyen[viTri2];
        mangSoNguyen[viTri2] = tam;
        document.getElementById("ketqua").innerText = "Mảng sau khi đổi chỗ: " + mangSoNguyen.join(", ");
    } else {
        document.getElementById("ketqua").innerText = "Vị trí nhập không hợp lệ";
    }
}

//sap xep thu tu tang dan
function sapXepMang() {
    for (let i = 0; i < mangSoNguyen.length - 1; i++) {
        for (let j = i + 1; j < mangSoNguyen.length; j++) {
            if (mangSoNguyen[i] > mangSoNguyen[j]) {
                let tam = mangSoNguyen[i];
                mangSoNguyen[i] = mangSoNguyen[j];
                mangSoNguyen[j] = tam;
            }
        }
        document.getElementById("ketqua").innerText = "Mảng sau khi sắp xếp: " + mangSoNguyen.join(", ");
    }
}

// ket tra so nguyen to

function kiemTraSoNguyenTo(so) {
    if (so < 2) return false;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) return false;
    }
    return true;
}

// dem so nguyen
function timSoNguyen() {
    // Tạo mảng số thực từ mảng số nguyên đã có
    let mangSoThuc = mangSoNguyen;
    let soNguyenDem = 0;

    // Kiểm tra từng phần tử trong mảng để xem có phải số nguyên hay không
    for (let i = 0; i < mangSoThuc.length; i++) {
        if (Number.isInteger(mangSoThuc[i])) {
            soNguyenDem++;
        }
    }

    // Hiển thị kết quả
    document.getElementById("ketqua").innerText = "Số lượng số nguyên trong mảng số thực: " + soNguyenDem;
}


// so sanh so duong va so am

function soSanhDuongAm() {
    let soLuongDuong = 0,
        soLuongAm = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            soLuongDuong++;
        } else if (mangSoNguyen[i] < 0) {
            soLuongAm++;
        }
        let ketqua = soLuongDuong > soLuongAm ? "Số dương nhiều hơn" : soLuongDuong < soLuongAm ? "Số âm nhiều hơn" : "Số lượng bằng nhau";
        document.getElementById("ketqua").innerText = ketqua;
    }
}