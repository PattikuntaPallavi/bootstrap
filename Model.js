
$(document).ready(()=>{
    console.log('jquery begins');
    $('#save-register').click((e)=>{
var name=$('#name').val();
var email=$('#email').val();
var number=$('#number').val();
var password=$('#password').val();
console.log(name);
localStorage.setItem('name',name);
localStorage.setItem('email',email);
localStorage.setItem('number',parseInt(number));
console.log(number);
localStorage.setItem('password',password);


    
   
    
    });
    

$('#sbt-register').click((e)=>{
    
    var username=localStorage.getItem('name');
    var email=localStorage.getItem('email');
    var number=localStorage.getItem('number');
    var password=localStorage.getItem('password');

    document.write(`username is `+username);

    document.write(`email is `+email);
    document.write(`number is `+number);
    document.write(`password is `+password);
    
        
       
        
        
    });

});