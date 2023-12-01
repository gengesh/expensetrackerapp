

// require('dotenv').config();
const form = document.getElementById("formField");



form.addEventListener('submit',newPassword);

function newPassword(e) {
    e.preventDefault();
    const newpassword = e.target.password1.value;
    console.log("new password changed is:",newpassword);
    axios.post(`http://65.0.39.128:4000/password/newpassword`,{newpassword})
    .then(() => {
        console.log("new password changed");
    }).catch(err => {
        console.log(err);
    })
}