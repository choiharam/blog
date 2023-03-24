import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";


export default function Project() {
    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>

                </ul>
            </section>
        </Layout>
    )
}