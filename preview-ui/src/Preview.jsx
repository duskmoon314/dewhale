import { Button } from '@/components/ui/button';
export default function PixelButtonPrototype() {
  return (
    <div className="flex flex-col space-y-4 p-8 bg-gray-100">
      <Button className="bg-gray-300 border border-gray-400 text-black hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Default</Button>
      <Button className="bg-blue-600 border border-blue-700 text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Primary</Button>
      <Button className="bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-300 hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Ghost</Button>
      <Button className="bg-gray-300 border border-gray-400 text-gray-500 cursor-not-allowed" disabled>Disabled</Button>
      <Button className="bg-red-600 border border-red-700 text-white hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Dangerous</Button>
    </div>
  );
}