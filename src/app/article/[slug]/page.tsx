import { getArticle } from '@/api_services';
import React from 'react'



export default async function ArticlePage({ params }: { params: any }) {
    const slug = params.slug;

    const article = await getArticle(slug);

    return (
        <>

            <div className="container mx-auto px-4 mt-4">
                <h1 className="text-center text-2xl	font-bold	">{article.data[0].attributes.Title}</h1>
                <figure className="flex justify-center px-10 pt-10">
                    <img src={article.data[0].attributes.Image.data[0].attributes.formats.medium.url} alt="Shoes" className="rounded-xl max-h-96	" />
                </figure>
                <p className=" px-10 pt-10">{article.data[0].attributes.Content}</p>
            </div>


        </>
    )
}
