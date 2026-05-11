import Link from "next/link";
import { rooms } from "@/content/rooms";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="px-6 pt-8 pb-4 sm:px-10 sm:pt-12">
        <div className="label-mono">mercy bell · field activation systems</div>
      </header>

      <section className="px-6 pt-4 pb-12 sm:px-10 sm:pt-8 sm:pb-20 max-w-6xl">
        <svg
          viewBox="0 0 200 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-carbon w-[140px] sm:w-[180px] mb-6 sm:mb-10"
        >
          <path d="M 23 152 Q 21 118, 22 82 Q 60 52, 99 22 Q 138 52, 178 82 Q 180 118, 177 152 Q 100 156, 23 152 Z" />
          <path d="M 25 82 Q 100 86, 176 82" />
          <path d="M 84 152 L 85 116 Q 100 113, 116 117 L 115 152" />
          <circle cx="110" cy="135" r="1.8" fill="currentColor" stroke="none" />
          <path d="M 40 100 Q 38 116, 41 124 Q 53 126, 65 124 Q 66 114, 65 100 Q 53 98, 40 100 Z" />
          <path d="M 52 100 L 53 124" />
          <path d="M 40 112 L 65 113" />
          <path d="M 135 100 Q 133 116, 136 124 Q 148 126, 160 124 Q 161 114, 160 100 Q 148 98, 135 100 Z" />
          <path d="M 147 100 L 148 124" />
          <path d="M 135 112 L 160 113" />
        </svg>
        <h1 className="display text-[clamp(2.5rem,7vw,5.5rem)] max-w-4xl">
          what&apos;s missing in your house of enablement?
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
          a diagnostic for revenue leaders at series b and c. four rooms. about
          four minutes each. start with one or audit the whole house.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/room/1"
            className="inline-flex items-center gap-2 bg-carbon text-chartreuse px-6 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            audit the whole house
            <span aria-hidden>&rarr;</span>
          </Link>
          <span className="label-mono">or pick a room below</span>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 sm:pb-24">
        <div className="house-grid mx-auto max-w-6xl">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/room/${room.number}`}
              className="room-card group"
            >
              <div className="flex items-center justify-between">
                <div className="label-mono">room {room.number}</div>
                <div className="label-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  enter &rarr;
                </div>
              </div>
              <div className="mt-6">
                <div className="label-mono text-carbon">{room.name}</div>
                <div className="display mt-3 text-2xl sm:text-3xl">
                  {room.hero}
                </div>
              </div>
              <div className="mt-auto pt-8 label-mono">
                8 items · about 4 minutes
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-auto px-6 py-8 sm:px-10 border-t border-rule-soft">
        <div className="label-mono">
          built by mercy bell. v1 diagnostic. no list, no spam.
        </div>
      </footer>

      <style>{`
        .house-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--carbon);
          background: var(--carbon);
        }
        @media (min-width: 768px) {
          .house-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
          }
        }
        .room-card {
          background: var(--paper);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          min-height: 18rem;
          transition: background 200ms ease;
        }
        .room-card:not(:last-child) {
          border-bottom: 1.5px solid var(--carbon);
        }
        @media (min-width: 768px) {
          .room-card {
            min-height: 22rem;
            padding: 2.5rem 2.25rem;
          }
          .room-card:not(:last-child) {
            border-bottom: none;
          }
          .room-card:nth-child(1),
          .room-card:nth-child(2) {
            border-bottom: 1.5px solid var(--carbon);
          }
          .room-card:nth-child(1),
          .room-card:nth-child(3) {
            border-right: 1.5px solid var(--carbon);
          }
        }
        .room-card:hover {
          background: var(--chartreuse);
        }
      `}</style>
    </main>
  );
}
