export default function Footer() {
  return (
    <footer className="mt-12 py-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Travel Blog — Created with ❤️
      </div>
    </footer>
  );
}