import { heroes } from "../data/heroes";

const getHeroesByName = ( name = '' ) => {
    name = name.toLowerCase().trim();
    console.log('Function called')

    if( name === '' || name.length === 0 ) {
        return [];
    }
    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) )
}
export default getHeroesByName;
