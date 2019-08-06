/**
 * @author Sylvana
 * Exercice de rendu d'une liste de livres filtrables sur le format et simulation de destockage
 * Source Amazon le 05/08/2019 : https://www.amazon.fr/gp/bestsellers/books
 */

import React, { Component } from 'react'
import './App.css'
import FilterableBooksTable from './components/books/FilterableBooksTable'



class App extends Component {
  render(){
    const BOOKS = []
    BOOKS.push({title: "Les livres de Roth: Le complot contre l'Amérique", author: "Philippe Roth", price: "9,50 €", format: "broché", stocked:false})
    BOOKS.push({title: "Les quatre accords toltèques", author: "Miguel Ruiz", price: "8,40 €", format: "broché", stocked:true})
    BOOKS.push({title: "Le meilleur des mondes", author: "Aldous HUXLEY", price: "4,95 €", format: "poche", stocked: true})
    BOOKS.push({title: "Les cavaliers. L'assemblée des femmes", author: "Aristophane", price: "9,90 €", format: "poche", stocked: true})
    BOOKS.push({title: "De la démocratie en Amérique", author: "Tocqueville", price: "7,90 €", format: "poche", stocked:true})
    BOOKS.push({title: "Il est grand temps de rallumer les étoiles", author: "Virginie Grimaldi", price: "7,90 €", format: "poche", stocked:true})
    BOOKS.push({title: "Changer l'eau des fleurs", author: "Valérie Perrin", price: "8,90 €", format: "poche", stocked:true})
    BOOKS.push({title: "Ta deuxième vie commence quand tu comprends que tu n'en as qu'une", author: "Raphaëlle Giordano", price: "6,95 €", format: "poche", stocked:true})
    BOOKS.push({title: "Le plancher de Joachim", author: "Jacques-Olivier Boudon", price: "7,90 €", format: "poche", stocked:true})
    BOOKS.push({title: "L'agenda de Roxane 2019-2020", author: "Roxane", price: "9,99 €", format: "relié", stocked:false})



    return (
      <div className="App">
        <FilterableBooksTable books={BOOKS}/>
      </div>
    )
  }
}

export default App
