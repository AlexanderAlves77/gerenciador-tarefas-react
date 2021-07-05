import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Filtros } from '../components/Filtros'
import { Listagem } from '../components/Listagem'
import { Footer } from '../components/Footer'

export const Home = props => {
  const [tarefas, setTarefas] = useState([
    {
      id: '123wameaa',
      nome: 'Tarefa Mockada 01',
      dataPrevisaoConclusao: '2021-07-05',
      dataConclusao: null,
    },
  ])

  const sair = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('usuarioToken')
    localStorage.removeItem('usuarioEmail')
    props.setAccessToken('')
  }

  return (
    <>
      <Header sair={sair} />
      <Filtros />
      <Listagem tarefas={tarefas} />
      <Footer />
    </>
  )
}
