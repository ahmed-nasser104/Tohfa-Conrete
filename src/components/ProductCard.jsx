export default function ProductCard({ product }) {
  const message = `السلام عليكم 
عايز أطلب المنتج ده:

 المنتج: ${product.name}
 السعر: ${product.price} جنيه

ممكن أعرف تفاصيل الطلب والتوصيل؟`;
  const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="card bg-base-100 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <figure className="relative w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
        />
        <img
          src={product.image}
          alt={product.name}
          className="relative w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <div className="card-body p-5">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="text-sm text-base-content/70 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-bold text-lg">
            {product.price} ج.م
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm rounded-full"
          >
            اطلبي دلوقتي
          </a>
        </div>
      </div>
    </div>
  );
}
