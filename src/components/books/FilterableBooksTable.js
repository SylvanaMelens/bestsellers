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

        this.handleChange = this.handleChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
        
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleChange(e){
        console.log("dans le parent, input text : ", e)
        this.setState({filterText:e})
    }

    handleChecked(e){
        console.log("dans le parent, input checkbox : ", e)
        this.setState({inStockOnly:e})
    }

    render(){
        const { filterText, inStockOnly } = this.state
       
        return (
            <div style={{backgroundColor: 'Teal', color:'#fff', padding: '2em'}}>
                <h1 
                    style={{fontSize: '1.5em'}}>
                        Rechercher un livre :
                </h1>  
                
                <SearchCompo 
                    filterText={filterText} 
                    inStockOnly={inStockOnly}
                    handleChange={this.handleChange}
                    handleChecked={this.handleChecked} />

                <BooksTable 
                    books={this.props.books}
                    filterText={filterText} 
                    inStockOnly={inStockOnly} />
            </div>
        )
    }
}

export default FilterableBooksTable
