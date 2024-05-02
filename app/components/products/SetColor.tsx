'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps{
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handleColorSelect,
}) => {
    return (<div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            <div></div>
        </div>
      </div>
    );
}
 
export default SetColor;