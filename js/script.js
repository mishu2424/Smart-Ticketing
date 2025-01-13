let selectedSeats=[];
document.querySelector("#seats").addEventListener("click", (e) => {
  if (e.target.closest(".seat")) {
    if(e.target.classList.contains("bg-green-400", "text-white")){
        e.target.classList.remove("bg-green-400", "text-white");
        let val=document.querySelector('#seat-amount').innerText;
        document.querySelector('#seat-amount').innerText=parseInt(val)+1;
        let seatSelected=document.querySelector('#selected-seats').innerText;
        let parsedSeatSelected=parseInt(seatSelected);
        parsedSeatSelected--;
        document.querySelector('#selected-seats').innerText=parsedSeatSelected;
        if(parsedSeatSelected===0){
            document.querySelector('#selected-seats').classList.add('hidden');
            document.querySelector('#selected-seats').classList.remove('text-green-400');
        }
        const el=document.querySelector(`#price-details #${e.target.innerText}`);
        document.querySelector('#price-details').removeChild(el);
        console.log(selectedSeats,selectedSeats.length)
        if(selectedSeats.length<=4){
            const btns=document.querySelectorAll('#seats .seat');
            btns.forEach((btn)=>{
                btn.removeAttribute('disabled');
                console.log(btn);
            })
        }
        let index=selectedSeats.indexOf(e.target.innerText);
        if (index > -1) {
            selectedSeats.splice(index, 1);
        }
        console.log(selectedSeats);
        let total=document.querySelector('#total').innerText;
        document.querySelector('#total').innerText=parseInt(total)-550;
        let grandTotal=document.querySelector('#grand-total').innerText;
        document.querySelector('#grand-total').innerText=parseInt(grandTotal)-550;
    }
    else{
        let seatSelected=document.querySelector('#selected-seats').innerText;
        let parsedSeatSelected=parseInt(seatSelected);
        selectedSeats.push(e.target.innerText);
        if(selectedSeats.length===4){
            const btns=document.querySelectorAll('#seats .seat');
            btns.forEach((btn)=>{
                if(selectedSeats.includes(btn.innerText)){
                    console.log(btn.innerText)
                }
                if(selectedSeats.includes(btn.innerText)===false){
                    btn.disabled='true';
                }
            })
        }
        e.target.classList.add("bg-green-400", "text-white");
        let val=document.querySelector('#seat-amount').innerText;
        document.querySelector('#seat-amount').innerText=parseInt(val)-1;
        parsedSeatSelected++;
        document.querySelector('#selected-seats').innerText=parsedSeatSelected;
        if(parsedSeatSelected>0){
            document.querySelector('#selected-seats').classList.remove('hidden');
            document.querySelector('#selected-seats').classList.add('text-green-400');
        }
        let actualPrice=document.createElement('div');
        actualPrice.id=`${e.target.innerText}`
        actualPrice.classList.add('actual-price', 'flex', 'items-center', 'justify-between', 'w-full');
        actualPrice.innerHTML=`
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
                    class="text-sm font-semibold text-left w-[60px] opacity-70"
                  >
                    550
                  </h3>
        `
        document.querySelector('#price-details').appendChild(actualPrice);
        let total=document.querySelector('#total').innerText;
        document.querySelector('#total').innerText=parseInt(total)+550;
        let grandTotal=document.querySelector('#grand-total').innerText;
        document.querySelector('#grand-total').innerText=parseInt(grandTotal)+550;
    }
  }
});
document.querySelector("#seats").addEventListener("mouseover",(e)=>{
    if (e.target.closest(".seat")) {
        e.target.classList.add("bg-purple-400", "text-white");
    }
})
document.querySelector("#seats").addEventListener("mouseout",(e)=>{
    if (e.target.closest(".seat")) {
        e.target.classList.remove("bg-purple-400", "text-white");
    }
})