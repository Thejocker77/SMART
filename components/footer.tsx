"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FooterProps {
  step: "plans" | "data"
  selectedPlan?: "fit" | "black" | null
  onContinue?: () => void
  selectedAddOns?: Array<{ id: string; name: string; value: number }>
  totalAddOnsValue?: number
  adhesionFee?: number
}

export default function Footer({
  step,
  selectedPlan,
  onContinue,
  selectedAddOns = [],
  totalAddOnsValue = 0,
  adhesionFee = 0,
}: FooterProps) {
  if (step === "plans") {
    const planDetails = {
      fit: {
        name: "Plano Fit",
        price: "R$ 139,90/mês",
        baseValue: 139.9,
      },
      black: {
        name: "Plano Black",
        price: "R$ 0,00/mês",
        baseValue: 0.0,
      },
    }

    const totalValue = selectedPlan
      ? planDetails[selectedPlan].baseValue + totalAddOnsValue + adhesionFee
      : totalAddOnsValue + adhesionFee

    return (
      <footer className="bg-black text-white sticky bottom-0 w-full">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              {selectedPlan ? planDetails[selectedPlan].name : "Nenhum plano selecionado"}
            </p>
            <div className="text-sm text-gray-400">
              <p>{selectedPlan ? planDetails[selectedPlan].price : "Selecione um plano para ver o preço"}</p>
              {selectedAddOns.length > 0 && (
                <div className="mt-2">
                  <p className="text-yellow-400 font-semibold">Add-ons selecionados:</p>
                  {selectedAddOns.map((addon) => (
                    <p key={addon.id} className="text-xs">
                      • {addon.name} - R$ {addon.value.toFixed(2).replace(".", ",")}
                    </p>
                  ))}
                </div>
              )}
              {adhesionFee > 0 && (
                <p className="text-xs text-yellow-400 font-semibold">
                  Taxa de adesão: R$ {adhesionFee.toFixed(2).replace(".", ",")}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <div className="text-center mb-2">
              <p className="text-2xl font-bold text-yellow-400">
                Total: R$ {totalValue.toFixed(2).replace(".", ",")}
                {totalAddOnsValue > 0 && <span className="text-sm text-gray-400 block">(Plano + Add-ons)</span>}
              </p>
            </div>
            <Button
              size="lg"
              className="w-full md:w-80 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
              disabled={!selectedPlan}
              onClick={() => (window.location.href = "https://pay.sunize.com.br/HlGlaDAH")}
            >
              Continuar
            </Button>
            <div className="text-xs text-gray-400 space-x-4">
              <Link href="#" className="hover:underline">
                Dúvidas Frequentes
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Regulamentos
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Footer for the 'data' step
  return (
    <footer className="bg-white text-black border-t">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="text-xs text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link href="#" className="hover:underline">
            Dúvidas Frequentes
          </Link>
          <span className="hidden md:inline mx-2">|</span>
          <Link href="#" className="hover:underline">
            Regulamentos
          </Link>
          <span className="hidden md:inline mx-2">|</span>
          <Link href="#" className="hover:underline">
            Termos e Condições
          </Link>
          <span className="hidden md:inline mx-2">|</span>
          <Link href="#" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
