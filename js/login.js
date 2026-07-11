const users = JSON.parse(localStorage.getItem('user')) || [];

console.log(users);

document.getElementById('form-login').addEventListener('submit', (e) => {
   e.preventDefault();

   const user = document.getElementById('user').value.trim();
   const password = document.getElementById('password').value.trim();

   const users = JSON.parse(localStorage.getItem('user'));

   const validUser = users.find(u => (u.user=== user || u.email === user) && u.password === password );

   if (validUser) {
      alert('Bienvenido ' + validUser.user);
      localStorage.setItem('isLogin', JSON.stringify(true));
      window.location.href = '../pages/carrito.html';
   }
   else {
      alert('Usuario o contraseña incorrectos');
   }
})