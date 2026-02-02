export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-800 bg-slate-950/40 backdrop-blur mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span>🦞</span>
            <span className="font-bold">SalesLobster</span>
          </div>
          <div className="text-sm text-gray-500">© {year} SalesLobster</div>
        </div>
      </div>
    </footer>
  )
}
