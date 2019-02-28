
$(document).ready(()=>{
    
    $('#but').click(()=>{
  
       let user=$('#name').val();
       localStorage.setItem('use',user);
      
      let dof=$('#bod').val();
       localStorage.setItem('dob',dof);
      
      let address=$('#address').val();
       localStorage.setItem('addr',address);
      
      let dlno=$('#one').val();
       localStorage.setItem('idno',dlno);
      
      const data=[
       {  name:localStorage.getItem('use'),
         dos: localStorage.getItem('dob'),
         addre: localStorage.getItem('addr'),
         DlNo: localStorage.getItem('idno'),
      }
    ];
      let rows=' ';
    localStorage.setItem('data',JSON.stringify(data));
    data.forEach((datas)=>{
       rows+= `
    <div class="card" style="width: 30em;">
            
            <h5 class="card-header">user details</h5>
        
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">

                    <img class="card-img-top" src="images.jpg"  alt="Card image cap"/>
                
            </div>
    
            
              <p class="card-text" id='contentPanel'>
              username:${datas.name}
              DOB:${datas.dos}
              Address:${datas.addre}
              DLNO:${datas.DlNo}
              </p>
            </div>
            </div>
            </div>`;
        
        $('contentPanel2').html(rows);
   
           });
        });                          
    
    
 
});

