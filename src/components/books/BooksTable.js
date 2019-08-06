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

        const rows = []
        this.props.books.forEach(book => {
            console.log("boucle forEach :", book.title)
            rows.push(<BookRow key={book.title} book={book}/>)
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
                <BooksFormat />
                
            </div>
        )
    }
}

export default BooksTable