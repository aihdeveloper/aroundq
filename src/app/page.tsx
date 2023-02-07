import Image from 'next/image'
import { Inter } from '@next/font/google'
import ArticleList from '@/components/article/ArticleList'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ArticleList />
    </>
  )
}
