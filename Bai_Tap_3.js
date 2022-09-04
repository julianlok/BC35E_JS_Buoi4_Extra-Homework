function readNum() {
  //đầu vào lấy số liệu người nhập vào
  var numInput3 = document.getElementById("numInput3").value * 1;
  var hangTram = 0;
  var hangChuc = 0;
  var hangDonVi = 0;
  rNum = "";
  var showReadNum = document.getElementById("showReadNum");

  //xử lý
  // tách hàng trăm , hàng chục, hàng đơn vị
  hangTram = Math.floor(numInput3 / 100);
  hangChuc = Math.floor((numInput3 % 100) / 10);
  hangDonVi = Math.floor(numInput3 % 10);

  // xét từng trường hợp
  //hàng trăm
  switch (hangTram) {
    case 1:
      rNum += "Một trăm ";
      break;
    case 2:
      rNum += "Hai trăm ";
      break;
    case 3:
      rNum += "Ba trăm ";
      break;
    case 4:
      rNum += "Bốn trăm ";
      break;
    case 5:
      rNum += "Năm trăm ";
      break;
    case 6:
      rNum += "Sáu trăm ";
      break;
    case 7:
      rNum += "Bảy trăm ";
      break;
    case 8:
      rNum += "Tám trăm ";
      break;
    case 9:
      rNum += "Chín trăm ";
      break;
    default:
      alert("Vui lòng nhập đầy đủ số có 3 chữ số! Cám ơn");
      break;
  }

  // hàng chục
  switch (hangChuc) {
    case 1:
      rNum += "mười ";
      break;
    case 2:
      rNum += "hai mươi ";
      break;
    case 3:
      rNum += "ba mươi ";
      break;
    case 4:
      rNum += "bốn mươi ";
      break;
    case 5:
      rNum += "năm mươi ";
      break;
    case 6:
      rNum += "sáu mươi ";
      break;
    case 7:
      rNum += "bảy mươi ";
      break;
    case 8:
      rNum += "tám mươi ";
      break;
    case 9:
      rNum += "chín mươi ";
      break;
    default:
      alert("Vui lòng nhập đầy đủ số có 3 chữ số! Cám ơn");
      break;
  }

  // hàng đơn vị
  switch (hangDonVi) {
    case 1:
      rNum += "một";
      break;
    case 2:
      rNum += "hai";
      break;
    case 3:
      rNum += "ba";
      break;
    case 4:
      rNum += "bốn";
      break;
    case 5:
      rNum += "năm";
      break;
    case 6:
      rNum += "sáu";
      break;
    case 7:
      rNum += "bảy";
      break;
    case 8:
      rNum += "tám";
      break;
    case 9:
      rNum += "chín";
      break;
    default:
      alert("Vui lòng nhập đúng số có 3 chữ số! Cám ơn");
      break;
  }

  //đầu ra : xuất ra kết quả
  showReadNum.innerHTML = "<p class='result mb-0'>" + rNum + "</p>";
}
