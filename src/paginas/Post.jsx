import React, {useState, useEffect} from 'react';
import { busca } from '../api/api';
import "../assets/css/post.css"
import {useParams, useHistory} from "react-router-dom"
import ListaPost from '../components/ListaPost'

const Post = () =>{
    let history = useHistory()

    const {id} = useParams()
    console.log(id)
    const [post, setPost] = useState({})

    useEffect(()=>{
        busca(`/posts/${id}`, setPost).catch(
            ()=>{
                history.push("/404") // Ele coloca no link e ai ele te joga pro 404, aparecendo a outra tela.
            }
        )
    }, [id])

    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )   
}


export default Post;