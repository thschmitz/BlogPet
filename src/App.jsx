import React from 'react'
import './assets/css/base/base.css'
import Home from "./paginas/Home"
import Sobre from "./paginas/Sobre"
import Pagina404 from "./paginas/Pagina404"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Cabecalho from './components/Cabecalho'
import Post from "./paginas/Post"
import Categoria from './paginas/Categoria'

function App() {
  return (
  <>
    <Router>
      <Cabecalho/>
      <Switch> {/* Garante que o React nao vai ficar procurando outra rota abaixo */}
        <Route exact path="/"> {/* Se usa o "exact" pra aparecer somente um deles na rota */}
          <Home/>
        </Route>

        <Route path="/sobre">
          <Sobre/>
        </Route>

        <Route path="/categoria/:id">
          <Categoria/>
        </Route>

        <Route path="/posts/:id">
          <Post/>
        </Route>

        <Route> {/* Vai passando pelos caminhos acima, nao vai achar, e vai vir pra ca, que definimos como padrao */}
          <Pagina404/>
        </Route>
      </Switch>
    </Router>
     
  </>
  )
}

export default App
