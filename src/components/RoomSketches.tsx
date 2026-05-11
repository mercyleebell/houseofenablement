type SketchProps = {
  className?: string;
};

const sharedProps = {
  viewBox: "0 0 100 80",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// room 1: onboarding — classroom (chalkboard + three student desks)
export function ClassroomSketch({ className }: SketchProps) {
  return (
    <svg {...sharedProps} className={className}>
      {/* chalkboard */}
      <path d="M 14 6 Q 50 4, 86 7 Q 88 22, 85 36 Q 50 38, 12 35 Q 12 20, 14 6 Z" />
      {/* writing on chalkboard */}
      <path d="M 22 14 Q 30 13, 38 14 Q 46 15, 56 14" />
      <path d="M 22 20 Q 32 19, 42 20 Q 52 21, 62 20" />
      <path d="M 22 27 Q 30 26, 40 27" />
      {/* three student desks with chair backs */}
      <path d="M 16 60 L 16 54" />
      <path d="M 18 60 Q 24 61, 30 60 L 30 68 Q 24 69, 18 68 Z" />
      <path d="M 42 60 L 42 54" />
      <path d="M 44 60 Q 50 61, 56 60 L 56 68 Q 50 69, 44 68 Z" />
      <path d="M 68 60 L 68 54" />
      <path d="M 70 60 Q 76 61, 82 60 L 82 68 Q 76 69, 70 68 Z" />
    </svg>
  );
}

// room 2: product and skill enablement — office (monitor + desk + chair back)
export function OfficeSketch({ className }: SketchProps) {
  return (
    <svg {...sharedProps} className={className}>
      {/* monitor */}
      <path d="M 30 14 Q 50 12, 70 14 L 71 46 Q 50 48, 29 46 Z" />
      <path d="M 34 18 Q 50 17, 66 18 L 67 42 Q 50 44, 33 42 Z" />
      {/* stand */}
      <path d="M 50 48 L 50 54" />
      <path d="M 42 54 Q 50 55, 58 54" />
      {/* desk */}
      <path d="M 10 58 Q 50 60, 90 58 L 90 66 Q 50 68, 10 66 Z" />
      {/* chair back peeking on the right */}
      <path d="M 78 50 Q 78 42, 80 38 Q 84 36, 88 38 Q 90 42, 90 50" />
      {/* coffee cup on left of desk */}
      <path d="M 18 56 Q 18 52, 22 52 L 26 52 Q 28 52, 28 56 L 27 60 Q 24 61, 19 60 Z" />
      <path d="M 28 54 Q 30 54, 30 56 Q 30 58, 28 58" />
    </svg>
  );
}

// room 3: play-based field activation — ballroom (bunting + balloons + confetti)
export function BallroomSketch({ className }: SketchProps) {
  return (
    <svg {...sharedProps} className={className}>
      {/* bunting string */}
      <path d="M 6 10 Q 30 22, 50 16 Q 70 10, 94 20" />
      {/* triangular flags */}
      <path d="M 20 18 L 16 28 L 24 28 Z" />
      <path d="M 36 22 L 32 32 L 40 32 Z" />
      <path d="M 52 19 L 48 29 L 56 29 Z" />
      <path d="M 68 18 L 64 28 L 72 28 Z" />
      <path d="M 84 23 L 80 33 L 88 33 Z" />
      {/* two balloons */}
      <path d="M 22 56 Q 17 56, 17 62 Q 17 68, 22 68 Q 27 68, 27 62 Q 27 56, 22 56 Z" />
      <path d="M 22 68 Q 23 73, 22 78" />
      <path d="M 78 60 Q 73 60, 73 66 Q 73 72, 78 72 Q 83 72, 83 66 Q 83 60, 78 60 Z" />
      <path d="M 78 72 Q 77 77, 78 78" />
      {/* confetti specks */}
      <path d="M 44 50 L 46 52" />
      <path d="M 56 56 L 58 54" />
      <path d="M 50 64 L 52 62" />
      <path d="M 38 68 L 40 70" />
      <path d="M 62 68 L 64 70" />
      <path d="M 46 76 L 48 74" />
    </svg>
  );
}

// room 4: leadership development — boardroom (top-down oval table + 6 chairs + screen)
export function BoardroomSketch({ className }: SketchProps) {
  return (
    <svg {...sharedProps} className={className}>
      {/* screen / whiteboard on wall */}
      <path d="M 36 4 L 64 5 L 64 14 L 36 13 Z" />
      <path d="M 41 9 L 49 9" />
      <path d="M 52 11 L 60 11" />
      {/* oval table */}
      <path d="M 22 46 Q 22 36, 50 36 Q 78 36, 78 46 Q 78 56, 50 56 Q 22 56, 22 46 Z" />
      {/* chairs around the table */}
      <path d="M 28 26 L 34 26 L 34 32 L 28 32 Z" />
      <path d="M 47 23 L 53 23 L 53 29 L 47 29 Z" />
      <path d="M 66 26 L 72 26 L 72 32 L 66 32 Z" />
      <path d="M 28 60 L 34 60 L 34 66 L 28 66 Z" />
      <path d="M 47 63 L 53 63 L 53 69 L 47 69 Z" />
      <path d="M 66 60 L 72 60 L 72 66 L 66 66 Z" />
    </svg>
  );
}

export function RoomSketch({
  n,
  className,
}: {
  n: 1 | 2 | 3 | 4;
  className?: string;
}) {
  switch (n) {
    case 1:
      return <ClassroomSketch className={className} />;
    case 2:
      return <OfficeSketch className={className} />;
    case 3:
      return <BallroomSketch className={className} />;
    case 4:
      return <BoardroomSketch className={className} />;
  }
}
