import { useDispatch } from 'react-redux'
import { pokemonApi, useGetPokemonByNameQuery } from './services/pokemon'
import './styles.css'

export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const dispatch = useDispatch()
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <button onClick={()=> { 
        
        dispatch(pokemonApi.util.invalidateTags(['pokemon', undefined]))
      }}>invalidate</button>
    </div>
  )
}
