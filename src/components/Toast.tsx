export default function Toast({ message }: { message: string }) {
  if (!message) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-rose-500 text-white shadow-lg animate-fade-in">
      {message}
    </div>
  )
} 