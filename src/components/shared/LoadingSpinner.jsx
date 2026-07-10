export default function LoadingSpinner({ size = 'md' }) {
  const sizes = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' }
  return (
    <div className="flex items-center justify-center py-8">
      <div className={`${sizes[size]} border-2 border-border border-t-teal rounded-full animate-spin`} />
    </div>
  )
}
