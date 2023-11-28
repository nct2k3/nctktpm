<script>
    function fetchData() {
    fetch('http://localhost:8082/users')
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('data');

            // Duyệt qua từng sản phẩm và trích xuất thông tin
            data.forEach(item => {
                const name = item.name;
                const price = item.price;
                const color = item.color;
                const linkimg = item.displayImage;
                const size = item.size;
                const star = item.star;
                const style = item.category.name;
            });
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
        })
}
</script>