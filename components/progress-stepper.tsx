interface ProgressStepperProps {
  currentStep: number
}

const steps = ["Seu plano", "Seus dados", "Pagamento"]

export default function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep

          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    isActive ? "bg-yellow-400" : isCompleted ? "bg-black" : "bg-gray-300"
                  }`}
                >
                  {stepNumber}
                </div>
                <p className={`mt-2 text-sm font-semibold ${isActive || isCompleted ? "text-black" : "text-gray-400"}`}>
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 ${isCompleted ? "bg-black" : "bg-gray-300"}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
