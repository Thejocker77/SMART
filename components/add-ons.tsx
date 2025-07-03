"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Dumbbell, HeartPulse, ShoppingCart, Check } from "lucide-react"

interface AddOn {
  id: string
  icon: any
  title: string
  description: string
  price: string
  value: number
}

const addOns: AddOn[] = [
  {
    id: "coach",
    icon: Dumbbell,
    title: "Smart Fit Coach",
    description: "Um treinador para montar seus treinos e te acompanhar de perto.",
    price: "A partir de R$ 19,90/mês",
    value: 19.9,
  },
  {
    id: "energy",
    icon: Zap,
    title: "Smart Energy",
    description: "Bebidas funcionais para dar um gás no seu treino.",
    price: "A partir de R$ 29,90/mês",
    value: 29.9,
  },
  {
    id: "body",
    icon: HeartPulse,
    title: "Smart Fit Body",
    description: "Bioimpedância para acompanhar sua evolução.",
    price: "A partir de R$ 49,90/avaliação",
    value: 49.9,
  },
  {
    id: "supps",
    icon: ShoppingCart,
    title: "Smart Fit Supps",
    description: "Suplementos para potencializar seus resultados.",
    price: "Ver produtos",
    value: 0,
  },
]

interface AddOnsProps {
  onAddOnToggle?: (addOnId: string, addOnData: { name: string; value: number }, isSelected: boolean) => void
}

export default function AddOns({ onAddOnToggle }: AddOnsProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set())

  const handleAddOnToggle = (addOn: AddOn) => {
    const newSelectedAddOns = new Set(selectedAddOns)
    const isCurrentlySelected = selectedAddOns.has(addOn.id)

    if (isCurrentlySelected) {
      newSelectedAddOns.delete(addOn.id)
    } else {
      newSelectedAddOns.add(addOn.id)
    }

    setSelectedAddOns(newSelectedAddOns)

    // Communicate with parent component (cart integration)
    if (onAddOnToggle) {
      onAddOnToggle(
        addOn.id,
        {
          name: addOn.title,
          value: addOn.value,
        },
        !isCurrentlySelected,
      )
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
        <div className="p-2 bg-yellow-100 rounded-full">
          <Zap className="h-6 w-6 text-yellow-600" />
        </div>
        Turbine seu plano
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {addOns.map((addOn) => {
          const isSelected = selectedAddOns.has(addOn.id)
          return (
            <Card
              key={addOn.title}
              className={`flex flex-col transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                isSelected
                  ? "border-yellow-400 border-2 shadow-lg bg-yellow-50"
                  : "border-gray-200 hover:border-yellow-300"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className={`p-3 rounded-full mb-4 ${isSelected ? "bg-yellow-100" : "bg-gray-100"}`}>
                  <addOn.icon className={`h-12 w-12 ${isSelected ? "text-yellow-600" : "text-yellow-400"}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{addOn.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{addOn.description}</p>
                <p
                  className={`font-semibold mb-4 text-lg transition-all duration-300 ${
                    isSelected ? "text-yellow-600 scale-110" : "text-gray-700"
                  }`}
                >
                  {addOn.price}
                </p>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-md"
                      : "border-yellow-400 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                  }`}
                  onClick={() => handleAddOnToggle(addOn)}
                  disabled={addOn.id === "supps"}
                >
                  {isSelected ? (
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      Adicionado ao carrinho
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Adicionar ao carrinho
                    </span>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
