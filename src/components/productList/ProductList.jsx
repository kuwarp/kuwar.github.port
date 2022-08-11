import "../productList/productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Practise & Codes</h1>
        <p className="pl-desc">
          Attractive Web-Designs and practise of desired languge <br/> And i loved JavaScript most
        </p>
        <h5>........................................................................</h5>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} 
          img={item.imge} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
