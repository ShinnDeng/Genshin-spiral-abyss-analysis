var x = document.getElementById("guide-bar");
element.addEventListener("click", isClick);
element.addEventListener("click", isSubmit);

function isClick(){
    alert("click");
}

function isSubmit(){
    alert("Submission not available");
}

function isTest(){
    document.getElementById("isTest").innerHTML="change";
}

function beta(){
    document.getElementById("beta").src = "./resource/character/Character_Raiden_Shogun_Thumb.png";
    console.log("click");
}

// function page1(){
//     document.getElementById("p1").textContent=(
//         <tr>
//             <td>
//                 <img class="avater2" id="1-1" src="../resource/character/Character_Diona_Thumb.png" />
//                 <img class="avater1" id="1-2" src="../resource/character/Character_Ayaka_Thumb.png" />
//                 <img class="avater1" id="1-3" src="../resource/character/Character_Mona_Thumb.png" />
//                 <img class="avater1" id="1-4" src="../resource/character/Character_Venti_Thumb.png" />
//             </td>
//             <td>+</td>
//             <td>
//                 <img class="avater2" src="../resource/character/Character_Bennett_Thumb.png" />
//                 <img class="avater2" src="../resource/character/Character_Xiangling_Thumb.png" />
//                 <img class="avater2" src="../resource/character/Character_Xingqiu_Thumb.png" />
//                 <img class="avater1" src="../resource/character/Character_Raiden_Shogun_Thumb.png" />
//             </td>
//         </tr>
//     );
// }

function page2(){
    // let _page1 = document.getElementById("p1").innerHTML;
    document.getElementById("1-1").src="../resource/character/Character_Bennett_Thumb.png";
    document.getElementById("1-2").src="../resource/character/Character_Xiangling_Thumb.png";
    document.getElementById("1-3").src="../resource/character/Character_Xingqiu_Thumb.png";
    document.getElementById("1-4").src="../resource/character/Character_Raiden_Shogun_Thumb.png";
    document.getElementById("r2").innerHTML="";
    document.getElementById("r3").innerHTML="";
    document.getElementById("r4").innerHTML="";
    document.getElementById("r5").innerHTML="";  
    // console.log(_page1);
}

// function page1(){
//     let holder= document.createElement('tbody');
//     holder.innerHTML = _page1;
//     console.log(holder);

// }
