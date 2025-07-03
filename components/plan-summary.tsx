import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MapPin } from "lucide-react"

const includedFeatures = ["Área de musculação e aeróbico", "Aulas de ginástica", "Smart Fit GO"]

interface PlanSummaryProps {
  plan: "fit" | "black" | null
  selectedAddOns?: Array<{ id: string; name: string; value: number }>
  totalAddOnsValue?: number
  adhesionFee?: number
}

export default function PlanSummary({
  plan,
  selectedAddOns = [],
  totalAddOnsValue = 0,
  adhesionFee = 0,
}: PlanSummaryProps) {
  const planDetails = {
    fit: {
      name: "Plano Fit",
      baseValue: 139.9,
    },
    black: {
      name: "Plano Black (3 Meses)",
      baseValue: 0.0,
    },
  }

  const totalValue = plan
    ? planDetails[plan].baseValue + totalAddOnsValue + adhesionFee
    : totalAddOnsValue + adhesionFee

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-xl">Seu plano</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="font-bold text-lg">{plan ? planDetails[plan].name : "Nenhum plano selecionado"}</p>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Brasil</span>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">Total</p>
          <p className="text-3xl font-bold">
            R$ {totalValue.toFixed(2).replace(".", ",").split(",")[0]},
            <span className="text-xl">{totalValue.toFixed(2).replace(".", ",").split(",")[1]}</span>
            
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Taxa adesão: R$ {adhesionFee.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-xs text-muted-foreground">Manutenção anual: R$ 0,00</p>
          {selectedAddOns.length > 0 && (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground font-semibold">Add-ons inclusos:</p>
              {selectedAddOns.map((addon) => (
                <p key={addon.id} className="text-xs text-muted-foreground">
                  • {addon.name} - R$ {addon.value.toFixed(2).replace(".", ",")}
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-semibold mb-3">O que está incluso:</h4>
          <ul className="space-y-2 text-sm">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-500">
          Continuar
        </Button>
      </CardContent>
    </Card>
  )
}
