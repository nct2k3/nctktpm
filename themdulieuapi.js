
function addData(newData) {
    fetch('http://localhost:8082/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Data added successfully:', data);
            // Gọi hàm xử lý sau khi dữ liệu đã được thêm vào
            // processAddedData(data);
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error('Error adding data:', error);
        });
}

function  adddd(){

    var meo = {
        "productId": 99,
        "name": "T-Shirt Gray",
        "createdBy": null,
        "createdDate": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "forGender": "",
        "slug": "",
        "price": 500000,
        "discount": 10,
        "displayImage": "https://contents.mediadecathlon.com/p2397050/d84f0dd61fba90d0646a1a61de1be7c9/p2397050.jpg?f=1000x1000&format=auto",
        "forGenderDisplay": "",
        "vietnamesePrice": "",
        "finalPrice": "",
        "color": "Gray",
        "size": "Small",
        "star": 4,
        "category": {
            "categoryId": 0,
            "name": "T-Shirts",
            "createdBy": "",
            "createdDate": ""
        }
    }
    addData(meo)
}