// "use client"
// import { useNavigate } from "react-router-dom"

// function Profile() {
//   const navigate = useNavigate()

//   // Fame rating sur 100 points avec niveau
//   const fameScore = 87
//   const fameLevel = "Populaire"
//   const nextLevelThreshold = 90
//   const progressToNext = ((fameScore % 10) / 10) * 100

//   const getFameLevelColor = (score) => {
//     if (score >= 90) return "from-purple-500 to-pink-500"
//     if (score >= 70) return "from-blue-500 to-indigo-500"
//     if (score >= 50) return "from-green-500 to-teal-500"
//     if (score >= 30) return "from-yellow-500 to-orange-500"
//     return "from-gray-400 to-gray-500"
//   }

//   const getFameLevelName = (score) => {
//     if (score >= 90) return "Légendaire"
//     if (score >= 70) return "Populaire"
//     if (score >= 50) return "Apprécié"
//     if (score >= 30) return "Émergent"
//     return "Nouveau"
//   }

//   const getFameLevelIcon = (score) => {
//     if (score >= 90) return "👑"
//     if (score >= 70) return "🔥"
//     if (score >= 50) return "⭐"
//     if (score >= 30) return "🌟"
//     return "🌱"
//   }

//   return (
//     <div className="mx-auto grid grid-cols-[500px_1fr] max-w-[1200px] min-h-[700px] bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative lg:max-w-[900px] lg:grid-cols-[400px_1fr] md:max-w-[500px] md:grid-cols-1">
//       {/* Navigation en haut */}
//       <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="bg-white/20 text-white p-3 rounded-full backdrop-blur transition hover:bg-white/30 hover:scale-110"
//         >
//           ←
//         </button>
//         <button className="bg-white/20 text-white p-3 rounded-full backdrop-blur transition hover:bg-white/30 hover:scale-110">
//           ⚙️
//         </button>
//       </div>

//       {/* Section gauche : Image de profil */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-[#ff6b6b] to-[#feca57] md:h-[400px]">
//         <img
//           src="/image/meshmesh.png?height=700&width=500"
//           alt="Photo de profil"
//           className="w-full h-full object-cover"
//         />

//         {/* Fame Level Badge - Style moderne */}
//         <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
//           <div
//             className={`bg-gradient-to-r ${getFameLevelColor(fameScore)} px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg backdrop-blur`}
//           >
//             <div className="flex items-center gap-2">
//               <span className="text-lg">{getFameLevelIcon(fameScore)}</span>
//               <span>{getFameLevelName(fameScore)}</span>
//             </div>
//           </div>

//           {/* Score numérique */}
//           <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur">
//             {fameScore}/100
//           </div>
//         </div>

//         {/* Statut en ligne */}
//         <div className="absolute top-24 right-6 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
//           🟢 En ligne
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-8 py-10 text-white">
//           <div className="text-4xl font-bold mb-2">Mehrshad, 26</div>
//           <div className="text-lg opacity-90 leading-snug">
//             Passionnée d'animaux et de nature, toujours prête pour de nouvelles aventures avec mes compagnons à quatre
//             pattes ! 🐕🌿
//           </div>
//         </div>
//       </div>

//       {/* Section droite : Détails */}
//       <div className="p-10 flex flex-col justify-between md:p-8">
//         <div className="flex-1">
//           {/* Fame Rating Section - Version barre de progression */}
//           <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl mb-6 border border-slate-200">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div
//                   className={`w-12 h-12 rounded-full bg-gradient-to-r ${getFameLevelColor(fameScore)} flex items-center justify-center text-white text-xl`}
//                 >
//                   {getFameLevelIcon(fameScore)}
//                 </div>
//                 <div>
//                   <div className="font-bold text-gray-800 text-lg">{getFameLevelName(fameScore)}</div>
//                   <div className="text-sm text-gray-500">Niveau de popularité</div>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-2xl font-bold text-gray-800">{fameScore}</div>
//                 <div className="text-xs text-gray-500">sur 100</div>
//               </div>
//             </div>

