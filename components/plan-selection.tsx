"use client"

import type { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  X,
  Star,
  Crown,
  Zap,
  Dumbbell,
  Users,
  Globe,
  GiftIcon as Massage,
  Shield,
  Smartphone,
  Activity,
} from "lucide-react"

interface PlanSelectionProps {
  selectedPlan: "fit" | "black" | null
  setSelectedPlan: Dispatch<SetStateAction<"fit" | "black" | null>>
  onPlanSelect?: (planType: "fit" | "black", adhesionFee: number) => void
}

const planFeatures = [
  {
    name: "Área de musculação e aeróbico",
    fit: true,
    black: true,
    icon: Dumbbell,
    color: "text-blue-600",
  },
  {
    name: "Aulas de ginástica",
    fit: true,
    black: true,
    icon: Activity,
    color: "text-green-600",
  },
  {
    name: "Smart Fit GO",
    fit: true,
    black: true,
    icon: Smartphone,
    color: "text-purple-600",
  },
  {
    name: "Sem multa de cancelamento",
    fit: false,
    black: true,
    icon: Shield,
    color: "text-red-600",
    premium: true,
  },
  {
    name: "Leve um amigo 5x por mês",
    fit: false,
    black: true,
    icon: Users,
    color: "text-orange-600",
    premium: true,
  },
  {
    name: "Use todas as academias da rede",
    fit: false,
    black: true,
    icon: Globe,
    color: "text-cyan-600",
    premium: true,
  },
  {
    name: "Cadeira de massagem",
    fit: false,
    black: true,
    icon: Massage,
    color: "text-pink-600",
    premium: true,
  },
]

export default function PlanSelection({ selectedPlan, setSelectedPlan, onPlanSelect }: PlanSelectionProps) {
  const handlePlanSelection = (planType: "fit" | "black") => {
    setSelectedPlan(planType)
    const adhesionFee = planType === "black" ? 49.9 : 0
    if (onPlanSelect) {
      onPlanSelect(planType, adhesionFee)
    }
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card
          className={`cursor-pointer transition-all ${
            selectedPlan === "fit" ? "border-yellow-400 border-2" : "border-gray-200"
          }`}
          onClick={() => handlePlanSelection("fit")}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-400" />
              Plano Fit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-4xl font-bold">
              R$ 139,<span className="text-2xl">90</span>
              <span className="text-lg font-normal">/mês</span>
            </p>
            <p className="text-sm text-muted-foreground">Adesão R$ 0 | Anuidade R$ 0</p>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Principais benefícios:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="p-1 bg-blue-100 rounded-full">
                    <Dumbbell className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Área completa de musculação</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 bg-green-100 rounded-full">
                    <Activity className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Aulas de ginástica ilimitadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 bg-purple-100 rounded-full">
                    <Smartphone className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">App Smart Fit GO</span>
                </li>
              </ul>
            </div>

            <Button
              className={`w-full font-semibold ${
                selectedPlan === "fit"
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-transparent border border-black text-black hover:bg-gray-100"
              }`}
              onClick={() => handlePlanSelection("fit")}
            >
              {selectedPlan === "fit" ? "Plano Selecionado" : "Selecionar Plano"}
            </Button>
          </CardContent>
        </Card>

        <div className="relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
              <Zap className="h-4 w-4 inline mr-1" />
              OFERTA LIMITADA JULHO
            </div>
          </div>

          <Card
            className={`cursor-pointer transition-all border-2 ${
              selectedPlan === "black" ? "border-yellow-400 border-4 shadow-2xl" : "border-yellow-400 shadow-xl"
            } relative overflow-hidden`}
            onClick={() => handlePlanSelection("black")}
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-yellow-400 text-black px-3 py-1 text-xs font-bold">
              EXCLUSIVO JULHO
            </div>

            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                <Crown className="h-6 w-6 text-yellow-600" />
                Plano Black (3 Meses)
              </CardTitle>
              <div className="text-sm text-black font-semibold flex items-center gap-1">
                <Zap className="h-4 w-4" />
                SUPER PROMOÇÃO - VAGAS LIMITADAS
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-3 rounded-lg border border-yellow-200">
                <p className="text-4xl font-bold text-black">
                  R$ 0,<span className="text-2xl">00</span>
                  <span className="text-lg font-normal">/mês</span>
                </p>
                <p className="text-xs text-black font-bold flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  ECONOMIA DE R$ 449,90 nos 3 primeiros meses!
                </p>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Crown className="h-4 w-4 text-yellow-600" />
                  Benefícios EXCLUSIVOS Black:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-cyan-100 rounded-full">
                      <Globe className="h-4 w-4 text-cyan-600" />
                    </div>
                    <span className="text-sm font-medium">Acesso a TODAS as academias</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-orange-100 rounded-full">
                      <Users className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-sm font-medium">Leve um amigo 5x por mês</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-pink-100 rounded-full">
                      <Massage className="h-4 w-4 text-pink-600" />
                    </div>
                    <span className="text-sm font-medium">Cadeira de massagem</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 bg-red-100 rounded-full">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium">Sem multa de cancelamento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 p-2 rounded text-center">
                <p className="text-xs text-black font-bold">⏰ Restam apenas 48h para aproveitar!</p>
              </div>

              <p className="text-sm text-muted-foreground">{"Taxa adesão R$ 49,90 | Anuidade R$ 0"}</p>

              <Button
                className={`w-full font-semibold text-lg py-3 ${
                  selectedPlan === "black"
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-red-600 text-white hover:bg-red-700 animate-bounce"
                }`}
                onClick={() => handlePlanSelection("black")}
              >
                {selectedPlan === "black" ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    PROMOÇÃO SELECIONADA
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    GARANTIR PROMOÇÃO
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6 border">
        <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <Activity className="h-6 w-6 text-yellow-500" />
          Comparação Completa de Benefícios
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-yellow-400">
              <th className="py-4 font-bold text-lg">Benefícios</th>
              <th className="py-4 text-center font-bold">
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Plano Fit
                </div>
              </th>
              <th className="py-4 text-center font-bold">
                <div className="flex items-center justify-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-600" />
                  Plano Black
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {planFeatures.map((feature) => (
              <tr key={feature.name} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-4 flex items-center gap-3">
                  <div className={`p-2 rounded-full bg-gray-100 ${feature.premium ? "ring-2 ring-yellow-300" : ""}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className={feature.premium ? "font-semibold" : ""}>{feature.name}</span>
                  {feature.premium && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold shadow-sm">
                      PREMIUM
                    </span>
                  )}
                </td>
                <td className="py-4 text-center">
                  {feature.fit ? (
                    <div className="flex items-center justify-center">
                      <div className="p-1 bg-green-100 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="p-1 bg-red-100 rounded-full">
                        <X className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-4 text-center">
                  {feature.black ? (
                    <div className="flex items-center justify-center gap-1">
                      <div className="p-1 bg-green-100 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      {feature.premium && (
                        <div className="p-1 bg-yellow-100 rounded-full">
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="p-1 bg-red-100 rounded-full">
                        <X className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
