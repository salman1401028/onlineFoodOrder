

//*************************MENU PAGE LOGICS: ***********************************/



let parentDiv = document.getElementById('parentDiv');
let foodsname = document.getElementById('foodName').innerText;
let reset = document.getElementById('reset');
let totalpricee = 0;

/*
function reset(){   
    reset.style.display='block';
    parentDiv.style.display='none';
}*/




function addtocart(foodname, pricee) {  //NEXT:-- viewcart()


    totalpricee = totalpricee + pricee;

    alert('item successfully added to cart.');
    parentDiv.style.display = 'none';



    //CREATING ELEMENT:-
    let firstdiv = document.createElement('div');
    let foodName = document.createElement('h5');
    let price = document.createElement('h5');
    let removeitem = document.createElement('button');
    //let resetcart= document.createElement('button');



    //CREATING TEXTNODE:-

    let foodNameText = document.createTextNode("* Item Name: " + foodname);
    let priceText = document.createTextNode(`__Price: ${pricee}`);
    let removeitemText = document.createTextNode("X");
    //let resetcartText= document.createTextNode('Reset_Cart');


    //WEAVING SECTION:-
    parentDiv.appendChild(firstdiv);
    firstdiv.appendChild(foodName);
    foodName.appendChild(foodNameText);
    firstdiv.appendChild(price);
    price.appendChild(priceText);
    firstdiv.appendChild(removeitem);
    removeitem.appendChild(removeitemText);
    //firstdiv.appendChild(resetcart);



    //STYLING:-
    parentDiv.classList = 'firstdiv';
    removeitem.classList = 'button1';



    removeitem.addEventListener('click', () => {//********************************************** */
        firstdiv.style.display = 'none';
        totalpricee = totalpricee - pricee;
        document.getElementById('totalprice').innerText = (`Total Price:-Rs. ${totalpricee}/-`);
    })
}


function viewcart() {  //NEXT:- proceedcheckout() or resetCart()
    let container1 = document.getElementById('container1');


    document.getElementById('cart').style.display = 'block';
    document.getElementById('totalprice').style.display = 'block';
    //console.log(totalpricee);
    document.getElementById('totalprice').innerText = (`Total Price:-Rs. ${totalpricee}/-`);
    container1.style.display = 'none';
    parentDiv.style.display = 'block';
    reset.style.display = 'block';
    document.getElementById('checkout').style.display='block';

}

//****************************************************** */
 function proceedcheckout(){  //NEXT:--paymentProcess()
     document.getElementById('parentDiv').style.display='none';
     document.getElementById('paymentDiv').style.display='block';

}


function resetCart() {  //NEXT:--openmenu() 

    document.getElementById('parentDiv').style.display = 'none';
    document.getElementById('emptyCartMessage').style.display = 'block';

}
//********************************************************** */

function openmenu(){//OPENS MENU AGAIN
   window.location= 'menu.html';
}


function paymentProcess(){//FINAL

    

    let gpay= document.getElementById('gpayid').value;
    let phonepe= document.getElementById('phonepeid').value;

    if(gpay.length==0 && phonepe.length==0)
    {
        document.getElementById('rejectmessage').style.display='block';
    }

    if(gpay.length!=0 && phonepe.length!=0)
    {
        document.getElementById('rejectmessage').style.display='block';
    }

    if((gpay.length > 0 && phonepe.length==0) || (phonepe.length > 0 && gpay.length==0))
    {
        //document.getElementById('paymentDiv').style.display='block';
        document.getElementById('processmessage').style.display='block';
        document.getElementById('rejectmessage').style.display='none';
        const myTimeout = setTimeout(orderProcessed, 5000);

        function orderProcessed() {
            document.getElementById('successmessage').style.display='block';
            document.getElementById('paymentDiv').style.display='none';
            document.getElementById('processmessage').style.display='none';
            document.getElementById('rejectmessage').style.display='none';
            
        }
    }

    /*else{
        document.getElementById('paymentDiv').style.display='none';
    document.getElementById('successmessage').style.display='block';
    document.getElementById('rejectmessage').style.display='block';
    }*/
    
}





//***************************************HOME PAGE******************************************* */






