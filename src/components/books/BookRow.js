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

        const { title, author, price, stocked } = this.props.book
        
        return (
            <tr>
                <td>{stocked ? title : <span style={{color: 'darkred', textDecoration: "line-through"}}>{title}</span>}</td>
                <td style={{fontStyle:"italic"}}>{author}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default BookRow