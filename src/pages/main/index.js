import React, { Component } from 'react';
import api from '../../service/api'
import './style.css'

export default class Main extends Component {
   
    //Conceito de estado (armazenamento):
    state = {
        products: [],
    }
    //Método executa uma ação logo que o componente é exibido em tela
    componentDidMount() {
        //função da mesma classe para exibir produtos
        this.loadProducts();
    }

    loadProducts = async () => {
        //executando Api utilizando o método Get
        const response = await api.get('/products');

        //Prencher o estado no array, atualizando os produtos
        this.setState({ products: response.data.docs });
    }

    render() {
        //O trecho "this.state.products.length" ouviu queo estado products foi alterado.
        //<h1>Contagem de produtos: {this.state.products.length}</h1>
    const { product } = this.state;
    
    return  (
        <div className="product-list">
            { this.state.products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href ="">Acessar</a>
                </article>
            ))}
        </div>
    )
    }
} 