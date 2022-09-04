function search () {
    //đầu vào lấy dữ liệu người dùng nhập vào
    var tenSV1 = document.getElementById("tenSV1").value;
    var xSV1 = +document.getElementById("xSV1").value;
    var ySV1 = +document.getElementById("ySV1").value;
    var tenSV2 = document.getElementById("tenSV2").value;
    var xSV2 = +document.getElementById("xSV2").value;
    var ySV2 = +document.getElementById("ySV2").value;
    var tenSV3 = document.getElementById("tenSV3").value;
    var xSV3 = +document.getElementById("xSV3").value;
    var ySV3 = +document.getElementById("ySV3").value;
    var xTruong = +document.getElementById("xSV3").value;
    var yTruong = +document.getElementById("ySV3").value;
    var showSearch = document.getElementById("showSearch");
    var result = "";

    //xử lý (formula: căn bậc 2 của (xTruong - xSV) * (xTruong - xSV) - (yTruong - ySV) * (yTruong - ySV))
    //sinh vien 1
    var dSV1 = Math.sqrt(Math.pow(xTruong - xSV1,2) + Math.pow(yTruong - ySV1,2));
    
    var dSV2 = Math.sqrt(Math.pow(xTruong - xSV2,2) + Math.pow(yTruong - ySV2,2));

    var dSV3 = Math.sqrt(Math.pow(xTruong - xSV3,2) + Math.pow(yTruong - ySV3,2));

    var dMax = dSV1;
    if (dMax < dSV2) {
        result += tenSV2;
    } else if (dMax < dSV3) {
        result += tenSV3;
    } else {
        result += tenSV1;
    }
    
    // đầu ra : xuất ra kết quả 
    showSearch.innerHTML = "<p class='result mb-0'>Sinh viên xa trường nhất là " + result + "</p>";
}