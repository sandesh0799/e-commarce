import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Layout>
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-wrap">
                    Lorem Ipsum
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-wrap">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default About