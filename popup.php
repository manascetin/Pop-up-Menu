<!DOCTYPE html>
<html lang = "tr-TR-">
<head>
    <meta charset="UTF-8">
    <title>İndirim Ekleme Ekranı</title>
    <link rel="stylesheet" href="style.css">
<body>

<button onclick="showDiscountMenu()">İndirim Ekle</button>
<div id = "discountMenu" class="discount-popup">
    <div id="discountList">
        <!-- Eklenen İndirimler Burada Listelenecek -->
    </div>

    <!-- Yeni İndirim Ekleme ve Kaydetme Butonları -->
    <button onclick="addDiscount()">İndirim Ekle</button>
    <button onclick="saveDiscount()">Kaydet</button>

</div>

<script src="script.js"></script>

</body>
</head>
</html>