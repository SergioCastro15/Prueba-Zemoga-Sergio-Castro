const like_b=document.getElementById('likeb');
const dislike_b=document.getElementById('dislikeb');
const voto=document.getElementById('vote');
const cb=document.getElementById('cambio_boton');

// event listener 
like_b.addEventListener('click',()=>{
    like(like_b,dislike_b);
});
dislike_b.addEventListener('click',()=>{
    dislike(dislike_b,like_b);
});
voto.addEventListener('click',botar);
cb.addEventListener('click',()=>{
    cambio_botones('cambio2','cambio','gracias');
});

//let html='';
// desaparecer boton
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('cambio2').style.display='none';
    //document.getElementById('resultado').style.display='none';
    ObtenerLocal('likesK','dislikesK','likes','dislikes','resultado');
});

// funciones
let likes=0,
    dislikes=0;

function votoActual(numero1,numero2,id){
    let html;
    if(numero1>numero2){
        html=`
        <button  class=" mx-2 text-white boton"style="background:#2FBDB8;">
            <i class=" icono fas fa-thumbs-up clr"></i>
        </button> 
            
        `;
        document.getElementById(`${id}`).innerHTML=html;

    }else{
        html=`
            <button class="mx-2 text-white" style="background:#FEB331;">
                <i class=" icono fas fa-thumbs-down clr"></i>
            </button>
        `;
        document.getElementById(`${id}`).innerHTML=html;

    }
    if(numero1 === numero2){
        html='';
        document.getElementById(`${id}`).innerHTML=html;
    }
}
function like(vari,vari2){
    // agregar borde
    vari.classList.add('border1');
    vari2.classList.remove('border1');
    console.log(like_b);
    //calcular();
}

function dislike(vari,vari2){
    // agregar borde
    vari.classList.add('border1');
    vari2.classList.remove('border1');

    //console.log(dislikes);
    //calcular();
}

function botar(){
    //evitar que se generen mas conteos
    if(like_b.classList.contains('border1')){
        likes++;
          //quitar la clase
        console.log(likes);
        like_b.classList.remove('border1'); 
        //alert('Gracias por botar');
        document.getElementById('cambio2').style.display='block';
        document.getElementById('cambio').style.display='none';
        document.getElementById('gracias').innerHTML="thanks for voting"
        calcular();
    }

    if(dislike_b.classList.contains('border1')){
        dislikes++;
          //quitar la clase
        console.log(dislikes);
        dislike_b.classList.remove('border1'); 
        //alert('Gracias por botar');
        document.getElementById('cambio2').style.display='block';
        document.getElementById('cambio').style.display='none';
        document.getElementById('gracias').innerHTML="thanks for voting"
        calcular();
    }
    //cambio();
}

function cambio_botones(id,id2,id3){
    document.getElementById(`${id}`).style.display='none';
    document.getElementById(`${id2}`).style.display='block';
    document.getElementById(`${id3}`).innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto illo quo dolores quam possimus, tempora ipsa. Voluptatum qui necessitatibus quasi praesentium."
}

function calcular(){
    let total =likes+dislikes;

    let porcentajeL=(likes/total)*100;
    let porcentajeD=(dislikes/total)*100;
    GuardarLocal('likesK','dislikesK',porcentajeL.toFixed(2),porcentajeD.toFixed(2));
    // convertir a string para agregarlo al css
    document.getElementById('likes').style.width=porcentajeL.toString()+"%";

    document.getElementById('dislikes').style.width=porcentajeD.toString()+"%";

    let sporcentajeL=porcentajeL.toFixed(2).toString()+"%";
    let sporcentajeD=porcentajeD.toFixed(2).toString()+"%";

    document.getElementById('likes').innerText=sporcentajeL;
    document.getElementById('dislikes').innerText=sporcentajeD;
    //document.getElementById('porcentajeL').innerHTML="hola";

    // calcular voto actual
    votoActual(porcentajeL,porcentajeD,'resultado');
}

function GuardarLocal(nombre1,nombre2,p_likes,p_dislikes){
    localStorage.setItem(nombre1,p_likes);
    localStorage.setItem(nombre2,p_dislikes);
}

