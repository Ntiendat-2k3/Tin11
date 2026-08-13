import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return <div data-slot="card" className={cn("bg-card text-card-foreground flex flex-col gap-5 rounded-2xl border p-6 shadow-sm", className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div data-slot="card-header" className={cn("grid gap-1.5", className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 data-slot="card-title" className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div data-slot="card-content" className={cn(className)} {...props} />
}

export function CardFooter({ className, ...props }) {
  return <div data-slot="card-footer" className={cn("flex items-center", className)} {...props} />
}
