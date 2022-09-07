// tính ngày tháng năm ngày mai
function dateMonthYearNext() {
  // đầu vào lấy số liệu ngày tháng năm người dùng nhập vào
  var dateInput = document.getElementById("dateInput").value * 1;
  var monthInput = document.getElementById("monthInput").value * 1;
  var yearInput = document.getElementById("yearInput").value * 1;
  var newDateMonthYear = "";
  var showDateMonthYear = document.getElementById("showDateMonthYear");

  //xử lý
  // trường hợp những tháng có 31 ngày
  switch (monthInput) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (dateInput > 0 && dateInput < 31) {
        newDateMonthYear = dateInput + 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 31) {
        newDateMonthYear = "1" + "/" + (monthInput + 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    // trường hợp những tháng có 30 ngày
    case 4:
    case 6:
    case 9:
    case 11:
      if (dateInput > 0 && dateInput < 30) {
        newDateMonthYear = dateInput + 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 30) {
        newDateMonthYear = "1" + "/" + (monthInput + 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    //trường hợp tháng 2 mặc định đề bài cho là 28 tây
    case 2:
      if (dateInput > 0 && dateInput < 28) {
        newDateMonthYear = dateInput + 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 28) {
        newDateMonthYear = "1" + "/" + (monthInput + 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    case 12:
      if (dateInput > 0 && dateInput < 31) {
        newDateMonthYear = dateInput + 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 31) {
        newDateMonthYear = "1/1" + "/" + (yearInput + 1);
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    default:
      newDateMonthYear = "Vui lòng nhập đúng thông tin!";
  }

  //đầu ra: xuất ra kết quả

  showDateMonthYear.innerHTML =
    "<p class='result mb-0'>" + newDateMonthYear + "</p>";
};

// tính ngày tháng năm hôm qua
function dateMonthYearPrev() {
  // đầu vào lấy số liệu ngày tháng năm người dùng nhập vào
  var dateInput = document.getElementById("dateInput").value * 1;
  var monthInput = document.getElementById("monthInput").value * 1;
  var yearInput = document.getElementById("yearInput").value * 1;
  var newDateMonthYear = "";
  var showDateMonthYear = document.getElementById("showDateMonthYear");

  //xử lý
  //trường hợp tháng có 31 ngày
  switch (monthInput) {
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dateInput > 1 && dateInput <= 31) {
        newDateMonthYear = dateInput - 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 1) {
        newDateMonthYear = "30" + "/" + (monthInput - 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    //trường hợp tháng có 30 ngày
    case 4:
    case 6:
    case 9:
    case 11:
      if (dateInput > 1 && dateInput <= 30) {
        newDateMonthYear = dateInput - 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 1) {
        newDateMonthYear = "31" + "/" + (monthInput - 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    // trường hợp ngày 1 tháng 1 trở về 1 ngày phải xử lý riêng
    case 1:
      if (dateInput > 1 && dateInput <= 31) {
        newDateMonthYear = dateInput - 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 1) {
        newDateMonthYear = "31/12" + "/" + (yearInput - 1);
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    // trường hợp tháng 2 đề bài mặc định là 28 ngày phải xử lý riêng
    case 2:
      if (dateInput > 1 && dateInput <= 28) {
        newDateMonthYear = dateInput - 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 1) {
        newDateMonthYear = "31" + "/" + (monthInput - 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    // trường hợp đầu tháng 3 trở về 1 ngày là ngày cuối của tháng 2 (đề bài mặc định là 28 tây)
    case 3:
      if (dateInput > 1 && dateInput <= 31) {
        newDateMonthYear = dateInput - 1 + "/" + monthInput + "/" + yearInput;
      } else if (dateInput == 1) {
        newDateMonthYear = "28" + "/" + (monthInput - 1) + "/" + yearInput;
      } else {
        newDateMonthYear = "Vui lòng nhập đúng thông tin!";
      }
      break;
    default:
      newDateMonthYear = "Vui lòng nhập đúng thông tin!";
  }
  // đầu ra : xuất ra kết quả
  showDateMonthYear.innerHTML =
    "<p class='result mb-0'>" + newDateMonthYear + "</p>";
};
