import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, TrendingUp, Video, Calendar, Wifi } from "lucide-react"
import { Button } from "./ui/button"
import OccupancyChart from "./occupancy-chart"

export default function UnitInfo() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <MapPin className="h-6 w-6 text-yellow-500" />
        Sobre a sua unidade
      </h2>
      <Card className="w-full shadow-lg border">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <div className="p-2 bg-yellow-100 rounded-full">
              <MapPin className="h-5 w-5 text-yellow-600" />
            </div>
            América Latina
          </CardTitle>
          <div className="flex items-center text-muted-foreground text-sm pt-2">
            <div className="p-1 bg-blue-100 rounded-full mr-2">
              <MapPin className="h-3 w-3 text-blue-600" />
            </div>
            Brasil
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-full">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              Horário de funcionamento
            </h3>
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-center p-2 bg-white rounded border-l-4 border-green-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-sm">Segunda a Sexta:</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  06:00 - 23:00
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded border-l-4 border-blue-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-sm">Sábado:</span>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                  08:00 - 17:00
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded border-l-4 border-orange-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="font-medium text-sm">Domingo e Feriados:</span>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                  08:00 - 14:00
                </span>
              </div>
            </div>
            
          </div>

          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-purple-100 rounded-full">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              Ocupação em tempo real
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-4 p-2 bg-white rounded border">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Status atual:</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-green-600">Movimento moderado</span>
                </div>
              </div>
              <OccupancyChart />
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-medium">Baixo</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="font-medium">Moderado</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="font-medium">Alto</span>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <strong className="text-blue-800">Dica:</strong>
                  <span className="text-blue-700">Melhor horário: 10h-14h e após 21h</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
