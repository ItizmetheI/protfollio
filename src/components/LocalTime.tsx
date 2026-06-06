import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  // Assume generic reasonable sleeping hours for a dev based in their local time zone.
  // We can just use the user's browser time since we don't know where Ahmed actually lives unless specified.
  // "Cyberpsace" implies local browser time is fine.
  const isSleeping = hours >= 2 && hours < 8;

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flex flex-col gap-1 items-end md:items-start text-xs font-sans uppercase font-bold tracking-widest text-neutral-400">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isSleeping ? 'bg-indigo-500' : 'bg-green-500'} animate-pulse`} />
        <span>{isSleeping ? 'Offline / Sleeping' : 'Online / Available'}</span>
      </div>
      <div className="text-white">
        {formatter.format(time)} — LOC
      </div>
    </div>
  );
}
