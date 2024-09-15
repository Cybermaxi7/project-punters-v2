export default function Button({ value, className = "" }) {
    return (
        <button
            className={`bg-[#1D994A] text-white radius-md p-3  h-12 rounded-sm text-[16px] font-inter hover:bg-[#1D994A]/90 ${className}`}
        >
            {value}
        </button>
    );
}
