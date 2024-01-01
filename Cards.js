class Cards extends React.Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        return (
            <div className="Cards">
                <h3 className="pokeName">{name}</h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <p>type: {type} </p>
                <p>exp: {base_experience} </p>
            </div>
        );
    }
}