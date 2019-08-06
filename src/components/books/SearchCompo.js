/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format
 */

import React, { Component } from 'react'

class SearchCompo extends Component {
    constructor(props){
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleChange(e){
        console.log(e.target.value)
    }

    handleChecked(e){
        console.log(e.target.checked)
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="search"
                    onChange={this.handleChange}
                />
                
                <input 
                    type="checkbox"
                    onChange={this.handleChecked}
                />

                {' '}
                <span  style={{fontSize: "0.7em"}}>Articles en stock uniquement</span>
            </div>
        )
    }
}

export default SearchCompo