function gerarMensagem() {
  if (nome === '' || humor === '') {
    setMensagem('Preencha seu nome e escolha seu humor.');
    return;
  }

  const mensagens = {
    feliz: [
      `${nome}, aproveite essa energia boa e faça seu dia render! 😄`,
      `${nome}, continue espalhando essa alegria por aí! ✨`,
      `${nome}, hoje parece ser um ótimo dia para começar algo novo! 🚀`,
      `${nome}, sua energia está lá em cima. Aproveite! 😎`,
      `${nome}, felicidade combina com você hoje! 🌟`
    ],

    cansado: [
      `${nome}, talvez seu corpo esteja pedindo um pouco de descanso. 😴`,
      `${nome}, faça uma pausa e recarregue suas energias. 🔋`,
      `${nome}, nem todo dia precisa ser produtivo o tempo todo. ☕`,
      `${nome}, tente diminuir o ritmo por alguns minutos. 🌙`,
      `${nome}, descansar também faz parte do progresso. 💤`
    ],

    ansioso: [
      `${nome}, tente focar em uma coisa de cada vez. 🌿`,
      `${nome}, organize suas tarefas e comece pela mais simples. 📝`,
      `${nome}, tente desacelerar e pensar no que você consegue resolver agora. 🍃`,
      `${nome}, não precisa resolver tudo de uma vez. 🙂`,
      `${nome}, vá com calma e avance passo a passo. 👣`
    ],

    animado: [
      `${nome}, use essa energia para tirar uma ideia do papel! 🚀`,
      `${nome}, esse é um ótimo momento para começar um projeto novo. 💡`,
      `${nome}, aproveite sua disposição e faça algo que estava adiando! 🔥`,
      `${nome}, energia alta hoje! Bora aproveitar! 😎`,
      `${nome}, transforme essa animação em ação! ⚡`
    ]
  };

  const lista = mensagens[humor];

  const numeroAleatorio = Math.floor(
    Math.random() * lista.length
  );

  setMensagem(lista[numeroAleatorio]);
}