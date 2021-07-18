// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

function myFunction(){
    let name= $('.name-input').val();
    let email= $('.email-input').val();
    window.localStorage.setItem('Name',name)
    window.localStorage.setItem('Email',email)
    alert("Nome: "+window.localStorage.getItem('Name')+'\n'+'Email: '+window.localStorage.getItem('Email'))
}