$(document).ready(()=>{
    
    $('#but').click(()=>{
 
          
       let user=$('#name').val();
       localStorage.setItem('use',user);
      let name= localStorage.getItem('use');
      
      let dob=$('#dob').val();
       localStorage.setItem('dob',dob);
      let dob= localStorage.getItem('dob');
     
      let address=$('#address').val();
       localStorage.setItem('addr',address);
      let addr= localStorage.getItem('addr');
      
      $('#content').html('username:'+ name+"</br>"+'dob:'+dob+"</br>"+'addr:'+addr);
     
      

    });

});
