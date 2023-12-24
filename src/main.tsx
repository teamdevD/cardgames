import React from 'react'
import ReactDOM from 'react-dom/client'
import Blackjack from './pages/blackjack'
import './pages/css/main.css'




// はじめはAppの中にあるIndexを表示する
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className="background">
          <div className='selectBox'>
              <div className="title">
                  <h1>Select Game</h1>
              </div>
              <div className="selection">
                  <select name="game" id="game">
                      <option value="">--</option>
                      <option value="blackjack">blackjack</option>
                      <option value="war">war</option>
                  </select>
              </div>
              <div className="title">
                  <h1>Select Level</h1>
              </div>
              <div className="selection">
                  <select name="level" id="level">
                      <option value="">--</option>
                      <option value="easy">easy</option>
                      <option value="normal">normal</option>
                      <option value="hard">hard</option>
                  </select>
              </div>
              <div className="title">
                  <h1>Let's Start</h1>
              </div>
              <div className="startButton">
                <button onClick={() => {
                  ReactDOM.createRoot(document.getElementById('root')!).render(
                    <React.StrictMode>
                      <Blackjack />
                    </React.StrictMode>
                  )
                }
                }>Start!</button>
              </div>
          </div>
      </div>
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