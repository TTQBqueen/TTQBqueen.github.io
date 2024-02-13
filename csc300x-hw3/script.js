

    function showItem1() {
        var x = document.getElementById("hidden1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem2() {
        var x = document.getElementById("hidden2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem3() {
        var x = document.getElementById("hidden3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      function showItem4() {
        var x = document.getElementById("hidden4");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem5() {
        var x = document.getElementById("hidden5");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem6() {
        var x = document.getElementById("hidden6");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem7() {
        var x = document.getElementById("hidden7");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem8() {
        var x = document.getElementById("hidden8");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function showItem9() {
        var x = document.getElementById("hidden9");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }


      // Shooping cart
      let iconCart = document.querySelector('.icon-cart');
      let closeCart = document.querySelector('.close')
      let body = document.querySelector('body');
      // let moreButton = document.querySelector('.listCart');

      iconCart.addEventListener('click', ()=> { //Passes in a class
        body. classList.toggle('showCart'); //if it doesnt have the classs name show cart it will add it
      })
      closeCart.addEventListener('click', ()=> { 
        body. classList.toggle('showCart'); 
      })

// add and subtracting the buttons
      function Kdogplus(){
  const numberElement = document.querySelector(".numOf");
  const number = parseInt(numberElement.innerText, 10) + 1;
  numberElement.innerText = number;
}
function Kdogminus(){
  const numberElement = document.querySelector(".numOf");
  const number = parseInt(numberElement.innerText, 10) - 1;
  numberElement.innerText = number;
}
function BSMplus(){
  const numberElement = document.querySelector(".BSMnumOf");
  const number = parseInt(numberElement.innerText, 10) + 1;
  numberElement.innerText = number;
}
function BSMminus(){
  const numberElement = document.querySelector(".BSMnumOf");
  const number = parseInt(numberElement.innerText, 10) - 1;
  numberElement.innerText = number;
}

function SGTplus(){
  const numberElement = document.querySelector(".SGTnumOf");
  const number = parseInt(numberElement.innerText, 10) + 1;
  numberElement.innerText = number;
}
function SGTminus(){
  const numberElement = document.querySelector(".SGTnumOf");
  const number = parseInt(numberElement.innerText, 10) - 1;
  numberElement.innerText = number;
}