function ObtenerLocal(nom1,nom2,id1,id2,id3){
    let porcentajenuevo,porcentajenuevo2;
    porcentajenuevo=localStorage.getItem(`${nom1}`);
    porcentajenuevo2=localStorage.getItem(`${nom2}`);

    document.getElementById(`${id1}`).style.width=porcentajenuevo.toString()+"%";
    document.getElementById(`${id2}`).style.width=porcentajenuevo2.toString()+"%";

    document.getElementById(`${id1}`).innerText=porcentajenuevo.toString()+"%";
    document.getElementById(`${id2}`).innerText=porcentajenuevo2.toString()+"%";

    console.log(porcentajenuevo);

    /// BOTON
    votoActual(porcentajenuevo,porcentajenuevo2,`${id3}`);

}

/////////////////////////////////////////// MARK//////////////////////////////////

const like_b2=document.getElementById('likeb2');
const dislike_b2=document.getElementById('dislikeb2');
const voto2=document.getElementById('vote2');
const cb2=document.getElementById('cambio_boton2');

// event listener 
like_b2.addEventListener('click',()=>{
    like(like_b2,dislike_b2);
});
dislike_b2.addEventListener('click',()=>{
    dislike(dislike_b2,like_b2);
});

voto2.addEventListener('click',botar2);
cb2.addEventListener('click',()=>{
    cambio_botones('cambio4','cambio3','gracias2');
});
// desaparecer boton
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('cambio4').style.display='none';
    ObtenerLocal('likesM','dislikesM','likes2','dislikes2','resultado2');
});

// funciones
let likes2=0,
    dislikes2=0;
function botar2(){
    //evitar que se generen mas conteos
    if(like_b2.classList.contains('border1')){
        likes2++;
          //quitar la clase
        console.log(likes2);
        like_b2.classList.remove('border1'); 
        document.getElementById('cambio4').style.display='block';
        document.getElementById('cambio3').style.display='none';
        document.getElementById('gracias2').innerHTML="thanks for voting"
        calcular2();
        //alert('Gracias por botar');
    }

    if(dislike_b2.classList.contains('border1')){
        dislikes2++;
          //quitar la clase
        console.log(dislikes);
        dislike_b2.classList.remove('border1');
        document.getElementById('cambio4').style.display='block';
        document.getElementById('cambio3').style.display='none';
        document.getElementById('gracias2').innerHTML="thanks for voting"
        calcular2(); 
        //alert('Gracias por botar');
    }
    //calcular2()
}
function calcular2(){
    let total =likes2+dislikes2;

    let porcentajeL=(likes2/total)*100;
    let porcentajeD=(dislikes2/total)*100;
    
    // convertir a string para agregarlo al css
    document.getElementById('likes2').style.width=porcentajeL.toString()+"%";

    document.getElementById('dislikes2').style.width=porcentajeD.toString()+"%";

    GuardarLocal('likesM','dislikesM',porcentajeL.toFixed(2),porcentajeD.toFixed(2));
    let sporcentajeL=porcentajeL.toFixed(2).toString()+"%";
    let sporcentajeD=porcentajeD.toFixed(2).toString()+"%";


    document.getElementById('likes2').innerText=sporcentajeL;
    document.getElementById('dislikes2').innerText=sporcentajeD;
    //document.getElementById('porcentajeL').innerHTML="hola";
    votoActual(porcentajeL,porcentajeD,'resultado2');
}
///////////////////////////////////////// cristina////////////////////////////////////////////////////////

const like_b3=document.getElementById('likeb3');
const dislike_b3=document.getElementById('dislikeb3');
const voto3=document.getElementById('vote3');
const cb3=document.getElementById('cambio_boton3');


// event listener 
like_b3.addEventListener('click',()=>{
    like(like_b3,dislike_b3);
});
dislike_b3.addEventListener('click',()=>{
    dislike(dislike_b3,like_b3);
});
voto3.addEventListener('click',botar3);
cb3.addEventListener('click',()=>{
    cambio_botones('cambio6','cambio5','gracias3');
});
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('cambio6').style.display='none';
    ObtenerLocal('likesC','dislikesC','likes3','dislikes3','resultado3');
});

// funciones
let likes3=0,
    dislikes3=0;
