import getArticles from '@/api_services';
import Link from 'next/link';



import React from 'react'

export default async function ArticlePage() {
    const articles = await getArticles();

    return (
        <>
            <div className='flex flex-row py-5'>
                {
                    articles.data.map((res) => {

                        return (
                            <div key={res.id} className="card w-96 bg-base-100 shadow-xl ml-4">
                                <Link href={'/article/' + res.attributes.Slug}>
                                    <figure><img src={res.attributes.Image.data[0].attributes.formats.medium.url} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{res.attributes.Title}</h2>
                                        <p>{res.attributes.Content}</p>
                                        <div className="card-actions justify-end">
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                    })
                }
            </div>
        </>
    )
}
