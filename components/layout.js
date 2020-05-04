import Head from 'next/head';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ask Nana Anything'
export const siteTitle = 'Ask Nana Anything'

const Layout = ({children, home, nextQuestion, prevQuestion}) => (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Ask Nana Anything"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/nana.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/nana.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.navigation}>
          {prevQuestion && prevQuestion !== undefined && prevQuestion.title !== undefined && (
            <Link href="/posts/[id]" as={`/posts/${prevQuestion.id}`} scroll={false}>
              <a> ← {prevQuestion.title}</a>
            </Link>
          )}
          {nextQuestion && nextQuestion !== undefined && nextQuestion.title !== undefined && (
            <Link href="/posts/[id]" as={`/posts/${nextQuestion.id}`} scroll={false}>
              <a>{nextQuestion.title} → </a>
            </Link>
          )}
        </div>
      )}
    </div>
)

export default Layout