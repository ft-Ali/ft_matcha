"use client"

import { useState } from "react"
import  Button  from "./UI/Button"
import  Input  from "./UI/Input"
import  Label  from "./UI/Label"
import  {Card, CardContent, CardHeader, CardTitle}  from "./UI/Card"
import  Switch  from "./UI/Switch"
import  Slider  from "./UI/Slider"
import  {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./UI/Select"
import  Separator  from "./UI/Separator"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Paramètres de compte
    email: "emma.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    language: "fr",

    // Paramètres de découverte
    maxDistance: 25,
    ageMin: 25,
    ageMax: 35,
    showOnlyWithPets: true,

    // Notifications
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: false,
    newMatches: true,
    messages: true,
    likes: false,

    // Confidentialité
    showAge: true,
    showDistance: true,
    showLastActive: false,
    incognitoMode: false,

    // Préférences d'affichage
    darkMode: false,
    soundEffects: true,
    vibrations: true,
    autoPlay: false,
  })

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Logique de sauvegarde
    console.log("Paramètres sauvegardés:", settings)
    alert("Paramètres sauvegardés avec succès !")
  }

  const handleReset = () => {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?")) {
      // Réinitialiser aux valeurs par défaut
      setSettings({
        email: "emma.dubois@email.com",
        phone: "+33 6 12 34 56 78",
        language: "fr",
        maxDistance: 25,
        ageMin: 25,
        ageMax: 35,
        showOnlyWithPets: true,
        pushNotifications: true,
        emailNotifications: false,
        smsNotifications: false,
        newMatches: true,
        messages: true,
        likes: false,
        showAge: true,
        showDistance: true,
        showLastActive: false,
        incognitoMode: false,
        darkMode: false,
        soundEffects: true,
        vibrations: true,
        autoPlay: false,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Paramètres
                </h1>
                <p className="text-sm text-gray-600">Configurez votre expérience PetMatch</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Réinitialiser
              </Button>
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
              >
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Paramètres du compte */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">👤</span>
              <span>Compte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => updateSetting("email", e.target.value)}
                  className="mt-2 border-purple-200 focus:border-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  value={settings.phone}
                  onChange={(e) => updateSetting("phone", e.target.value)}
                  className="mt-2 border-purple-200 focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Langue</Label>
              <Select value={settings.language} onValueChange={(value) => updateSetting("language", value)}>
                <SelectTrigger className="mt-2 border-purple-200 w-full md:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">🇫🇷 Français</SelectItem>
                  <SelectItem value="en">🇺🇸 English</SelectItem>
                  <SelectItem value="es">🇪🇸 Español</SelectItem>
                  <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                  <SelectItem value="it">🇮🇹 Italiano</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Paramètres de découverte */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🔍</span>
              <span>Découverte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-gray-700 font-medium">Distance maximale</Label>
              <div className="mt-4 px-2">
                <Slider
                  value={[settings.maxDistance]}
                  onValueChange={(value) => updateSetting("maxDistance", value[0])}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1 km</span>
                  <span className="font-medium">{settings.maxDistance} km</span>
                  <span>100 km</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Tranche d'âge</Label>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <Label className="text-sm text-gray-600">Âge minimum</Label>
                  <div className="mt-2 px-2">
                    <Slider
                      value={[settings.ageMin]}
                      onValueChange={(value) => updateSetting("ageMin", value[0])}
                      max={60}
                      min={18}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">{settings.ageMin} ans</div>
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-gray-600">Âge maximum</Label>
                  <div className="mt-2 px-2">
                    <Slider
                      value={[settings.ageMax]}
                      onValueChange={(value) => updateSetting("ageMax", value[0])}
                      max={60}
                      min={18}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">{settings.ageMax} ans</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Uniquement les profils avec animaux</Label>
                <p className="text-sm text-gray-600">Ne montrer que les personnes qui ont des animaux</p>
              </div>
              <Switch
                checked={settings.showOnlyWithPets}
                onCheckedChange={(checked) => updateSetting("showOnlyWithPets", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🔔</span>
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-700 font-medium">Notifications push</Label>
                  <p className="text-sm text-gray-600">Recevoir des notifications sur votre appareil</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => updateSetting("pushNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-700 font-medium">Notifications par email</Label>
                  <p className="text-sm text-gray-600">Recevoir des emails de notification</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => updateSetting("emailNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-gray-700 font-medium">Notifications SMS</Label>
                  <p className="text-sm text-gray-600">Recevoir des SMS pour les événements importants</p>
                </div>
                <Switch
                  checked={settings.smsNotifications}
                  onCheckedChange={(checked) => updateSetting("smsNotifications", checked)}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Types de notifications</h4>

              <div className="flex items-center justify-between">
                <Label className="text-gray-700">💕 Nouveaux matchs</Label>
                <Switch
                  checked={settings.newMatches}
                  onCheckedChange={(checked) => updateSetting("newMatches", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-gray-700">💬 Messages</Label>
                <Switch checked={settings.messages} onCheckedChange={(checked) => updateSetting("messages", checked)} />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-gray-700">❤️ Likes reçus</Label>
                <Switch checked={settings.likes} onCheckedChange={(checked) => updateSetting("likes", checked)} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confidentialité */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🔒</span>
              <span>Confidentialité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Afficher mon âge</Label>
                <p className="text-sm text-gray-600">Les autres utilisateurs peuvent voir votre âge</p>
              </div>
              <Switch checked={settings.showAge} onCheckedChange={(checked) => updateSetting("showAge", checked)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Afficher la distance</Label>
                <p className="text-sm text-gray-600">Montrer votre distance sur votre profil</p>
              </div>
              <Switch
                checked={settings.showDistance}
                onCheckedChange={(checked) => updateSetting("showDistance", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Afficher ma dernière activité</Label>
                <p className="text-sm text-gray-600">Quand vous étiez actif pour la dernière fois</p>
              </div>
              <Switch
                checked={settings.showLastActive}
                onCheckedChange={(checked) => updateSetting("showLastActive", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Mode incognito</Label>
                <p className="text-sm text-gray-600">Naviguer sans être vu par les autres</p>
              </div>
              <Switch
                checked={settings.incognitoMode}
                onCheckedChange={(checked) => updateSetting("incognitoMode", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Préférences d'affichage */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🎨</span>
              <span>Affichage</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Mode sombre</Label>
                <p className="text-sm text-gray-600">Interface avec thème sombre</p>
              </div>
              <Switch checked={settings.darkMode} onCheckedChange={(checked) => updateSetting("darkMode", checked)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Effets sonores</Label>
                <p className="text-sm text-gray-600">Sons lors des interactions</p>
              </div>
              <Switch
                checked={settings.soundEffects}
                onCheckedChange={(checked) => updateSetting("soundEffects", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Vibrations</Label>
                <p className="text-sm text-gray-600">Retour haptique sur mobile</p>
              </div>
              <Switch
                checked={settings.vibrations}
                onCheckedChange={(checked) => updateSetting("vibrations", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700 font-medium">Lecture automatique des vidéos</Label>
                <p className="text-sm text-gray-600">Lire les vidéos automatiquement</p>
              </div>
              <Switch checked={settings.autoPlay} onCheckedChange={(checked) => updateSetting("autoPlay", checked)} />
            </div>
          </CardContent>
        </Card>

        {/* Actions dangereuses */}
        <Card className="bg-white/60 backdrop-blur-sm border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <span className="text-xl">⚠️</span>
              <span>Zone de danger</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                ⏸️ Désactiver temporairement
              </Button>
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                🗑️ Supprimer le compte
              </Button>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Ces actions sont irréversibles. Assurez-vous de bien comprendre les conséquences.
            </p>
          </CardContent>
        </Card>

        {/* Boutons de sauvegarde en bas */}
        <div className="flex justify-center space-x-4 pt-8">
          <Button variant="outline" onClick={handleReset} className="border-gray-300 text-gray-600 hover:bg-gray-50">
            Annuler les modifications
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-8"
          >
            Sauvegarder tous les paramètres
          </Button>
        </div>
      </div>
    </div>
  )
}
