function updateCarInfo() {
    var carType = document.getElementById("carType").value;
    var carImage = document.getElementById("carImage");
    var carPrice = document.getElementById("carPrice");

    switch (carType) {
        case "Toyota":
            PNG.src = "C:\ xampp\htdocs\Tuan 7\bai 2\PNG\car2.jpg";
            carPrice.innerText = "GIÁ: 35000 USD";
            break;
        case "KIA":
            carImage.src = "C:\ xampp\htdocs\Tuan 7\bai 2\PNG\car3.jpg";
            carPrice.innerText = "GIÁ: 30000 USD";
            break;
        case "Ford":
            carImage.src = "C:\ xampp\htdocs\Tuan 7\bai 2\PNG\car5.jpg";
            carPrice.innerText = "GIÁ: 32000 USD";
            break;
        case "Civic":
            carImage.src = "bai 2\PNG\car13.jpg";
            carPrice.innerText = "GIÁ: 28000 USD";
            break;
        case "Ferrari":
            carImage.src = "C:\ xampp\htdocs\Tuan 7\bai 2\PNG\car2.jpg";
            carPrice.innerText = "GIÁ: 150000 USD";
            break;
        case "Mercedes":
            carImage.src = "C:\ xampp\htdocs\Tuan 7\bai 2\PNG\car9.jpg";
            carPrice.innerText = "GIÁ: 80000 USD";
            break;
        default:
            carImage.src = "https://placehold.co/200x150";
            carPrice.innerText = "GIÁ: 0 USD";
    }
}