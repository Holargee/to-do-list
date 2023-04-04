setInterval(any,50);
function any(){
 var all = document.getElementById("rall");
 var act = document.getElementById("ract");
 var com = document.getElementById("rcom");
 var alli = document.getElementById("alli").value;
 var acti = document.getElementById("activ").value;
 var comi = document.getElementById("acti").value;
 var numb = document.getElementById("number").innerText;
 if(all.checked==true){document.getElementById("number").innerText=alli}
 if(act.checked==true){document.getElementById("number").innerText=acti}
 if(com.checked==true){document.getElementById("number").innerText=comi}
 var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var chk3 = document.getElementById("chk3");
var chk4 = document.getElementById("chk4");
var chk5 = document.getElementById("chk5");
var chk6 = document.getElementById("chk6");
var chk7 = document.getElementById("chk7");
var chk8 = document.getElementById("chk8");
var chk9 = document.getElementById("chk9");
var chk10 = document.getElementById("chk10");
 if(chk1.checked==true){
document.getElementById("che1").style.display="block"}else{
document.getElementById("che1").style.display="none";}
if(chk2.checked==true){
document.getElementById("che2").style.display="block"}else{
document.getElementById("che2").style.display="none";}
if(chk3.checked==true){
document.getElementById("che3").style.display="block"}else{
document.getElementById("che3").style.display="none";}
if(chk4.checked==true){
document.getElementById("che4").style.display="block"}else{
document.getElementById("che4").style.display="none";}
if(chk5.checked==true){
document.getElementById("che5").style.display="block"}else{
document.getElementById("che5").style.display="none";}
if(chk6.checked==true){
document.getElementById("che6").style.display="block"}else{
document.getElementById("che6").style.display="none";}
if(chk7.checked==true){
document.getElementById("che7").style.display="block"}else{
document.getElementById("che7").style.display="none";}
if(chk8.checked==true){
document.getElementById("che8").style.display="block"}else{
document.getElementById("che8").style.display="none";}
if(chk9.checked==true){
document.getElementById("che9").style.display="block"}else{
document.getElementById("che9").style.display="none";}
if(chk10.checked==true){
document.getElementById("che10").style.display="block"}else{
document.getElementById("che10").style.display="none";}
}
setInterval(function(){
var acti = document.getElementById("acti").value;
var nu = document.getElementById("nu").innerText;
document.getElementById("activ").value=nu-acti;
var activ = document.getElementById("activ").value;
document.getElementById("alli").value=activ- -acti;
var all=document.getElementById("all").style;
if(all.color=="blue"){alert("correct")}
},100);
function alla(){
    var txt1 = document.getElementById("txt1").innerText;
var txt2 = document.getElementById("txt2").innerText;
var txt3 = document.getElementById("txt3").innerText;
var txt4 = document.getElementById("txt4").innerText;
var txt5 = document.getElementById("txt5").innerText;
var txt6 = document.getElementById("txt6").innerText;
var txt7 = document.getElementById("txt7").innerText;
var txt8 = document.getElementById("txt8").innerText;
var txt9 = document.getElementById("txt9").innerText;
var txt10 = document.getElementById("txt10").innerText;
var ln1 = document.getElementById("ln1").style;
var ln2 = document.getElementById("ln2").style;
var ln3 = document.getElementById("ln3").style;
var ln4 = document.getElementById("ln4").style;
var ln5 = document.getElementById("ln5").style;
var ln6 = document.getElementById("ln6").style;
var ln7 = document.getElementById("ln7").style;
var ln8 = document.getElementById("ln8").style;
var ln9 = document.getElementById("ln9").style;
var ln10 = document.getElementById("ln10").style;
if(txt1.length>1){ln1.display="block"};
if(txt2.length>1){ln2.display="block"};
if(txt3.length>1){ln3.display="block"};
if(txt4.length>1){ln4.display="block"};
if(txt5.length>1){ln5.display="block"};
if(txt6.length>1){ln6.display="block"};
if(txt7.length>1){ln7.display="block"};
if(txt8.length>1){ln8.display="block"};
if(txt9.length>1){ln9.display="block"};
if(txt10.length>1){ln10.display="block"};
document.getElementById("all").style.color="#5582ff";
document.getElementById("act").style.color="white";
document.getElementById("comp").style.color="white";
}
function active(){
var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var chk3 = document.getElementById("chk3");
var chk4 = document.getElementById("chk4");
var chk5 = document.getElementById("chk5");
var chk6 = document.getElementById("chk6");
var chk7 = document.getElementById("chk7");
var chk8 = document.getElementById("chk8");
var chk9 = document.getElementById("chk9");
var chk10 = document.getElementById("chk10");
var txt1 = document.getElementById("txt1").innerText;
var txt2 = document.getElementById("txt2").innerText;
var txt3 = document.getElementById("txt3").innerText;
var txt4 = document.getElementById("txt4").innerText;
var txt5 = document.getElementById("txt5").innerText;
var txt6 = document.getElementById("txt6").innerText;
var txt7 = document.getElementById("txt7").innerText;
var txt8 = document.getElementById("txt8").innerText;
var txt9 = document.getElementById("txt9").innerText;
var txt10 = document.getElementById("txt10").innerText;
var ln1 = document.getElementById("ln1").style;
var ln2 = document.getElementById("ln2").style;
var ln3 = document.getElementById("ln3").style;
var ln4 = document.getElementById("ln4").style;
var ln5 = document.getElementById("ln5").style;
var ln6 = document.getElementById("ln6").style;
var ln7 = document.getElementById("ln7").style;
var ln8 = document.getElementById("ln8").style;
var ln9 = document.getElementById("ln9").style;
var ln10 = document.getElementById("ln10").style;
var nu = document.getElementById("nu").innerText;
document.getElementById("act").style.color="#5582ff";
document.getElementById("all").style.color="white";
document.getElementById("comp").style.color="white";
var number = document.getElementById("number").value;
if (chk1.checked==true || txt1.length<1){ln1.display="none";}
else if(chk1.checked==false)
{ln1.display="block"}
if (chk2.checked==true|| txt2.length<1){ln2.display="none";}
else{ln2.display="block"}
if (chk3.checked==true || txt3.length<1){ln3.display="none";}
else{ln3.display="block"}
if (chk4.checked==true || txt4.length<1){ln4.display="none";}
else{ln4.display="block"}
if (chk5.checked==true || txt5.length<1){ln5.display="none";}
else{ln5.display="block"}
if (chk6.checked==true || txt6.length<1 ){ln6.display="none";}
else{ln6.display="block"}
if (chk7.checked==true || txt7.length<1){ln7.display="none";}
else{ln7.display="block"}
if (chk8.checked==true || txt8.length<1){ln8.display="none";}
else{ln8.display="block"}
if (chk9.checked==true || txt9.length<1){ln9.display="none";}
else{ln9.display="block"}
if(chk10.checked==true || txt10.length<1){ln10.display="none";}
else{ln10.display="block"}
}

