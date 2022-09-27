const frmContato = document.querySelector("#formContato");

if (frmContato.addEventListener) {
    frmContato.addEventListener("submit", validaContato)
} else if (frmContato.attachEvent) {
    frmContato.attachEvent("onsubmit", validaContato);
}
function validaContato(evt) {
    const myModal = document.getElementById('.modal')

    const input = document.getElementsByName('input')
    const nome = document.getElementById('Nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const mensagem = document.getElementById('mensagem')
    const contErro = ("")


    if (nome.value == "") {
        nome.style.background = "#ffa840"
        nome.focus();
        return false;
    } else {
        nome.style.border = '2px solid blue'

    }

    if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.background = "#ffa840"
        email.focus();
        return false;
    } else {
        email.style.border = "2px solid blue";
    }
    if (telefone.value == "") {
        telefone.style.background = "#ffa840"
        telefone.focus();
        return false;
    } else {
        telefone.style.border = "2px solid blue"
    }

    if (mensagem.value == "") {
        mensagem.style.background = "#ffa840"
        mensagem.focus();
        return false;
    } else {
        mensagem.style.border = "2px solid blue"
    }


    if (mensagem.value.length < 10) {
        mensagem.style.background = "#ffa840"
        mensagem.focus();
        return false;
    } else {
        mensagem.style.border = "2px solid blue"
    }

    if (contErro > "") {
        evt.preventDefault();
    } else {
        document.getElementById("formContato").submit(),
            $('#modal-contato').modal("show"),
            $('.Modal').on('shown.bs.modal', function () {
                $('#myInput').trigger('focus'),
                    evt.preventDefault()

            })
    }
}



//mascara ER
function mascara(o, f) {
    v_obj = o
    v_fun = f

    setTimeout("execmascara()", 1)

}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, ""); //remove tudo que nao é numero
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //coloca parenteses nos dois primeiros digitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //coloca ifen entre o quarto e quinto digito

    return v;
}

function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('telefone').onkeyup = function () {
        mascara(this, mtel);
    }

}


