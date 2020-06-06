import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import StopButton from 'react-video-recorder/lib/defaults/stop-button'
import Timer from 'react-video-recorder/lib/defaults/timer'
import Countdown from 'react-video-recorder/lib/defaults/countdown'

const RecordRoundButton = styled.button`
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: rgba(227, 73, 28, 0.8);
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    background: #fb6d42;
  }
`

const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonBorder = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`
const Instructions = styled.div`
  font-family: Arial;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1.75px;
  display: flex;
  margin-bottom: 20px;
`

const InstuctionsHighlight = styled.div`
  font-weight: 700;
  color: #dc6547;
  padding: 0 5px;
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

const RecButton = () => (
  <RecWrapper>
    <Instructions>
      <div>PRESS </div>
      <InstuctionsHighlight> REC </InstuctionsHighlight>
      WHEN READY
    </Instructions>

    <ButtonBorder>
      <Button>Record</Button>
    </ButtonBorder>
  </RecWrapper>
)


const ActionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 80px;
`

const VideoRecorderActions = ({
  isVideoInputSupported,
  isInlineRecordingSupported,
  thereWasAnError,
  isRecording,
  isCameraOn,
  streamIsReady,
  isConnecting,
  isRunningCountdown,
  isReplayingVideo,
  countdownTime,
  timeLimit,
  showReplayControls,
  replayVideoAutoplayAndLoopOff,
  useVideoInput,

  onTurnOnCamera,
  onTurnOffCamera,
  onOpenVideoInput,
  onStartRecording,
  onStopRecording,
  onPauseRecording,
  onResumeRecording,
  onStopReplaying,
  onConfirm
}) => {
  const renderContent = () => {
    const shouldUseVideoInput =
      !isInlineRecordingSupported && isVideoInputSupported

    // if (
    //   (!isInlineRecordingSupported && !isVideoInputSupported) ||
    //   thereWasAnError ||
    //   isConnecting ||
    //   isRunningCountdown
    // ) {
    //   return null
    // }

    if (isReplayingVideo) {
      return (
        <Button onClick={onStopReplaying} data-qa='start-replaying'>
          Use another video
        </Button>
      )
    }

    if (isRecording) {
      return <StopButton onClick={onStopRecording} data-qa='stop-recording' />
    }

    if (isCameraOn && streamIsReady) {
      return (
        <Button variant="outlined" onClick={onStartRecording} data-qa='start-recording'>Record</Button>
      )
    }

    if (useVideoInput) {
      return (
        <Button onClick={onOpenVideoInput} data-qa='open-input'>
          Upload a video
        </Button>
      )
    }

    return shouldUseVideoInput ? (
      <Button variant="contained">Hello</Button>
    ) : (
      <RecButton />
    )
  }

  return (
    <div>
      {isRecording && <Timer timeLimit={timeLimit} />}
      {isRunningCountdown && <Countdown countdownTime={countdownTime} />}
      <ActionsWrapper>{renderContent()}</ActionsWrapper>
    </div>
  )
}

VideoRecorderActions.propTypes = {
  isVideoInputSupported: PropTypes.bool,
  isInlineRecordingSupported: PropTypes.bool,
  thereWasAnError: PropTypes.bool,
  isRecording: PropTypes.bool,
  isCameraOn: PropTypes.bool,
  streamIsReady: PropTypes.bool,
  isConnecting: PropTypes.bool,
  isRunningCountdown: PropTypes.bool,
  countdownTime: PropTypes.number,
  timeLimit: PropTypes.number,
  showReplayControls: PropTypes.bool,
  replayVideoAutoplayAndLoopOff: PropTypes.bool,
  isReplayingVideo: PropTypes.bool,
  useVideoInput: PropTypes.bool,

  onTurnOnCamera: PropTypes.func,
  onTurnOffCamera: PropTypes.func,
  onOpenVideoInput: PropTypes.func,
  onStartRecording: PropTypes.func,
  onStopRecording: PropTypes.func,
  onPauseRecording: PropTypes.func,
  onResumeRecording: PropTypes.func,
  onStopReplaying: PropTypes.func,
  onConfirm: PropTypes.func
}

export default VideoRecorderActions