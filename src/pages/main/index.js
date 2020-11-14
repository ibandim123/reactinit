import React, { Component } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom';

import './style.css'


export default class Main extends Component {
   
    //Conceito de estado (armazenamento):
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };
    //Método executa uma ação logo que o componente é exibido em tela
    componentDidMount() {
        //função da mesma classe para exibir produtos
        this.loadProducts(); 
    }

    loadProducts = async (page = 1) => {
        //executando Api utilizando o método Get
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo} = response.data;
        //Prencher o estado no array, atualizando os produtos
        this.setState({ products: docs, productInfo, page });
    };

    //Próxima página e página anterior

    prevPage = () => {
        const { page, productInfo } = this.state;

        if ( page === 1 ) return; 

        const pageNumber = page - 1; 

        this.loadProducts(pageNumber);
    };
 
    nextPage = () => {
        const { page, productInfo } = this.state;

        if( page === productInfo.page ) return;

        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    };

    render() {
        //O trecho "this.state.products.length" ouviu queo estado products foi alterado.
        //<h1>Contagem de produtos: {this.state.products.length}</h1>
    const { product,page,productInfo } = this.state;
    
    return  (
        <div className="product-list">
            { this.state.products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`} href ="">Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
            </div>
        </div>
    )
    }
} 