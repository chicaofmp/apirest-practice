const buscarEndereco = () => {

    let numerosCep = cep.value; 

    if(numerosCep.length !== 8) {
        alert('CEP invalido');
        return;
    }

    fetch(`http://viacep.com.br/ws/${numerosCep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
        });

}