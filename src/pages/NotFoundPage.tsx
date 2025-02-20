import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          404 - Page Not Found
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          The page you're looking for doesn't exist
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md"
        >
          Go Home
        </button>
      </div>
    </div>
  )
} 