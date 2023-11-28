

// Lấy dữ liệu từ API
var productList1 = [];
var productList = [];

/*fetchData();

function fetchData() {
    fetch('http://localhost:8082/users')
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('data');

            // Duyệt qua từng sản phẩm và trích xuất thông tin
            data.forEach(item => {
                const id= item.productId;
                const name = item.name;
                const price = item.price;
                const color = item.color;
                const linkimg = item.displayImage;
                const size = item.size;
                const star = item.star;
                const style = item.category.name;

                productList1.push({
                    id:id,
                    nameprd: name,
                    style: style,
                    price: price.toString(),
                    coler: color,
                    size: size,
                    star: star.toString(),
                    linkimg: linkimg
                });

            });

            // Gọi hàm xử lý sau khi dữ liệu đã được lấy
            processProductList();
            // searchprd()
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
        });
}*/

var productListlist = [
    {id:0, nameprd: "T-Shirt",style:"T-Shirts", price:"500000",coler:"Green",size:"XX_Large",star:"5",linkimg :'https://contents.mediadecathlon.com/p2397050/d84f0dd61fba90d0646a1a61de1be7c9/p2397050.jpg?f=1000x1000&format=auto" alt="Mô tả hình ảnh'},
    { id:1,nameprd: "T-Shirt1",style:"T-Shirts", price:"300000",coler:"Blue",size:"XX_Large",star:"4",linkimg :'https://contents.mediadecathlon.com/p1813630/89b404e758d8237eb0ae87f8dd19ee1b/p1813630.jpg?f=650x650&format=auto'},
    {id:2, nameprd: "T-Shirt2",style:"T-Shirts", price:"200000",coler:"Black",size:"XX_Large",star:"2",linkimg :'https://contents.mediadecathlon.com/p1974208/b3fcbe6f09e603be4abb625d7f4a0dcb/p1974208.jpg?f=650x650&format=auto'},
    {id:3, nameprd: "T-Shirt3",style:"T-Shirts", price:"100000",star:"1",linkimg :'https://contents.mediadecathlon.com/p2157315/f7e6bac4b706a58cb6d47203ece9234c/p2157315.jpg?f=650x650&format=auto'},
    {id:4, nameprd: "Shorts",style:"Shorts", price:"40000",coler:"Green",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/3-57c3d787-5a1e-4a83-99b3-8f1ceb42ddf1.jpg?v=1633431165753'},
    {id:5, nameprd: "S RUNNING PANTS MS169",style:"Shorts", price:"750000",coler:"Red",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/100/376/467/products/2-774f74e4-48f7-4c1e-9047-3fed732819a4.jpg?v=1672798605717'},
    {id:6, nameprd: "RUN FASTER MS175 RUNNING PANTS",style:"Shorts", price:"250000",coler:"Grean",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/z3768895084431-94eb74308e3949f99db6ccdc912ffddf.jpg?v=xx'},
    {id:7, nameprd: "GAME PATTERN HOODIE",style:"Hoodie", price:"550000",coler:"Black",size:"XX_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6g9om7r3-1-4kbm-hinh_mat_truoc-0_08d7b14ec09d46059d10e38a7b7b8ea0_master.jpg'},
    { id:8,nameprd: "EMBROIDERY HOODIE # WHITE",style:"Hoodie", price:"590000",coler:"White",size:"X_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6_c3d0e96bf9a440f783a7859554085144_master.jpg'},
  
    {id:9, nameprd: "S RUNNING PANTS MS169 2",style:"Shorts", price:"750000",coler:"Red",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/100/376/467/products/2-774f74e4-48f7-4c1e-9047-3fed732819a4.jpg?v=1672798605717'},
    {id:10, nameprd: "RUN FASTER ",style:"Shorts", price:"250000",coler:"Grean",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/z3768895084431-94eb74308e3949f99db6ccdc912ffddf.jpg?v=xx'},
    {id:11, nameprd: "PATTERN HOODIE",style:"Hoodie", price:"550000",coler:"Black",size:"XX_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6g9om7r3-1-4kbm-hinh_mat_truoc-0_08d7b14ec09d46059d10e38a7b7b8ea0_master.jpg'},
    { id:12,nameprd: " HOODIE # WHITE",style:"Hoodie", price:"590000",coler:"White",size:"X_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6_c3d0e96bf9a440f783a7859554085144_master.jpg'},
  
    {id:13, nameprd: "T-Shirt",style:"T-Shirts", price:"500000",coler:"Green",size:"XX_Large",star:"5",linkimg :'https://product.hstatic.net/200000258387/product/6g9om7r3-1-4kbm-hinh_mat_truoc-0_08d7b14ec09d46059d10e38a7b7b8ea0_master.jpg'},
    { id:14,nameprd: "T-Shirt 5",style:"T-Shirts", price:"300000",coler:"Blue",size:"XX_Large",star:"4",linkimg :'https://contents.mediadecathlon.com/p1813630/89b404e758d8237eb0ae87f8dd19ee1b/p1813630.jpg?f=650x650&format=auto'},
    {id:15, nameprd: "T-Shirt6",style:"T-Shirts", price:"200000",coler:"Black",size:"XX_Large",star:"2",linkimg :'https://contents.mediadecathlon.com/p1974208/b3fcbe6f09e603be4abb625d7f4a0dcb/p1974208.jpg?f=650x650&format=auto'},
    {id:16, nameprd: "T-Shirt 7 ",style:"T-Shirts", price:"100000",star:"1",linkimg :'https://contents.mediadecathlon.com/p2157315/f7e6bac4b706a58cb6d47203ece9234c/p2157315.jpg?f=650x650&format=auto'},
    {id:17, nameprd: "Shorts 1",style:"Shorts", price:"40000",coler:"Green",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/3-57c3d787-5a1e-4a83-99b3-8f1ceb42ddf1.jpg?v=1633431165753'},
  

    {id:18, nameprd: "T-Shirt 5",style:"T-Shirts", price:"500000",coler:"Green",size:"XX_Large",star:"5",linkimg :'https://contents.mediadecathlon.com/p2397050/d84f0dd61fba90d0646a1a61de1be7c9/p2397050.jpg?f=1000x1000&format=auto" alt="Mô tả hình ảnh'},
    { id:19,nameprd: "T-Shirt9",style:"T-Shirts", price:"300000",coler:"Blue",size:"XX_Large",star:"4",linkimg :'https://contents.mediadecathlon.com/p1813630/89b404e758d8237eb0ae87f8dd19ee1b/p1813630.jpg?f=650x650&format=auto'},
    {id:20, nameprd: "T-Shirt 20",style:"T-Shirts", price:"200000",coler:"Black",size:"XX_Large",star:"2",linkimg :'https://contents.mediadecathlon.com/p1974208/b3fcbe6f09e603be4abb625d7f4a0dcb/p1974208.jpg?f=650x650&format=auto'},
    {id:21, nameprd: "T-Shirt 30",style:"T-Shirts", price:"100000",star:"1",linkimg :'https://contents.mediadecathlon.com/p2157315/f7e6bac4b706a58cb6d47203ece9234c/p2157315.jpg?f=650x650&format=auto'},
    {id:22, nameprd: "Shorts",style:"Shorts", price:"40000",coler:"Green",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/3-57c3d787-5a1e-4a83-99b3-8f1ceb42ddf1.jpg?v=1633431165753'},
    {id:23, nameprd: "S RUNNING PANTS MS90",style:"Shorts", price:"750000",coler:"Red",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/100/376/467/products/2-774f74e4-48f7-4c1e-9047-3fed732819a4.jpg?v=1672798605717'},
    {id:24, nameprd: "RUN FASTER MS175 RUNNING PANTS",style:"Shorts", price:"250000",coler:"Grean",size:"XX_Large",star:"4",linkimg :'https://bizweb.dktcdn.net/thumb/1024x1024/100/376/467/products/z3768895084431-94eb74308e3949f99db6ccdc912ffddf.jpg?v=xx'},
    { id:25,nameprd: "EMBROIDERY HOODIE # WHITE",style:"Hoodie", price:"590000",coler:"White",size:"X_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6_c3d0e96bf9a440f783a7859554085144_master.jpg'},
  
    {id:26, nameprd: "GAME PATTERN HOODIE",style:"Hoodie", price:"550000",coler:"Black",size:"XX_Large",star:"4",linkimg :'https://product.hstatic.net/200000258387/product/6g9om7r3-1-4kbm-hinh_mat_truoc-0_08d7b14ec09d46059d10e38a7b7b8ea0_master.jpg'},
    







];
processProductList()
function processProductList() {
    // Xử lý dữ liệu trong productList1 sau khi đã lấy được
    for (var i = 0; i < productListlist.length; i++) {
        productList.push(productListlist[i]);
    }

    // Hiển thị dữ liệu
    displayProducts();
}

function displayProducts() {
    add(productList,9,0);

}
var luuvitritrang=0;
var maxpage=productList.length/9;

//thêm sản phẩm
 function add(product,length,begin) {
     luuvitritrang=begin/9;
    var fatherElement = document.querySelector(".listproduct-list.flex.flex-wrap");
    if(length<=productList.length) {
        for (var i = begin; i < length; i++) {
            var numberstars = "";

            for (var z = 0; z < parseInt(product[i].star); z++) {
                numberstars += '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="starin w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>';
            }

            const htmlCode = '<div class="listproduct-product mt-4 ml-5 h-400px w-300px" >' +
                '<div>' +
                '    <img class="h-70pt w-300pxx rounded-2xl"src="' + product[i].linkimg + '">' +
                '</div>' +
                '<div class="">' +
                '<p class="font-bold mt2">' + product[i].nameprd + '</p>' +
                '<ul class="star flex mt-2">' +
                '    <ul class=" flex">' + numberstars + ' </ul>' +
                '     <p class="ml-1 ">' + product[i].star + '.0</p>' +
                '   <p class=" text-gray-500">/5</p>' +
                ' </ul>   ' +
                ' <ul class="flex"><p class="price font-bold text-2xl mt-2">' +
                '   ' + product[i].price + '' +
                ' </p>' +
                '<li><a href="#"><svg onclick="themdohang('+product[i].id+')" class="mt-4 ml-8" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">\n' +
                '                                <path d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z" fill="black"/>\n' +
                '                              </svg></a></li>'+
                '  </ul>' +
                ' </div>' +
                ' </div>';

            var helloElement = document.createRange().createContextualFragment(htmlCode);
            fatherElement.appendChild(helloElement);
        }
    }
    else{
        return;
    }

 }
var showalltemp=0;
 //đưa hết sản phẩm
 function showall(){

      if(showalltemp==0){
          showalltemp=1;
          xoaphantu();
          add(productList,productList.length,0);
      }
      else{
          showalltemp=0;
          showall10()
      }
 }
 //đưa 9 sản phẩm
function showall10(){
    xoaphantu();
    add(productList,9,0);
}

// đưa danh sách page

function numberpage(head,final) {
    var fatherElement = document.querySelector(".number-page-list.flex");

    for (var i = head; i <final; i++) {
        const htmlCode ='<li onclick="nextpage('+i+')" id="id'+i+'" class="h-9 w-9  ml-1 hover:bg-gray-300 rounded-lg text-center py-1 t text-gray-400">'+i+'</li>';
        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
}
numberpage(0,7);

// hiện chọn thanh số trang
 function addcolor(x) {

     const elementId = 'id'+x.toString();
     const element = document.getElementById(elementId);
         element.classList.toggle('bg-gray-300');

}

addcolor(luuvitritrang);

// xóa thanh số
function xoanumberpage(){
    const numberList = document.querySelector(".number-page-list.flex");
    numberList.innerHTML = '';
}
// chuyen trang khi an so
function  nextpage(i){
        xoaphantu();
        add(productList,i*9+9,i*9);
        xoanumberpage()
    if(luuvitritrang<7) {
        numberpage(0, 7);
    }
    else{
        numberpage(7, 15);
    }
    addcolor(i);

}
//chuyen trang sau
function privatepage(){

    if(luuvitritrang>0) {
        xoaphantu();
        add(productList, (luuvitritrang - 1) * 9 + 9, (luuvitritrang - 1) * 9);
        xoanumberpage()
        if(luuvitritrang<7) {
            numberpage(0, 7);
        }
        else{
            numberpage(7, 15);
        }
        addcolor(luuvitritrang);
    }
    else{
        return
    }

}
// chuyển trang trước
function nextpageicon(){
        if(luuvitritrang<10) {
            xoaphantu();
            add(productList, (luuvitritrang + 1) * 9 + 9, (luuvitritrang + 1) * 9);
            xoanumberpage()
            if(luuvitritrang<7) {
                numberpage(0, 7);
            }
            else{
                numberpage(7, 15);
            }
            addcolor(luuvitritrang);
        }
        else{
            return
        }
}

//đưa text cuối trang
var listtext=[{text1:"COMPANY",text2:"About",text3:"Features",text4:"Works",text5:"Career" },
{text1:"HELP",text2:"Customer Support",text3:" Delivery Details",text4:"Terms & Conditions",text5:"Privacy Policy" },
{text1:"FAQ",text2:"Account",text3:",Manage Deliveries",text4:"Orders",text5:"Payments" },
{text1:"RRESOURCES",text2:"Free eBooks",text3:"Development Tutorial",text4:"How to - Blog",text5:"Youtobe Playlist" }]
document.addEventListener("DOMContentLoaded", function() {
    var fatherElement = document.querySelector(".textfinal.flex");

    for (var i = 0; i <listtext.length; i++) {

        const htmlCode ='<div class="ml-20">'+
        '<ul class="">'+
            '<li class=" text-2xl mt-2">'+listtext[i].text1+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text2+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text3+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text4+'</li>'+
            '<li class="text-lg mt-2">'+listtext[i].text5+'</li>'+

     '  </ul>'+
    '</div>';

        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
});
// đưa loại sản phẩm ở filter
    var listtypeproduct=[{l:"T-Shirts"},{l:"Shorts"},{l:"Shirts"},{l:"Hoodie"},{l:"Jeans"}];
document.addEventListener("DOMContentLoaded", function() {
    var fatherElement = document.querySelector(".CustomizeProducts-typeClothesmt-import");

    for (var i = 0; i <listtypeproduct.length; i++) {

        const htmlCode = '<ul class="flex">' +
        '<p class="w-20" onclick="importTypeProduct(\'' + listtypeproduct[i].l + '\') +applyfilter() ">' + listtypeproduct[i].l + '</p>' +
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-auto mr-2">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />' +
        '</svg>' +
        '</ul>';

        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
});
// đưa danh sách màu
var listcolor=[{l:"Green"},{l:"Red"},{l:"Yellow"},{l:"Orange"},{l:"Dark Blue"}
,{l:"Blue"},{l:"Purple"},{l:"Pink"},{l:"Black"},{l:"White"},{l:"Gray"}];
document.addEventListener("DOMContentLoaded", function() {
    var fatherElement = document.querySelector(".listcoler.flex.flex-wrap");

    for (var i = 0; i <listcolor.length; i++) {

        const htmlCode = '<li onclick="importTypeColer(\'' + listcolor[i].l + '\')+applyfilter()" class="bg-gray-300 rounded-full text-white flex items-center px-3 py-1 ml-4 mt-2 hover:bg-black">' + listcolor[i].l + '</li>';

        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
});
// đưa danh sách size
var listsize=[{l:"XX_Small"},{l:"X_Small"},{l:"Small"},{l:"Mediun"},{l:"Large"}
,{l:"X_Large"},{l:"XX_Large"},{l:"3X_Large"},{l:"4X_Large"}];
document.addEventListener("DOMContentLoaded", function() {
    var fatherElement = document.querySelector(".size.flex.flex-wrap");

    for (var i = 0; i <listsize.length; i++) {

        const htmlCode = '<li onclick="importSize(\'' + listsize[i].l + '\')+applyfilter()" class="bg-gray-300 rounded-full text-white flex items-center px-3 py-1 ml-4 mt-2 hover:bg-black">' + listsize[i].l + '</li>';
        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);
    }
})


// nhập giá trị price----------------
var slider1 = document.getElementById("mySlider");
var output1 = document.querySelector(".kq");

slider1.oninput = function() {
    output1.innerText = slider1.value;
};

var slider2 = document.getElementById("mySlider1");
var output2 = document.querySelector(".kq1.ml-auto.mr-5");

slider2.oninput = function() {
    output2.innerText =slider2.value;
};


function importTypeProduct(value) {
    inputselect(value);
    // Thực hiện xử lý khác với giá trị nhận được
}
function importTypeColer(value) {
    inputselect(value);
    // Thực hiện xử lý khác với giá trị nhận được
}
function importSize(value) {
    inputselect(value);
    // Thực hiện xử lý khác với giá trị nhận được
}
function inputselect(value){
    var fatherElement = document.querySelector(".Inputselect.flex.flex-wrap");



        const htmlCode =' <div onclick="deleteObject.call(this)+applyfilter()" class="ext-center bg-gray-300 ml-2 mt-2 rounded-lg flex">'+
                '<li class="textinput px-6">'+value+'</li>'+
                '<svg class="absolute h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">'+
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'+
                '</svg>'+
           ' </div> ';
        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);


}
function deleteObject() {
    this.parentNode.removeChild(this);
}
var listinput=[];
function getTextFromListItems() {
    const listItems = document.querySelectorAll('li.textinput.px-6');
    listItems.forEach((item) => {
      const text = item.textContent;
      listinput.push(text);

    });
  }

  //xoa product
    function xoaphantu(){
        var fatherElement = document.querySelector(".listproduct-list.flex.flex-wrap");
        var childElements = fatherElement.querySelectorAll(".listproduct-product.mt-4.ml-5.h-400px.w-300px");
    childElements.forEach(function(child) {
      child.remove();
    });}

//kiem tra gt co nam trong khoang
function check(value, min, max) {
    if (value >= min && value <= max) {
      return true;
    } else {
      return false;
    }
  }

// lấy giá trị sau gt sau $
function laygt(str) {
    return str;
  }

//so sanh gia co thoa man
function testprice(y){
    var kq1 = document.querySelector(".kq1.ml-auto.mr-5").innerText;
    var kq = document.querySelector(".kq").innerText;
    var x=check(parseInt(laygt(y)),laygt(kq),laygt(kq1));

        if(x==true){
            return true;
        }
        else{
            return false;
        }


}

// lọc-------------------------------------------------------------
function applyfilter() {
    var listaddfillter = [];
    getTextFromListItems();
    var tampstyle = [];
    // kiểm tra lựa chọn  style
    for (var i = 0; i < listinput.length; i++) {

        for (var j = 0; j < listtypeproduct.length; j++) {
            if(listinput[i] === listtypeproduct[j].l) {
          tampstyle.push(listinput[i]);
        }
      }
    }

    // ----------------------------
    var tampsize=[];

    // kiểm tra lựa chọn  size
    for (var i = 0; i < listinput.length; i++) {

        for (var j = 0; j < listsize.length; j++) {
          if (listinput[i] === listsize[j].l) {
            tampsize.push(listinput[i]);
          }
        }

    }
    //-------------------------
    var tampcoler=[];
    // kiểm tra lựa chọn  coler
    for (var i = 0; i < listinput.length; i++) {
        for (var j = 0; j <listcolor.length; j++) {
          if (listinput[i] === listcolor[j].l) {

            tampcoler.push(listinput[i]);
        }
      }
    }

    if (listinput == "") {
        for (var j = 0; j < productList.length; j++) {
            if (testprice(productList[j].price) == true) {
                listaddfillter.push(productList[j]);
            }
        }
    }
    else {
        for (var j = 0; j < productList.length; j++) {
            if (testprice(productList[j].price) == true) {

                var cohieustyle=false;
                var cohieucoler=false;
                var cohieusize=false;
                for (var i = 0; i < listinput.length; i++) {
                    for(var i1=0;i1<tampstyle.length;i1++){
                        if(productList[j].style==tampstyle[i1]){
                            var cohieustyle=true;

                        }
                    }

                }
                for (var i = 0; i < listinput.length; i++) {
                    for(var i1=0;i1<tampcoler.length;i1++){
                        if(productList[j].coler==tampcoler[i1]){
                            var cohieucoler=true;

                        }
                    }

                }
                for (var i = 0; i < listinput.length; i++) {
                    for(var i1=0;i1<tampsize.length;i1++){
                        if(productList[j].size==tampsize[i1]){
                            var cohieusize=true;

                        }
                    }

                }

                var found = false; // Thêm biến found để kiểm tra xem phần tử đã tồn tại trong listaddfillter hay chưa

                for (var i = 0; i < listinput.length; i++) {
                    if (cohieucoler==true&&cohieustyle==true&&cohieusize==true) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else
                    if (cohieucoler==true&&cohieustyle==true&&tampsize.length==0) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else
                    if (cohieucoler==true&&tampstyle.length==0&&cohieusize==true) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else
                    if (tampcoler.length==0&&cohieustyle==true&&cohieusize==true) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else if (tampcoler.length==0&&cohieustyle==true&&tampsize.length==0) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else if (cohieucoler==true&&tampstyle.length==0&&tampsize.length==0) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }
                    else if (tampcoler.length==0&&tampstyle.length==0&&cohieusize==true) {
                        var paragraph = document.getElementById("myParagraph");
                        paragraph.innerHTML = "Search For Success";
                        found = true;
                        break; // Thoát khỏi vòng lặp ngay khi tìm thấy phần tử thỏa mãn
                    }



                }
                if (found) {
                    listaddfillter.push(productList[j]);
                }
            }
        }
    }

    if (listaddfillter.length == 0) {
        var paragraph = document.getElementById("myParagraph");
        paragraph.innerHTML = "Not found";
    } else {
        xoaphantu();
        add(listaddfillter,9,0);

    }

    listaddfillter = [];
    tampcoler= [];
    tampstyle= [];
    tampsize= [];
    listinput=[];
}
var rangeInput1 = document.getElementById("mySlider1");

rangeInput1.addEventListener("input", function() {
  // Gọi hàm khi người dùng kéo trên thẻ input
  applyfilter();
});
var rangeInput = document.getElementById("mySlider");

rangeInput.addEventListener("input", function() {
  // Gọi hàm khi người dùng kéo trên thẻ input
  applyfilter();
});



/// tìm kiếm --------------------------------------------------------------------

function searchprd() {
    var listsearch=[];
    var inputElement = document.querySelector(".search.bg-gray-200.rounded-full.w-950.h-10.px-10");
    var inputValue = inputElement.value;
    for (var i = 0; i < productList.length; i++) {
        const text = productList[i].nameprd.toString();
        const searchTerm = inputValue.toString();
        var x=test(text,searchTerm);
        if(x==true){
            listsearch.push(productList[i])
        }


    }
    if(listsearch.length!=0) {
        xoaphantu();
        add(listsearch, 9, 0)
        listsearch = [];
    }
    else{
        return
    }



}
function test(text,searchTerm){
    const lowercaseText = text.toLowerCase();  // Chuyển đổi chuỗi ban đầu thành chữ thường
    const lowercaseSearchTerm = searchTerm.toLowerCase();  // Chuyển đổi từ khóa tìm kiếm thành chữ thường

    const regex = new RegExp(lowercaseSearchTerm, "gi"); // "gi" để tìm kiếm không phân biệt chữ hoa chữ thường và tìm kiếm toàn bộ chuỗi
    const results = lowercaseText.match(regex);

    if (results) {
        return true;
    } else {
        return false;
    }
}
// phan sort-----------------------------------------------------------------------


var sort = document.querySelector(".sort");
sort.style.display = "none";
function fsort(){
    if(sort.style.display=="none") {
        sort.style.display = "block";
    }
    else{
        sort.style.display = "none";
    }

}
function sortpricehight(){

    productListtemp=productList;
    if(showalltemp==1){
        for (var i =0; i <productListtemp.length; i++) {
            for (var j = i + 1; j <productListtemp.length; j++) {
                if (productListtemp[i].price < productListtemp[j].price) {
                    tg = productListtemp[i];
                    productListtemp[i] = productListtemp[j]
                    productListtemp[j] = tg;
                }
            }
        }
        xoaphantu();
        add(productListtemp,productListtemp.length,0);
    }else {
        if (luuvitritrang > 0) {
            for (var i = (luuvitritrang + 1) * 9; i < (luuvitritrang + 1) * 9 + 9; i++) {
                for (var j = i + 1; j < (luuvitritrang + 1) * 9 + 9; j++) {
                    if (productListtemp[i].price < productListtemp[j].price) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, (luuvitritrang + 1) * 9 + 9, (luuvitritrang + 1) * 9);
        } else {
            for (var i = 0; i < 9; i++) {
                for (var j = i + 1; j < 9; j++) {
                    if (productListtemp[i].price < productListtemp[j].price) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, 9, 0);

        }
    }

}
function sortpricelow(){

    productListtemp=productList;
    if(showalltemp==1){
        for (var i =0; i <productListtemp.length; i++) {
            for (var j = i + 1; j <productListtemp.length; j++) {
                if (productListtemp[i].price > productListtemp[j].price) {
                    tg = productListtemp[i];
                    productListtemp[i] = productListtemp[j]
                    productListtemp[j] = tg;
                }
            }
        }
        xoaphantu();
        add(productListtemp,productListtemp.length,0);
    }else {
        if (luuvitritrang > 0) {
            for (var i = (luuvitritrang + 1) * 9; i < (luuvitritrang + 1) * 9 + 9; i++) {
                for (var j = i + 1; j < (luuvitritrang + 1) * 9 + 9; j++) {
                    if (productListtemp[i].price > productListtemp[j].price) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, (luuvitritrang + 1) * 9 + 9, (luuvitritrang + 1) * 9);
        } else {
            for (var i = 0; i < 9; i++) {
                for (var j = i + 1; j < 9; j++) {
                    if (productListtemp[i].price > productListtemp[j].price) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, 9, 0);

        }
    }
}
function compareFirstChar(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1[0] < str2[0]) {
        return -1;
    } else if (str1[0] > str2[0]) {
        return 1;
    } else {
        return 0;
    }

}
function sortaz(){

    productListtemp=productList;
    if(showalltemp==1){
        for (var i =0; i <productListtemp.length; i++) {
            for (var j = i + 1; j <productListtemp.length; j++) {
                if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==1) {
                    tg = productListtemp[i];
                    productListtemp[i] = productListtemp[j]
                    productListtemp[j] = tg;
                }
            }
        }
        xoaphantu();
        add(productListtemp,productListtemp.length,0);
    }else {
        if (luuvitritrang > 0) {
            for (var i = (luuvitritrang + 1) * 9; i < (luuvitritrang + 1) * 9 + 9; i++) {
                for (var j = i + 1; j < (luuvitritrang + 1) * 9 + 9; j++) {
                    if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==1) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, (luuvitritrang + 1) * 9 + 9, (luuvitritrang + 1) * 9);
        } else {
            for (var i = 0; i < 9; i++) {
                for (var j = i + 1; j < 9; j++) {
                    if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==1) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, 9, 0);

        }
    }
}

function sortza(){

    productListtemp=productList;
    if(showalltemp==1){
        for (var i =0; i <productListtemp.length; i++) {
            for (var j = i + 1; j <productListtemp.length; j++) {
                if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==-1) {
                    tg = productListtemp[i];
                    productListtemp[i] = productListtemp[j]
                    productListtemp[j] = tg;
                }
            }
        }
        xoaphantu();
        add(productListtemp,productListtemp.length,0);
    }else {
        if (luuvitritrang > 0) {
            for (var i = (luuvitritrang + 1) * 9; i < (luuvitritrang + 1) * 9 + 9; i++) {
                for (var j = i + 1; j < (luuvitritrang + 1) * 9 + 9; j++) {
                    if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==-1) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, (luuvitritrang + 1) * 9 + 9, (luuvitritrang + 1) * 9);
        } else {
            for (var i = 0; i < 9; i++) {
                for (var j = i + 1; j < 9; j++) {
                    if (compareFirstChar(productListtemp[i].nameprd,productListtemp[j].nameprd)==-1) {
                        tg = productListtemp[i];
                        productListtemp[i] = productListtemp[j]
                        productListtemp[j] = tg;
                    }
                }
            }
            xoaphantu();
            add(productListtemp, 9, 0);

        }
    }
}





var temp=[];
function themdohang(productId) {
    console.log(productId);
    for(var i=0;i<productList.length;i++){
        if(productId==productList[i].id){
            temp.push(productList[i])
        }
    }
    for(var i=0;i<temp.length;i++){
        console.log(temp[i])
    }
    addcart(temp)
}
function xoaphantuCAR(){
    var fatherElement = document.querySelector(".listproductCAR-list.flex.flex-wrap");
    var childElements = fatherElement.querySelectorAll(".listproduct-product.mt-4.ml-5.h-400px.w-300px");
    childElements.forEach(function(child) {
        child.remove();
    });}

function addcart(product) {
    xoaphantuCAR()
    var tempx=0;
        var fatherElement = document.querySelector(".listproductCAR-list.flex.flex-wrap");

            for (var i =0; i < product.length; i++) {
                tempx+=parseInt(product[i].price);

                const htmlCode = '<div class="listproduct-product mt-4 ml-5 h-400px w-300px" >' +
                    '<div>' +
                    '    <img class="h-70pt w-300pxx rounded-2xl"src="' + product[i].linkimg + '">' +
                    '</div>' +
                    '<div class="">' +
                    '<p class="font-bold mt2">' + product[i].nameprd + '</p>' +
                    '<ul class="star flex mt-2">' +
                    ' </ul>   ' +
                    ' <ul class="flex"><p class="price font-bold text-2xl mt-2">' +
                    '   ' + product[i].price + '' +
                    ' </p>' +

                    '  </ul>' +
                    '<p class=" mt-3 w-300pxx rounded-2xl text-white bg-black text-center " onclick="remuve('+product[i].id+')"> DELETE</p>'+
                    ' </div>' +
                    ' </div>';

                var helloElement = document.createRange().createContextualFragment(htmlCode);
                fatherElement.appendChild(helloElement);


            }
    var element = document.querySelector('li.total.ml-1');
    element.textContent = tempx;


}


function hideElement() {
    var element = document.querySelector('.body.flex.w-pt.h-pt');
    var element1 = document.querySelector('.cart');
    var z3=document.querySelector(".confirm.seencart.w-94pt.ml-20.mt-2.rounded-tl-2xl.rounded-bl-2xl.h-auto.py-5.bg-white ")

    if (element.style.display === 'none') {
        element.style.display = 'flex';
        element1.style.display = 'none';
        z3.style.display = 'none';
    } else {
        element.style.display = 'none';
        element1.style.display = 'block';
        z3.style.display = 'block';
    }
}
function remuve(x){
    for(var i=0;i<temp.length;i++){
        if(x==temp[i].id){
            temp.splice(i,1)
        }
    }
    addcart(temp)
}

function oncomfirm(){
    var element = document.querySelector('.confirm');
    element.style.display = 'block';
}
function validateInputs(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('nameInput').value;
    var phone = document.getElementById('phoneInput').value;
    var address = document.getElementById('addressInput').value;
    var tempxx=kiemtra(user,password);
    if(tempxx==0){
        alert('Vui lòng nhập đúng tài khoản và mật khẩu.');
        return;
    }
    if (name.trim() === '' || phone.trim() === '' || address.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    if (phone.trim().length !== 10) {
        alert('Số điện thoại phải có 10 chữ số.');
        return;
    }

    // Nếu thông tin hợp lệ, bạn có thể thực hiện các hành động khác ở đây
    // Ví dụ: Gửi dữ liệu đến máy chủ, xử lý đơn hàng, v.v.


    if (temp.length==0){
        alert("Don't have product");
        return;
    }
    alert('Xác nhận thành công!');
    donhang(temp);
    temp=[]
    addcart(temp);
    var element = document.querySelector('.confirm');
    element.style.display = 'none';
}
function donhang(temp) {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var nameInput = document.getElementById("nameInput").value;
    var phoneInput = document.getElementById("phoneInput").value;
    var addressInput = document.getElementById("addressInput").value;
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
    var day = currentDate.getDate();

    var hang = temp;

    var userInfo = {
        user: user,
        password: password,
        name: nameInput,
        phone: phoneInput,
        address: addressInput,
        Date:day+"-"+month+"-"+year,
        hanghoa: hang
    };

    // Lấy dữ liệu từ Local Storage
    var tempdonhang = localStorage.getItem("tempdonhang");

    // Kiểm tra xem tempdonhang có tồn tại trong Local Storage hay không
    if (tempdonhang) {
        // Nếu tồn tại, chuyển đổi tempdonhang từ chuỗi JSON thành mảng
        tempdonhang = JSON.parse(tempdonhang);
    } else {
        // Nếu không tồn tại, khởi tạo tempdonhang là một mảng rỗng
        tempdonhang = [];
    }

    // Thêm userInfo vào mảng tempdonhang
    tempdonhang.push(userInfo);

    // Chuyển đổi tempdonhang thành chuỗi JSON
    var jsonString = JSON.stringify(tempdonhang);

    // Lưu tempdonhang vào Local Storage
    localStorage.setItem("tempdonhang", jsonString);
}
function bathome(){
    window.location.href = "home.html";
}
function batlog(){
    window.location.href = "index.html";
}


function kiemtra(username, password) {
    var storedData = localStorage.getItem('registeredData');

    if (storedData) {
        var registeredData = JSON.parse(storedData);

        for (var i = 0; i < registeredData.length; i++) {
            var storedUsername = registeredData[i].username;
            var storedPassword = registeredData[i].password;

            // Kiểm tra người dùng và mật khẩu trùng khớp
            if (username === storedUsername && password === storedPassword) {
                return 1; // Trả về 1 nếu trùng khớp
            }
        }
    } else {
        console.log("No registered data found in LocalStorage.");
    }

    return 0; // Trả về 0 nếu không trùng khớp hoặc không tìm thấy dữ liệu
}
function getDataAndPrint() {
    xoaAllCart()

    var searchcart= document.getElementById('searchcart').value;


    // Lấy dữ liệu từ Local Storage
    var tempdonhang = localStorage.getItem("tempdonhang");

    // Kiểm tra xem tempdonhang có tồn tại trong Local Storage hay không
    if (tempdonhang) {
        // Chuyển đổi tempdonhang từ chuỗi JSON thành mảng
        var tempdonhangArray = JSON.parse(tempdonhang);

        // Lặp qua mỗi đơn hàng trong mảng tempdonhangArray
        for (var i = 0; i < tempdonhangArray.length; i++) {
            var donhangItem = tempdonhangArray[i];
            var gia=0;
            var hanghoa1 = donhangItem.hanghoa;
            for (var j = 0; j < hanghoa1.length; j++) {
                var hanghoaItem = hanghoa1[j];
                gia+=  parseInt(hanghoaItem.price);
            }
            if(searchcart==donhangItem.name) {
                themxemcart(donhangItem.name, donhangItem.phone, donhangItem.address, donhangItem.Date, gia, i)
            }
            else {
                alert(" name not found")
                return
            }

            // In ra thông tin hàng hóa
            var hanghoa = donhangItem.hanghoa;
            for (var j = 0; j < hanghoa.length; j++) {
                var hanghoaItem = hanghoa[j];
                var id = hanghoaItem.id;
                var nameprd = hanghoaItem.nameprd;
                var style = hanghoaItem.style;
                var price = hanghoaItem.price;
                var color = hanghoaItem.color;
                var size = hanghoaItem.size;

                themspcart(nameprd,price,i);
            }
        }
    }
}

function themxemcart(ten,sdt,dchi,ngay,tien,i){

    var fatherElement = document.querySelector(".dscart");



        const htmlCode =  '<div class="meo">'+
            '<ul class="flex mt-5 bg-gray-300 ml-20 w-94pt rounded-full ">'+
             '   <p class="ml-5 font-bold">Name customer :</p>'+
              '  <p>'+ten+'</p>'+
               ' <p class="ml-5 font-bold">Numberphone :</p>'+
                '<p>'+sdt+'</p>'+
               ' <p class="ml-5 font-bold">Address :</p>'+
                '<p>'+dchi+'</p>'+
            ' <p class="ml-5 font-bold">Time :</p>'+
            '<p>'+ngay+'</p>'+
                '<p class="ml-5 font-bold">Total :</p>'+
                '<p>'+tien+'</p>'+
                '<p>VND</p>'+
            '</ul>'+
            '<ul class="dshd'+i+' mt-5 flex flex-wrap ml-20">'+

            '</ul>'+
        '</div>';

        var helloElement = document.createRange().createContextualFragment(htmlCode);
        fatherElement.appendChild(helloElement);

}
function themspcart(name,gia,i){
    var x='.dshd'+i+'.mt-5.flex.flex-wrap.ml-20'
    var fatherElement = document.querySelector(x);

    const htmlCode =
        '<ul class="">'+
        '   <ul class="flex">'+
        '      <p class="ml-5 font-bold"> Name product :</p>'+
        '     <p>'+name+'</p>'+
        '   </ul>'+
        '        <ul class="flex">'+
        '           <P class="ml-5 font-bold"> Price :</P>'+
        '          <p>'+gia+'</p>'+
        '     </ul>'+
        '</ul>'

    var helloElement = document.createRange().createContextualFragment(htmlCode);
    fatherElement.appendChild(helloElement);

}

function xoaAllCart() {
    var fatherElement = document.querySelector(".dscart");
    var childElements = fatherElement.querySelectorAll(".meo");

    if (childElements.length === 0) {
        return; // Nếu không có phần tử "meo", trả về ngay
    }

    childElements.forEach(function(child) {
        child.remove();
    });
}