function daysCal() {
  //đầu vào lấy số liệu người dùng nhập vào
  var monthInput2 = document.getElementById("monthInput2").value * 1;
  var yearInput2 = document.getElementById("yearInput2").value * 1;
  var daysCount = 0;
  var showDaysCount = document.getElementById("showDaysCount");

  //xử lý
  switch (monthInput2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysCount = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      daysCount = 30;
      break;

    case 2:
      if (
        (yearInput2 % 4 == 0 && yearInput2 % 100 != 0) ||
        yearInput2 % 400 == 0
      ) {
        daysCount = 29;
      } else {
        daysCount = 28;
      }
      break;
    default:
      alert("Xin vui lòng nhập chính xác thông tin");
  }
  // đầu ra: xuất ra kết quả
  showDaysCount.innerHTML =
    "<p class='result mb-0'>Tháng " +
    monthInput2 +
    " năm " +
    yearInput2 +
    " có " +
    daysCount +
    " ngày</p>";
}
