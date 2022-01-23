

function validate() {
  let loader = document.querySelector(".loader");
  let fn = document.querySelector(".firstname");
  let ln = document.querySelector(".lastname");
  let number = document.querySelector(".num");

  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  console.log(msg);
  console.log(btn);
  let _this = this;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('click')
    if (fn.value == "" || email.value == "" || msg.value == "" || fn.value == "" || ln.value == "" || number.value == "") {
      emptyerror();
    } else {
      loader.style.display = "flex";
      console.log("------>", fn.value)
      console.log("------>", ln.value)
      _this.sendmail(fn.value, email.value, msg.value, ln.value, number.value);
      success();
      console.log("email sent")
      loader.style.display = "none";
    }
  });
}
validate();

// confirm phone
const phone = document.querySelector('#phone')
const cfPhone = document.querySelector('#confirmPhone')
var pattern = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
  str = '';
console.log(pattern.test(str));
phone.addEventListener('keyup', () => {
  if (null) return
  if (!pattern.test(phone.value)) {
    cfPhone.innerHTML = `${phone.value} not phone`
    if ((phone.value).length > 10) {
      alert('The length of the phone cannot exceed 10')
    }
  }
  else {
    cfPhone.innerHTML = `${phone.value}is a phone`
  }
})
/**
  emailjs.send("SERVICE ID", "TEMPLATE NAME", {
    to_name: "USERNAME",
    from_name: "FROM NAME",
    message: "MESSAGE",
  });
 **/

function sendmail(fn, email, msg, ln, number) {
  console.log("fn", fn)
  console.log("ln", ln)
  let title = fn + " " + ln
  emailjs.send("0501sxy", "template_o42y5jh", {
    email: email,
    to_name: "xinyi",
    message: msg,
    number: number,
    from_name: title,

  });
}

//check email format
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function hanldeValidateEmail() {
  var result = document.querySelector('.result');
  var email = document.querySelector(".email").value;
  result.innerHTML = '';
  if (!email) return

  // console.log('validateEmail(email)', validateEmail(email))
  if (validateEmail(email)) {
    result.innerHTML = email + " is  valid ";
  } else {
    result.innerHTML = email + " is  not valid ";
  }
  return false;
}
let emails = document.querySelector('#email')
emails.addEventListener('blur', function () {
  if (emails.value != null) {
    if (!validateEmail((emails.value))) {
      alert(`${emails.value} is not valid`)
    } else {
      return;
    }
  }
})


document.querySelector(".email").addEventListener('input', hanldeValidateEmail)


//about error and sending action
function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Fields cannot be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Success...",
    text: "Successfully sent message",
  });
}