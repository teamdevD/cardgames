import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import Blackjack from './pages/blackjack'




// はじめはAppの中にあるIndexを表示する
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Blackjack />
  </React.StrictMode>,
)


// {
//     const game = document.getElementById('game') as HTMLInputElement
//     const level = document.getElementById('level') as HTMLInputElement
//     const gameValue = game.value
//     const levelValue = level.value
//     console.log(gameValue, levelValue)
//        if (gameValue === 'blackjack' && levelValue === 'easy') {
//        ReactDOM.createRoot(document.getElementById('root')!).render(
//            <React.StrictMode>
//            <Blackjack />
//            </React.StrictMode>
//        )
//        }
//    }