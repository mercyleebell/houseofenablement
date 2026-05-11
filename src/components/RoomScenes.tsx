type SceneProps = {
  className?: string;
};

const sceneProps = {
  viewBox: "0 0 400 250",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  preserveAspectRatio: "xMidYMid slice" as const,
  "aria-hidden": true,
};

// room 1: onboarding — classroom interior
export function ClassroomScene({ className }: SceneProps) {
  return (
    <svg {...sceneProps} className={className}>
      {/* floor line */}
      <path d="M 0 214 Q 200 216, 400 214" />
      {/* chalkboard on back wall */}
      <path d="M 64 22 Q 200 19, 336 24 L 338 112 Q 200 116, 62 112 Q 60 66, 64 22 Z" />
      {/* inner chalk frame */}
      <path d="M 78 34 Q 200 32, 322 36 L 324 100 Q 200 104, 76 100 Q 76 66, 78 34 Z" opacity="0.45" />
      {/* writing on board */}
      <path d="M 96 50 Q 130 48, 164 50 Q 198 52, 232 50 Q 266 48, 296 50" />
      <path d="M 96 64 Q 140 62, 184 64 Q 228 66, 268 64" />
      <path d="M 96 78 Q 130 76, 162 78 Q 194 80, 224 78" />
      <path d="M 196 92 Q 220 90, 244 92" />
      {/* door on left wall */}
      <path d="M 8 116 Q 8 168, 10 212 L 36 212 Q 38 168, 38 116 Q 24 114, 8 116 Z" />
      <circle cx="32" cy="166" r="1.8" fill="currentColor" />
      {/* window on right wall */}
      <path d="M 362 72 Q 362 100, 364 130 L 392 130 Q 394 100, 392 72 Q 378 70, 362 72 Z" />
      <path d="M 377 72 L 378 130" />
      <path d="M 362 100 Q 378 102, 392 100" />
      {/* student desks — back row */}
      <path d="M 110 142 L 112 130" />
      <path d="M 114 140 Q 138 142, 162 140 L 162 160 Q 138 162, 114 160 Z" />
      <path d="M 226 142 L 228 130" />
      <path d="M 230 140 Q 254 142, 278 140 L 278 160 Q 254 162, 230 160 Z" />
      {/* student desks — front row */}
      <path d="M 84 188 L 86 172" />
      <path d="M 88 186 Q 116 188, 144 186 L 144 210 Q 116 212, 88 210 Z" />
      <path d="M 222 188 L 224 172" />
      <path d="M 226 186 Q 254 188, 282 186 L 282 210 Q 254 212, 226 210 Z" />
    </svg>
  );
}

// room 2: product and skill enablement — office interior
export function OfficeScene({ className }: SceneProps) {
  return (
    <svg {...sceneProps} className={className}>
      {/* floor */}
      <path d="M 0 216 Q 200 218, 400 216" />
      {/* clock on the back wall */}
      <circle cx="200" cy="36" r="14" />
      <path d="M 200 26 L 200 36 L 207 40" />
      {/* picture / window on left wall */}
      <path d="M 18 52 Q 16 78, 18 104 L 88 104 Q 90 78, 88 52 Q 52 50, 18 52 Z" />
      <path d="M 53 52 L 53 104" />
      <path d="M 18 78 Q 52 80, 88 78" />
      {/* shelf / poster on right wall */}
      <path d="M 314 60 Q 314 90, 316 116 L 384 116 Q 386 90, 384 60 Q 348 58, 314 60 Z" />
      <path d="M 314 78 Q 348 80, 384 78" />
      <path d="M 314 96 Q 348 98, 384 96" />
      {/* desk */}
      <path d="M 70 158 Q 200 160, 330 158 L 330 180 Q 200 184, 70 180 Z" />
      {/* monitor */}
      <path d="M 150 76 Q 200 74, 250 76 L 252 148 Q 200 152, 148 148 Z" />
      <path d="M 162 84 Q 200 82, 238 84 L 240 138 Q 200 142, 160 138 Z" opacity="0.45" />
      <path d="M 200 152 L 200 158" />
      <path d="M 188 158 Q 200 160, 212 158" />
      {/* office chair — back peeking */}
      <path d="M 96 156 Q 96 124, 108 110 Q 130 106, 152 110 Q 164 124, 164 156" />
      <path d="M 128 184 L 128 214" />
      <path d="M 114 214 Q 128 216, 142 214" />
      {/* coffee cup on desk */}
      <path d="M 270 144 Q 270 138, 278 138 L 296 138 Q 304 138, 304 144 L 302 156 Q 286 158, 272 156 Z" />
      <path d="M 304 142 Q 312 142, 312 148 Q 312 154, 304 154" />
      {/* plant in pot, right side */}
      <path d="M 350 196 L 380 196 L 376 218 Q 364 220, 354 218 Z" />
      <path d="M 358 196 Q 362 178, 366 170 Q 370 162, 374 158" />
      <path d="M 365 196 Q 364 184, 360 174 Q 358 170, 354 166" />
      <path d="M 372 196 Q 374 188, 380 180 Q 384 174, 388 170" />
    </svg>
  );
}

