import React from "react";

const ProduitPage = () => {
  const products = [
    {
      name: "Limonade Artisanale",
      description: "Fraîche et pétillante, à base de citrons de Menton",
      price: "4,50€",
    },
    {
      name: "Sirop de Lavande",
      description: "Douceur provençale dans chaque goutte",
      price: "8,90€",
    },
    {
      name: "Tisane des Collines",
      description: "Mélange de plantes sauvages cueillies à la main",
      price: "12,00€",
    },
    {
      name: "Eau Aromatisée Romarin",
      description: "Fraîcheur méditerranéenne et bienfaits naturels",
      price: "3,20€",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Nos Produits</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez notre gamme de boissons artisanales, créées avec passion et
          des ingrédients d&apos;exception soigneusement sélectionnés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image du produit</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">
                  {product.price}
                </span>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Pourquoi Choisir Matego Drinks ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">100% Naturel</h3>
            <p className="text-gray-600 text-sm">
              Aucun conservateur artificiel, que des ingrédients naturels
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Fait Main</h3>
            <p className="text-gray-600 text-sm">
              Chaque bouteille est préparée avec soin par nos artisans
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Local</h3>
            <p className="text-gray-600 text-sm">
              Ingrédients sourcés chez nos producteurs partenaires locaux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduitPage;
