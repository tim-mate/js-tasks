class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const refs = {
  loginForm: document.body.querySelector(".login-form"),
  loginBtn: document.body.querySelector(".login-form button"),
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value;
  const userPwd = event.currentTarget.elements.password.value;

  const isEmpty = userEmail.length === 0 || userPwd.length === 0;
  const hasSpace = userEmail.includes(" ") || userPwd.includes(" ");

  if (isEmpty || hasSpace) {
    alert(`All fields should be filled`);
    return;
  }

  const ourUser = new User(userEmail, userPwd);
  console.log(ourUser);

  event.currentTarget.reset();
};

refs.loginForm.addEventListener("submit", onFormSubmit);
