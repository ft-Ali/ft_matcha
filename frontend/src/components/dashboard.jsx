"use client"

import { useState, useEffect } from "react"
import  Button  from "./UI/Button"
import { Card, CardContent } from "./UI/Card"
import  Badge  from "./UI/Badge"
import { Avatar, AvatarFallback, AvatarImage } from "./UI/Avatar"
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [notifications, setNotifications] = useState({
    newLikes: 5,
    newMessages: 3,
    newMatches: 2,
    profileViews: 12,
  })
const navigate = useNavigate();
  // Mettre à jour l'heure
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Données utilisateur simulées
  const userProfile = {
    name: "Fimesh",
    photo: "/image/ficello.png",
    completionRate: 85,
    lastActive: "En ligne",
  }

  // Données des sections principales
  const mainSections = [
    {
      id: "discover",
      title: "Découvrir",
      subtitle: "Nouveaux profils",
      description: "Explorez de nouveaux profils compatibles avec vous et vos animaux",
      icon: "🔍",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      stats: "12 nouveaux profils",
      action: "Commencer à explorer",
      href: "/profile",
    },
    {
      id: "likes",
      title: "Likes",
      subtitle: "Vos interactions",
      description: "Gérez vos likes reçus, envoyés et découvrez vos nouveaux matchs",
      icon: "💕",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      stats: `${notifications.newLikes} likes reçus`,
      action: "Voir mes likes",
      href: "/likes",
      badge: notifications.newLikes,
    },
    {
      id: "messages",
      title: "Messages",
      subtitle: "Conversations",
      description: "Discutez avec vos matchs et développez vos connexions",
      icon: "💬",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      stats: `${notifications.newMessages} nouveaux messages`,
      action: "Ouvrir les messages",
      href: "/messages",
      badge: notifications.newMessages,
    },
    {
      id: "settings",
      title: "Paramètres",
      subtitle: "Configuration",
      description: "Personnalisez votre expérience et gérez vos préférences",
      icon: "⚙️",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: "Profil à 85% complet",
      action: "Modifier les paramètres",
      href: "/settings",
    },
  ]

  // Activités récentes simulées
  const recentActivity = [
    {
      id: 1,
      type: "like",
      message: "Sophie vous a liké",
      time: "Il y a 5 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      type: "match",
      message: "Nouveau match avec Alex !",
      time: "Il y a 15 min",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      type: "message",
      message: "Lucas vous a envoyé un message",
      time: "Il y a 1h",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]
  const handleSectionClick = (href) => {
    navigate(href); // Navigation côté client
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header avec profil utilisateur */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 border-4 border-purple-200">
                <AvatarImage src={userProfile.photo || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold">
                  {userProfile.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Bonjour,{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {userProfile.name}
                  </span>{" "}
                  !
                </h1>
                <p className="text-gray-600 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>{userProfile.lastActive}</span>
                  <span>•</span>
                  <span>{currentTime.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Profil complété</p>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${userProfile.completionRate}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-purple-600">{userProfile.completionRate}%</span>
                </div>
              </div>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                👤 Mon profil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Message de bienvenue */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Prêt pour de nouvelles aventures ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez de nouveaux profils, gérez vos interactions et trouvez l'amour grâce à vos compagnons à quatre
            pattes
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border-purple-100 text-center p-4">
            <div className="text-2xl font-bold text-pink-600">{notifications.profileViews}</div>
            <div className="text-sm text-gray-600">Vues de profil</div>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-purple-100 text-center p-4">
            <div className="text-2xl font-bold text-purple-600">{notifications.newMatches}</div>
            <div className="text-sm text-gray-600">Nouveaux matchs</div>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-purple-100 text-center p-4">
            <div className="text-2xl font-bold text-indigo-600">{notifications.newLikes}</div>
            <div className="text-sm text-gray-600">Likes reçus</div>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-purple-100 text-center p-4">
            <div className="text-2xl font-bold text-emerald-600">{notifications.newMessages}</div>
            <div className="text-sm text-gray-600">Messages</div>
          </Card>
        </div>

        {/* Sections principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainSections.map((section) => (
            <Card
              key={section.id}
              className={`group bg-gradient-to-br ${section.bgGradient} border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden relative`}
              onClick={() => handleSectionClick(section.href)}
            >
              <CardContent className="p-8">
                {/* Badge de notification */}
                {section.badge && section.badge > 0 && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white animate-pulse">{section.badge}</Badge>
                  </div>
                )}

                {/* Icône et titre */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{section.title}</h3>
                    <p className="text-gray-600 font-medium">{section.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{section.description}</p>

                {/* Statistiques */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-600">{section.stats}</span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <span className="text-xs">→</span>
                  </div>
                </div>

                {/* Bouton d'action */}
             <button key={section.href} onClick={() => handleSectionClick(section.href)}>
          {section.label}
        </button>
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activité récente */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Activité récente</h3>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                Voir tout
              </Button>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors duration-300"
                >
                  <Avatar className="w-12 h-12 border-2 border-purple-200">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} alt="User" />
                    <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.message}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  <div className="text-2xl">
                    {activity.type === "like" && "💕"}
                    {activity.type === "match" && "🔥"}
                    {activity.type === "message" && "💬"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions rapides */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Actions rapides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              📷 Ajouter une photo
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              🐾 Ajouter un animal
            </Button>
            <Button variant="outline" className="border-indigo-300 text-indigo-600 hover:bg-indigo-50">
              ✏️ Modifier ma bio
            </Button>
            <Button variant="outline" className="border-emerald-300 text-emerald-600 hover:bg-emerald-50">
              🎯 Ajuster mes préférences
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
