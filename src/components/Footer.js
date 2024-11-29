import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <p>Created by :</p>
          <Link href="/" className="hover:text-blue-400">
            K Sainath DoraBabu
          </Link>
          <Link href="/" className="hover:text-blue-400">
            B Shanshank
          </Link>
          <Link href="/" className="hover:text-blue-400">
            K Hrishikesh
          </Link>
          <Link href="/" className="hover:text-blue-400">
            Abhiseik Pandey
          </Link>
        </div>
      </div>
    </footer>
  );
}
