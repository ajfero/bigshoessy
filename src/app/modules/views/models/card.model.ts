export interface Product {

    id: string | number,
    brand: string,
    price: number,
    styleId: string,
    colorway: string | number,
    media: {
        imageUrl: string,
        smallImageUrl: string,
        thumblrUrl: string
    },
    title: string,
    retailPrice: number,

}