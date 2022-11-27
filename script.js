const email = document.querySelector(".email"),
  pass = document.querySelector(".password"),
  form = document.querySelector("form");

form.addEventListener( "submit", (e) => {
    // e.preventDefault();
  function truOrFalse() {
    if (email.value !== "admin" || pass.value !== "password") {
      console.log("username or pass is wrong");
    } else {
        console.log("correct");
    }
  }
    truOrFalse();
    
    e.target.reset()
});
