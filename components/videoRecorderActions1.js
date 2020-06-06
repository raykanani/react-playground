import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Timer from './videoTimer'
import Countdown from './videoCountdown'

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

const Actions = ({
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
      return <Button onClick={onStopRecording} data-qa='stop-recording'>Stop Recording</Button>
    }

    if (isCameraOn && streamIsReady) {
      return (
        <Button variant="contained" onClick={onStartRecording} data-qa='start-recording' >Record video</Button>
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
      <Button variant="contained" onClick={onOpenVideoInput} data-qa='open-input'>
        Record a video
      </Button>
    ) : (
      <Button variant="contained" onClick={onTurnOnCamera} data-qa='turn-on-camera'>
        Turn my camera ON
      </Button>
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

Actions.propTypes = {
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

export default Actions