//             {/* Barre de progression */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>Progression vers {getFameLevelName(nextLevelThreshold)}</span>
//                 <span>{nextLevelThreshold - fameScore} points restants</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div
//                   className={`h-3 rounded-full bg-gradient-to-r ${getFameLevelColor(fameScore)} transition-all duration-500`}
//                   style={{ width: `${progressToNext}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Statistiques de popularité */}
//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 rounded-xl text-center border border-pink-200">
//               <div className="text-2xl font-bold text-pink-600">342</div>
//               <div className="text-xs text-pink-500 font-medium">Likes reçus</div>
//             </div>
//             <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl text-center border border-blue-200">
//               <div className="text-2xl font-bold text-blue-600">89</div>
//               <div className="text-xs text-blue-500 font-medium">Matches</div>
//             </div>
//             <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-xl text-center border border-green-200">
//               <div className="text-2xl font-bold text-green-600">156</div>
//               <div className="text-xs text-green-500 font-medium">Messages</div>
//             </div>
//           </div>

//           {/* Informations */}
//           <div className="flex items-center text-2xl font-bold text-gray-800 mb-6">
//             <span className="mr-3 text-3xl">👤</span>
//             Informations
//           </div>

//           <div className="grid grid-cols-2 gap-5 mb-9 lg:grid-cols-1">
//             <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
//               <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">Genre</div>
//               <div className="text-lg text-gray-800 font-medium">Homme</div>
//             </div>

//             <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
//               <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">Attirée par</div>
//               <div className="text-lg text-gray-800 font-medium">Femme</div>
//             </div>

//             <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
//               <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">📍 Localisation</div>
//               <div className="text-lg text-gray-800 font-medium">Paris, 5km</div>
//             </div>

//             <div className="bg-gray-100 p-5 rounded-xl border-l-4 border-indigo-400">
//               <div className="font-semibold text-gray-600 text-xs uppercase tracking-wider mb-2">💼 Métier</div>
//               <div className="text-lg text-gray-800 font-medium">Vétérinaire</div>
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl mb-7">
//             <div className="font-bold text-gray-800 mb-3 text-lg">À propos de moi</div>
//             <div className="text-gray-600 leading-relaxed text-base">
//               J'adore passer du temps en plein air avec mes animaux. Passionnée de randonnée, de photographie animalière
//               et de voyages. Je cherche quelqu'un qui partage ma passion pour les animaux et qui aime l'aventure !
//               J'aime aussi cuisiner des plats végétariens et pratiquer le yoga au coucher du soleil.
//             </div>
//           </div>

//           {/* Intérêts */}
//           <div className="mb-7">
//             <div className="font-bold text-gray-800 mb-3 text-lg">Centres d'intérêt</div>
//             <div className="flex flex-wrap gap-3 mt-2">
//               {["#Randonnée", "#Photographie", "#Voyage", "#Cuisine", "#Yoga", "#Lecture", "#Nature", "#Vélo"].map(
//                 (tag) => (
//                   <span
//                     key={tag}
//                     className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition hover:-translate-y-0.5"
//                   >
//                     {tag}
//                   </span>
//                 ),
//               )}
//             </div>
//           </div>

//           {/* Compagnons */}
//           <div className="bg-gradient-to-br from-pink-300 to-pink-100 p-6 rounded-xl mb-7 text-white">
//             <div className="font-bold mb-3 text-lg">🐾 Mes compagnons</div>
//             <div className="flex flex-wrap gap-3">
//               <span className="bg-white/30 px-4 py-2 rounded-full text-base font-medium backdrop-blur">
//                 🐕 Chien (Golden Retriever)
//               </span>
//               <span className="bg-white/30 px-4 py-2 rounded-full text-base font-medium backdrop-blur">
//                 🐱 Chat (Maine Coon)
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="border-t-2 border-gray-100 pt-8">
//           <div className="flex gap-5">
//             <button className="flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gray-100 text-gray-600 border-2 border-gray-200 transition hover:-translate-y-1 hover:shadow-lg">
//               👎 Passer
//             </button>
//             <button className="flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-br from-indigo-400 to-purple-500 text-white transition hover:-translate-y-1 hover:shadow-lg">
//               💬 Message
//             </button>
//             <button className="flex-1 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 bg-gradient-to-br from-pink-500 to-orange-400 text-white transition hover:-translate-y-1 hover:shadow-lg">
//               ❤️ J'aime
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile
"use client"

