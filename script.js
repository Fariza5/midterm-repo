// Registration form validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#registrationForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;

      // Clear previous messages
      const errors = form.querySelectorAll('.invalid-feedback');
      errors.forEach(err => err.style.display = 'none');

      // Required fields
      form.querySelectorAll('[required]').forEach(input => {
        if(!input.value.trim()){
          input.nextElementSibling.style.display = 'block';
          valid = false;
        }
      });

      // Password match
      const pwd = form.querySelector('#password');
      const confirmPwd = form.querySelector('#confirmPassword');
      if(pwd && confirmPwd && pwd.value !== confirmPwd.value){
        confirmPwd.nextElementSibling.style.display = 'block';
        valid = false;
      }

      // Checkbox
      const policy = form.querySelector('#policy');
      if(policy && !policy.checked){
        policy.nextElementSibling.style.display = 'block';
        valid = false;
      }

      if(valid){
        alert('Registration successful!');
        form.reset();
      }
    });
  }
});
