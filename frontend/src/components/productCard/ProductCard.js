import React, { useState } from 'react'
import ProductCardMobile from './mobile/ProductCardMobile';
import ProductCardDesktop from './desktop/ProductCardDesktop';

function ProductCard() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    console.log(width);
    return width < breakpoint ? < ProductCardMobile /> : <ProductCardDesktop />;
}

export default ProductCard