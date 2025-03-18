export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-900 px-5 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-thin text-zinc-400">
          &copy; MMasters {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="/privacy-policy"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