function comp(){
var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var chk3 = document.getElementById("chk3");
var chk4 = document.getElementById("chk4");
var chk5 = document.getElementById("chk5");
var chk6 = document.getElementById("chk6");
var chk7 = document.getElementById("chk7");
var chk8 = document.getElementById("chk8");
var chk9 = document.getElementById("chk9");
var chk10 = document.getElementById("chk10");
var ln1 = document.getElementById("ln1").style;
var ln2 = document.getElementById("ln2").style;
var ln3 = document.getElementById("ln3").style;
var ln4 = document.getElementById("ln4").style;
var ln5 = document.getElementById("ln5").style;
var ln6 = document.getElementById("ln6").style;
var ln7 = document.getElementById("ln7").style;
var ln8 = document.getElementById("ln8").style;
var ln9 = document.getElementById("ln9").style;
var ln10 = document.getElementById("ln10").style;
var txt1 = document.getElementById("txt1").innerText;
var txt2 = document.getElementById("txt2").innerText;
var txt3 = document.getElementById("txt3").innerText;
var txt4 = document.getElementById("txt4").innerText;
var txt5 = document.getElementById("txt5").innerText;
var txt6 = document.getElementById("txt6").innerText;
var txt7 = document.getElementById("txt7").innerText;
var txt8 = document.getElementById("txt8").innerText;
var txt9 = document.getElementById("txt9").innerText;
var txt10 = document.getElementById("txt10").innerText;
var nu = document.getElementById("nu").innerText;
document.getElementById("comp").style.color="#5582ff";
document.getElementById("all").style.color="white";
document.getElementById("act").style.color="white";

if (chk1.checked==false || txt1.length<1){ln1.display="none";}
else{ln1.display="block"}
if (chk2.checked==false || txt2.length<1){ln2.display="none";}
else{ln2.display="block"}
if (chk3.checked==false || txt3.length<1){ln3.display="none";}
else{ln3.display="block"}
if (chk4.checked==false || txt4.length<1){ln4.display="none";}
else{ln4.display="block"}
if (chk5.checked==false || txt5.length<1){ln5.display="none";}
else{ln5.display="block"}
if (chk6.checked==false || txt6.length<1){ln6.display="none";}
else{ln6.display="block"}
if (chk7.checked==false || txt7.length<1){ln7.display="none";}
else{ln7.display="block"}
if (chk8.checked==false || txt8.length<1){ln8.display="none";}
else{ln8.display="block"}
if (chk9.checked==false || txt9.length<1){ln9.display="none";}
else{ln9.display="block"}
if(chk10.checked==false || txt10.length<1){ln10.display="none";}
else{ln10.display="block";}
}

