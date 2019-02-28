$(document).ready(()=>{
    
    $('#but').click(()=>{
        
            // do something...
          
       let user=$('#name').val();
       localStorage.setItem('use',user);
      let name= localStorage.getItem('use');
      
      let dob=$('#dob').val();
       localStorage.setItem('dob',dob);
      let dob= localStorage.getItem('dob');
     
      let gender=$('#address').val();
       localStorage.setItem('addr',address);
      let gend= localStorage.getItem('addr');
      
      $('#content').html('username:'+ name+"</br>"+'dob:'+dob+"</br>"+'addr:'+addr);
     
      

    });

});