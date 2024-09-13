import LineUp from "./LineUp";
import Preview from "./Preview";

export default function GamePreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6">
      <Preview />
      <LineUp />
    </div>
  );
}
