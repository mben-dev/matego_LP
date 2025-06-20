import React from "react";

const NotreHistoirePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Notre Histoire
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Depuis trois générations, la famille Matego perpétue une tradition
          d&apos;excellence dans l&apos;art de créer des boissons
          exceptionnelles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Les Débuts</h2>
          <p className="text-gray-600 mb-6">
            Tout a commencé en 1952 quand notre grand-père, André Matego, a
            ouvert son premier atelier dans un petit village de Provence.
            Passionné par les saveurs authentiques, il développa ses premières
            recettes avec des ingrédients locaux.
          </p>

          <h2 className="text-2xl font-semibold mb-4">L&apos;Évolution</h2>
          <p className="text-gray-600 mb-6">
            Au fil des décennies, ses fils puis ses petits-enfants ont enrichi
            la gamme tout en préservant les méthodes artisanales originales.
            Chaque boisson raconte une histoire, chaque saveur évoque un
            souvenir.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Nos Valeurs</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <span>Respect des traditions familiales</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <span>Qualité des ingrédients sélectionnés</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <span>Savoir-faire artisanal préservé</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
              <span>Innovation respectueuse du patrimoine</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotreHistoirePage;
