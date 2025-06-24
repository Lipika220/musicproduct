function showAuth(type) {
  document.getElementById('authModal').style.display = 'flex';
  switchForm(type);
}

function closeModal() {
  document.getElementById('authModal').style.display = 'none';
}

function switchForm(type) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (type === 'login') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

function fakeLogin() {
  alert('Logged in (demo only)');
  closeModal();
}

function fakeSignup() {
  alert('Signed up (demo only)');
  closeModal();
}
