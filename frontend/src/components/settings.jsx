"use client"

import React from "react"

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
export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Emma Dubois",
    age: 28,
    gender: "female",
    sexualPreference: "men",
    biography:
      "Passionnée d'animaux et de nature, toujours prête pour de nouvelles aventures avec mes compagnons à quatre pattes ! J'adore la randonnée, la photographie animalière et découvrir de nouveaux endroits avec mes animaux.",
    location: "Paris, France",
    profession: "Vétérinaire",
    interests: ["randonnée", "photographie", "voyage", "cuisine", "yoga", "lecture", "nature", "vélo"],
    photos: [
      { id: 1, url: "/placeholder.svg?height=300&width=300", isProfile: true },
      { id: 2, url: "/placeholder.svg?height=300&width=300", isProfile: false },
      { id: 3, url: "/placeholder.svg?height=300&width=300", isProfile: false },
    ],
    pets: [
      { type: "dog", breed: "Golden Retriever", name: "Max" },
      { type: "cat", breed: "Maine Coon", name: "Luna" },
    ],
  })

  const [fameRating, setFameRating] = useState(4.2)
  const [profileCompletion, setProfileCompletion] = useState(85)
  const [newInterest, setNewInterest] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const fileInputRef = useRef(null)

  // Tags d'intérêts prédéfinis populaires
  const popularInterests = [
    "randonnée",
    "photographie",
    "voyage",
    "cuisine",
    "yoga",
    "lecture",
    "nature",
    "vélo",
    "vegan",
    "geek",
    "piercing",
    "tattoo",
    "musique",
    "danse",
    "sport",
    "art",
    "cinéma",
    "théâtre",
    "gaming",
    "tech",
    "mode",
    "fitness",
    "méditation",
    "écologie",
  ]

  const handleProfileUpdate = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddInterest = (interest) => {
    if (interest && !profile.interests.includes(interest.toLowerCase())) {
      setProfile((prev) => ({
        ...prev,
        interests: [...prev.interests, interest.toLowerCase()],
      }))
      setNewInterest("")
    }
  }

  const handleRemoveInterest = (interest) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.filter((i) => i !== interest),
    }))
  }

  const handlePhotoUpload = (event) => {
    const files = event.target.files
    if (files && files.length > 0) {
      // Simulation d'upload de photo
      const newPhoto = {
        id: Date.now(),
        url: URL.createObjectURL(files[0]),
        isProfile: profile.photos.length === 0,
      }

      if (profile.photos.length < 5) {
        setProfile((prev) => ({
          ...prev,
          photos: [...prev.photos, newPhoto],
        }))
      }
    }
  }

  const handleSetProfilePhoto = (photoId) => {
    setProfile((prev) => ({
      ...prev,
      photos: prev.photos.map((photo) => ({
        ...photo,
        isProfile: photo.id === photoId,
      })),
    }))
  }

  const handleRemovePhoto = (photoId) => {
    setProfile((prev) => ({
      ...prev,
      photos: prev.photos.filter((photo) => photo.id !== photoId),
    }))
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Logique de sauvegarde
    console.log("Profile saved:", profile)
    alert("Profil sauvegardé avec succès !")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddInterest(newInterest)
    }
  }

  const profilePhoto = profile.photos.find((photo) => photo.isProfile)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour au dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Mon Profil
                </h1>
                <p className="text-sm text-gray-600">Gérez vos informations personnelles</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                >
                  ✏️ Modifier le profil
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="border-gray-300 text-gray-600"
                  >
                    Annuler
                  </Button>
                  <Button
                    onClick={handleSaveProfile}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                  >
                    💾 Sauvegarder
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne gauche - Aperçu du profil */}
          <div className="lg:col-span-1 space-y-6">
            {/* Photo de profil et infos principales */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                    {profilePhoto ? (
                      <img
                        src={profilePhoto.url || "/placeholder.svg"}
                        alt="Photo de profil"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-white text-6xl">📷</div>
                    )}
                  </div>

                  {/* Fame Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="font-bold text-gray-800">{fameRating.toFixed(1)}</span>
                  </div>

                  {/* Statut en ligne */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>En ligne</span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {profile.name}, {profile.age}
                  </h2>
                  <p className="text-gray-600 mb-4">📍 {profile.location}</p>
                  <p className="text-gray-600 mb-4">💼 {profile.profession}</p>
                  {/* Animaux */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800">🐾 Mes compagnons</h3>
                    {profile.pets.map((pet, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <span>{pet.type === "dog" ? "🐕" : "🐱"}</span>
                        <span className="text-gray-700">
                          {pet.name} ({pet.breed})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fame Rating détaillé */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">⭐</span>
                  <span>Fame Rating</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">{fameRating.toFixed(1)}</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-2xl ${star <= Math.floor(fameRating) ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Basé sur 47 évaluations</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Popularité du profil</span>
                    <span className="font-medium">Élevée</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Activité récente</span>
                    <span className="font-medium">Très active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taux de réponse</span>
                    <span className="font-medium">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colonne droite - Formulaire d'édition */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informations personnelles */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">👤</span>
                  <span>Informations personnelles     <br/>  Ajouter la modification des animaux
                  </span> 
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => handleProfileUpdate("name", e.target.value)}
                      disabled={!isEditing}
                      className="mt-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-gray-700 font-medium">
                      Âge
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      value={profile.age}
                      onChange={(e) => handleProfileUpdate("age", Number.parseInt(e.target.value))}
                      disabled={!isEditing}
                      className="mt-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Genre</Label>
                    <Select
                      value={profile.gender}
                      onValueChange={(value) => handleProfileUpdate("gender", value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger className="mt-2 border-purple-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">👩 Femme</SelectItem>
                        <SelectItem value="male">👨 Homme</SelectItem>
                        <SelectItem value="non-binary">⚧️ Non-binaire</SelectItem>
                        <SelectItem value="other">🌈 Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Préférence sexuelle</Label>
                    <Select
                      value={profile.sexualPreference}
                      onValueChange={(value) => handleProfileUpdate("sexualPreference", value)}
                      disabled={!isEditing}
                    >
                      <SelectTrigger className="mt-2 border-purple-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="men">👨 Hommes</SelectItem>
                        <SelectItem value="women">👩 Femmes</SelectItem>
                        <SelectItem value="both">👫 Les deux</SelectItem>
                        <SelectItem value="all">🌈 Tous</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location" className="text-gray-700 font-medium">
                      Localisation
                    </Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => handleProfileUpdate("location", e.target.value)}
                      disabled={!isEditing}
                      className="mt-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="profession" className="text-gray-700 font-medium">
                      Profession
                    </Label>
                    <Input
                      id="profession"
                      value={profile.profession}
                      onChange={(e) => handleProfileUpdate("profession", e.target.value)}
                      disabled={!isEditing}
                      className="mt-2 border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Biographie */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">📝</span>
                  <span>Biographie</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="biography" className="text-gray-700 font-medium">
                  Parlez-nous de vous et de votre passion pour les animaux
                </Label>
                <Textarea
                  id="biography"
                  value={profile.biography}
                  onChange={(e) => handleProfileUpdate("biography", e.target.value)}
                  disabled={!isEditing}
                  className="mt-2 border-purple-200 focus:border-purple-500 min-h-[120px]"
                  placeholder="Décrivez-vous, vos passions, ce que vous recherchez..."
                />
                <p className="text-sm text-gray-500 mt-2">{profile.biography.length}/500 caractères</p>
              </CardContent>
            </Card>

            {/* Centres d'intérêt */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-800">
                  <span className="text-xl">🏷️</span>
                  <span>Centres d'intérêt</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Tags actuels */}
                <div>
                  <Label className="text-gray-700 font-medium mb-3 block">Vos intérêts</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-purple-200 px-3 py-1"
                      >
                        #{interest}
                        {isEditing && (
                          <button
                            onClick={() => handleRemoveInterest(interest)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <>
                    <Separator />

                    {/* Ajouter un nouvel intérêt */}
                    <div>
                      <Label className="text-gray-700 font-medium mb-3 block">Ajouter un intérêt</Label>
                      <div className="flex space-x-2">
                        <Input
                          value={newInterest}
                          onChange={(e) => setNewInterest(e.target.value)}
                          placeholder="Tapez un intérêt..."
                          className="border-purple-200 focus:border-purple-500"
                          onKeyPress={handleKeyPress}
                        />
                        <Button
                          onClick={() => handleAddInterest(newInterest)}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        >
                          Ajouter
                        </Button>
                      </div>
                    </div>

                    {/* Suggestions d'intérêts populaires */}
                    <div>
                      <Label className="text-gray-700 font-medium mb-3 block">Suggestions populaires</Label>
                      <div className="flex flex-wrap gap-2">
                        {popularInterests
                          .filter((interest) => !profile.interests.includes(interest))
                          .slice(0, 12)
                          .map((interest) => (
                            <button
                              key={interest}
                              onClick={() => handleAddInterest(interest)}
                              className="px-3 py-1 text-sm border border-purple-200 rounded-full hover:bg-purple-50 hover:border-purple-300 transition-colors"
                            >
                              #{interest}
                            </button>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Galerie de photos */}
            <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-800">
                    <span className="text-xl">📷</span>
                    <span>Photos ({profile.photos.length}/5)</span>
                  </div>
                  {isEditing && profile.photos.length < 5 && (
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      + Ajouter une photo
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {profile.photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={photo.url || "/placeholder.svg"}
                          alt="Photo de profil"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Badge photo de profil */}
                      {photo.isProfile && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Profil
                        </div>
                      )}

                      {/* Actions */}
                      {isEditing && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center space-x-2">
                          {!photo.isProfile && (
                            <Button
                              size="sm"
                              onClick={() => handleSetProfilePhoto(photo.id)}
                              className="bg-green-500 hover:bg-green-600 text-white"
                            >
                              Profil
                            </Button>
                          )}
                          <Button size="sm" variant="destructive" onClick={() => handleRemovePhoto(photo.id)}>
                            Supprimer
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Placeholder pour ajouter des photos */}
                  {isEditing && profile.photos.length < 5 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-lg border-2 border-dashed border-purple-300 hover:border-purple-500 flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">📷</div>
                        <div className="text-sm">Ajouter</div>
                      </div>
                    </button>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  💡 Conseil : Ajoutez des photos avec vos animaux pour attirer plus de matchs !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
