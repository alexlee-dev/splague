import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button, Form, RadioButton } from 'grommet'
import { chooseMode } from '../redux/actions/player'
import {
  changeBackground,
  changeScreen,
  transitionScreen
} from '../redux/actions/ui'

export class ChooseMode extends Component {
  static propTypes = {
    // From connect()
    dispatch: PropTypes.func.isRequired,
    // From mapStateToProps()
    player: PropTypes.object.isRequired,
    // From mapStateToProps()
    ui: PropTypes.object.isRequired
  }

  setBackgroundColor = mode => {
    switch (mode) {
      case 'cure':
        return 'accent-1'
      case 'plague':
        return '#252839'
      default:
        return 'white'
    }
  }

  handleHoverCure = () => {
    const { dispatch, ui } = this.props
    const { mode } = this.props.player
    if (!mode) {
      dispatch(changeBackground('accent-1'))
    } else {
      if (ui.background !== 'accent-1' && !ui.isTransitioning) {
        dispatch(changeBackground('accent-1'))
      }
    }
  }

  handleHoverBad = () => {
    const { dispatch, ui } = this.props
    const { mode } = this.props.player
    if (!mode) {
      dispatch(changeBackground('#252839'))
    } else {
      if (ui.background !== '#252839' && !ui.isTransitioning) {
        dispatch(changeBackground('#252839'))
      }
    }
  }

  handleMouseLeave = () => {
    const { dispatch, ui } = this.props
    const { mode } = this.props.player
    if (!mode) {
      dispatch(changeBackground('white'))
    } else {
      if (mode === 'cure' && ui.background === '#252839') {
        dispatch(changeBackground('accent-1'))
      } else if (mode === 'plague' && ui.background === 'accent-1') {
        dispatch(changeBackground('#252839'))
      }
    }
  }

  handleModeSelection = e => {
    const { dispatch } = this.props
    const mode = e.target.name
    dispatch(chooseMode(mode))
  }

  handleContinue = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(transitionScreen(true, 'animated fadeOut'))

    setTimeout(() => {
      dispatch(transitionScreen(false, 'animated fadeIn'))
      dispatch(changeScreen('chooseName'))
    }, 1500)
  }

  render() {
    const { player, ui } = this.props
    return (
      <Box
        align="center"
        className={ui.transitionClasses}
        fill
        justify="center"
      >
        <Form onSubmit={e => this.handleContinue(e)}>
          <Box align="center">
            <Box direction="row" gap="medium">
              <Box
                onMouseLeave={this.handleMouseLeave}
                onMouseEnter={this.handleHoverCure}
              >
                <RadioButton
                  checked={player.mode === 'cure'}
                  disabled={ui.isTransitioning}
                  label="Cure"
                  name="cure"
                  onChange={this.handleModeSelection}
                />
              </Box>
              <Box
                onMouseLeave={this.handleMouseLeave}
                onMouseEnter={this.handleHoverBad}
              >
                <RadioButton
                  checked={player.mode === 'plague'}
                  disabled={ui.isTransitioning}
                  label="Plague"
                  name="plague"
                  onChange={this.handleModeSelection}
                />
              </Box>
            </Box>
            {player.mode && (
              <Box
                className="animated fadeInUp"
                margin={{ top: 'xlarge' }}
                style={{ position: 'absolute' }}
              >
                <Button
                  label="Continue"
                  onClick={this.handleContinue}
                  primary
                  type="button"
                />
              </Box>
            )}
          </Box>
        </Form>
      </Box>
    )
  }
}

const mapStateToProps = ({ player, ui }) => {
  return { player, ui }
}

export default connect(mapStateToProps)(ChooseMode)
