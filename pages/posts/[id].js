import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import QuestionCard from '../../components/questionCard'
import Head from 'next/head'
import ReactPlayer from 'react-player'
import { getSortedPostsData } from '../../lib/posts'


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
      <div className={utilStyles.questionHeader}>
        <h1 className={utilStyles.headingXl}>
          {postData.title}
          <span className={`${utilStyles.lightText} ${utilStyles.date}`}>
            <Date dateString={postData.date} />
          </span>
        </h1>
      </div>
      <div className={utilStyles.videoContainer}>
          {postData.videoUrl && 
            <ReactPlayer 
              url={postData.videoUrl}
              height={500}
              width={300}
              playing
              config={{
                youtube: {
                  playerVars: { modestbranding: 1 }
                }
              }}
            />
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <QuestionCard />
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
  let isCurrentPost = false;
  let nextQuestion = {};
  let prevQuestion = {};
  allPostsData.map(({ id, date, title }) => {
    if (isCurrentPost) {
      nextQuestion = {
        id,
        title,
      }
      return;
    }
    if (id === params.id)  {
      isCurrentPost = true;
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