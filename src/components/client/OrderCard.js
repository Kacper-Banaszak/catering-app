'use client';

export default function OrderCard() {
  const handleClick = () => {
    window.location.href = "https://live-food.pl/zamowienie/";
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="font-bold">Twoje zamówienie</h2>
      <p className="text-gray-700">Kliknij przycisk, aby przejść do zamówienia:</p>
      <button
        type="button"
        onClick={handleClick}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Złóż zamówienie
      </button>
    </div>
  );
}
