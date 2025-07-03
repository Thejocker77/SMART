"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import PlanSelection from "@/components/plan-selection"
import AddOns from "@/components/add-ons"
import UnitInfo from "@/components/unit-info"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import ProgressStepper from "@/components/progress-stepper"
import PersonalDataForm from "@/components/personal-data-form"
import AddressForm from "@/components/address-form"
import PlanSummary from "@/components/plan-summary"

export default function SmartFitCheckoutPage() {
  const [step, setStep] = useState<"plans" | "data">("plans")
  const [selectedPlan, setSelectedPlan] = useState<"fit" | "black" | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<Array<{ id: string; name: string; value: number }>>([])
  const [totalAddOnsValue, setTotalAddOnsValue] = useState(0)
  const [adhesionFee, setAdhesionFee] = useState(0)

  // Track page views for smartpromojulho.com
  useEffect(() => {
    // Add Google Analytics or other tracking here
    if (typeof window !== "undefined") {
      // Track page view
      console.log("Page viewed on smartpromojulho.com")

      // Set page title dynamically
      document.title =
        step === "plans"
          ? "Smart Fit - Escolha seu Plano | Promoção Julho 2024"
          : "Smart Fit - Finalize sua Adesão | Promoção Julho 2024"
    }
  }, [step])

  const handleContinue = () => {
    if (selectedPlan) {
      setStep("data")
      // Track conversion event
      if (typeof window !== "undefined") {
        console.log("User proceeded to data step", { plan: selectedPlan })
      }
    }
  }

  const handleAddOnToggle = (addOnId: string, addOnData: { name: string; value: number }, isSelected: boolean) => {
    if (isSelected) {
      // Adicionar add-on
      const newAddOn = { id: addOnId, name: addOnData.name, value: addOnData.value }
      setSelectedAddOns((prev) => [...prev, newAddOn])
      setTotalAddOnsValue((prev) => prev + addOnData.value)
    } else {
      // Remover add-on
      setSelectedAddOns((prev) => prev.filter((addon) => addon.id !== addOnId))
      setTotalAddOnsValue((prev) => prev - addOnData.value)
    }
  }

  const handlePlanSelect = (planType: "fit" | "black", adhesionFee: number) => {
    setSelectedPlan(planType)
    setAdhesionFee(adhesionFee)

    // Track plan selection
    if (typeof window !== "undefined") {
      console.log("Plan selected on smartpromojulho.com", { plan: planType, adhesionFee })
    }
  }

  if (step === "plans") {
    return (
      <div className="bg-white text-black">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Venha treinar na maior rede de academias da América Latina
            </h1>
            <p className="text-muted-foreground mt-2">Selecione um plano para continuar</p>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm font-semibold text-yellow-800">
                🔥 PROMOÇÃO EXCLUSIVA JULHO 2024 - Oferta válida apenas em smartpromojulho.com
              </p>
            </div>
          </div>
          <PlanSelection
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onPlanSelect={handlePlanSelect}
          />
          <Separator className="my-12" />
          <AddOns onAddOnToggle={handleAddOnToggle} />
          <Separator className="my-12" />
          <UnitInfo />
        </main>
        <Footer
          step={step}
          selectedPlan={selectedPlan}
          onContinue={handleContinue}
          selectedAddOns={selectedAddOns}
          totalAddOnsValue={totalAddOnsValue}
          adhesionFee={adhesionFee}
        />
      </div>
    )
  }

  if (step === "data") {
    return (
      <div className="bg-gray-50 text-black min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Falta pouco!</h1>
            <p className="text-muted-foreground mt-2">Preencha seus dados e finalize a sua adesão.</p>
            <div className="mt-4 p-3 bg-green-100 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-semibold text-green-800">
                ✅ Você está garantindo a promoção exclusiva de julho!
              </p>
            </div>
          </div>
          <ProgressStepper currentStep={2} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              <PersonalDataForm />
              <AddressForm />
            </div>
            <div className="lg:col-span-1">
              <PlanSummary
                plan={selectedPlan}
                selectedAddOns={selectedAddOns}
                totalAddOnsValue={totalAddOnsValue}
                adhesionFee={adhesionFee}
              />
            </div>
          </div>
        </main>
        <Footer step={step} />
      </div>
    )
  }

  return null
}
