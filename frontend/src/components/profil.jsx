import React from 'react';

function Profile() {
  return (
    <div className=" mx-auto grid grid-cols-[500px_1fr] max-w-[1200px] min-h-[700px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative lg:max-w-[900px] lg:grid-cols-[400px_1fr] md:max-w-[500px] md:grid-cols-1
    ">
      {/* Navigation en haut */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
        <button className="bg-white/20 text-white p-3 rounded-full backdrop-blur transition hover:bg-white/30 hover:scale-110">
          ←
        </button>
        <button className="bg-white/20 text-white p-3 rounded-full backdrop-blur transition hover:bg-white/30 hover:scale-110">
          ⚙️
        </button>
      </div>

      {/* Section gauche : Image de profil */}
      <div className="
        relative
        overflow-hidden
        bg-gradient-to-br from-[#ff6b6b] to-[#feca57]
        md:h-[400px]
      ">
        {/* Remplace src par ta vraie image */}
        <img
          src="/placeholder.svg?height=700&width=500"
          alt="Photo de profil"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 right-8 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          🟢 En ligne
        </div>
        <div className=" absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-10 text-white
        ">
          <div className="text-4xl font-bold mb-2">Emma, 28</div>
          <div className="text-lg opacity-90 leading-snug">
            Passionnée d'animaux et de nature, toujours prête pour de nouvelles aventures avec mes compagnons à quatre pattes ! 🐕🌿
          </div>
        </div>
      </div>

      {/* Section droite : Détails */}
      <div className="p-10 flex flex-col justify-between md:p-8">
        <div className="flex-1">
          {/* Informations */}
          <div className="flex items-center text-2xl font-bold text-gray-800 mb-6">
            <span className="mr-3 text-3xl">👤</span>
            Informations
          </div>

          <div className="grid grid-cols-2 gap-5 mb-9 lg:grid-cols-1">
            <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
              <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">Genre</div>
              <div className="text-lg text-gray-800 font-medium">Femme</div>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
              <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">Attirée par</div>
              <div className="text-lg text-gray-800 font-medium">Hommes</div>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
              <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">📍 Localisation</div>
              <div className="text-lg text-gray-800 font-medium">Paris, 5km</div>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
              <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">💼 Métier</div>
              <div className="text-lg text-gray-800 font-medium">Vétérinaire</div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl mb-7">
            <div className="font-bold text-gray-800 mb-3 text-lg">À propos de moi</div>
            <div className="text-gray-600 leading-relaxed text-base">
              J'adore passer du temps en plein air avec mes animaux. Passionnée de randonnée, de photographie animalière et de voyages. Je cherche quelqu'un qui partage ma passion pour les animaux et qui aime l'aventure ! J'aime aussi cuisiner des plats végétariens et pratiquer le yoga au coucher du soleil.
            </div>
          </div>

          {/* Intérêts */}
          <div className="mb-7">
            <div className="font-bold text-gray-800 mb-3 text-lg">Centres d'intérêt</div>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "#Randonnée", "#Photographie", "#Voyage", "#Cuisine",
                "#Yoga", "#Lecture", "#Nature", "#Vélo"
              ].map((tag) => (
                <span
                  key={tag}
                  className=" bg-gradient-to-br from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition hover:-translate-y-0.5
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Compagnons */}
          <div className="bg-gradient-to-br from-pink-300 to-pink-100 p-6 rounded-xl mb-7 text-white">
            <div className="font-bold mb-3 text-lg">🐾 Mes compagnons</div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/30 px-4 py-2 rounded-full text-base font-medium backdrop-blur">🐕 Chien (Golden Retriever)</span>
              <span className="bg-white/30 px-4 py-2 rounded-full text-base font-medium backdrop-blur">🐱 Chat (Maine Coon)</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t-2 border-gray-100 pt-8">
          <div className="flex gap-5">
            <button className=" flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gray-100 text-gray-600 border-2 border-gray-200 transition hover:-translate-y-1 hover:shadow-lg
            ">
              👎 Passer
            </button>
            <button className=" flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-br from-indigo-400 to-purple-500 text-white transition hover:-translate-y-1 hover:shadow-lg
            ">
              💬 Message
            </button>
            <button className=" flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-br from-pink-500 to-orange-400 text-white transition hover:-translate-y-1 hover:shadow-lg
            ">
              ❤️ J'aime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
