let serial = 0;
let allTotal = 0;
function setValueTotalPrice(name, price, quantity, container, total, allTotal) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
<td> ${serial}</td>
<td> ${name}</td>
<td> ${price}</td>
<td> ${quantity}</td>
<td class='para-total' id='allTotal'> ${total}</td>

`;
  container.append(tr);
}
function setValueFromCard(name, price, quantity, container, value) {
  if (value === 1) {
    const total = price + quantity;
    allTotal = allTotal + total;
    setValueTotalPrice(name, price, quantity, container, total);
  }
  if (value == 2) {
    const minus = price - quantity;
    allTotal = allTotal + minus;
    setValueTotalPrice(name, price, quantity, container, minus);
  }
  if (value == 3) {
    const multiplication = price * quantity;
    allTotal = allTotal + multiplication;
    setValueTotalPrice(name, price, quantity, container, multiplication);
  }
  if (value == 4) {
    const div1 = price / quantity;
    const div = div1.toFixed(0);
    allTotal = allTotal + parseInt(div);
    setValueTotalPrice(name, price, quantity, container, div);
  }
  if (value == 5) {
    const div = price % quantity;
    allTotal = allTotal + div;
    setValueTotalPrice(name, price, quantity, container, div);
  }
}
function setNull(element1, element2) {
  element2.value = "";
  element1.value = "";
}
function disabledButton(element)
{
document.getElementById(element).setAttribute('disabled','true')
}
document
  .getElementById("first-card")
  .addEventListener("click", function (event) {
    serial++;
    const name = document.getElementById("first-name").innerText;
    const priceValue = document.getElementById("first-price").innerText;
    const price = parseInt(priceValue);
    const quantityValue = document.getElementById("first-quantity").innerText;
    const quantity = parseInt(quantityValue);
    const container = document.getElementById("table-container");
    setValueFromCard(name, price, quantity, container, 1);
    disabledButton('first-card')
  });
document
  .getElementById("second-card")
  .addEventListener("click", function (event) {
    serial++;
    const name = document.getElementById("second-name").innerText;
    const priceValue = document.getElementById("second-price").innerText;
    const price = parseInt(priceValue);
    const quantityValue = document.getElementById("second-quantity").innerText;
    const quantity = parseInt(quantityValue);
    const container = document.getElementById("table-container");
    setValueFromCard(name, price, quantity, container, 2);
    disabledButton('second-card')
  });
document
  .getElementById("third-card")
  .addEventListener("click", function (event) {
    serial++;
    const name = document.getElementById("third-name").innerText;
    const priceValue = document.getElementById("third-price").innerText;
    const price = parseInt(priceValue);
    const quantityValue = document.getElementById("third-quantity").innerText;
    const quantity = parseInt(quantityValue);
    const container = document.getElementById("table-container");
    setValueFromCard(name, price, quantity, container, 3);
    disabledButton('third-card')
  });
document
  .getElementById("fourth-card")
  .addEventListener("click", function (event) {
    serial++;
    const name = document.getElementById("fourth-name").innerText;
    const priceValue = document.getElementById("fourth-price").innerText;
    const price = parseInt(priceValue);
    const quantityValue = document.getElementById("fourth-quantity").innerText;
    const quantity = parseInt(quantityValue);
    const container = document.getElementById("table-container");
    setValueFromCard(name, price, quantity, container, 4);
    disabledButton('fourth-card')
  });
document
  .getElementById("fifth-card")
  .addEventListener("click", function (event) {
    serial++;
    const name = document.getElementById("fifth-name").innerText;
    const priceValueString = document.getElementById("fifth-price");
    const priceValue = document.getElementById("fifth-price").value;
    const price = parseInt(priceValue);
    const quantityValueString = document.getElementById("fifth-quantity");
    const quantityValue = quantityValueString.value;
    const quantity = parseInt(quantityValue);
    const container = document.getElementById("table-container");
    if (
      isNaN(priceValue) ||
      isNaN(quantityValue) ||
      priceValue == "" ||
      quantityValue == ""
    ) {
      alert("Enter number please");
    } else {
      setValueFromCard(name, price, quantity, container, 5);
      disabledButton('fifth-card')
    }
    setNull(priceValueString, quantityValueString);
  });
document.getElementById("all-total").addEventListener("click", function () {
  
  
  const container = document.getElementById("table-container");
  const tr = document.createElement("p");
  // tr.setAttribute('class','para-total')
  tr.innerText='Total-Tk :'+allTotal;
  tr.style.textAlign = 'center';
  container.append(tr);
 


});
