document.addEventListener("DOMContentLoaded", function(){
  const form= document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();
    let error = formValidate(form);

    let formData = new formData(form);
    const toggleInput = () => {
      popup.classList.toggle('input_open');
    }
    if(error===0){
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body:formData
      });
      if(response.ok){
        toggleInput();
      }
      else{
        alert('Ошибка')
      }
    }
  }
  function formValidate(form){
    let error=0;
    let formReq= document.querySelectorAll('._req');

    for (let index = 0;index<formReq.length;index++){
      const input=formReq[index];
      formRemoveError(input);

      if(input.value===""){
        formAddError(input)
        error++;
      }
    }
  }
  
  function formAddError (input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
});

const button = document.querySelector('.preview__botton');
const button1=document.querySelector('.btn-success')
const popup = document.querySelector('.input');
const container = document.querySelector('.input__container')
const toggleInput = () => {
  popup.classList.toggle('input_open');
}
button.addEventListener('click', () => {
  toggleInput();
});
//button1.addEventListener('click', () => {
//  toggleInput();
//});
document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == container || container.contains(target);
  let its_hamburger = target == button;
  let menu_is_active = popup.classList.contains('input_open');
  //console.log(its_menu)
  //console.log(its_hamburger)
  //console.log(menu_is_active)
  if (!its_menu && !its_hamburger && menu_is_active) {
    console.log("wdsdad")
    toggleInput();
  }
})