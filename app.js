// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let str_input = prompt("đảo ngược chuỗi " );
// function daonguoc (s) {

//     for (let i = s.length - 1; i >= 0; i--) {
//         str_input += s[i]; 
//     }
//    return str_input;
// }
//  console.log(daonguoc(str_input));

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This Is Test"
// Cho "hello a"; In ra "Hello A”

// let str_input = prompt("viết thường " );
// function toUpper(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(Word) {
//             return Word[0].toUpperCase() + Word.substr(1);
//         })
//         .join(' ');
//      }
//      console.log(toUpper(str_input)) 

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
 
// let str_input = prompt("viết thường " );
// function khongtrung(arr) {
//     return Array.from(new Set(arr)) //
//   }
//   console.log(khongtrung(str_input))

// Bài 4 : Tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

let n = [{
    tên: "hoang" ,
    tuổi: 20,
    lương: 90000000,
    chức : "sếp", 

},
{
    tên: "nhân" ,
    tuổi: 20,
    lương: 10000000,
    chức: "trợ lý" ,

},
{
    tên: "Đạt" ,
    tuổi: 20,
    lương: 9000000,
    chức: "nhân viên",

},
];
while(1){
let ucom = prompt("R, C, U, D");
    if(ucom == 'R' ){
        
    }

}