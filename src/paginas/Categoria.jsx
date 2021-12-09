import React from 'react'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import {Route, useParams, useRouteMatch, Link, Switch} from "react-router-dom"
import {useState, useEffect} from "react"
import { busca } from '../api/api'
import SubCategoria from "../paginas/SubCategoria"

const Categoria = () => {

    const {id} = useParams() // id = Nome do objeto, "bem-estar", "comportamento"
    const { url, path } = useRouteMatch()
    const [ subcategorias, setSubcategorias ] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria) =>{
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet notícias</h2>
        </div>

        <ListaCategorias/>
        <ul className="lista-categorias container flex">
            {
            subcategorias.map((subcategoria)=>(
                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
            ))
            }
        </ul>

        <Switch>
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`}/> {/* procura onde estou pra ver meu id */}
            </Route>

            <Route path={`${path}/:subcategoria`}>
                <SubCategoria/> 
            </Route>
        </Switch>
        

        </>
    )
}

export default Categoria