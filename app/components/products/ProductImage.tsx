"use client";

import { 
    CartProductType, 
    SelectedImgType, 
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
        cartProduct,
        product,
        handleColorSelect,
}) => {
  return (
    <div
      className="grid
        grid-cols-6
        gap-2
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
    ">
      <div
      className="flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
      ">
         {product.images.map((image: SelectedImgType) => {
            return (
                <div key={image.color} onClick={() => handleColorSelect(image)} className="relative w-80%">
                    <Image 
                        src={image.image} 
                        alt={image.color} 
                        fill 
                        className="object-contain"
                    />
                </div>
            )
         })}   
      </div>
      <div></div>
    </div>
  );
};
 
export default ProductImage;