const form = document.getElementById("formField");

// require('dotenv').config();
form.addEventListener('submit',forgotPassword);


function forgotPassword(e){
    e.preventDefault();
    const emailId = e.target.email.value;
    console.log("emailid is :",emailId)
    axios.post(`http://65.0.39.128:4000/password/forgotpassword`,{emailId})
    .then(res => {
        console.log("successs response:",res);
    })
    .catch(err => {
        console.log(err);
    })

}