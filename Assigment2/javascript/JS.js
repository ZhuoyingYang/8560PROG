function checkout() {
    let clientName = document.getElementById("clientName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let numberApple = document.getElementById("numberApple").value;
    let numberOranges = document.getElementById("numberOranges").value;
    let numberWatermelon = document.getElementById("numberWatermenlon").value;
    let numberLemon = document.getElementById("numberLemon").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let cardExpiryM = document.getElementById("cardExpiryM").value;
    let cardExpiryY = document.getElementById("cardExpiryY").value;
    clientName = clientName.trim();
    phoneNumber = phoneNumber.trim();
    numberApple = numberApple.trim();
    numberOranges = numberOranges.trim();
    numberWatermelon = numberWatermelon.trim();
    numberLemon = numberLemon.trim();
    cardNumber = cardNumber.trim();
    cardExpiryM = cardExpiryM.trim();
    cardExpiryY = cardExpiryY.trim();

    const priceApple = 4.99;
    const priceOranges = 6.77;
    const priceWatermelon = 23.66;
    const priceLemon = 2.33;
    const percentGst = 0.13;
    let errors = "";
    let phoneRegx = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; // 10 digits
    let cardRegx = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; //16 digits

    if (clientName == "") {
        errors += `Your name.<br>`;
    }
    if (!phoneRegx.test(phoneNumber)) {
        errors += `Correct phone number.<br>`;
    }
    if (!cardRegx.test(cardNumber)) {
        errors += `Correct credit card number.<br>`;
    }
    if (isNaN(cardExpiryM) || cardExpiryM < 0 || cardExpiryM > 12) {
        errors += `Correct expiry month.<br>`; //判断语句的条件     
    }
    if (isNaN(cardExpiryY) || cardExpiryY < 2022) {
        errors += `Correct expiry year.<br>`;
    }



    // inputpart 
    numberApple = parseInt(numberApple); //转换成int整数
    numberOranges = parseInt(numberOranges);
    numberWatermelon = parseInt(numberWatermelon);
    numberLemon = parseInt(numberLemon);
    if (isNaN(numberApple)) {
        numberApple = 0;
    }
    if (isNaN(numberOranges)) {
        numberOranges = 0;
    }
    if (isNaN(numberWatermelon)) {
        numberWatermelon = 0;
    }
    if (isNaN(numberLemon)) {
        numberLemon = 0;
    }
    if (numberApple == 0 && numberOranges == 0 && numberWatermelon == 0 && numberLemon == 0) {
        errors += `Please choose some goods<br>`;
    } else {
        var totalApple = priceApple * numberApple;
        var totalOranges = priceOranges * numberOranges;
        var totalWatermelon = priceWatermelon * numberWatermelon;
        var totalLemon = priceLemon * numberLemon;
        var subtotal = totalApple + totalOranges + totalWatermelon + totalLemon;
        if (subtotal < 10) {
            errors += `More than $10, celect more.<br>`;
        }
    }
    if (errors != "") {
        document.getElementById("errorShow").innerHTML = errors;
    } else {
        let tax = percentGst * subtotal;
        let totalPrice = subtotal + tax;
        let myOutput = `<h1>These will make you more health.</h1>`;
        myOutput += `
            <table>
                <tr>
                    <th colspan='2'>clientName</th>
                    <td colspan='2'>${clientName}</td>  
                </tr>
                <tr>  
                    <th colspan='2'>Phone</th>
                    <td colspan='2'>${phoneNumber}</td>   
                </tr>
            </table>`;
        myOutput += `
            <table>
                <tr>  
                    <th>Item</th>
                    <th>Quantity</th> 
                    <th>Unit Price</th>
                    <th>Total Price</th> 
                </tr>`;

        if (numberApple > 0) {
            myOutput += `
              <tr> 
                <td>Fairy Dust Apple</td>
                <td>${numberApple}</td> 
                <td>$${priceApple}</td>
                <td>$${totalApple}</td> 
              </tr>`;
        }
        if (numberOranges > 0) {
            myOutput += ` 
              <tr>
                <td>Wizard Oranges</td>
                <td>${numberOranges}</td> 
                <td>$${priceOranges}</td>
                <td>$${totalOranges}</td>
              </tr>`;
        }
        if (numberWatermelon > 0) {
            myOutput += `
              <tr> 
                <td>Flying Watermenlonticks</td>
                <td>${numberWatermelon}</td>
                <td>$${priceWatermelon}</td>
                <td>$${totalWatermelon}</td> 
              </tr>`;
        }
        if (numberLemon > 0) {
            myOutput += `
              <tr> 
                <td>Magic Candy Lemon</td>
                <td>${numberLemon}</td>
                <td>$${priceLemon}</td>
                <td>$${totalLemon}</td> 
              </tr>`;
        }

        myOutput += `
                 <tr>
                   <td colspan='3'>Sub Total</td> 
                   <td>$${subtotal}</td>
                 </tr>`;
        myOutput += `
                 <tr>
                 <td colspan='3'>GST</td> 
                 <td>$${tax.toFixed(2)}</td>
                 </tr>`;
        myOutput += ` 
                 <tr> 
                 <td colspan='3'>Total</td> 
                 <td>$${totalPrice.toFixed(2)}</td>
                 </tr>`;
        myOutput += `</table>`;
        document.getElementById("receipt").innerHTML = myOutput;
        // }
    }
}