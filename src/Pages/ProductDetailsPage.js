import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product-list/components/ProductList";

function ProductDetailsPage () {
    return ( 
        <div>
        <Navbar>
            <ProductDetails></ProductDetails>
        </Navbar>

        </div>
     );
}

export default  ProductDetailsPage ;