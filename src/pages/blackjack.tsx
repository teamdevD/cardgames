import './css/blackjack.css'
import { Player } from '../components/player/player'
import drawCard from './parts/card'
import displayCard from './parts/card'
import { useState } from 'react'


    let player = new Player('Player')
    let dealer = new Player('Dealer')

    const draw = drawCard.drawCard
    const display = displayCard.displayCard

    //dealerに2枚配る　ただし21を超えないようにする 超えたらdealercard2を引き直す
    let dealercard1 = draw()
    let dealercard2 = draw()
    dealercard2.surface = 'back'

    while (dealercard1.number + dealercard2.number > 21) {
        dealercard2 = draw()
        dealercard2.surface = 'back'
    }

    dealer.setHandCards([dealercard1, dealercard2])

    //playerに1枚配る
    let playercard1 = draw()
    player.setHandCards([playercard1])


function Blackjack() {
    const [count, setCount] = useState(0)

    const stand = () => {
        //dealerのカードを表にする
        dealercard2.surface = 'front'
        dealer.calSumNumber()
        //dealerのカードの合計を計算する
        let dealernumber = dealer.getSumNumber()
        //playerのカードの合計を計算する
        player.calSumNumber()
        let playernumber = player.getSumNumber()
        //dealerのカードの合計が21を超えたらplayerの勝ち
        if (dealernumber > 21) {
            alert('You win!')
        }//playerのカードの合計が21を超えたらplayerの負け
        else if (playernumber > 21) {
            alert('You lose...')
        }//カード合計が21に近い方の勝ち
        else if (dealernumber > playernumber) {
            alert('You lose...')
        } else if (dealernumber < playernumber) {
            alert('You win!')
        } else {
            alert('Draw')
        }
        setCount(count + 1)
    }

    const hit = () => {
        //playerにカードを1枚配る
        let addCard = draw()
        addCard.surface = 'front'
        player.setHandCard(addCard)
        console.log(player.getHandCards())
        setCount(count + 1)
    
    }




  return (
      <>
      <div className="background2">
          <div className="dealer">
                <div className="dealer-card">
                    {/* dealerのカードを横並びにする */}
                    {display(dealercard1)}
                    {display(dealercard2)}
                </div>
          </div>
          <div className="player">
                <div className="player-card">
                    {/* playerのカードをすべて表示する map関数を使う */}
                    {player.getHandCards().map((card) => (
                        display(card)
                    ))}
                </div>
          </div>
                          {/* standかhitかを選択するボタン */}
            <div className="player-button">
                <button className="stand-button" onClick={stand}>Stand</button>
                {/*Hit buttonはカードを追加で一枚引いて表示する*/}
                <button className="hit-button" onClick={hit} >Hit</button>
            </div>
        </div>
      </>
      )
}
export default Blackjack

