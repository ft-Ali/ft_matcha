"use client"

import { useState, useRef, useEffect } from "react"
import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";
import { Card, CardContent, CardHeader, CardTitle } from "./UI/Card";
import Switch from "./UI/Switch";
import Slider from "./UI/Slider";
import  Badge  from "./UI/Badge"
import { useNavigate } from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./UI/Select";
import Separator from "./UI/Separator";
// import Tag from "./UI/Tag";             // ⇦ petit composant pill “#tag”
// import Textarea from "./UI/Textarea"

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
  const navigate = useNavigate();
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
      photo: "/image/mbappe.png",
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
      photo: "/image/mbappe.png",
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
      photo: "/image/mbappe.png",
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
      photo: "/image/mbappe.png",
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
               <Button onClick={() => navigate('/dashboard')} variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
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
