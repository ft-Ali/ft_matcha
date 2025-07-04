"use client"

import  {useState}  from "react"
import  Button  from "./UI/Button"
import { Card, CardContent } from "./UI/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./UI/Tabs"
import  Badge  from "./UI/Badge"
import  Input  from "./UI/Input"
import { useNavigate } from 'react-router-dom';


export default function LikesPage() {
  const [activeTab, setActiveTab] = useState("received")
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();
  // Données simulées
  const receivedLikes = [
    {
      id: 1,
      name: "Sophie Martin",
      age: 26,
      distance: "3 km",
      photo: "/image/mbappe.png",
      pets: ["🐕 Golden Retriever"],
      isOnline: true,
      likedAt: "Il y a 2h",
      bio: "Amoureuse des animaux et de la nature",
      mutual: false,
    },
    {
      id: 2,
      name: "Lucas Dubois",
      age: 29,
      distance: "7 km",
      photo: "/image/mbappe.png",
      pets: ["🐱 Maine Coon", "🐱 Persan"],
      isOnline: false,
      likedAt: "Il y a 5h",
      bio: "Passionné de photographie animalière",
      mutual: false,
    },
    {
      id: 3,
      name: "Marie Leroy",
      age: 31,
      distance: "12 km",
      photo: "/image/mbappe.png",
      pets: ["🐰 Lapin nain"],
      isOnline: true,
      likedAt: "Il y a 1j",
      bio: "Vétérinaire et amoureuse des petits animaux",
      mutual: false,
    },
  ]

  const sentLikes = [
    {
      id: 4,
      name: "Thomas Bernard",
      age: 33,
      distance: "5 km",
      photo: "/image/mbappe.png",
      pets: ["🐕 Husky"],
      isOnline: false,
      likedAt: "Il y a 3h",
      bio: "Aventurier avec mon fidèle compagnon",
      mutual: false,
    },
    {
      id: 5,
      name: "Julie Moreau",
      age: 27,
      distance: "9 km",
      photo: "/image/mbappe.png",
      pets: ["🐦 Perroquet"],
      isOnline: true,
      likedAt: "Il y a 1j",
      bio: "Dresseuse d'oiseaux professionnelle",
      mutual: false,
    },
  ]

  const matches = [
    {
      id: 6,
      name: "Alex Petit",
      age: 28,
      distance: "4 km",
      photo: "/image/mbappe.png",
      pets: ["🐕 Border Collie"],
      isOnline: true,
      likedAt: "Il y a 30min",
      bio: "Coach canin et passionné de sport",
      mutual: true,
      hasUnreadMessage: true,
    },
    {
      id: 7,
      name: "Emma Rousseau",
      age: 25,
      distance: "6 km",
      photo: "/image/mbappe.png",
      pets: ["🐱 Chat de gouttière", "🐠 Poissons"],
      isOnline: false,
      likedAt: "Il y a 2j",
      bio: "Étudiante vétérinaire",
      mutual: true,
      hasUnreadMessage: false,
    },
  ]

  const handleLike = (userId) => {
    console.log("Like user:", userId)
    // Logique pour liker en retour
  }

  const handlePass = (userId) => {
    console.log("Pass user:", userId)
    // Logique pour passer
  }

  const handleMessage = (userId) => {
    console.log("Message user:", userId)
    // Redirection vers la messagerie
  }

  const filteredData = (data) => {
    return data.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const PersonCard = ({ person, showActions = true, isMatch = false }) => (
    <Card className="group bg-white/60 backdrop-blur-sm border-purple-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={person.photo || "/placeholder.svg"}
            alt={person.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>

          {/* Status en ligne */}
          {person.isOnline && (
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>En ligne</span>
            </div>
          )}

          {/* Badge match */}
          {isMatch && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
              💕 MATCH
            </div>
          )}

          {/* Message non lu */}
          {person.hasUnreadMessage && (
            <div className="absolute top-12 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              💬 Nouveau message
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Informations en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">
                {person.name}, {person.age}
              </h3>
              <span className="text-sm opacity-90">📍 {person.distance}</span>
            </div>
            <p className="text-sm opacity-90 mb-2">{person.bio}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {person.pets.map((pet, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white border-0">
                  {pet}
                </Badge>
              ))}
            </div>
            <p className="text-xs opacity-75">{person.likedAt}</p>
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="p-4">
            {isMatch ? (
              <Button
                onClick={() => handleMessage(person.id)}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
              >
                💬 Envoyer un message
              </Button>
            ) : (
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => handlePass(person.id)}
                  className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  👎 Passer
                </Button>
                <Button
                  onClick={() => handleLike(person.id)}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                >
                  ❤️ J'aime
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/dashboard')} variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour au dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Mes Likes
                </h1>
                <p className="text-sm text-gray-600">Gérez vos likes et découvrez vos matchs</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 border-purple-200 focus:border-purple-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Navigation des onglets */}
          <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-purple-100">
            <TabsTrigger
              value="received"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white relative"
            >
              💕 Reçus
              <Badge className="ml-2 bg-red-500 text-white text-xs">{receivedLikes.length}</Badge>
            </TabsTrigger>
            <TabsTrigger
              value="sent"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              📤 Envoyés
              <Badge className="ml-2 bg-blue-500 text-white text-xs">{sentLikes.length}</Badge>
            </TabsTrigger>
            <TabsTrigger
              value="matches"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              🔥 Matchs
              <Badge className="ml-2 bg-green-500 text-white text-xs">{matches.length}</Badge>
            </TabsTrigger>
          </TabsList>

          {/* Onglet Likes reçus */}
          <TabsContent value="received" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Likes reçus</h2>
              <p className="text-gray-600">Ces personnes vous ont liké ! Likez en retour pour créer un match.</p>
            </div>

            {filteredData(receivedLikes).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData(receivedLikes).map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💔</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun like reçu</h3>
                <p className="text-gray-600">Soyez patient, votre profil parfait vous trouvera bientôt !</p>
              </div>
            )}
          </TabsContent>

          {/* Onglet Likes envoyés */}
          <TabsContent value="sent" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Likes envoyés</h2>
              <p className="text-gray-600">Vous avez liké ces profils. Attendez qu'ils vous likent en retour !</p>
            </div>

            {filteredData(sentLikes).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData(sentLikes).map((person) => (
                  <PersonCard key={person.id} person={person} showActions={false} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">👀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun like envoyé</h3>
                <p className="text-gray-600">Commencez à explorer et likez les profils qui vous plaisent !</p>
              </div>
            )}
          </TabsContent>

          {/* Onglet Matchs */}
          <TabsContent value="matches" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Vos matchs</h2>
              <p className="text-gray-600">
                Félicitations ! Vous vous êtes likés mutuellement. Commencez la conversation !
              </p>
            </div>

            {filteredData(matches).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData(matches).map((person) => (
                  <PersonCard key={person.id} person={person} isMatch={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun match pour le moment</h3>
                <p className="text-gray-600">Continuez à liker des profils pour créer vos premiers matchs !</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