import { useState, useRef, useEffect } from "react"
import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";
import { Card, CardContent, CardHeader, CardTitle } from "./UI/Card";
import Switch from "./UI/Switch";
import Slider from "./UI/Slider";
import  Badge  from "./UI/Badge"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./UI/Select";
import Separator from "./UI/Separator";
import Tag from "./UI/Tag";             // ⇦ petit composant pill “#tag”
import Textarea from "./UI/Textarea"

export default function DiscoverPage() {
  const [filters, setFilters] = useState({
    ageRange: [25, 35],
    fameRatingRange: [3.0, 5.0],
    maxDistance: 25,
    location: {
      address: "Paris, 11ème arrondissement",
      coordinates: { lat: 48.8566, lng: 2.3522 },
      isManual: false,
      isGPSEnabled: true,
    },
    selectedInterests: ["randonnée", "photographie"],
    showOnlyWithPets: true,
    showOnlyOnline: false,
  })

  const [locationStatus, setLocationStatus] = useState("detecting") // detecting, granted, denied, manual
  const [profiles, setProfiles] = useState([])
  const [isLoadingLocation, setIsLoadingLocation] = useState(true)
  const [manualLocationInput, setManualLocationInput] = useState("")
  const [showLocationSettings, setShowLocationSettings] = useState(false)

  // Données simulées de profils
  const mockProfiles = [
    {
      id: 1,
      name: "Sophie Martin",
      age: 26,
      distance: 3.2,
      fameRating: 4.3,
      photo: "/placeholder.svg?height=300&width=300",
      interests: ["randonnée", "photographie", "yoga"],
      pets: ["🐕 Golden Retriever"],
      isOnline: true,
      location: "Belleville",
      lastActive: "En ligne",
    },
    {
      id: 2,
      name: "Lucas Dubois",
      age: 29,
      distance: 7.8,
      fameRating: 3.9,
      photo: "/placeholder.svg?height=300&width=300",
      interests: ["photographie", "voyage", "cuisine"],
      pets: ["🐱 Maine Coon", "🐱 Persan"],
      isOnline: false,
      location: "République",
      lastActive: "Il y a 2h",
    },
    {
      id: 3,
      name: "Marie Leroy",
      age: 31,
      distance: 12.5,
      fameRating: 4.7,
      photo: "/placeholder.svg?height=300&width=300",
      interests: ["randonnée", "nature", "vélo"],
      pets: ["🐰 Lapin nain"],
      isOnline: true,
      location: "Marais",
      lastActive: "En ligne",
    },
    {
      id: 4,
      name: "Thomas Bernard",
      age: 33,
      distance: 15.2,
      fameRating: 4.1,
      photo: "/placeholder.svg?height=300&width=300",
      interests: ["sport", "randonnée", "fitness"],
      pets: ["🐕 Husky"],
      isOnline: false,
      location: "Bastille",
      lastActive: "Il y a 1h",
    },
  ]

  // Tags d'intérêts disponibles
  const availableInterests = [
    "randonnée",
    "photographie",
    "voyage",
    "cuisine",
    "yoga",
    "lecture",
    "nature",
    "vélo",
    "sport",
    "fitness",
    "art",
    "musique",
    "cinéma",
    "danse",
    "vegan",
    "geek",
    "gaming",
    "tech",
  ]

  // Simulation de la géolocalisation
  useEffect(() => {
    const detectLocation = async () => {
      setIsLoadingLocation(true)

      // Simulation de la détection GPS
      setTimeout(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // GPS autorisé
              setLocationStatus("granted")
              setFilters((prev) => ({
                ...prev,
                location: {
                  ...prev.location,
                  coordinates: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  },
                  isGPSEnabled: true,
                },
              }))
              setIsLoadingLocation(false)
            },
            (error) => {
              // GPS refusé - méthode alternative
              setLocationStatus("denied")
              // Simulation d'une méthode alternative (IP, WiFi, etc.)
              alternativeLocationDetection()
            },
          )
        } else {
          // Pas de géolocalisation disponible
          setLocationStatus("denied")
          alternativeLocationDetection()
        }
      }, 1500)
    }

    detectLocation()
  }, [])

  // Méthode alternative de localisation (simulation)
  const alternativeLocationDetection = () => {
    // Simulation de détection par IP/WiFi/données réseau
    setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          address: "Paris, localisation approximative",
          coordinates: { lat: 48.8566, lng: 2.3522 }, // Coordonnées approximatives
          isGPSEnabled: false,
        },
      }))
      setLocationStatus("alternative")
      setIsLoadingLocation(false)
    }, 1000)
  }

  // Filtrer les profils selon les critères
  const filteredProfiles = mockProfiles.filter((profile) => {
    const ageMatch = profile.age >= filters.ageRange[0] && profile.age <= filters.ageRange[1]
    const fameMatch =
      profile.fameRating >= filters.fameRatingRange[0] && profile.fameRating <= filters.fameRatingRange[1]
    const distanceMatch = profile.distance <= filters.maxDistance
    const interestMatch =
      filters.selectedInterests.length === 0 ||
      filters.selectedInterests.some((interest) => profile.interests.includes(interest))
    const onlineMatch = !filters.showOnlyOnline || profile.isOnline
    const petMatch = !filters.showOnlyWithPets || profile.pets.length > 0

    return ageMatch && fameMatch && distanceMatch && interestMatch && onlineMatch && petMatch
  })

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleInterestToggle = (interest) => {
    setFilters((prev) => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter((i) => i !== interest)
        : [...prev.selectedInterests, interest],
    }))
  }

  const handleManualLocationUpdate = () => {
    if (manualLocationInput.trim()) {
      setFilters((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          address: manualLocationInput,
          isManual: true,
        },
      }))
      setManualLocationInput("")
      setShowLocationSettings(false)
    }
  }

  const requestLocationPermission = () => {
    setIsLoadingLocation(true)
    setLocationStatus("detecting")
    // Relancer la détection
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationStatus("granted")
          setFilters((prev) => ({
            ...prev,
            location: {
              ...prev.location,
              coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              isGPSEnabled: true,
            },
          }))
          setIsLoadingLocation(false)
        },
        () => {
          setLocationStatus("denied")
          alternativeLocationDetection()
        },
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour au dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Découvrir
                </h1>
                <p className="text-sm text-gray-600">Trouvez des profils compatibles près de chez vous</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                {filteredProfiles.length} profils trouvés
              </Badge>
              <Button
                variant="outline"
                onClick={() => setShowLocationSettings(!showLocationSettings)}
                className="border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                📍 Localisation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtres */}
          <div className="lg:col-span-1 space-y-6">
            {/* Localisation */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">📍</span>
                  <span>Localisation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoadingLocation ? (
                  <div className="text-center py-4">
                    <div className="animate-spin w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">Détection en cours...</p>
                  </div>
                ) : (
                  <>
                    <div className="text-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            locationStatus === "granted"
                              ? "bg-green-500"
                              : locationStatus === "denied"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                          }`}
                        ></span>
                        <span className="font-medium">
                          {locationStatus === "granted"
                            ? "GPS activé"
                            : locationStatus === "denied"
                              ? "GPS désactivé"
                              : "Localisation approximative"}
                        </span>
                      </div>
                      <p className="text-gray-600">{filters.location.address}</p>
                    </div>

                    {locationStatus !== "granted" && (
                      <Button
                        onClick={requestLocationPermission}
                        variant="outline"
                        size="sm"
                        className="w-full border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        🎯 Activer le GPS
                      </Button>
                    )}

                    {showLocationSettings && (
                      <div className="space-y-3 pt-3 border-t border-purple-100">
                        <Label className="text-sm font-medium">Modifier manuellement</Label>
                        <div className="flex space-x-2">
                          <Input
                            value={manualLocationInput}
                            onChange={(e) => setManualLocationInput(e.target.value)}
                            placeholder="Nouvelle adresse..."
                            className="text-sm border-purple-200"
                          />
                          <Button onClick={handleManualLocationUpdate} size="sm">
                            ✓
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                <div>
                  <Label className="text-gray-700 font-medium">Distance maximale</Label>
                  <div className="mt-3 px-2">
                    <Slider
                      value={[filters.maxDistance]}
                      onValueChange={(value) => handleFilterChange("maxDistance", value[0])}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1 km</span>
                      <span className="font-medium">{filters.maxDistance} km</span>
                      <span>100 km</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filtres d'âge */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">🎂</span>
                  <span>Âge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Tranche d'âge</Label>
                    <div className="mt-3 px-2">
                      <Slider
                        value={filters.ageRange}
                        onValueChange={(value) => handleFilterChange("ageRange", value)}
                        max={60}
                        min={18}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>18 ans</span>
                        <span className="font-medium">
                          {filters.ageRange[0]} - {filters.ageRange[1]} ans
                        </span>
                        <span>60 ans</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fame Rating */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">⭐</span>
                  <span>Fame Rating</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label className="text-gray-700 font-medium">Note minimale</Label>
                  <div className="mt-3 px-2">
                    <Slider
                      value={filters.fameRatingRange}
                      onValueChange={(value) => handleFilterChange("fameRatingRange", value)}
                      max={5.0}
                      min={1.0}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1.0 ⭐</span>
                      <span className="font-medium">
                        {filters.fameRatingRange[0].toFixed(1)} - {filters.fameRatingRange[1].toFixed(1)} ⭐
                      </span>
                      <span>5.0 ⭐</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centres d'intérêt */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">🏷️</span>
                  <span>Intérêts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Label className="text-gray-700 font-medium">Intérêts sélectionnés</Label>
                  <div className="flex flex-wrap gap-2">
                    {filters.selectedInterests.map((interest) => (
                      <Badge
                        key={interest}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white cursor-pointer"
                        onClick={() => handleInterestToggle(interest)}
                      >
                        #{interest} ×
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  <Label className="text-gray-700 font-medium">Ajouter des intérêts</Label>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {availableInterests
                      .filter((interest) => !filters.selectedInterests.includes(interest))
                      .map((interest) => (
                        <button
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className="px-3 py-1 text-sm border border-purple-200 rounded-full hover:bg-purple-50 hover:border-purple-300 transition-colors"
                        >
                          #{interest}
                        </button>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Options supplémentaires */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">⚙️</span>
                  <span>Options</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-gray-700 font-medium">Uniquement avec animaux</Label>
                  <Switch
                    checked={filters.showOnlyWithPets}
                    onCheckedChange={(checked) => handleFilterChange("showOnlyWithPets", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-gray-700 font-medium">Uniquement en ligne</Label>
                  <Switch
                    checked={filters.showOnlyOnline}
                    onCheckedChange={(checked) => handleFilterChange("showOnlyOnline", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal - Profils */}
          <div className="lg:col-span-3">
            {filteredProfiles.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProfiles.map((profile) => (
                  <Card
                    key={profile.id}
                    className="group bg-white/60 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={profile.photo || "/placeholder.svg"}
                          alt={profile.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Statut en ligne */}
                        {profile.isOnline && (
                          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span>En ligne</span>
                          </div>
                        )}

                        {/* Fame Rating */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm font-bold text-gray-800">{profile.fameRating.toFixed(1)}</span>
                        </div>

                        {/* Distance */}
                        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                          📍 {profile.distance.toFixed(1)} km
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Informations en bas */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-bold mb-1">
                            {profile.name}, {profile.age}
                          </h3>
                          <p className="text-sm opacity-90 mb-2">📍 {profile.location}</p>
                          <p className="text-xs opacity-75">{profile.lastActive}</p>
                        </div>
                      </div>

                      <div className="p-4">
                        {/* Animaux */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {profile.pets.map((pet, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {pet}
                            </Badge>
                          ))}
                        </div>

                        {/* Intérêts */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {profile.interests.slice(0, 3).map((interest) => (
                            <Badge
                              key={interest}
                              className={`text-xs ${
                                filters.selectedInterests.includes(interest)
                                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              #{interest}
                            </Badge>
                          ))}
                          {profile.interests.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{profile.interests.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
                          >
                            👎 Passer
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                          >
                            ❤️ J'aime
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
                <CardContent className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun profil trouvé</h3>
                  <p className="text-gray-600 mb-6">
                    Essayez d'ajuster vos filtres pour découvrir plus de profils compatibles.
                  </p>
                  <Button
                    onClick={() =>
                      setFilters({
                        ageRange: [18, 60],
                        fameRatingRange: [1.0, 5.0],
                        maxDistance: 50,
                        location: filters.location,
                        selectedInterests: [],
                        showOnlyWithPets: false,
                        showOnlyOnline: false,
                      })
                    }
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  >
                    Réinitialiser les filtres
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
