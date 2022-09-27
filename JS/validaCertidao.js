const formCertidao = document.querySelector('#furmulario-certidao')

if (formCertidao.addEventListener) {
  formCertidao.addEventListener("submit", validaCertidao)
} else if (formCertidao.attachEvent) {
  formCertidao.attachEvent("onsubmit", validaCertidao);
}

function validaCertidao(event) {

  const select = document.getElementById('my-select')
  const input = document.getElementsByName('input')
  const nome = document.getElementById('Nome')
  const email = document.getElementById('email')
  const tel = document.getElementById('telefone')
  const estado = document.getElementById('estado')
  const cidade = document.getElementById('cidade')



  if (select.value == "Selecione a Certidão") {
    select.style.background = "#ffa840"
    select.focus()
    return false
  } else {
    select.style.border = "2px solid blue",
      select.style.background = "white"
  }
  if (nome.value == "") {
    nome.style.background = "#ffa840"
    nome.focus()
    return false;
  } else {
    nome.style.border = "2px solid blue"
  }

  if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    email.style.background = "#ffa840"
    email.focus();
    return false;
  } else {
    email.style.border = "2px solid blue";
  }

  if (tel.value == "") {
    tel.style.background = "#ffa840"
    tel.focus()
    return false
  } else {
    tel.style.border = '2px solid blue',
      tel.style.background = 'none'
  }
  if (cidade.value == "") {
    cidade.style.background = "#ffa840"
    cidade.focus()
    return false
  } else {
    cidade.style.border = "2px solid blue"
  }
  if (estado == "") {
    estado.style.background = "#ffa840"
    estado.focus()
    return false
  } else {
    estado.style.border = "2px solid blue"
  }

}

