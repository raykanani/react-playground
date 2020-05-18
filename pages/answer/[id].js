import React, { useState } from 'react';

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import QuestionCard from '../../components/questionCard'
import Head from 'next/head'
import VideoRecorder from 'react-video-recorder'
import { getSortedPostsData } from '../../lib/posts'
import Router from 'next/router'


import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData, prevQuestion, nextQuestion }) {

  return (
    <Layout prevQuestion={prevQuestion} nextQuestion={nextQuestion}>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
      <div className={utilStyles.videoContainer}>
          <VideoRecorder
            isOnInitially
            showReplayControls
          />
          <div className={utilStyles.overlay}>
            <div className={utilStyles.questionHeader}>
              <QuestionCard question={postData.title} date={<Date dateString={postData.date} />} />
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