import { ArticleLists } from '@/typings';
import React from 'react';
import Link from 'next/link';
import getArticles from '@/api_services';




export default async function ArticleList() {

    const articles = await getArticles();
    console.log(articles);


    return (
        <div>
            ArticleList
            {
                articles.data.map((res) => {

                    return (
                        <div key={res.id} className="card w-96 bg-base-100 shadow-xl">
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
    )
}

