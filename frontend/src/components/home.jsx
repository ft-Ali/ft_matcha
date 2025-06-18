"use client"

import  useState  from "react"
import  Button  from "./UI/Button"
import  Input  from "./UI/Input"
import  Label  from "./UI/Label"

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const openLoginModal = () => {
    setShowLoginModal(true)
    setShowRegisterModal(false)
  }

  const openRegisterModal = () => {
    setShowRegisterModal(true)
    setShowLoginModal(false)
  }

  const closeModals = () => {
    setShowLoginModal(false)
    setShowRegisterModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <img class="rounded-full w-[110px] h-[110px]" src="image/logo.png" alt="image description"/>
      {/* Header & Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center text-2xl font-bold text-purple-600">
            <span className="text-3xl mr-2">🐾</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">PetMatch</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 font-medium">
              Comment ça marche
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium">
              Témoignages
            </a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600 font-medium">
              FAQ
            </a>
          </nav>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={openLoginModal}
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Connexion
            </Button>
            <Button
              onClick={openRegisterModal}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Inscription
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Trouvez l'amour grâce à vos animaux de compagnie
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Rejoignez la première communauté de rencontres dédiée aux propriétaires d'animaux. Partagez votre passion et
            trouvez l'âme sœur qui aime autant les animaux que vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={openRegisterModal}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Commencer gratuitement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
            >
              En savoir plus
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="/placeholder.svg?height=500&width=800"
              alt="Couple avec leurs animaux"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Pourquoi choisir PetMatch ?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez ce qui fait de PetMatch l'application de rencontres préférée des propriétaires d'animaux
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6">🐶</div>
              <h3 className="text-2xl font-bold mb-4">Compatibilité animale</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre algorithme prend en compte vos animaux et leurs caractéristiques pour vous proposer des matchs
                compatibles.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Communauté vérifiée</h3>
              <p className="text-gray-600 leading-relaxed">
                Tous nos membres sont vérifiés pour garantir une communauté authentique de véritables amoureux des
                animaux.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="text-2xl font-bold mb-4">Rencontres locales</h3>
              <p className="text-gray-600 leading-relaxed">
                Trouvez des célibataires près de chez vous pour organiser facilement des balades avec vos compagnons à
                quatre pattes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Comment ça marche</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Trois étapes simples pour commencer votre aventure sur PetMatch
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Création de profil"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-3xl font-bold mb-4">Créez votre profil</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Inscrivez-vous gratuitement et créez votre profil en ajoutant vos photos, vos centres d'intérêt et les
                  informations sur vos animaux de compagnie.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Découverte de profils"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-3xl font-bold mb-4">Découvrez des profils</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Parcourez les profils de célibataires qui partagent votre passion pour les animaux et qui
                  correspondent à vos critères.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Rencontre"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-3xl font-bold mb-4">Rencontrez-vous</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Discutez avec vos matchs et organisez une rencontre dans un parc ou un café pet-friendly pour faire
                  connaissance avec vos animaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto opacity-90">
            Découvrez les histoires de nos membres qui ont trouvé l'amour grâce à PetMatch
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <p className="text-lg mb-6 italic leading-relaxed">
                "Grâce à PetMatch, j'ai rencontré Thomas qui a un Labrador comme moi. Nos chiens se sont tout de suite
                entendus, et nous aussi ! Nous sommes ensemble depuis 6 mois maintenant."
              </p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=60&width=60" alt="Sophie" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold">Sophie, 32 ans</div>
                  <div className="text-sm opacity-80">🐕 Propriétaire d'un Labrador</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <p className="text-lg mb-6 italic leading-relaxed">
                "Je cherchais quelqu'un qui comprendrait ma passion pour les chats. Sur PetMatch, j'ai trouvé Julie qui
                en a trois ! Nous avons emménagé ensemble et nos chats forment maintenant une grande famille."
              </p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=60&width=60" alt="Marc" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold">Marc, 29 ans</div>
                  <div className="text-sm opacity-80">🐱 Propriétaire de 2 chats</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <p className="text-lg mb-6 italic leading-relaxed">
                "En tant que vétérinaire, je voulais rencontrer quelqu'un qui partage mon amour pour les animaux.
                PetMatch m'a permis de trouver Léa, et maintenant nous organisons des randonnées avec nos chiens tous
                les weekends !"
              </p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=60&width=60" alt="Antoine" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold">Antoine, 35 ans</div>
                  <div className="text-sm opacity-80">🐕 Propriétaire d'un Berger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Prêt à rencontrer des célibataires qui aiment les animaux ?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Rejoignez des milliers de propriétaires d'animaux à la recherche de l'amour. L'inscription est gratuite et
            ne prend que quelques minutes.
          </p>
          <Button
            size="lg"
            onClick={openRegisterModal}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
          >
            Créer un compte gratuitement
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center text-2xl font-bold mb-4">
                  <img class="rounded-full w-[110px] h-[110px]" src="image/logo.png" alt="image description"/>
              </div>
              <p className="text-gray-400 mb-6">
                La première application de rencontres dédiée aux propriétaires d'animaux de compagnie.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  f
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  in
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  📷
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  🐦
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white">
                    Comment ça marche
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white">
                    Témoignages
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Conditions d'utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Aide & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partenariats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carrières
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PetMatch. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button onClick={closeModals} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="votre@email.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input id="login-password" type="password" placeholder="Votre mot de passe" className="mt-1" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">Se connecter</Button>
              <div className="text-center text-sm text-gray-600">
                <p>
                  Vous n'avez pas de compte ?{" "}
                  <button type="button" onClick={openRegisterModal} className="text-purple-600 hover:underline">
                    S'inscrire
                  </button>
                </p>
                <p>
                  <a href="#" className="text-purple-600 hover:underline">
                    Mot de passe oublié ?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative">
            <button onClick={closeModals} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="register-name">Nom complet</Label>
                <Input id="register-name" type="text" placeholder="Votre nom" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" placeholder="votre@email.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="register-password">Mot de passe</Label>
                <Input id="register-password" type="password" placeholder="Créez un mot de passe" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="register-pet">Type d'animal</Label>
                <Input id="register-pet" type="text" placeholder="Chien, chat, lapin, etc." className="mt-1" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">Créer mon compte</Button>
              <div className="text-center text-sm text-gray-600">
                <p>
                  Vous avez déjà un compte ?{" "}
                  <button type="button" onClick={openLoginModal} className="text-purple-600 hover:underline">
                    Se connecter
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
