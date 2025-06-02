import React from "react";
import './home.css';

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent } from "@/components/ui/card";


export default function Home() {
        const [showLoginModal, setShowLoginModal] = useState(false)
        const [showRegisterModal, setShowRegisterModal] = useState(false)
        const [currentSlide, setCurrentSlide] = useState(0)

        const testimonials = [
            {
            name: "Marie & Lucas",
            pets: "Golden Retriever & Husky",
            story: "Nos chiens se sont rencontrés avant nous ! Maintenant nous formons une famille de 4.",
            image: "/placeholder.svg?height=300&width=300",
            },
            {
            name: "Sophie & Thomas",
            pets: "2 Chats Maine Coon",
            story: "Grâce à PetMatch, j'ai trouvé quelqu'un qui comprend ma passion pour les félins.",
            image: "/placeholder.svg?height=300&width=300",
            },
            {
            name: "Alex & Emma",
            pets: "Lapin & Cochon d'Inde",
            story: "Qui aurait cru que nos petits compagnons nous rapprocheraient autant ?",
            image: "/placeholder.svg?height=300&width=300",
            },
        ]
        useEffect(() => {
            const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
            }, 4000)
            return () => clearInterval(timer)
        }, [])
        useEffect(() => {
            const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
            }, 4000)
            return () => clearInterval(timer)
        }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Floating Navigation */}
      <div className="bg-green-500 text-white p-6 rounded-xl text-2xl font-bold">
      🎉 Tailwind fonctionne !
    </div>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-xl border border-white/20">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🐾</span>
            </div>
            <span className="font-bold text-gray-800">PetMatch</span>
          </div>

          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
              Découvrir
            </a>
            <a href="#stories" className="text-gray-600 hover:text-purple-600 transition-colors">
              Histoires
            </a>
            <a href="#download" className="text-gray-600 hover:text-purple-600 transition-colors">
              App
            </a>
          </div>

          <div className="flex space-x-3">
            {/* <Button variant="ghost" size="sm" onClick={openLoginModal} className="text-gray-600 hover:text-purple-600">
              Connexion
            </Button>
            <Button
              size="sm"
              onClick={openRegisterModal}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6"
            >
              Rejoindre
            </Button> */}
          </div>
        </div>
      </nav>

      Hero Section avec animation
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-60 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-300 rounded-full opacity-60 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <span className="text-2xl mr-2">💕</span>
              <span className="text-sm font-medium text-gray-700">Plus de 50,000 couples formés</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                L'amour
              </span>
              <br />
              <span className="text-gray-800">à quatre pattes</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Connectez-vous avec des personnes qui partagent votre amour pour les animaux. Parce que les meilleures
              histoires d'amour commencent souvent par une truffe humide et une queue qui remue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Button
                size="lg"
                onClick={openRegisterModal}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="mr-2">🚀</span>
                Commencer l'aventure
              </Button> */}
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 text-lg"
              >
                <span className="mr-2">📱</span>
                Télécharger l'app
              </Button> */}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span>
                Inscription gratuite
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span>
                Profils vérifiés
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span>
                100% sécurisé
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Couple heureux avec leurs animaux"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">Emma, 28</div>
                  <div className="text-xs text-gray-500">🐕 Golden Retriever</div>
                </div>
                <div className="text-red-500">❤️</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float delay-1000">
              <div className="flex items-center space-x-3">
                <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">Lucas, 31</div>
                  <div className="text-xs text-gray-500">🐱 Maine Coon</div>
                </div>
                <div className="text-red-500">❤️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features avec design cards moderne */}
      <section id="features" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Pourquoi PetMatch ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience de rencontre unique, pensée spécialement pour les amoureux des animaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-50 to-purple-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Matching Intelligent</h3>
                <p className="text-gray-600 leading-relaxed">
                  Notre IA analyse la compatibilité entre vous et vos animaux pour des rencontres parfaites
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-indigo-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Sécurité Maximale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vérification d'identité, modération 24/7 et signalement pour une communauté saine
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-indigo-50 to-pink-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Communauté Globale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rejoignez une communauté mondiale de passionnés d'animaux dans plus de 50 pays
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Success Stories avec carousel */}
      <section
        id="stories"
        className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Histoires de Réussite</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez comment PetMatch a changé la vie de milliers de couples et leurs compagnons
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mx-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-80 object-cover rounded-2xl"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{testimonial.name}</h3>
                          <p className="text-lg opacity-80 mb-6">{testimonial.pets}</p>
                          <p className="text-xl leading-relaxed italic mb-6">"{testimonial.story}"</p>
                          <div className="flex space-x-2">
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <p className="text-gray-600 font-medium">Couples Formés</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                200K+
              </div>
              <p className="text-gray-600 font-medium">Utilisateurs Actifs</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <p className="text-gray-600 font-medium">Satisfaction</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <p className="text-gray-600 font-medium">Pays</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final avec design moderne */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Votre histoire d'amour
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              commence ici
            </span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Rejoignez la communauté PetMatch dès aujourd'hui et découvrez l'amour à travers les yeux de vos compagnons à
            quatre pattes.
          </p>
{/* 
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={openRegisterModal}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-10 py-4 text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="mr-2">💕</span>
              Créer mon profil
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-4 text-lg backdrop-blur-sm"
            >
              <span className="mr-2">📱</span>
              Télécharger l'app
            </Button>
          </div> */}

          <p className="text-sm opacity-70">
            Gratuit pour toujours • Plus de 50,000 couples formés • Disponible sur iOS et Android
          </p>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🐾</span>
              </div>
              <span className="font-bold text-xl">PetMatch</span>
            </div>

            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 PetMatch. Fait avec ❤️ pour les amoureux des animaux.</p>
          </div>
        </div>
      </footer>

      {/* Modales avec nouveau design */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl">
            <button onClick={closeModals} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🐾</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Bon retour !</h2>
              <p className="text-gray-600">Connectez-vous à votre compte</p>
            </div>
            {<form className="space-y-6">
              <div>
                <Label htmlFor="login-email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="votre@email.com"
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-gray-700 font-medium">
                  Mot de passe
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl py-3 text-lg">
                Se connecter
              </Button>
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p>
                  Nouveau sur PetMatch ?{" "}
                  <button
                    type="button"
                    onClick={openRegisterModal}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Créer un compte
                  </button>
                </p>
                <p>
                  <a href="#" className="text-purple-600 hover:underline">
                    Mot de passe oublié ?
                  </a>
                </p>
              </div>
            </form>}
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl">
            <button onClick={closeModals} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💕</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Rejoignez PetMatch</h2>
              <p className="text-gray-600">Trouvez l'amour grâce à vos animaux</p>
            </div>
            <form className="space-y-6">
              <div>
                <Label htmlFor="register-name" className="text-gray-700 font-medium">
                  Nom complet
                </Label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="Votre nom"
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="register-email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="votre@email.com"
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="register-password" className="text-gray-700 font-medium">
                  Mot de passe
                </Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="register-pet" className="text-gray-700 font-medium">
                  Votre compagnon
                </Label>
                <Input
                  id="register-pet"
                  type="text"
                  placeholder="Chien, chat, lapin..."
                  className="mt-2 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl py-3 text-lg">
                Créer mon compte
              </Button>
              <div className="text-center text-sm text-gray-600">
                <p>
                  Déjà membre ?{" "}
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Se connecter
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )
                            }

    </div>
  );

}

