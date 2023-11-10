function atacar() {
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let tipo = document.getElementById('tipo').value;

    let ataque;
    switch(tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque especial';
    }

    let mensagem = `O ${tipo} ${nome} de ${idade} anos atacou usando ${ataque}`;
    document.getElementById('mensagem').innerText = mensagem;
  }