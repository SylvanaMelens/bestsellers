/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format
 */

import React, { Component } from 'react'

class BookRow extends Component {
    constructor(props){
        super(props)
        console.log("dans BookRow, les livres : ", props.book)
    }
    render(){

        const { title, author, price } = this.props.book
        return (
            <tr>
                <td>{title}</td>
                <td>{author}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default BookRow