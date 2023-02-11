import { getArticle } from '@/api_services';
import React from 'react'



export default async function ArticlePage({ params }: { params: any }) {
    const slug = params.slug;

    const article = await getArticle(slug);

    return (
        <>
            <div>ArticlePage  </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={article.data[0].attributes.Image.data[0].attributes.formats.medium.url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{article.data[0].attributes.Title}</h2>
                    <p>{article.data[0].attributes.Content}</p>

                </div>
            </div>
        </>
    )
}
