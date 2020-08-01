import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ({history}) => {

    const location = useLocation();

    const { q = ''} = queryString.parse(location.search);

    
    const [formValues, handleInputChange]  = useForm({
        searchText: q
    });
    
    const {searchText} = formValues;
    
    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }
    return (
        <div>
            <h1>Search Page</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                        type='text'
                        placeholder='Find your hero'
                        className='form-control'
                        name='searchText'
                        value={searchText}
                        onChange={handleInputChange}
                        autoComplete='off'
                        />

                        <button type='submit' className='btn m-1 btn-block btn-outline-primary'>
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4> Resultados </h4>
                    <hr />
                    
                    

                    {(q === '') && (<div className='alert alert-info animate__animated animate__fadeIn'>
                        Search a hero
                    </div>)}

                    {(q !== '' && heroesFilter.length === 0) && (<div className='alert alert-danger animate__animated animate__fadeIn'>
                        Ther is no a hero with { q }
                    </div>)}
                    {
                        heroesFilter.map((hero) =>(
                            <div key={hero.id} className='alert-danger animate__animated animate__fadeIn'>
                                <HeroCard {...hero}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
