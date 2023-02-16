


import React from 'react'
import { ArticleLists } from './typings';
const baseUrl = process.env.apiURL;


export default async function getArticles() {
    const res = await fetch(`${baseUrl}api/articles?populate=*`);
    const articles: ArticleLists = await res.json();
    return articles;
}


export async function getArticle(slug: string) {
    const res = await fetch(`${baseUrl}api/articles?filters[slug][$eq]=${slug}&populate=*`);

    const article: ArticleLists = await res.json();
    return article;


}