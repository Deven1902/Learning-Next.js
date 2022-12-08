import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import Link from 'next/link'
import {FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
        <div className={styles.error}>
            <h1> <FaExclamationTriangle/> 404 </h1>

            <h4> Sorry, there is nthg to see here</h4>

            <h4>Come again some time. </h4>

            <Link href="/"> Go back Home </Link>

        </div>
    </Layout>
  )
}
