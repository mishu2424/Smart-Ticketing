let selectedSeats = [];
let enable = 0;

document.querySelector("#seats").addEventListener("click", (e) => {
  if (e.target.closest(".seat")) {
    if (e.target.classList.contains("bg-green-400", "text-white")) {
      e.target.classList.remove("bg-green-400", "text-white");
      let val = document.querySelector("#seat-amount").innerText;
      document.querySelector("#seat-amount").innerText = parseInt(val) + 1;
      let seatSelected = document.querySelector("#selected-seats").innerText;
      let parsedSeatSelected = parseInt(seatSelected);
      parsedSeatSelected--;
      document.querySelector("#selected-seats").innerText = parsedSeatSelected;
      if (parsedSeatSelected === 0) {
        document.querySelector("#selected-seats").classList.add("hidden");
        document
          .querySelector("#selected-seats")
          .classList.remove("text-green-400");
      }
      const el = document.querySelector(
        `#price-details #${e.target.innerText}`
      );
      document.querySelector("#price-details").removeChild(el);
      console.log(selectedSeats, selectedSeats.length);
      if (selectedSeats.length <= 4) {
        const btns = document.querySelectorAll("#seats .seat");
        btns.forEach((btn) => {
          btn.removeAttribute("disabled");
          console.log(btn);
        });
        document.querySelector("#coupon-field").setAttribute("disabled", true);
        document
          .querySelector("#coupon-applied-btn")
          .setAttribute("disabled", true);
        document.querySelector("#grand-total").innerText =
          550 * selectedSeats.length;
        document.querySelector("#discountedPrice").innerText = 0;
        document.querySelector('#coupon-container').classList.remove('hidden');
        enable = 0;
      }
      let index = selectedSeats.indexOf(e.target.innerText);
      if (index > -1) {
        selectedSeats.splice(index, 1);
      }
      console.log(selectedSeats);
      let total = document.querySelector("#total").innerText;
      document.querySelector("#total").innerText = parseInt(total) - 550;
      let grandTotal = document.querySelector("#grand-total").innerText;
      document.querySelector("#grand-total").innerText =parseInt(grandTotal) - 550;
      if(selectedSeats.length===0){
        document.querySelector("#nxtBtn").setAttribute("disabled",true);
      }
    } else {
      let seatSelected = document.querySelector("#selected-seats").innerText;
      let parsedSeatSelected = parseInt(seatSelected);
      selectedSeats.push(e.target.innerText);
      if (selectedSeats.length === 4) {
        document.querySelector('#alert-section').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('#alert-section').classList.add('hidden','duration-500');
        }, 3000);
        const btns = document.querySelectorAll("#seats .seat");
        btns.forEach((btn) => {
          if (selectedSeats.includes(btn.innerText)) {
            console.log(btn.innerText);
          }
          if (selectedSeats.includes(btn.innerText) === false) {
            btn.disabled = "true";
          }
        });
        document.querySelector("#coupon-field").removeAttribute("disabled");
        if (
          document.querySelector("#coupon-field").value === "new15" ||
          document.querySelector("#coupon-field").value === "couple20"
        ) {
          document
            .querySelector("#coupon-applied-btn")
            .removeAttribute("disabled");
        } else {
          document
            .querySelector("#coupon-applied-btn")
            .setAttribute("disabled", true);
        }
        // document.querySelector('#coupon-applied-btn').removeAttribute('disabled');
        // document.querySelector("#nxtBtn").removeAttribute("disabled");
      }
      e.target.classList.add("bg-green-400", "text-white");
      let val = document.querySelector("#seat-amount").innerText;
      document.querySelector("#seat-amount").innerText = parseInt(val) - 1;
      parsedSeatSelected++;
      document.querySelector("#selected-seats").innerText = parsedSeatSelected;
      if (parsedSeatSelected > 0) {
        document.querySelector("#selected-seats").classList.remove("hidden");
        document
          .querySelector("#selected-seats")
          .classList.add("text-green-400");
      }
      let actualPrice = document.createElement("div");
      actualPrice.id = `${e.target.innerText}`;
      actualPrice.classList.add(
        "actual-price",
        "flex",
        "items-center",
        "justify-between",
        "w-full"
      );
      actualPrice.innerHTML = `
        <h3
                    class="text-sm font-semibold text-left w-[60px] opacity-70"
                  >
                    ${e.target.innerText}
                  </h3>
                  <h3
                    class="text-sm font-semibold text-left w-[60px] opacity-70"
                  >
                    Economy
                  </h3>
                  <h3
                    class="text-sm font-semibold text-right w-[60px] opacity-70"
                  >
                    550
                  </h3>
        `;
      document.querySelector("#price-details").appendChild(actualPrice);
      let total = document.querySelector("#total").innerText;
      document.querySelector("#total").innerText = parseInt(total) + 550;
      let grandTotal = document.querySelector("#grand-total").innerText;
      document.querySelector("#grand-total").innerText =parseInt(grandTotal) + 550;
      console.log(document.querySelector('#phone_number'));
      if(selectedSeats.length>0 && document.querySelector('#phone_number').value.trim() !== ''){
        document.querySelector("#nxtBtn").removeAttribute("disabled");
        }
    }
  }
});
document.querySelector("#seats").addEventListener("mouseover", (e) => {
  if (e.target.closest(".seat")) {
    e.target.classList.add("bg-purple-400", "text-white");
  }
});
document.querySelector("#seats").addEventListener("mouseout", (e) => {
  if (e.target.closest(".seat")) {
    e.target.classList.remove("bg-purple-400", "text-white");
  }
});