function signup() {
    document.getElementById('signupId').style.display = 'block';
    document.getElementById('decoration').style.display = 'none';
    document.getElementById('loginId').style.display = 'none';
}

function login() {
    document.getElementById('loginId').style.display = 'block';
    document.getElementById('decoration').style.display = 'none';
    document.getElementById('signupId').style.display = 'none';
    document.getElementById('signupsuccess').style.display = 'none';
    //document.getElementById('home').href = 'index.html';
}






//********************************SIGNUP-VALIDATION******************************* */




function signupValidation() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;


    if (firstName == '') {
        document.getElementById('validfirstname').style.display = 'none';
        document.getElementById('invalidfirstname').style.display = 'block';
        firstNamecheck = false;
    }
    else {
        document.getElementById('validfirstname').style.display = 'block';
        document.getElementById('invalidfirstname').style.display = 'none';
        firstNamecheck = true;
    }

    if (lastName == '') {
        document.getElementById('validlastname').style.display = 'none';
        document.getElementById('invalidlastname').style.display = 'block';
        lastNamecheck = false;
    }
    else {
        document.getElementById('validlastname').style.display = 'block';
        document.getElementById('invalidlastname').style.display = 'none';
        lastNamecheck = true;
    }

    if (email == '' || !email.includes('@') || email.startsWith('@') || email.slice(email.lastIndexOf('.'), email.lenght).length < 3) {
        document.getElementById('invalidemail').style.display = 'block';
        document.getElementById('validemail').style.display = 'none';
        emailcheck = false;
    }
    else {
        document.getElementById('invalidemail').style.display = 'none';
        document.getElementById('validemail').style.display = 'block';
        emailcheck = true;
    }

    if (password.length <= 6) {
        document.getElementById('invalidpassword').style.display = 'block';
        document.getElementById('validpassword').style.display = 'none';
        passwordcheck = false;
    }
    else {
        document.getElementById('invalidpassword').style.display = 'none';
        document.getElementById('validpassword').style.display = 'block';
        passwordcheck = true;
    }

    if (zip === '' || zip.length != 6) {
        invalidzip.style.display = 'block';
        validzip.style.display = 'none';
        zipcheck = false;
    }
    else {
        invalidzip.style.display = 'none';
        validzip.style.display = 'block';
        zipcheck = true;
    }

    if (firstNamecheck == true && lastNamecheck == true && emailcheck == true && passwordcheck == true && zipcheck == true) {
        document.getElementById('signupId').style.display = 'none';
        document.getElementById('signupsuccess').style.display = 'block';
    }
}



//*****************************************LOGIN AUTHENTICATION****************************** */

function loginauthentication() {
    //taking the below value from signup page.
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //taking the below value from login page.
    let Email = document.getElementById('emailauthentication').value;
    let Password = document.getElementById('passwordauthentication').value;

    if (Email == email && Password == password) {
        window.location = 'menu.html';

    }
    else {
        document.getElementById('message').style.display = 'block';
    }
}


//***************************************LOGGED IN PAGE (FOR LOGOUT PURPOSE:-) **************/

function logout() {
    window.location = 'index.html';
}














/*
let paymentDiv= document.getElementById('paymentDiv');


     //ELEMENT CREATION
     let paymentSelection= document.createElement('h3');
     let gpay= document.createElement('h4');
     let gpayField= document.createElement('input');
     let phonepe= document.createElement('h4');
     let phonepeField= document.createElement('input');


     //TEXT CREATION SECTION
     let paymentSelectionText= document.createTextNode('Please select your payment method:-');
     let gpayText= document.createTextNode('Enter your gpay UPI id:-');
     let phonepeText= document.createTextNode('Enter your Phonepe id:-');

     //WEAVING SECTION:-

    paymentDiv.appendChild(paymentSelection);
    paymentSelection.appendChild(paymentSelectionText);
    paymentDiv.appendChild(gpay);
    gpay.appendChild(gpayText);
    paymentDiv.appendChild(gpayField);
    paymentDiv.appendChild(phonepe)
    paymentDiv.appendChild(phonepe);
    phonepe.appendChild(phonepeText);
    paymentDiv.appendChild(phonepeField);

    //STYLING:-
    paymentDiv.classList='paymentdiv';
*/