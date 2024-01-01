class App extends React.Component {
    render() {
        const pokeList = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ];
        
        const pokemons = pokeList.map((item) => (
            <Cards id={item.id} name={item.name} type={item.type} base_experience={item.base_experience}/>
          ));

        return (
            <div>
                <h1 className="title">Quezia's PokeDex</h1>
                {pokemons}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));