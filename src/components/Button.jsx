export default function Button({ value }) {
  return (
    <button className="bg-[#1D994A] text-white radius-md w-32 h-12 rounded-sm text-[16px] font-inter hover:bg-[#1D994A]/90">
      {value}
    </button>
  );
}
