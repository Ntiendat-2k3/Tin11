import { cn } from "@/lib/utils"

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring", className)}
      {...props}
    />
  )
}
