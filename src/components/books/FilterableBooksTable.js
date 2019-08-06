/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format
 * Source Amazon le 05/08/2019 : https://www.amazon.fr/gp/bestsellers/books
 */

import React, { Component } from 'react'
import SearchCompo from './SearchCompo'
import BooksTable from './BooksTable'

class FilterableBooksTable extends Component {
    constructor(props){
        super(props)
        console.log("les livres : ", props.books)
    }

    render(){
        return (
            <div style={{backgroundColor: 'Teal', color:'#fff', padding: '2em'}}>
                <h1 style={{fontSize: '1.5em'}}>Rechercher un livre :</h1>  
                <SearchCompo />
                <BooksTable books={this.props.books} />
            </div>
        )
    }
}

export default FilterableBooksTable
