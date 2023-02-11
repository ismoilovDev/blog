const email = document.querySelector('#email'),
   name_input = document.querySelector('#name'),
   msg_text = document.querySelector('#message'),
   msg_send_form = document.querySelector('#contact-form'),
   send_msg_btn = document.querySelector('.submit');

function sendMsg(e) {
   e.preventDefault()
   let text = `
       Assalomu alaykum! <br/> <br/> 
       Mening Ismim ${name_input.value} <br />
       A'loqa Uchun ${email.value} <br/>
       <h4>${msg_text.value} </h4>
   `
   "Assalomu alaykum! <br/> Mening Ismim " + name_input.value + " " + "<br/> Xabarim " + msg_text.value
   Email.send({
      Host: "smtp.elasticemail.com",
      Username : "axmedovadilzoda@gmail.com",
      Password : "F81321A2DB443E52EE5998DA0F1D0349BD29",
      To : 'electroshopuzb@gmail.com',
      From : "axmedovadilzoda@gmail.com",
      Subject: "This is the subject",
      Body: text
   }).then(
      message => {
         Swal.fire(
            'Muvaffaqiyatli!',
            'Xabaringiz yuborildi!',
            'success'
         )
         email.value = ""
         name_input.value = ""
         msg_text.value = ""
      }
   ).catch(() => {
      Swal.fire(
         'Muvaffaqiyatsiz!',
         'Xato kiritildi!',
         'error'
      )
   })
}

msg_send_form.addEventListener('submit', sendMsg)
send_msg_btn.addEventListener('submit', sendMsg)