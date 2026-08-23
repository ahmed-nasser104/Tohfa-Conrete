import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/Product.js";
import Contact from "../components/Contact.jsx";
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-4 bg-base-200">
        <h1 className="font-display text-4xl md:text-6xl mb-4">تحفة كونكريت</h1>
        <p className="text-base-content/70 max-w-md mx-auto mb-8">
          مباخر، صواني خطوبة، وإكسسوارات مختارة بعناية لكل مناسبة
        </p>
        <a href="#products" className="btn btn-primary rounded-full px-8">
          تسوقي دلوقتي
        </a>
      </section>

      {/* Categories - فلتر */}
      <section className="py-10 px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`btn rounded-full px-6 ${
              activeCategory === "all" ? "btn-primary" : "btn-outline"
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn rounded-full px-6 ${
                activeCategory === cat.id ? "btn-primary" : "btn-outline"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-10 px-4 md:px-8">
        <h2 className="font-display text-3xl text-center mb-8">منتجاتنا</h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-base-content/60">
            مفيش منتجات في القسم ده دلوقتي
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      <Contact />
    </div>
  );
}
