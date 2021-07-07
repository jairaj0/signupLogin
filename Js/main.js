const usernameValue = document.querySelector("#username");
const passwordValue = document.querySelector("#password");
const rePasswordValue = document.querySelector("#rePassword");
const re_enter = document.querySelector("#re_enter");
const signUpBtn = document.querySelector("#sign_up_btn");
let signInData;

checkWindow()

signUpBtn.addEventListener("click", function () {
  const data = signUpData(usernameValue, passwordValue, rePasswordValue);

  if (usernameValue.value && passwordValue.value && rePasswordValue.value && data.password === data.rePassword) {
    console.log("successfully sign up !");
    store(data.username, data.password);
    signIn()
  } else {
    console.log("Something went wrong !!!");
  }
});

function checkWindow() {
        // get data
        const getUsername = getData("username");
        const getPassword = getData("password");
        // console.log(getUsername, getPassword);
    
    if (getUsername , getPassword) {
        signIn()
        const signInBtn = document.getElementById('signInBtn');
        signInBtn.addEventListener('click', function () {
            if (usernameValue.value && passwordValue.value){
                if (checkUsernamePassword(usernameValue.value , getUsername)) {
                    if (checkUsernamePassword(passwordValue.value , getPassword)) {
                        document.querySelector('#box').style.display = "none";
                        document.querySelector('h1.title').innerText = 'Hey Bro What are you doing here !!!!';
                    }else{
                        console.log('wrong Password !!!')
                    }
                }else{
                    console.log('wrong username !!!')
                }
            }
        })
    }
}

function signUpData(username, password, re_password) {
  const mainData = {
    username: username.value,
    password: password.value,
    rePassword: re_password.value,
  };
  return mainData;
}

function store(username, password) {
  // Check browser support
  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
  }
}

// Retrieve Data From Local Storage
function getData(nameOfData) {
  return localStorage.getItem(`${nameOfData}`);
}

function signIn() {
    re_enter.style.display = "none";
    signUpBtn.innerText = 'Sign In';
    signUpBtn.id = "signInBtn";
    usernameValue.value = "";
    passwordValue.value = "";
    document.querySelector('h1.title').innerText = 'SIGN IN';
}

function checkUsernamePassword(inputValue , getValue) {
    if (inputValue === getValue) {
        return true;
    }else{
        return false;
    }
}
