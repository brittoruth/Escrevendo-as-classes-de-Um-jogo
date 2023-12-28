class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      mago: "usou magia",
      guerreiro: "usou espada",
      monge: "usou artes marciais",
      ninja: "usou shuriken",
    };

    const ataque = ataques[this.tipo] || "usou um ataque misterioso";

    console.log(`O ${this.tipo}, ${this.nome}, que tem a idade de ${this.idade} anos, atacou usando ${ataque}.`);
  }
}

const meuHeroi1 = new heroi("vick", 59, "Mago");
meuHeroi1.atacar();

const meuHeroi2 = new heroi("mila", 48, "Guerreiro");
meuHeroi2.atacar();

const meuHeroi3 = new heroi("cesar", 70, "Monge");
meuHeroi3.atacar();

const meuHeroi4 = new heroi("calebe", 33, "Ninja");
meuHeroi4.atacar();