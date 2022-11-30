const email = document.querySelector( ".email" ),
  pass = document.querySelector( ".password" ),
  form = document.querySelector( "form" );
 
form.addEventListener( "submit", ( e ) => {
  e.preventDefault();
  if ( email.value !== "admin" || pass.value !== "pass123" ) {
      alert("username or password incorrect")
  } else {
     location.href = "/admin.html"
    }
  })