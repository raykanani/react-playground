import React, { useState } from 'react';

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import QuestionCard from '../../components/questionCard'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import { getSortedPostsData } from '../../lib/posts'
import Router from 'next/router'


import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData, prevQuestion, nextQuestion }) {

  const [playing, setPlaying] = useState(true);
  const [answerDuration, setAnswerDuration] = useState(0)
  const [answerProgressPercent, setAnswerProgressPercent] = useState(0)

  

  const handleDuration = (duration) => {
    if (postData.answerDuration) {
      setAnswerDuration(postData.answerDuration)
    } else {
      setAnswerDuration(duration)
    }
  }

  const handleProgress = (progress) => {
    answerDuration < progress.playedSeconds && setPlaying(false);
    // update Percent Progress
    updateAnswerProgressPercent(answerDuration, progress.playedSeconds);
    // go to next video if progress past duration
    answerProgressPercent > 100 && postData.continue && Router.push(`/posts${postData.continue}`)
  }

  const updateAnswerProgressPercent = (answerLength, answerProgress) => {
    const currentAnswerProgressPercent = Math.floor((answerProgress / answerLength) * 100);
    setAnswerProgressPercent(currentAnswerProgressPercent);
  }

  return (
    <Layout prevQuestion={prevQuestion} nextQuestion={nextQuestion}>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
      <div className={utilStyles.videoContainer}>
          {postData.videoUrl && 
            <ReactPlayer 
              url={postData.videoUrl}
              height='100%'
              width='100%'
              className={utilStyles.videoPlayer}
              playing={playing}
              config={{
                youtube: {
                  playerVars: { modestbranding: 1 }
                }
              }}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />
          }
          <div className={utilStyles.overlay}>
            <div className={utilStyles.questionHeader}>
              <QuestionCard question={postData.title} date={<Date dateString={postData.date} />} answerProgress={answerProgressPercent}/>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps( {params} ) {
  const allPostsData = getSortedPostsData()
  console.log(`params.id: ${params.id}`);
  const postData = await getPostData(params.id)
  let postCache = {};
  let nextQuestion = {};
  let prevQuestion = {};
  allPostsData.map(({ id, date, title }) => {
    console.log(`PostCashe.id: ${postCache.id}`);
    if (postCache.id === params.id) {
      nextQuestion = {
        id,
        title,
      }
    }
    if (id === params.id)  {
      prevQuestion = postCache
    }
    postCache = {
      id,
      title
    }
 })
  return {
    props: {
      postData,
      nextQuestion,
      prevQuestion
    }
  }
}