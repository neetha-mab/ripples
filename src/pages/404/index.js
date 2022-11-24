import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { ImSad } from 'react-icons/im';
import styles from './errorpage.module.scss';

const ErrorPage = () => {
    const goBack = () => {
        history.back();
    }

    return (
        <Layout title="Home" description="Home page" keywords="Home page">
            <section className={styles.error_page}>
                <div className={`${styles.container} ${styles.block_element}`}>
                    <ImSad />
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The Page you are looking for doesn't exist or another error occurred. <button type="button" onClick={() => goBack()}>Go back</button></p>
                </div>
            </section>
        </Layout>
    )
}

export default ErrorPage