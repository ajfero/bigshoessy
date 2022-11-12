export interface Product {
    id: string,
    brand: string,
    colorway: string,
    gender: string,
    media: {
        imageUrl: string,
        smallImageUrl: string,
        thumblrUrl: string
    },
    retailPrice: number,
    styleId: string,
    title: string,
    year: number,
    taxes?: number,
};

// Extend create DTO.
export interface createProductDTO extends Omit<Product, 'id' | 'colorway'> { };

//UPDATE DTO
//El partial, coloca el (?) en todos los atributos (Ésto le indica que son opcionales a la hora de utilizarlos)
export interface UpdateProductDTO extends Partial<createProductDTO> { };