document.querySelector("#coupon-field").addEventListener("keyup", (e) => {
  if (
    e.target.value.toLowerCase() === "new15" ||
    e.target.value.toLowerCase() === "couple20"
  ) {
    document.querySelector("#coupon-applied-btn").removeAttribute("disabled");
  } else {
    document
      .querySelector("#coupon-applied-btn")
      .setAttribute("disabled", true);
  }
});
document.querySelector("#coupon-applied-btn").addEventListener("click", () => {
  if (enable === 0) {
    if (document.querySelector("#coupon-field").value == "new15") {
      let grandTotal = document.querySelector("#grand-total").innerText;
      let discount = parseInt(grandTotal) - 0.15 * parseInt(grandTotal);
      document.querySelector("#grand-total").innerText = discount;
      document.querySelector("#coupon-field").value = "";
      document.querySelector("#discountedPrice").innerText = `-15% OFF(${0.15 * parseInt(grandTotal)})`;
      document.querySelector('#coupon-container').classList.add('hidden');
      enable = 1;
    } else if (document.querySelector("#coupon-field").value == "couple20") {
      let grandTotal = document.querySelector("#grand-total").innerText;
      let discount = parseInt(grandTotal) - 0.2 * parseInt(grandTotal);
      document.querySelector("#grand-total").innerText = discount;
      document.querySelector("#coupon-field").value = "";
      document.querySelector("#discountedPrice").innerText = `-20% OFF(${0.2 * parseInt(grandTotal)})`;
      document.querySelector('#coupon-container').classList.add('hidden');
      enable = 1;
    }
    else{
        alert('wrong coupon');
    }
  }
  if (enable === 1) {
    document
      .querySelector("#coupon-applied-btn")
      .setAttribute("disabled", true);
  }
});

document.querySelector('#phone_number').addEventListener('input',()=>{
    if(selectedSeats.length>0 && document.querySelector('#phone_number').value.trim() !== ''){
        document.querySelector("#nxtBtn").removeAttribute("disabled");
    }
    else{
        document.querySelector("#nxtBtn").setAttribute("disabled",true);
    }
})

document.querySelector("#nxtBtn").addEventListener("click",()=>{
    document.querySelector('#header').classList.add('hidden');
    document.querySelector('#main').classList.add('hidden');
    document.querySelector('#footer').classList.add('hidden');
    document.querySelector('#confirmation-page').classList.remove('hidden');
})
document.querySelector("#continue-btn").addEventListener("click",()=>{
    setTimeout(() => {
        document.querySelector('#header').classList.remove('hidden');
        document.querySelector('#main').classList.remove('hidden');
        document.querySelector('#footer').classList.remove('hidden');
    }, 3000);
    document.querySelector('#confirmation-page').classList.add('hidden');
    window.location="index.html";
})




function copyToClipboard(element) {
    // Get the coupon code from the data attribute
    const couponCode = element.getAttribute('data-copy-to-clipboard-target');
    
    // Use the Clipboard API to copy the coupon code
    navigator.clipboard.writeText(couponCode).then(function() {
      // Optionally, you can provide feedback to the user
      document.querySelector('#copied-container').classList.remove('hidden');
      setTimeout(() => {
        document.querySelector('#copied-container').classList.add('hidden')
      }, 1000);
    }).catch(function(err) {
      console.error('Error copying to clipboard: ', err);
    });
  }
function copyToClipboard2(element) {
    // Get the coupon code from the data attribute
    const couponCode = element.getAttribute('data-copy-to-clipboard-target');
    
    // Use the Clipboard API to copy the coupon code
    navigator.clipboard.writeText(couponCode).then(function() {
      // Optionally, you can provide feedback to the user
      document.querySelector('#copied-container2').classList.remove('hidden');
      setTimeout(() => {
        document.querySelector('#copied-container2').classList.add('hidden')
      }, 1000);
    }).catch(function(err) {
      console.error('Error copying to clipboard: ', err);
    });
  }







// if(selectedSeats.length===4){
//     document.querySelector('#nxtBtn').removeAttribute('disabled');
//     console.log(selectedSeats.length);
//     console.log(document.querySelector('#nxtBtn'))
// }
// document.querySelector('#nxtBtn').addEventListener("click",()=>{
//     console.log('hello');
// })









// const inputField=document.getElementById('deleteField');
// inputField.addEventListener('keyup',(e)=>{
//     const deleteBtn=document.getElementById('deleteBtn');
//     if(e.target.value==='delete'){
//         deleteBtn.removeAttribute('disabled');
//         deleteBtn.addEventListener('click',()=>{
//             document.getElementById('heading').style.display='none';
//             inputField.value="";
//         })
//     }
//     else{
//         deleteBtn.setAttribute('disabled',true);
//     }
// })
