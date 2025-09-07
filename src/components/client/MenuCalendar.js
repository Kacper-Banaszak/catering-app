"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function MenuCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalState, setModalState] = useState({ type: null, day: null }); // type: 'changeDay' | 'changeAddress' | null
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    day: null,
  });

  useEffect(() => {
    const handleClick = () => setContextMenu({ ...contextMenu, visible: false });
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [contextMenu]);

  const handleRightClick = (event, day) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      day: day,
    });
  };

  const handleAction = (action, day) => {
    setModalState({ type: action, day: day });
  };

  const closeModal = () => {
    setModalState({ type: null, day: null });
  };

  const handleChangeDaySubmit = (e) => {
    e.preventDefault();
    const newDate = e.target.elements.newDeliveryDate.value;
    alert(`Zgłoszono zmianę terminu dostawy z dnia ${modalState.day} na ${newDate}.`);
    closeModal();
  };

  const handleChangeAddressSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const address = `${formData.get('street')} ${formData.get('number')}, ${formData.get('zip')} ${formData.get('city')}`;
    alert(`Zgłoszono zmianę adresu dla dostawy z dnia ${modalState.day} na: ${address}`);
    closeModal();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("pl-PL", { month: "long" });

  const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];
  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="border rounded-md"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
    calendarDays.push(
      <div
        key={day}
        onContextMenu={(e) => handleRightClick(e, day)}
        className="border rounded-md p-2 cursor-pointer hover:bg-gray-100 min-h-[100px] flex flex-col"
      >
        <div className={`font-bold ${isToday ? 'text-blue-600' : ''}`}>{day}</div>
        <div className="text-xs text-gray-600 mt-1 flex-grow">
          <p>Śniadanie: Owsianka</p>
          <p>Obiad: Kurczak z ryżem</p>
          <p>Kolacja: Sałatka</p>
        </div>
      </div>
    );
  }

  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="px-3 py-1 border rounded hover:bg-gray-100">&lt;</button>
        <h3 className="text-lg font-semibold capitalize">{monthName} {year}</h3>
        <button onClick={() => changeMonth(1)} className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map(day => (
          <div key={day} className="font-bold text-center text-gray-500">{day}</div>
        ))}
        {calendarDays}
      </div>

      {contextMenu.visible && (
        <div
          className="absolute bg-white border rounded-md shadow-lg py-1 z-10"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <div onClick={() => handleAction("changeDay", contextMenu.day)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            Zmiana dnia dostawy
          </div>
          <div onClick={() => handleAction("changeAddress", contextMenu.day)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            Zmiana adresu dostawy
          </div>
        </div>
      )}

      {/* Modal do zmiany dnia dostawy */}
      <Modal open={modalState.type === 'changeDay'} onClose={closeModal} title={`Zmień dzień dostawy z ${modalState.day} ${monthName}`}>
        <form onSubmit={handleChangeDaySubmit} className="space-y-4">
          <div>
            <label htmlFor="newDeliveryDate" className="block text-sm font-medium text-gray-700">Wybierz nowy dzień</label>
            <input type="date" id="newDeliveryDate" name="newDeliveryDate" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={closeModal}>Anuluj</Button>
            <Button type="submit">Zapisz zmianę</Button>
          </div>
        </form>
      </Modal>

      {/* Modal do zmiany adresu dostawy */}
      <Modal open={modalState.type === 'changeAddress'} onClose={closeModal} title={`Zmień adres dostawy dla ${modalState.day} ${monthName}`}>
        <form onSubmit={handleChangeAddressSubmit} className="space-y-4">
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Ulica</label>
            <input type="text" name="street" id="street" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Numer domu/mieszkania</label>
            <input type="text" name="number" id="number" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Kod pocztowy</label>
            <input type="text" name="zip" id="zip" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Miejscowość</label>
            <input type="text" name="city" id="city" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={closeModal}>Anuluj</Button>
            <Button type="submit">Zapisz adres</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}