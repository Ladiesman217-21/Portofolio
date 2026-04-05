export default function Footer() {
  return (
    <footer className="bg-racing-green text-center p-8 mt-20 border-t-4 border-racing-red">
      <div className="max-w-4xl mx-auto">
        <p className="font-medium">📧 kenrickkiflie@gmail.com | 📱 085783781660</p>
        <p className="text-gray-400 text-sm mt-2">© 2026 Kenrick Kiflie | Built with Speed & Precision</p>
        <div className="mt-4 flex justify-center gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-1 bg-racing-red/30" />
          ))}
        </div>
      </div>
    </footer>
  );
}
