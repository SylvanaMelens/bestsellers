/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format
 */

import React, { Component } from 'react'
import BooksFormat from './BooksFormat'
import BookRow from './BookRow'

class BooksTable extends Component {
    constructor(props){
        super(props)
        console.log("les livres dans BooksTable: ", props.books)
    }
    render(){

        const { filterText, inStockOnly } = this.props
        const rows = []
        let lastFormat;

        this.props.books.forEach(book => {
            console.log("boucle forEach :", book.title)
            
            if (book.title.toLowerCase().indexOf(filterText) === -1){
                return                
            }

            if (inStockOnly && !book.stocked){
                return
            }

            if (book.format !== lastFormat){
                rows.push(<BooksFormat format={book.format}/>)
            }
            rows.push(<BookRow key={book.title} book={book}/>)
            lastFormat = book.format
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                
                
            </div>
        )
    }
}

export default BooksTable