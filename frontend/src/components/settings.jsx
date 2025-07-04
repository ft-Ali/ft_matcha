

"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
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
// import Tag from "./UI/Tag";             // ⇦ petit composant pill “#tag”
// import Textarea from "./UI/TextArea"

export default function AccountSettingsPage() {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState({
    email: "emma.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    currentPassword: "123",
    newPassword: "",// import Tag from "./UI/Tag";             // ⇦ petit composant pill “#tag”
// import Textarea from "./UI/Textarea"
    confirmPassword: "",
  })

  const [isEditing, setIsEditing] = useState({
    email: false,
    phone: false,
    password: false,
  })

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState("")
  const [notifications, setNotifications] = useState({
    emailChanged: false,
    phoneChanged: false,
    passwordChanged: false,
  })

  const [securityInfo, setSecurityInfo] = useState({
    lastLogin: "Aujourd'hui à 14:32",
    loginLocation: "Paris, France",
    deviceInfo: "Chrome sur Windows",
    accountCreated: "15 janvier 2024",
    emailVerified: true,
    phoneVerified: true,
    twoFactorEnabled: false,
  })

  const handleInputChange = (field, value) => {
    setAccountData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveEmail = () => {
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(accountData.email)) {
      alert("Veuillez entrer une adresse email valide")
      return
    }

    // Simulation de sauvegarde
    setIsEditing((prev) => ({ ...prev, email: false }))
    setNotifications((prev) => ({ ...prev, emailChanged: true }))
    setTimeout(() => setNotifications((prev) => ({ ...prev, emailChanged: false })), 3000)
    console.log("Email updated:", accountData.email)
  }

  const handleSavePhone = () => {
    // Validation téléphone
    const phoneRegex = /^(\+33|0)[1-9](\d{8})$/
    if (!phoneRegex.test(accountData.phone.replace(/\s/g, ""))) {
      alert("Veuillez entrer un numéro de téléphone français valide")
      return
    }

    setIsEditing((prev) => ({ ...prev, phone: false }))
    setNotifications((prev) => ({ ...prev, phoneChanged: true }))
    setTimeout(() => setNotifications((prev) => ({ ...prev, phoneChanged: false })), 3000)
    console.log("Phone updated:", accountData.phone)
  }

  const handleSavePassword = () => {
    // Validations mot de passe
    if (accountData.currentPassword.length < 1) {
      alert("Veuillez entrer votre mot de passe actuel")
      return
    }

    if (accountData.newPassword.length < 8) {
      alert("Le nouveau mot de passe doit contenir au moins 8 caractères")
      return
    }

    if (accountData.newPassword !== accountData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas")
      return
    }

    // Simulation de vérification du mot de passe actuel
    if (accountData.currentPassword !== "motdepasse123") {
      alert("Mot de passe actuel incorrect")
      return
    }

    setIsEditing((prev) => ({ ...prev, password: false }))
    setNotifications((prev) => ({ ...prev, passwordChanged: true }))
    setTimeout(() => setNotifications((prev) => ({ ...prev, passwordChanged: false })), 3000)

    // Réinitialiser les champs
    setAccountData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }))

    console.log("Password updated")
  }

  const handleLogout = () => {
    // Simulation de déconnexion
    console.log("User logged out")
    alert("Vous avez été déconnecté avec succès")
    setShowLogoutDialog(false)
    // Redirection vers la page de connexion
    // window.location.href = "/login"
  }

  const handleDeleteAccount = () => {
    if (deleteConfirmation !== "SUPPRIMER") {
      alert("Veuillez taper 'SUPPRIMER' pour confirmer")
      return
    }

    // Simulation de suppression
    console.log("Account deleted")
    alert("Votre compte a été supprimé définitivement")
    setShowDeleteDialog(false)
    // Redirection vers la page d'accueil
    // window.location.href = "/"
  }

  const cancelEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }))
    // Réinitialiser les valeurs si nécessaire
    if (field === "password") {
      setAccountData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/dashboard')} variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour au dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Paramètres du compte
                </h1>
                <p className="text-sm text-gray-600">Gérez vos informations de connexion et sécurité</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-200">Compte vérifié ✓</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Notifications */}
        {(notifications.emailChanged || notifications.phoneChanged || notifications.passwordChanged) && (
          <alert className="bg-green-50 border-green-200 text-green-800">
            <alertdescription className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>
                {notifications.emailChanged && "Email mis à jour avec succès"}
                {notifications.phoneChanged && "Numéro de téléphone mis à jour avec succès"}
                {notifications.passwordChanged && "Mot de passe modifié avec succès"}
              </span>
            </alertdescription>
          </alert>
        )}

        {/* Informations de sécurité */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🛡️</span>
              <span>Sécurité du compte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dernière connexion</span>
                  <span className="font-medium">{securityInfo.lastLogin}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Localisation</span>
                  <span className="font-medium">{securityInfo.loginLocation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Appareil</span>
                  <span className="font-medium">{securityInfo.deviceInfo}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Compte créé</span>
                  <span className="font-medium">{securityInfo.accountCreated}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Email vérifié</span>
                  <Badge
                    className={securityInfo.emailVerified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                  >
                    {securityInfo.emailVerified ? "✓ Vérifié" : "✗ Non vérifié"}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Téléphone vérifié</span>
                  <Badge
                    className={securityInfo.phoneVerified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                  >
                    {securityInfo.phoneVerified ? "✓ Vérifié" : "✗ Non vérifié"}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adresse email */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">📧</span>
              <span>Adresse email</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEditing.email ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{accountData.email}</p>
                  <p className="text-sm text-gray-600">Utilisée pour la connexion et les notifications</p>
                </div>
                <Button
                  onClick={() => setIsEditing((prev) => ({ ...prev, email: true }))}
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  ✏️ Modifier
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Nouvelle adresse email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={accountData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-500"
                    placeholder="nouvelle@email.com"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button
                    onClick={handleSaveEmail}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                  >
                    💾 Sauvegarder
                  </Button>
                  <Button
                    onClick={() => cancelEdit("email")}
                    variant="outline"
                    className="border-gray-300 text-gray-600"
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Numéro de téléphone */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">📱</span>
              <span>Numéro de téléphone</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEditing.phone ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{accountData.phone}</p>
                  <p className="text-sm text-gray-600">Utilisé pour la vérification et la sécurité</p>
                </div>
                <Button
                  onClick={() => setIsEditing((prev) => ({ ...prev, phone: true }))}
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  ✏️ Modifier
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Nouveau numéro de téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={accountData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-500"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button
                    onClick={handleSavePhone}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                  >
                    💾 Sauvegarder
                  </Button>
                  <Button
                    onClick={() => cancelEdit("phone")}
                    variant="outline"
                    className="border-gray-300 text-gray-600"
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mot de passe */}
        <Card className="bg-white/60 backdrop-blur-sm border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <span className="text-xl">🔐</span>
              <span>Mot de passe</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEditing.password ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">••••••••••••</p>
                  <p className="text-sm text-gray-600">Dernière modification il y a 2 mois</p>
                </div>
                <Button
                  onClick={() => setIsEditing((prev) => ({ ...prev, password: true }))}
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  🔑 Changer le mot de passe
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-gray-700 font-medium">
                    Mot de passe actuel
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={accountData.currentPassword}
                    onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-500"
                    placeholder="Votre mot de passe actuel"
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword" className="text-gray-700 font-medium">
                    Nouveau mot de passe
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={accountData.newPassword}
                    onChange={(e) => handleInputChange("newPassword", e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-500"
                    placeholder="Nouveau mot de passe (min. 8 caractères)"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                    Confirmer le nouveau mot de passe
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={accountData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-500"
                    placeholder="Confirmez votre nouveau mot de passe"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button
                    onClick={handleSavePassword}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                  >
                    🔐 Changer le mot de passe
                  </Button>
                  <Button
                    onClick={() => cancelEdit("password")}
                    variant="outline"
                    className="border-gray-300 text-gray-600"
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Actions de compte */}
        <Card className="bg-white/60 backdrop-blur-sm border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700">
              <span className="text-xl">⚠️</span>
              <span>Actions de compte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Déconnexion */}
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div>
                <h3 className="font-medium text-orange-800">Se déconnecter</h3>
                <p className="text-sm text-orange-600">Déconnectez-vous de votre compte sur cet appareil</p>
              </div>
              <dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                <dialogtrigger asChild>
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    🚪 Se déconnecter
                  </Button>
                </dialogtrigger>
                <dialogcontent className="bg-white">
                  <dialogheader>
                    <dialogtitle className="text-orange-800">Confirmer la déconnexion</dialogtitle>
                    <dialogdescription>
                      Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à votre
                      compte.
                    </dialogdescription>
                  </dialogheader>
                  <dialogfooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowLogoutDialog(false)}
                      className="border-gray-300 text-gray-600"
                    >
                      Annuler
                    </Button>
                    <Button onClick={handleLogout} className="bg-orange-500 hover:bg-orange-600 text-white">
                      🚪 Se déconnecter
                    </Button>
                  </dialogfooter>
                </dialogcontent>
              </dialog>
            </div>

            {/* Suppression de compte */}
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
              <div>
                <h3 className="font-medium text-red-800">Supprimer le compte</h3>
                <p className="text-sm text-red-600">Supprimez définitivement votre compte et toutes vos données</p>
              </div>
              <dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <dialogtrigger asChild>
                  <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
                    🗑️ Supprimer le compte
                  </Button>
                </dialogtrigger>
                <dialogcontent className="bg-white">
                  <dialogheader>
                    <dialogtitle className="text-red-800">⚠️ Supprimer définitivement le compte</dialogtitle>
                    <dialogdescription className="space-y-3">
                      <p>
                        <strong>Cette action est irréversible !</strong> En supprimant votre compte, vous perdrez :
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Tous vos matchs et conversations</li>
                        <li>Vos photos et informations de profil</li>
                        <li>Votre historique d'activité</li>
                        <li>Vos paramètres et préférences</li>
                      </ul>
                      <p className="text-red-600 font-medium">
                        Pour confirmer, tapez <strong>"SUPPRIMER"</strong> dans le champ ci-dessous :
                      </p>
                    </dialogdescription>
                  </dialogheader>
                  <div className="py-4">
                    <Input
                      value={deleteConfirmation}
                      onChange={(e) => setDeleteConfirmation(e.target.value)}
                      placeholder="Tapez SUPPRIMER pour confirmer"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <dialogfooter>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowDeleteDialog(false)
                        setDeleteConfirmation("")
                      }}
                      className="border-gray-300 text-gray-600"
                    >
                      Annuler
                    </Button>
                    <Button
                      onClick={handleDeleteAccount}
                      disabled={deleteConfirmation !== "SUPPRIMER"}
                      className="bg-red-500 hover:bg-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      🗑️ Supprimer définitivement
                    </Button>
                  </dialogfooter>
                </dialogcontent>
              </dialog>
            </div>
          </CardContent>
        </Card>

        {/* Conseils de sécurité */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-800">
              <span className="text-xl">💡</span>
              <span>Conseils de sécurité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-blue-700">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Utilisez un mot de passe unique et complexe pour votre compte PetMatch</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Ne partagez jamais vos identifiants de connexion avec qui que ce soit</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Déconnectez-vous toujours après utilisation sur un appareil partagé</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Vérifiez régulièrement vos informations de connexion</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
