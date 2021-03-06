import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increaseDay } from '../redux/actions/world'

class WorldLogic extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    world: PropTypes.object.isRequired
  }

  state = {
    dayLength: 12000
  }

  dayIncreaseInterval = setInterval(() => {
    const { dispatch } = this.props
    dispatch(increaseDay())
  }, this.props.world.dayLength)

  componentDidUpdate() {
    const { dayLength } = this.state
    const { world } = this.props
    if (dayLength !== world.dayLength) {
      clearInterval(this.dayIncreaseInterval)
      this.setState(() => ({ dayLength: world.dayLength }))
      this.dayIncreaseInterval = setInterval(() => {
        const { dispatch } = this.props
        dispatch(increaseDay())
      }, world.dayLength)
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = ({ world }) => {
  return { world }
}

export default connect(mapStateToProps)(WorldLogic)
