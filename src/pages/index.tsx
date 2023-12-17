import './css/main.css'



function Index() {
  return (
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
                <button>Start</button>
              </div>
          </div>
      </div>
  )
}

export default Index
