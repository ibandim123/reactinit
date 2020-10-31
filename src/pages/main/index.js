import React, { Component } from 'react';
import api from '../../service/api'


export default class Main extends Component {
   
    //Método executa uma ação logo que o componente é exibido em tela
    componentDidMount() {
        //função da mesma classe para exibir produtos
        this.loadProducts();
    }

    loadProducts = async () => {
        //executando Api utilizando o método Get
        const response = await api.get('/products');

        console.log(response)
    }

    render() {
        return <h1>Hello Rocketseat</h1>
    }
}