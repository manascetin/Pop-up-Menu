var discountCount = 0;  // Eklenen İndirim Sayısı İçin Sayaç

function showDiscountMenu() {
    var discountMenu = document.getElementById("discountMenu");
    discountMenu.style.display = "block";
}

function addDiscount(){
    discountCount ++ ;
    
    var discountList = document.getElementById("discountList");
    
    var discountItem = document.createElement("div");
    discountItem.className = "discount-item";
    discountItem.id = "discountItem" + discountCount;

    discountItem.innerHTML = `
        <input type = "radio" name = "selectedDiscount" id = "selectedDiscount${discountCount}" onclick = "handleRadioClick(${discountCount})">
        <label>İndirim Adı</label>
        <input type = "text" id = "discountName${discountCount}" name = discountName[] placeholder = "İndirim Adı" class = "discount-input">
        
        <label>İndirim Türü</label>
        <select id = "discountType${discountCount} name = discountType[] class = "discount-input>
            <option value = "seasonal">Dönemsel İndirim</option>
            <option value = "general">Genel İndirim</option>
        </select>

        <label>İndirim Şekli</label>
        <select id = "discountMethod${discountCount} name = discountMethod[] class = "discount-input>
            <option value = "percentage">Yüzde</option>
            <option value = "amount">Miktar</option>
        </select>

        <label>İndirim</label>
        <input type = "text" id = "discountValue${discountCount} name = discountValue[]" placeholder = "İndirim" class = "discount-input">

        <button onclick = "removeDiscount(${discountCount})">Sil</button>
    `;
    
    discountList.appendChild(discountItem);
}

function handleRadioClick(clickedIndex){
    for(var i = 1 ; i <= discountCount ; i++){
        if(i !== clickedIndex) {
            document.getElementById(`selectedDiscount${i}`).checked = false; // Her radio düğmesine tek tek erişilir ve seçili durumları kaldırır.
        }
    }
}

function removeDiscount(id) {
    var discountItem = document.getElementById("discountItem" + id);
    discountItem.remove();  // Seçilen indirim setini listeden kaldırır.

    saveDiscount();  // Önceden kaydetmişsek listeden kaldırmak için.
}

function saveDiscount(){  // Seçili indirimleri seç.
    var selectedDiscounts = document.querySelectorAll('input[name = "selectedDiscount"]:checked');

    if (selectedDiscounts.length === 0) { // Hiçbir indirim seçili değilse uyarı ver ve işlemi sonlandır.
        alert("Lütfen Bir İndirim Seçiniz !");
        return;
    }
    
    var discountList = document.getElementById("discountList");
    var discountItem = discountList.getElementsByClassName("discount-item");

    for (var i = 0 ; i < discountItem.length ; i++){
        
        // Input alanlarını al
        var discountName = document.getElementById("discountName" + (i + 1)).value;
        var discountType = document.getElementById("discountType" + (i + 1)).value;
        var discountMethod = document.getElementById("discountMethod" + (i + 1)).value;
        var discountValue = document.getElementById("discountValue" + (i + 1)).value;

        // Yazdır
        console.log("İndirim Adı" , discountName);
        console.log("İndirim Türü" , discountType);
        console.log("İndirim Şekli" , discountMethod);
        console.log("İndirim Miktarı" , discountValue);

    }

}


