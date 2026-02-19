import {useState} from "react";
import "./index.css";
import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";
import {InputRange} from "./components/forms/InputRange.jsx";

const PRODUCTS = [
    {category: "Fruits", price: 1, stocked: true, name: "Apple"},
    {category: "Fruits", price: 1, stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: 2, stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: 2, stocked: true, name: "Spinach"},
    {category: "Vegetables", price: 4, stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: 1, stocked: true, name: "Peas"}
];

function App() {

    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [rangeValue, setRangeValue] = useState(0);

    const visibleProducts = PRODUCTS.filter((product) => {
        if( showStockedOnly && !product.stocked) {
            return false
        }
        if(searchValue && !product.name.includes(searchValue)){
            return false
        }
        if(rangeValue < product.price){
            console.log(rangeValue)
            return false
        }
        return true
    })


    return <div className="mx-auto flex flex-col justify-center">
        <SearchBar
            value={searchValue}
            onSearchValueChange={setSearchValue}
            checked={showStockedOnly}
            onStockedOnlyChange = {setShowStockedOnly}
            onRangeChange={setRangeValue}
        />
        <ProductTable products={visibleProducts}/>
    </div>
}

function SearchBar({checked, onStockedOnlyChange, value, onSearchValueChange, onRangeChange}) {
    return <div>
        <Input
            value={value}
            onChange={onSearchValueChange}
            placeholder="Rechercher" />
        <Checkbox
            id="stocker"
            label="N'afficher que les produits en stocks"
            checked={checked}
            onChange={onStockedOnlyChange} />
        <InputRange
            min={0}
            max={10}
            onChange={onRangeChange}
        />
    </div>
}

function ProductTable({products}) {

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
        }
        rows.push(<ProductRow key={product.name} product={product} />);
        lastCategory = product.category;
    });

    return <table className="text-center w-10/12">
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export default App