var ln;
var txt;

function chk1(){
//alert("chk1");
var chk1 = document.getElementById("chk1");
var txt1 = document.getElementById("txt1").innerText;
if (chk1.checked == true){
document.getElementById("txt1").innerHTML="<del>" + txt1 + "</del>";
document.getElementById("txt1").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che1").style.display="block";
}else{
document.getElementById("che1").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti- 1;
document.getElementById("acti").value=activ;
document.getElementById("txt1").innerText=txt1;
document.getElementById("txt1").style.opacity="1";}
}
function chk2(){
//alert("chk2");
var chk2 = document.getElementById("chk2");
var txt2 = document.getElementById("txt2").innerText;
if (chk2.checked == true){
document.getElementById("txt2").innerHTML="<del>" + txt2 + "</del>";
document.getElementById("txt2").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che2").style.display="block";
}else{
document.getElementById("che2").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti- 1;
document.getElementById("acti").value=activ;
document.getElementById("txt2").innerText=txt2;
document.getElementById("txt2").style.opacity="1";}
}
function chk3(){
//alert("chk3");
var chk3 = document.getElementById("chk3");
var txt3 = document.getElementById("txt3").innerText;
if (chk3.checked == true){
document.getElementById("txt3").innerHTML="<del>" + txt3 + "</del>";
document.getElementById("txt3").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che3").style.display="block";
}else{
document.getElementById("che3").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti- 1;
document.getElementById("acti").value=activ;
document.getElementById("txt3").innerText=txt3;
document.getElementById("txt3").style.opacity="1";}
}
function chk4(){
//alert("chk4");
var chk4 = document.getElementById("chk4");
var txt4 = document.getElementById("txt4").innerText;
if (chk4.checked == true){
document.getElementById("txt4").innerHTML="<del>" + txt4 + "</del>";
document.getElementById("txt4").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che4").style.display="block";
}else{
document.getElementById("che4").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt4").innerText=txt4;
document.getElementById("txt4").style.opacity="1";}
}
function chk5(){
//alert("chk5");
var chk5 = document.getElementById("chk5");
var txt5 = document.getElementById("txt5").innerText;
if (chk5.checked == true){
document.getElementById("txt5").innerHTML="<del>" + txt5 + "</del>";
document.getElementById("txt5").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che5").style.display="block";
}else{
document.getElementById("che5").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt5").innerText=txt5;
document.getElementById("txt5").style.opacity="1";}
}
function chk6(){
//alert("chk6");
var chk6 = document.getElementById("chk6");
var txt6 = document.getElementById("txt6").innerText;
if (chk6.checked == true){
document.getElementById("txt6").innerHTML="<del>" + txt6 + "</del>";
document.getElementById("txt6").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che6").style.display="block";
}else{
document.getElementById("che6").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti- 1;
document.getElementById("acti").value=activ;
document.getElementById("txt6").innerText=txt6;
document.getElementById("txt6").style.opacity="1";}
}
function chk7(){
//alert("chk7");
var chk7 = document.getElementById("chk7");
var txt7 = document.getElementById("txt7").innerText;
if (chk7.checked == true){
document.getElementById("txt7").innerHTML="<del>" + txt7 + "</del>";
document.getElementById("txt7").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che7").style.display="block";
}else{
document.getElementById("che7").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt7").innerText=txt7;
document.getElementById("txt7").style.opacity="1";}
}
function chk8(){
//alert("chk8");
var chk8 = document.getElementById("chk8");
var txt8 = document.getElementById("txt8").innerText;
if (chk8.checked == true){
document.getElementById("txt8").innerHTML="<del>" + txt8 + "</del>";
document.getElementById("txt8").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che8").style.display="block";
}else{
document.getElementById("che8").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt8").innerText=txt8;
document.getElementById("txt8").style.opacity="1";}
}
function chk9(){
//alert("chk9");
var chk9 = document.getElementById("chk9");
var txt9 = document.getElementById("txt9").innerText;
if (chk9.checked == true){
document.getElementById("txt9").innerHTML="<del>" + txt9 + "</del>";
document.getElementById("txt9").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che9").style.display="block";
}else{
document.getElementById("che9").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt9").innerText=txt9;
document.getElementById("txt9").style.opacity="1";}
}
function chk10(){
//alert("chk10");
var chk10 = document.getElementById("chk10");
var txt10 = document.getElementById("txt10").innerText;
if (chk10.checked == true){
document.getElementById("txt10").innerHTML="<del>" + txt10 + "</del>";
document.getElementById("txt10").style.opacity="0.5";
var acti = document.getElementById("acti").value;
 var activ = acti- - 1;
document.getElementById("acti").value=activ;
document.getElementById("che10").style.display="block";
}else{
document.getElementById("che10").style.display="none";
var acti = document.getElementById("acti").value;
 var activ = acti - 1;
document.getElementById("acti").value=activ;
document.getElementById("txt10").innerText=txt10;
document.getElementById("txt10").style.opacity="1";}
}
function add(){
var input = document.getElementById("input").value;
document.getElementById("input").value="";
var txt1 = document.getElementById("txt1").innerText;
var txt2 = document.getElementById("txt2").innerText;
var txt3 = document.getElementById("txt3").innerText;
var txt4 = document.getElementById("txt4").innerText;
var txt5 = document.getElementById("txt5").innerText;
var txt6 = document.getElementById("txt6").innerText;
var txt7 = document.getElementById("txt7").innerText;
var txt8 = document.getElementById("txt8").innerText;
var txt9 = document.getElementById("txt9").innerText;
var txt10 = document.getElementById("txt10").innerText;
if ([txt1 , txt2 , txt3 , txt4 , txt5 , txt6 , txt7 , txt8 , txt9 , txt10].includes(input)){alert("the task has already been add , pls add another one")}
else{
if (input.length < 1){alert("input space is empty")}
else{
var num = document.getElementById("num").value;
var nu = document.getElementById("nu").innerText;
var nub = nu- -1;
 var numb = num- -1;

ln = document.getElementById("ln" +numb);
txt = document.getElementById("txt" +numb);
txt.style.opacity="1";
document.getElementById("chk"+numb).checked=false;
if (ln.style.display=="block"){
  numb = num - -2;
ln = document.getElementById("ln" +numb);
txt = document.getElementById("txt" +numb);
  txt.innerText = input;
 ln.style.display="block";
}
else{
//}function add(){
 txt.innerText = input;
 ln.style.display="block";
 }
document.getElementById("num").value=numb;
document.getElementById("nu").innerText=nub;
}
}
}
function x1(){
document.getElementById("ln1").style.display="none";
document.getElementById("txt1").innerText="";
document.getElementById("txt1").style.opacity="1";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk1 = document.getElementById("chk1").checked;
if(chk1==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x2(){
document.getElementById("ln2").style.display="none";
document.getElementById("txt2").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk2 = document.getElementById("chk2").checked;
if(chk2==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x3(){
document.getElementById("ln3").style.display="none";
document.getElementById("txt3").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk3 = document.getElementById("chk3").checked;
if(chk3==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x4(){
document.getElementById("ln4").style.display="none";
document.getElementById("txt4").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk4 = document.getElementById("chk4").checked;
if(chk4==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x5(){
document.getElementById("ln5").style.display="none";
document.getElementById("txt5").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk5 = document.getElementById("chk5").checked;
if(chk5==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x6(){
document.getElementById("ln6").style.display="none";
document.getElementById("txt6").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk6 = document.getElementById("chk1").checked;
if(chk6==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x7(){
document.getElementById("ln7").style.display="none";
document.getElementById("txt7").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk7 = document.getElementById("chk1").checked;
if(chk7==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x8(){
document.getElementById("ln8").style.display="none";
document.getElementById("txt8").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk8 = document.getElementById("chk8").checked;
if(chk8==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x9(){
document.getElementById("ln9").style.display="none";
document.getElementById("txt9").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk9 = document.getElementById("chk9").checked;
if(chk9==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
function x10(){
document.getElementById("ln10").style.display="none";
document.getElementById("txt10").innerText="";
var num = document.getElementById("num").value;
 var numb = num - 1;
document.getElementById("num").value=numb ;
var nu = document.getElementById("nu").innerText;
 var nub = nu - 1;
document.getElementById("nu").innerText=nub;
var chk10 = document.getElementById("chk10").checked;
if(chk10==false){
var acti = document.getElementById("acti").value;
acti = acti - 1;
document.getElementById("acti").value=acti;}
}
