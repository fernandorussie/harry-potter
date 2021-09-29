import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import * as S from './style'

export default function App() {
  return (
    <S.Background>
        <Header />
        <S.Caixa>
        </S.Caixa>
        <Footer />
    </S.Background>
  )
}