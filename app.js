// login.js
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      // Redirect to the customer detail form with the token
      window.location.href = `customer-detail.html?token=${token}`;
    }
  } catch (error) {
    console.error('Login error:', error);
  }
});
