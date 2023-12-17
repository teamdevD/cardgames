import './css/blackjack.css'
import CardGame from './parts/card'


function Blackjack() {
  return (
      <>
      <div className="background">
          <div className="cards">
              <CardGame />
          </div>
      </div>
      </>
      )
}
export default Blackjack