// room 3: field activation — party room / celebration (bunting + balloons + cake)
export function BallroomScene({ className }: SceneProps) {
  return (
    <svg {...sceneProps} className={className} strokeWidth={2}>
      {/* floor */}
      <path d="M 0 232 Q 200 234, 400 232" opacity="0.4" />
      {/* bunting — left string */}
      <path d="M 6 22 Q 80 76, 156 60" />
      {/* chunky flags on left bunting */}
      <path d="M 26 50 L 16 80 L 44 78 Z" />
      <path d="M 60 66 L 50 94 L 78 92 Z" />
      <path d="M 96 74 L 86 102 L 114 100 Z" />
      <path d="M 134 70 L 124 98 L 152 96 Z" />
      {/* bunting — right string */}
      <path d="M 244 60 Q 320 76, 394 22" />
      {/* chunky flags on right bunting */}
      <path d="M 248 70 L 238 98 L 266 96 Z" />
      <path d="M 286 74 L 276 102 L 304 100 Z" />
      <path d="M 322 66 L 312 94 L 340 92 Z" />
      <path d="M 360 50 L 350 80 L 378 78 Z" />
      {/* center: tiered cake on a small table */}
      {/* table */}
      <path d="M 146 198 Q 200 200, 254 198 L 252 222 Q 200 226, 148 222 Z" />
      {/* bottom tier of cake (widest) */}
      <path d="M 158 166 Q 200 164, 242 166 L 242 200 Q 200 204, 158 200 Z" />
      <path d="M 158 178 Q 200 176, 242 178" opacity="0.4" />
      {/* middle tier */}
      <path d="M 172 140 Q 200 138, 228 140 L 228 166 Q 200 168, 172 166 Z" />
      <path d="M 172 150 Q 200 148, 228 150" opacity="0.4" />
      {/* top tier */}
      <path d="M 184 122 Q 200 120, 216 122 L 216 140 Q 200 142, 184 140 Z" />
      {/* candles */}
      <path d="M 188 122 L 188 108" />
      <path d="M 187 108 Q 186 104, 188 102 Q 190 104, 189 108" />
      <path d="M 196 122 L 196 106" />
      <path d="M 195 106 Q 194 102, 196 100 Q 198 102, 197 106" />
      <path d="M 204 122 L 204 106" />
      <path d="M 203 106 Q 202 102, 204 100 Q 206 102, 205 106" />
      <path d="M 212 122 L 212 108" />
      <path d="M 211 108 Q 210 104, 212 102 Q 214 104, 213 108" />
      {/* left balloon cluster */}
      <path d="M 44 124 Q 24 124, 24 144 Q 24 164, 44 164 Q 64 164, 64 144 Q 64 124, 44 124 Z" />
      <path d="M 42 164 L 46 168 L 42 170" />
      <path d="M 42 170 Q 38 188, 44 206" />
      <path d="M 80 146 Q 60 146, 60 166 Q 60 186, 80 186 Q 100 186, 100 166 Q 100 146, 80 146 Z" />
      <path d="M 78 186 L 82 190 L 78 192" />
      <path d="M 78 192 Q 80 208, 74 220" />
      <path d="M 30 184 Q 14 184, 14 202 Q 14 220, 30 220 Q 46 220, 46 202 Q 46 184, 30 184 Z" />
      <path d="M 28 220 L 32 222" />
      {/* right balloon cluster */}
      <path d="M 356 126 Q 336 126, 336 146 Q 336 166, 356 166 Q 376 166, 376 146 Q 376 126, 356 126 Z" />
      <path d="M 354 166 L 358 170 L 354 172" />
      <path d="M 354 172 Q 358 190, 352 208" />
      <path d="M 320 148 Q 300 148, 300 168 Q 300 188, 320 188 Q 340 188, 340 168 Q 340 148, 320 148 Z" />
      <path d="M 318 188 L 322 192 L 318 194" />
      <path d="M 318 194 Q 320 208, 314 222" />
      <path d="M 370 184 Q 354 184, 354 202 Q 354 220, 370 220 Q 386 220, 386 202 Q 386 184, 370 184 Z" />
      <path d="M 368 220 L 372 222" />
    </svg>
  );
}

