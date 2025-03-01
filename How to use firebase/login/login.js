const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const loginForm = document.querySelector("#login-form");

function handleLogin(event) {
    event.preventDefault();

    let email = inpEmail.value;
    let password = inpPwd.value;

    if (!email || !password) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("Đăng nhập thành công");
            window.location.href = "../index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

loginForm.addEventListener("submit", handleLogin);