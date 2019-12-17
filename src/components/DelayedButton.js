import React from 'react'

export default class DelayedButton extends React.Component {
    handelClick = event => {
        event.persist()
        setTimeout( () => this.props.onDelayedClick(event), 
            this.props.delay
        )
    }

    render() {
        return(
            <button onClick={this.handelClick}>
                Delayed
            </button>
        )
    }
}