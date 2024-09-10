export default function Odds({ title, odds }) {
    return (
        <button className="flex flex-col items-center gap-1">
            <p className="text-[#2B2B2B] font-medium">{title}</p>
            <div className="bg-[#F7F8F9] hover:bg-[#c3c3c4] p-2 rounded-[4px] w-[40px] flex items-center justify-center border-[#DBE1E7] border">
                {odds}
            </div>
        </button>
    );
}
