import Link from "next/link";

export default function NavBar() {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          class="text-2xl font-semibold text-white hover:text-red-600"
        >
          Foodify
        </Link>
        <ul class="flex space-x-6">
          <li>
            <Link href="#" class="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" class="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#" class="text-white hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" class="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
