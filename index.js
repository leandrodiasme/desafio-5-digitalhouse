const pokemons = `{
    "count": 1118,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=300&limit=100",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
    "results": [
      {
        "name": "unown",
        "url": "https://pokeapi.co/api/v2/pokemon/201/"
      },
      {
        "name": "wobbuffet",
        "url": "https://pokeapi.co/api/v2/pokemon/202/"
      },
      {
        "name": "girafarig",
        "url": "https://pokeapi.co/api/v2/pokemon/203/"
      },
      {
        "name": "pineco",
        "url": "https://pokeapi.co/api/v2/pokemon/204/"
      }
    ]
  }`;
  
const objetoPineco = JSON.parse(pokemons).results[3];

function meuPokemon(name, url, tipo){
    this.name = name;
    this.url = url;
    this.tipo = tipo;
    this.escolhoVoce = ()=> {
        console.log('O escolhido foi o '+ this.name)};
    this.quantoVale = ()=> this.tipo === 'bug' ? 'R$1.0000000' : 'R$0';  
    this.exemploSwitch = ()=>{
        switch(this.tipo){
            case 'bug':{
                return 'R$1.000.000,00';
            }
            case 'water':{
                return 'R$500.000,00';
            }
            case 'eletric':{
                return 'R$800.000,00'
            }
            default:{
                return 'R$0,00'
            }
        }
    }  
}


const objetoPokemon = new meuPokemon(objetoPineco.name, objetoPineco.url, 'bug')
const PokemonPicachu = new meuPokemon("Pikachu","https://pokeapi.co/api/v2/pokemon/pikachu/", 'eletric')

console.log(PokemonPicachu.exemploSwitch());