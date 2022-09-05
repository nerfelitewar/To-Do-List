function ButtonAddTask(){
    var a= document.getElementById("add-task").value;
    document.getElementById("task1").innerHTML=a;
    

}



function Donetask1(){
    if(document.getElementById('list1').checked=true){
        document.getElementById('task1').innerHTML='<s>'+document.getElementById("add-task").value+'<s>';
    }else if(document.getElementById('list1').checked=false){
        document.getElementById('task1').innerHTML=document.getElementById("add-task").value;
    }

}
function Donetask2(){
    if(document.getElementById('list2').checked=true){
        document.getElementById('task2').innerHTML='<s>'+document.getElementById("add-task").value+'<s>';
    }else if(document.getElementById('list2').checked=false){
        document.getElementById('task2').innerHTML=document.getElementById("add-task").value;
    }

}
function Donetask3(){
    if(document.getElementById('list3').checked=true){
        document.getElementById('task3').innerHTML='<s>'+document.getElementById("add-task").value+'<s>';
    }else if(document.getElementById('list3').checked=false){
        document.getElementById('task3').innerHTML=document.getElementById("add-task").value;
    }

}
function Donetask4(){
    if(document.getElementById('list4').checked=true){
        document.getElementById('task4').innerHTML='<s>'+document.getElementById("add-task").value+'<s>';
    }else if(document.getElementById('list4').checked=false){
        document.getElementById('task4').innerHTML=document.getElementById("add-task").value;
    }

}
function Donetask5(){
    if(document.getElementById('list5').checked=true){
        document.getElementById('task5').innerHTML='<s>'+document.getElementById("add-task").value+'<s>';
    }else if(document.getElementById('list5').checked=false){
        document.getElementById('task5').innerHTML=document.getElementById("add-task").value;
    }

}