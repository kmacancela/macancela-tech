import { Link } from 'react-router'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 font-display text-8xl text-deep-water">
          404
        </h1>
        <p className="mb-8 text-lg text-ink-muted">
          This page doesn't exist. Maybe it will someday.
        </p>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  )
}
