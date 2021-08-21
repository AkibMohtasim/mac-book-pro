function totalCostChange(){
  const baseMac = document.getElementById('mac-base').innerText;
  const ssdPriceText = document.getElementById('ssd-cost').innerText;
  const ramPriceText = document.getElementById('ram-cost').innerText;
  const deliveryPriceText = document.getElementById('delivery-cost').innerText;


  const ramPrice = parseInt(ramPriceText);
  const ssdPrice = parseInt(ssdPriceText);
  const deliveryPrice = parseInt(deliveryPriceText);
  const basePriceMac = parseInt(baseMac);
  const totalPrice = basePriceMac + ramPrice + ssdPrice+ deliveryPrice;
  const totalPriceLast = document.getElementById('total-price');
  totalPriceLast.innerText = totalPrice;
  document.getElementById('final-price').innerText = totalPrice;
};



//Base Price and Free Delivery Function

function basePrice(baseName, baseCost){
  document.getElementById(baseName).addEventListener('click', function(){
    const defaultPrice = document.getElementById(baseCost);
    defaultPrice.innerText = 0;
    totalCostChange();
  });
};




// Extra Components and Quick Delivery Function
function extraPrice(extraName, componentCost){
  document.getElementById(extraName).addEventListener('click', function(){
    const extraComponentPrice = document.getElementById(componentCost);

    if(extraName == 'ram-16'){
      extraComponentPrice.innerText = 180;
    }

    if(extraName == 'ssd-512'){
      extraComponentPrice.innerText = 100;
    }

    if(extraName == 'ssd-1Tb'){
      extraComponentPrice.innerText = 180;
    }

    if(extraName == 'delivery-quick'){
      extraComponentPrice.innerText = 20;
    }

    totalCostChange();
  });
};


//promo code function
document.getElementById('coupon-btn').addEventListener('click', function(){
  const couponField = document.getElementById('coupon-field').value;

  const totalBottomPrice = document.getElementById('total-price').innerText;

  const totalPriceNum = parseFloat(totalBottomPrice);

  if(couponField == 'stevekaku'){
    const finalPrice = totalPriceNum - totalPriceNum*0.2;
    document.getElementById('final-price').innerText = finalPrice;
  }
  document.getElementById('coupon-field').value = '';
});


basePrice('ssd-base', 'ssd-cost');
basePrice('ram-base', 'ram-cost');
basePrice('delivery-base', 'delivery-cost');

extraPrice('ssd-512','ssd-cost');
extraPrice('ssd-1Tb','ssd-cost');
extraPrice("ram-16", 'ram-cost');
extraPrice("delivery-quick", 'delivery-cost');

