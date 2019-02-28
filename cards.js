
$(document).ready(()=>{

    $('#save-register').click((e)=>{
        let data=[];
        var name=$('#name').val();
var Dob=$('#dob').val();
var DL=$('#dl').val();
var email=$('#email').val();
var number=$('#number').val();
var password=$('#password').val();
localStorage.setItem('name',name);
localStorage.setItem('email',email);
localStorage.setItem('number',number);
localStorage.setItem('DOB',Dob);
localStorage.setItem('driving',DL);
        data.push[
            {
                id: 1,
                name: localStorage.getItem('name'),
                DOB: localStorage.getItem('DOB'),
                DL: localStorage.getItem('driving')
            }]
            
        
        localStorage.setItem('data',JSON.stringify(data));
data.forEach((data)=>{
    
    var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
    //var rows='';
   var rows=$(`<div class="container">
                  
   <div class="alert alert-dismissible">
   <button type="button" class="close" data-dismiss="alert">&times;</button>  
    <div class="card " style='width:50em'>
    
      <div class="card-header" style="text-align:right">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#popMessage">edit</button>
            
    <span class="pull-right clickable close-icon" data-effect="fadeOut"><i class="fa fa-times"></i></span>
    </div>
      <div class="card-body" ><div class="row">
          <div class="col-md-5">
            
          <img class="card-img-top" src="images.jpg"  alt="Card image cap"/></div>
          <p  class="card-text">
          UserName:${data.name}</br>
          DOB:${data.DOB}</br>
          licenseNo:${data.DL}</br>
          </p>
      </div>
    </div>
      
    </div>
  </div>`);
  $('#content').html(rows);
  rows.append(myCol);
        myCol.appendTo('#content');
  

});
});
});


    
