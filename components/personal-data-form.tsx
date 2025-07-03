"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PersonalDataForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados pessoais</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nome completo</Label>
          <Input id="fullName" placeholder="Seu nome completo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Celular</Label>
            <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input id="birthdate" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" placeholder="000.000.000-00" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gênero</Label>
          <Select>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Masculino</SelectItem>
              <SelectItem value="female">Feminino</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
              <SelectItem value="prefer_not_to_say">Prefiro não dizer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
