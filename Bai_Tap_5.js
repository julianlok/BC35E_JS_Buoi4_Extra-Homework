function checkLeap(y) {
  //hàm check xem phải năm nhuận hay không
  var isLeap;

  if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    isLeap = true;
  } else {
    isLeap = false;
  }

  return isLeap;
}

function dayInMonth(m, y) {
  // hàm check tổng số ngày của từng tháng
  var isLeap = checkLeap(y);

  // những tháng dưới dây được liệt kê là gồm có 31 ngày
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;

    // những tháng dưới dây được liệt kê là gồm có 30 ngày
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;

    // tháng 2 check xem năm đó phải năm nhuận không, nếu nhuận thì tháng 2 có 29 ngày ngươc lại có 28 ngày
    case 2:
      if (isLeap) return 29;
      else return 28;
      break;
    default:
      "vui long nhap lai chinh xac thong tin";
      break;
  }
}

//tính ngày tháng năm hôm qua
function dateMonthYearPrev() {
  // Đầu vào: lấy số liệu ngày tháng năm của người dùng nhập
  var dateInput = document.getElementById("dateInput").value * 1;
  var monthInput = document.getElementById("monthInput").value * 1;
  var yearInput = document.getElementById("yearInput").value * 1;
  var newDate = dateInput;
  var newMonth = monthInput;
  var newYear = yearInput;
  var isLeap = checkLeap(yearInput);

  //   Xử lý
  if (
    dateInput > 0 &&
    monthInput > 0 &&
    yearInput > 0 &&
    dateInput < dayInMonth(monthInput, yearInput)
  ) {
    newDate = dateInput - 1;
    // nếu user nhập ngày 1 (ngoài tháng 1 phải xử lý riêng) thì những tháng 2,4,6,8,9,11 thì trở về trước 1 ngày là ngày 31
    if (monthInput != 1 && dateInput == 1) {
      if (
        monthInput == 2 ||
        monthInput == 4 ||
        monthInput == 6 ||
        monthInput == 8 ||
        monthInput == 9 ||
        monthInput == 11
      ) {
        newDate = 31;
        newMonth = monthInput - 1;
        //tháng 5,7,10,12 thì trở về trước 1 ngày là ngày 31
      } else if (
        monthInput == 5 ||
        monthInput == 7 ||
        monthInput == 10 ||
        monthInput == 12
      ) {
        newDate = 30;
        newMonth = monthInput - 1;
        // trường hợp tháng 2 thì kiểm tra năm đó có năm nhuận không
      } else if (monthInput == 3) {
        if (isLeap) {
          newDate = 29;
          newMonth = 2;
        } else {
          newDate = 28;
          newMonth = 2;
        }
      }
    } else if (monthInput == 1 && dateInput == 1) {
      newDate = 31;
      newMonth = 12;
      newYear = yearInput - 1;
    }

    //đầu ra
    var result =
      "<p class='result mb-0'>" +
      newDate +
      "/" +
      newMonth +
      "/" +
      newYear +
      "</p>";
    document.getElementById("showDateMonthYear").innerHTML = result;
  } else {
    var result =
      "<p class='result mb-0'>Xin vui lòng nhập đúng thông tin" + "</p>";
    document.getElementById("showDateMonthYear").innerHTML = result;
  }
}

//tính ngày tháng năm ngày mai
function dateMonthYearNext() {
  // Đầu vào: lấy số liệu ngày tháng năm của người dùng nhập
  var dateInput = document.getElementById("dateInput").value * 1;
  var monthInput = document.getElementById("monthInput").value * 1;
  var yearInput = document.getElementById("yearInput").value * 1;
  var newDate = dateInput;
  var newMonth = monthInput;
  var newYear = yearInput;
  var isLeap = checkLeap(yearInput);

  //   Xử lý
  if (
    dateInput > 0 &&
    monthInput > 0 &&
    yearInput > 0 &&
    dateInput < dayInMonth(monthInput, yearInput)
  ) 
    newDate = dateInput + 1;
   
    if (monthInput != 12 && dayInMonth(monthInput,yearInput)) {
        newDate = 1;
        newMonth = monthInput + 1;
    }
  var kq = newDate + "" + newMonth + "" + newYear;
  console.log(kq);

}
