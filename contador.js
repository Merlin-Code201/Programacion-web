let contador=0;
const mensaje = "Buenos dia iue";
function contar(){
    let elem=document.getElementById("para0");
    contador+=1;
    console.log(contador);
    
    elem.textContent=contador;
    let elem2=document.getElementById("titulo");
    elem2.textContent=mensaje +" "+contador;
    console.log(elem2.textContent);
}
function descontar(){
    let elem=document.getElementById("para0");
    contador-=1;
    console.log(contador);
    elem.textContent=contador;
    let elem2= document.getElementById("titulo");
    elem2.textContent=mensaje + ""+contador;
    console.log(elem2.textContent);
}
function changeColor(newColor){
    var elem=document.getElementById("para");
    console.log(newColor);
    elem.style.backgroundColor=newColor;
}
function changeColor1(newColor,identificador){
    var elem=document.getElementById(identificador);
    console.log(newColor,identificador);
    elem.style.backgroundColor=newColor;
    elem.textContent="el color es " +newColor;
    if((newColor="blue")){
        elem.className="caja2";
        elem.style.color="black";

    }else{
        elem.className="caja1";
        elem.style.color="black";
    }
    console.log(elem.className);
}
function misparrafos(){
    const p0="LOREM IPSUM SOT AMET"
    var texto=document.getElementById("mparra");
    var p1=document.createElement("p");
    contador+=1;
    if(contador==1){
p1.className="caja1";
    }
    if(contador==2){
        p1.className="caja2";
            }
            if(contador==3){
                p1.className="caja3";
                    }
                    contador<3;
}