// room 4: leadership development — boardroom interior
export function BoardroomScene({ className }: SceneProps) {
  return (
    <svg {...sceneProps} className={className}>
      {/* floor (subtle) */}
      <path d="M 0 240 Q 200 242, 400 240" opacity="0.4" />
      {/* projector screen on back wall */}
      <path d="M 116 12 Q 200 10, 284 14 L 286 76 Q 200 80, 114 76 Q 114 44, 116 12 Z" />
      {/* chart on screen */}
      <path d="M 140 60 L 162 46 L 184 52 L 208 34 L 232 42 L 254 26 L 270 30" />
      <path d="M 140 64 L 270 64" opacity="0.4" />
      {/* boardroom table (oval, top-down) */}
      <path d="M 56 158 Q 56 122, 200 122 Q 344 122, 344 158 Q 344 194, 200 194 Q 56 194, 56 158 Z" />
      {/* notepads on table */}
      <path d="M 130 148 L 156 148 L 156 158 L 130 158 Z" opacity="0.55" />
      <path d="M 244 148 L 270 148 L 270 158 L 244 158 Z" opacity="0.55" />
      <path d="M 184 138 L 216 138 L 216 144 L 184 144 Z" opacity="0.55" />
      {/* chairs around table — top row */}
      <path d="M 84 94 Q 84 110, 86 114 L 102 114 Q 104 110, 104 94 Q 94 92, 84 94 Z" />
      <path d="M 136 86 Q 136 104, 138 108 L 154 108 Q 156 104, 156 86 Q 146 84, 136 86 Z" />
      <path d="M 192 82 Q 192 100, 194 104 L 210 104 Q 212 100, 212 82 Q 202 80, 192 82 Z" />
      <path d="M 246 86 Q 246 104, 248 108 L 264 108 Q 266 104, 266 86 Q 256 84, 246 86 Z" />
      <path d="M 298 94 Q 298 110, 300 114 L 316 114 Q 318 110, 318 94 Q 308 92, 298 94 Z" />
      {/* chairs around table — bottom row */}
      <path d="M 84 202 Q 84 218, 86 222 L 102 222 Q 104 218, 104 202 Q 94 200, 84 202 Z" />
      <path d="M 136 210 Q 136 226, 138 230 L 154 230 Q 156 226, 156 210 Q 146 208, 136 210 Z" />
      <path d="M 192 214 Q 192 230, 194 234 L 210 234 Q 212 230, 212 214 Q 202 212, 192 214 Z" />
      <path d="M 246 210 Q 246 226, 248 230 L 264 230 Q 266 226, 266 210 Q 256 208, 246 210 Z" />
      <path d="M 298 202 Q 298 218, 300 222 L 316 222 Q 318 218, 318 202 Q 308 200, 298 202 Z" />
      {/* head-of-table chairs */}
      <path d="M 32 144 Q 32 168, 34 172 L 50 172 Q 52 168, 52 144 Q 42 142, 32 144 Z" />
      <path d="M 348 144 Q 348 168, 350 172 L 366 172 Q 368 168, 368 144 Q 358 142, 348 144 Z" />
    </svg>
  );
}

export function RoomScene({
  n,
  className,
}: {
  n: 1 | 2 | 3 | 4;
  className?: string;
}) {
  switch (n) {
    case 1:
      return <ClassroomScene className={className} />;
    case 2:
      return <OfficeScene className={className} />;
    case 3:
      return <BallroomScene className={className} />;
    case 4:
      return <BoardroomScene className={className} />;
  }
}