function botar3(){
    //evitar que se generen mas conteos
    if(like_b3.classList.contains('border1')){
        likes3++;
          //quitar la clase
        console.log(likes3);
        like_b3.classList.remove('border1'); 
        document.getElementById('cambio6').style.display='block';
        document.getElementById('cambio5').style.display='none';
        document.getElementById('gracias3').innerHTML="thanks for voting"
        calcular3();
       
    }

    if(dislike_b3.classList.contains('border1')){
        dislikes3++;
          //quitar la clase
        console.log(dislikes);
        dislike_b3.classList.remove('border1');
        document.getElementById('cambio6').style.display='block';
        document.getElementById('cambio5').style.display='none';
        document.getElementById('gracias3').innerHTML="thanks for voting"
        calcular3(); 
    }
}

function cambio_botones3(){
    document.getElementById('cambio6').style.display='none';
    document.getElementById('cambio5').style.display='block';
    document.getElementById('gracias3').innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto illo quo dolores quam possimus, tempora ipsa. Voluptatum qui necessitatibus quasi praesentium."
}
function calcular3(){
    let total =likes3+dislikes3;

    let porcentajeL=(likes3/total)*100;
    let porcentajeD=(dislikes3/total)*100;
    
    // convertir a string para agregarlo al css
    document.getElementById('likes3').style.width=porcentajeL.toString()+"%";

    document.getElementById('dislikes3').style.width=porcentajeD.toString()+"%";
    GuardarLocal('likesC','dislikesC',porcentajeL.toFixed(2),porcentajeD.toFixed(2));

    let sporcentajeL=porcentajeL.toFixed(2).toString()+"%";
    let sporcentajeD=porcentajeD.toFixed(2).toString()+"%";


    document.getElementById('likes3').innerText=sporcentajeL;
    document.getElementById('dislikes3').innerText=sporcentajeD;
    //document.getElementById('porcentajeL').innerHTML="hola";
    votoActual(porcentajeL,porcentajeD,'resultado3');
}
//////////////////////////////////////////////////// Malala/////////////////////////////////////////////

const like_b4=document.getElementById('likeb4');
const dislike_b4=document.getElementById('dislikeb4');
const voto4=document.getElementById('vote4');
const cb4=document.getElementById('cambio_boton4');

// event listener 
like_b4.addEventListener('click',()=>{
    like(like_b4,dislike_b4);
});
dislike_b4.addEventListener('click',()=>{
    dislike(dislike_b4,like_b4);
});
voto4.addEventListener('click',botar4);
cb4.addEventListener('click',()=>{
    cambio_botones('cambio8','cambio7','gracias4');
});

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('cambio8').style.display='none';
    ObtenerLocal('likesMa','dislikesMa','likes4','dislikes4','resultado4');
});


// funciones
let likes4=0,
    dislikes4=0;
function botar4(){
    //evitar que se generen mas conteos
    if(like_b4.classList.contains('border1')){
        likes4++;
          //quitar la clase
        console.log(likes4);
        like_b4.classList.remove('border1'); 
        document.getElementById('cambio8').style.display='block';
        document.getElementById('cambio7').style.display='none';
        document.getElementById('gracias4').innerHTML="thanks for voting"
        calcular4();
    }

    if(dislike_b4.classList.contains('border1')){
        dislikes4++;
          //quitar la clase
        console.log(dislikes);
        dislike_b4.classList.remove('border1'); 
        document.getElementById('cambio8').style.display='block';
        document.getElementById('cambio7').style.display='none';
        document.getElementById('gracias4').innerHTML="thanks for voting"
        calcular4();
    }
}
function calcular4(){
    let total =likes4+dislikes4;

    let porcentajeL=(likes4/total)*100;
    let porcentajeD=(dislikes4/total)*100;
    
    // convertir a string para agregarlo al css
    document.getElementById('likes4').style.width=porcentajeL.toString()+"%";

    document.getElementById('dislikes4').style.width=porcentajeD.toString()+"%";
    GuardarLocal('likesMa','dislikesMa',porcentajeL.toFixed(2),porcentajeD.toFixed(2));

    let sporcentajeL=porcentajeL.toFixed(2).toString()+"%";
    let sporcentajeD=porcentajeD.toFixed(2).toString()+"%";

    votoActual(porcentajeL,porcentajeD,'resultado4');

    document.getElementById('likes4').innerText=sporcentajeL;
    document.getElementById('dislikes4').innerText=sporcentajeD;
    //document.getElementById('porcentajeL').innerHTML="hola";
}
