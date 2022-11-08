import data from "./data";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";


function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <a href="/">MonAnnonace</a>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                    <h1>Featured Products</h1>
                    <div className="products">
                        {
                            data.products.map(product => (
                                <div className="product" key={product.slug}>
                                    <a href={'/product/${product.slug}'}>
                                        <img src={product.image} alt={product.name}/>
                                    </a>
                                    <div className="product-info">
                                        <a href={'/product/${product.slug}'}>
                                            <p>{product.name}</p>
                                        </a>
                                        <a href={'/product/${product.slug}'}>
                                            <p><strong>€{product.price}</strong></p>
                                        </a>

                                        <button>Add to cart</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
