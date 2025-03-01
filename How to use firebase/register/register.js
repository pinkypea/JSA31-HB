const inpUsername = document.querySelector(".inp-username");
const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const inpConfirmPwd = document.querySelector(".inp-cf-pw");
const registerForm = document.querySelector("#register-form");

function handleRegister(event) {
    event.preventDefault()

    let username = inpUsername.value;
    let email = inpEmail.value;
    let password = inpPwd.value;
    let confirmPassword = inpConfirmPwd.value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ các thông tin");
    }
    if (password != confirmPassword) {
        alert("Mật khẩu không khớp");
    }

    // Tạo tài khoản với firebase auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            let userData = {
                username,
                email,
                password
            }
            alert("Đăng ký thành công");
            window.location.href = "../login/login.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(`Lỗi: ${errorMessage}`);
            console.log(errorMessage)
        });

}

registerForm.addEventListener("submit", handleRegister);