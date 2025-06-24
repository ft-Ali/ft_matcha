"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import  Button  from "./UI/Button"
import  Input  from "./UI/Input"
import { Card, CardContent } from "./UI/Card"
import { Avatar, AvatarFallback, AvatarImage } from "./UI/Avatar"
import  Badge  from "./UI/Badge"
import  Textarea  from "./UI/TextArea"
import { useNavigate } from 'react-router-dom';

export default function MessagesPage() {
const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  // Données simulées
  const conversations = [
    {
      id: 1,
      name: "Alex Petit",
      photo: "/placeholder.svg?height=50&width=50",
      lastMessage: "Salut ! Ton Golden Retriever est adorable 🐕",
      lastMessageTime: "14:30",
      unreadCount: 2,
      isOnline: true,
      pets: ["🐕 Border Collie"],
    },
    {
      id: 2,
      name: "Emma Rousseau",
      photo: "/placeholder.svg?height=50&width=50",
      lastMessage: "Merci pour le match ! 💕",
      lastMessageTime: "12:15",
      unreadCount: 0,
      isOnline: false,
      pets: ["🐱 Chat de gouttière"],
    },
    {
      id: 3,
      name: "Sophie Martin",
      photo: "/placeholder.svg?height=50&width=50",
      lastMessage: "On pourrait se promener avec nos chiens ?",
      lastMessageTime: "Hier",
      unreadCount: 1,
      isOnline: true,
      pets: ["🐕 Golden Retriever"],
    },
    {
      id: 4,
      name: "Lucas Dubois",
      photo: "/placeholder.svg?height=50&width=50",
      lastMessage: "Tes photos de chats sont magnifiques !",
      lastMessageTime: "Hier",
      unreadCount: 0,
      isOnline: false,
      pets: ["🐱 Maine Coon", "🐱 Persan"],
    },
  ]

  const messages = {
    1: [
      {
        id: 1,
        senderId: 1,
        text: "Salut Emma ! 👋",
        timestamp: "14:20",
        isMe: false,
      },
      {
        id: 2,
        senderId: "me",
        text: "Salut Alex ! Comment ça va ?",
        timestamp: "14:22",
        isMe: true,
      },
      {
        id: 3,
        senderId: 1,
        text: "Très bien merci ! Ton Golden Retriever est adorable 🐕",
        timestamp: "14:25",
        isMe: false,
      },
      {
        id: 4,
        senderId: 1,
        text: "Il s'appelle comment ?",
        timestamp: "14:30",
        isMe: false,
      },
    ],
    2: [
      {
        id: 1,
        senderId: 2,
        text: "Merci pour le match ! 💕",
        timestamp: "12:15",
        isMe: false,
      },
    ],
    3: [
      {
        id: 1,
        senderId: 3,
        text: "Salut ! Nos chiens ont l'air de bien s'entendre sur les photos 😊",
        timestamp: "Hier 16:30",
        isMe: false,
      },
      {
        id: 2,
        senderId: "me",
        text: "Oui c'est vrai ! Ils sont adorables tous les deux",
        timestamp: "Hier 16:45",
        isMe: true,
      },
      {
        id: 3,
        senderId: 3,
        text: "On pourrait se promener avec nos chiens ?",
        timestamp: "Hier 17:00",
        isMe: false,
      },
    ],
    4: [
      {
        id: 1,
        senderId: 4,
        text: "Tes photos de chats sont magnifiques !",
        timestamp: "Hier 10:30",
        isMe: false,
      },
    ],
  }

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)
const currentMessages = selectedChat ? messages[selectedChat] || [] : [];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      // Logique pour envoyer le message
      console.log("Sending message:", newMessage, "to:", selectedChat)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [currentMessages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/dashboard')} variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                ← Retour
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Messages
                </h1>
                <p className="text-sm text-gray-600">Discutez avec vos matchs</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Liste des conversations */}
          <Card className="lg:col-span-1 bg-white/60 backdrop-blur-sm border-purple-100 overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col">
              {/* Recherche */}
              <div className="p-4 border-b border-purple-100">
                <Input
                  placeholder="Rechercher une conversation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-purple-200 focus:border-purple-500"
                />
              </div>

              {/* Liste des conversations */}
              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 border-b border-purple-50 cursor-pointer transition-colors hover:bg-purple-50 ${
                      selectedChat === conversation.id ? "bg-gradient-to-r from-pink-50 to-purple-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-purple-200">
                          <AvatarImage src={conversation.photo || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-800 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.lastMessageTime}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{conversation.lastMessage}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-1">
                            {conversation.pets.map((pet, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {pet}
                              </Badge>
                            ))}
                          </div>
                          {conversation.unreadCount > 0 && (
                            <Badge className="bg-red-500 text-white text-xs">{conversation.unreadCount}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Zone de chat */}
          <Card className="lg:col-span-2 bg-white/60 backdrop-blur-sm border-purple-100 overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Header du chat */}
                  <div className="p-4 border-b border-purple-100 bg-gradient-to-r from-pink-50 to-purple-50">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10 border-2 border-purple-200">
                          <AvatarImage
                            src={selectedConversation.photo || "/placeholder.svg"}
                            alt={selectedConversation.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                            {selectedConversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {selectedConversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{selectedConversation.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {selectedConversation.isOnline ? "En ligne" : "Hors ligne"}
                          </span>
                          <div className="flex space-x-1">
                            {selectedConversation.pets.map((pet, index) => (
                              <span key={index} className="text-sm">
                                {pet}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.isMe
                              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                              : "bg-white border border-purple-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${message.isMe ? "text-pink-100" : "text-gray-500"}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Zone de saisie */}
                  <div className="p-4 border-t border-purple-100 bg-white/80">
                    <div className="flex space-x-3">
                      <Textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Tapez votre message..."
                        className="flex-1 border-purple-200 focus:border-purple-500 resize-none min-h-[40px] max-h-[120px]"
                        rows={1}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-6"
                      >
                        📤
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Appuyez sur Entrée pour envoyer</p>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Sélectionnez une conversation</h3>
                    <p className="text-gray-600">Choisissez une conversation pour commencer à discuter</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
