import React from 'react'

const SearchForm = props =>{
    const { setSearchValue } = props
    const onChange = e =>{
        setSearchValue(e.target.value)
    }

    return  (

        <form onSubmit={props.onSubmit(props.gitsearch)}>
            <input 
                type='text'
                onChange={onChange}
                />
            <button></button>
        </form>
    ) 
}

export default SearchForm