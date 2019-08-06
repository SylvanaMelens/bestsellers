/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format
 */

import React, { Component } from 'react'

class BooksFormat extends Component {
    constructor(props){
        super(props)
        console.log("dans format :", props.format)
    }
    render(){
        return (
            <tr>
                <th colSpan="2" style={{backgroundColor: "turquoise", fontStyle: "italic"}}>{this.props.format}</th>
            </tr>
        )
    }
}

export default BooksFormat