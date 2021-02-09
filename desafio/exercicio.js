function objetoPokemon(nome, url){
    this.nomeDoPokemon = nome;
    this.urlFoto = url;
    this.converterEmJSON = (objetoPokemon)=> JSON.stringify(objetoPokemon); 
    this.exibePokemon = (mostrarJSON)=> mostrarJSON ? console.log(this.converterEmJSON(this)) : console.log(this); 

}

const pokemon = new objetoPokemon('Pikachu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');

console.log('Passando false como parâmetro (retorna objeto):'); pokemon.exibePokemon(false);
console.log(" ");
console.log('Passando true como parâmetro (retorna JSON):'); pokemon.exibePokemon(true);