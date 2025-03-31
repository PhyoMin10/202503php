$(function () {

    const productList = [
        {id: 1, name: "BYD Atto 3", price: 988, img: "byd_atto3_electric.jpg"},
        {id: 2, name: "BYD Sealion 7", price: 1150, img: "byd_sealion7_electric.jpg"},
        {id: 3, name: "Tesla Model 3", price: 1099, img: "tesla_model3_electric.jpg"},
        {id: 4, name: "Tesla Model Y", price: 1200, img: "tesla_modely_electric.jpg"},
        {id: 5, name: "BYD M6", price: 970, img: "byd_m6_electric.jpg"}
    ];

    // Render products
    $.each(productList, function (index, item) {
        const html = `
        <div class="product-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="info">
                <h3>${item.name}</h3>
                <div class="price">SGD ${item.price}</div>
                <button class="add" data-id="${item.id}">Add to Cart</button>
            </div>
        </div>
        `;
        $("#products-container").append(html);
    });

    // Add to cart
    $("#products-container").on("click", ".add", function () {
        const id = $(this).data("id");
        const item = productList.find(p => p.id === id);
        const row = $("#cart-body tr[data-id='" + id + "']");

        if (row.length > 0) {
            let qty = parseInt(row.find(".qty").text()) + 1;
            row.find(".qty").text(qty);
            row.find(".subtotal").text((qty * item.price).toFixed(2));
        } else {
            const html = `
            <tr data-id="${item.id}">
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button class="dec">-</button>
                    <span class="qty">1</span>
                    <button class="inc">+</button>
                </td>
                <td class="subtotal">${item.price.toFixed(2)}</td>
                <td><button class="remove">Remove</button></td>
            </tr>
            `;
            $("#cart-body").append(html);
        }

        updateTotal();
    });

    // Quantity controls
    $("#cart-body").on("click", ".inc, .dec", function () {
        const row = $(this).closest("tr");
        const id = row.data("id");
        const item = productList.find(p => p.id === id);
        let qty = parseInt(row.find(".qty").text());

        if ($(this).hasClass("inc")) {
            qty++;
        } else {
            if (qty > 1) qty--;
        }

        row.find(".qty").text(qty);
        row.find(".subtotal").text((qty * item.price).toFixed(2));
        updateTotal();
    });

    // Remove from cart
    $("#cart-body").on("click", ".remove", function () {
        $(this).closest("tr").remove();
        updateTotal();
    });

    // Update total
    function updateTotal() {
        let total = 0;
        $("#cart-body .subtotal").each(function () {
            total += parseFloat($(this).text());
        });
        $("#total-amount").text(total.toFixed(2));
    }

});
