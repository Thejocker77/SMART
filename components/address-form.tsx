"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AddressForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Endereço</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="cep">CEP</Label>
          <div className="flex gap-4">
            <Input id="cep" placeholder="00000-000" className="flex-grow" />
            
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" placeholder="Sua rua ou avenida" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="number">Número</Label>
            <Input id="number" placeholder="Ex: 123" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="complement">Complemento</Label>
            <Input id="complement" placeholder="Apto, bloco, etc. (opcional)" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input id="neighborhood" placeholder="Seu bairro" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" placeholder="Sua cidade" />
          </div>
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="state">Estado</Label>
            <Input id="state" placeholder="UF" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
