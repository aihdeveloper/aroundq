import { ArticleLists } from '@/typings';
import React from 'react'

const fetchArticles = async () => {
    const res = await fetch("http://localhost:1337/api/articles?populate=*");
    const articles: ArticleLists = await res.json();
    return articles;
}

export default async function ArticleList() {

    const articles = await fetchArticles();
    // console.log(articles);


    return (
        <div>
            ArticleList
            {
                articles.data.map((res) => {

                    return (
                        <div key={res.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={'http://localhost:1337'+res.attributes.Image.data[0].attributes.formats.medium.url} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{res.attributes.Title}</h2>
                                <p>{res.attributes.Content}</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

