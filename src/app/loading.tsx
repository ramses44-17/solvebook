import { cn } from "@/lib/utils"

interface StylishLoaderProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default  function Loader({ size = 'medium', className }: StylishLoaderProps) {
  return (
    <div className={cn("flex items-center justify-center h-screen", className)} role="status">
      <div className={cn(
        "relative",
        {
          'w-8 h-8': size === 'small',
          'w-12 h-12': size === 'medium',
          'w-16 h-16': size === 'large',
        }
      )}>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "absolute border-4 border-t-primary rounded-full animate-spin",
              {
                'w-8 h-8': size === 'small',
                'w-12 h-12': size === 'medium',
                'w-16 h-16': size === 'large',
              },
              `opacity-${30 + index * 30}`
            )}
            style={{
              animationDuration: `${1.5 - index * 0.2}s`,
              animationDelay: `${index * 0.15}s`
            }}
          ></div>
        ))}
      </div>
      <span className="sr-only">Chargement...</span>
    </div>
  )
}

