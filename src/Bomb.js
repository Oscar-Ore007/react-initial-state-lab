// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
render() {
    const seconds = this.state.secondsLeft;
    const bombMemo = seconds > 0 ? `${seconds} seconds left before I go boom!` : `Boom!`
    return(
        <div>
            {bombMemo}
        </div>
        )
    }
}

export default Bomb
