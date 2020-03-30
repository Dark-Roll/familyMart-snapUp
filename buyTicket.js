

const purchase = () =>{

    console.log("purchase");

    let game = document.querySelector('#game_page')

// 
    if(game.length < 1 )return setTimeout(function () { 
        console.log('SelectPayment is :', SelectPayment);
        purchase() 
    }, 10)
    

        game.childNodes[6].childNodes[1].childNodes[7].childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[3]
    



    
    let SelectPayment = document.querySelectorAll('#buy-ticket-payway')
    if (SelectPayment.length < 1) return setTimeout(function () { 
        console.log('SelectPayment is :', SelectPayment);
        purchase() 
    }, reSelectDOMTime)
    console.log(SelectPayment, "purchase not less than 1");

    let tickets = document.querySelector('#order-quantity')
    // 票卷數量
    tickets.selectedIndex= tickets.length-2
    // 付款方式
    SelectPayment[0].selectedIndex='1'
    let buySubmit = document.querySelector('#buy-ticket-btn')
    buySubmit.click()
    // 之後的 alert
    // 可按 enter 解決
}





let seat = document.getElementById('color_seat_data')
// 3, 4, 5
seat.nextElementSibling.childNodes[1].childNodes[4].onclick()



// page3


let sel = document.querySelectorAll('#price_Hu7RDq4T6eUqNWPJ9kjUxg0quixcoe30quixcoe3')
sel[1].selectedIndex = sel[1].length -1



// submit 
document.onkeydown = function (e) {  //對整個頁面文件監聽 
    if (e.keyCode == 13) {
        let ch = document.querySelectorAll('#chose_seat_btn_auto')
        ch[0].childNodes[0].onclick()        

    }
};
