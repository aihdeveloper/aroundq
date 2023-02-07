
    
    export interface Thumbnail {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path?: any;
        width: number;
        height: number;
        size: number;
        url: string;
    }

    export interface Small {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path?: any;
        width: number;
        height: number;
        size: number;
        url: string;
    }

    export interface Medium {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path?: any;
        width: number;
        height: number;
        size: number;
        url: string;
    }

    export interface Large {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path?: any;
        width: number;
        height: number;
        size: number;
        url: string;
    }

    export interface Formats {
        thumbnail: Thumbnail;
        small: Small;
        medium: Medium;
        large: Large;
    }

    export interface Attributes2 {
        name: string;
        alternativeText?: any;
        caption?: any;
        width: number;
        height: number;
        formats: Formats;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: any;
        provider: string;
        provider_metadata?: any;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface Datum2 {
        id: number;
        attributes: Attributes2;
    }

    export interface Image {
        data: Datum2[];
    }

    export interface Attributes3 {
        Title: string;
        Slug: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }

    export interface Data {
        id: number;
        attributes: Attributes3;
    }

    export interface Category {
        data: Data;
    }

    export interface Attributes {
        Title: string;
        Content: string;
        Slug: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        Image: Image;
        category: Category;
    }

    export interface Datum {
        id: number;
        attributes: Attributes;
    }

    export interface Pagination {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }

    export interface Meta {
        pagination: Pagination;
    }


    export interface ArticleLists {
        data: Datum[];
        meta: Meta;
    }

