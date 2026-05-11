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

// room 3: field activation — ballroom / party interior
export function BallroomScene({ className }: SceneProps) {
  return (
    <svg {...sceneProps} className={className}>
      {/* floor */}
      <path d="M 0 222 Q 200 224, 400 222" />
      {/* chandelier hanging from ceiling */}
      <path d="M 200 6 L 200 28" />
      <circle cx="200" cy="42" r="15" />
      <path d="M 185 42 Q 200 50, 215 42" opacity="0.5" />
      <path d="M 200 57 L 200 64" />
      <path d="M 188 60 L 184 68" />
      <path d="M 212 60 L 216 68" />
      <path d="M 200 64 L 200 72" />
      {/* bunting strings */}
      <path d="M 6 26 Q 100 70, 200 44 Q 300 18, 394 56" />
      {/* triangle flags on bunting */}
      <path d="M 32 52 L 26 70 L 40 70 Z" />
      <path d="M 64 64 L 58 82 L 72 82 Z" />
      <path d="M 100 66 L 94 84 L 108 84 Z" />
      <path d="M 138 60 L 132 78 L 146 78 Z" />
      <path d="M 174 50 L 168 68 L 182 68 Z" />
      <path d="M 232 42 L 226 60 L 240 60 Z" />
      <path d="M 268 36 L 262 54 L 276 54 Z" />
      <path d="M 304 38 L 298 56 L 312 56 Z" />
      <path d="M 340 44 L 334 62 L 348 62 Z" />
      <path d="M 374 56 L 368 74 L 382 74 Z" />
      {/* balloon cluster left */}
      <path d="M 32 130 Q 18 130, 18 144 Q 18 158, 32 158 Q 46 158, 46 144 Q 46 130, 32 130 Z" />
      <path d="M 32 158 Q 30 178, 34 196" />
      <path d="M 60 146 Q 48 146, 48 158 Q 48 170, 60 170 Q 72 170, 72 158 Q 72 146, 60 146 Z" />
      <path d="M 60 170 Q 62 184, 58 200" />
      <path d="M 48 174 Q 36 174, 36 186 Q 36 198, 48 198 Q 60 198, 60 186 Q 60 174, 48 174 Z" />
      <path d="M 48 198 Q 50 210, 46 218" />
      {/* balloon cluster right */}
      <path d="M 364 134 Q 350 134, 350 148 Q 350 162, 364 162 Q 378 162, 378 148 Q 378 134, 364 134 Z" />
      <path d="M 364 162 Q 366 182, 362 198" />
      <path d="M 340 154 Q 328 154, 328 166 Q 328 178, 340 178 Q 352 178, 352 166 Q 352 154, 340 154 Z" />
      <path d="M 340 178 Q 342 192, 338 208" />
      {/* streamers */}
      <path d="M 110 90 Q 122 110, 110 130 Q 98 150, 110 170" />
      <path d="M 290 90 Q 278 110, 290 130 Q 302 150, 290 170" />
      {/* confetti specks */}
      <path d="M 140 130 L 144 134" />
      <path d="M 170 156 L 168 160" />
      <path d="M 218 134 L 222 132" />
      <path d="M 250 158 L 252 162" />
      <path d="M 200 180 L 204 178" />
      <path d="M 158 200 L 160 204" />
      <path d="M 242 200 L 246 196" />
      <path d="M 180 124 L 184 126" />
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
