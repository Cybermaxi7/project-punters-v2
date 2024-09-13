import HeadToHead from "./HeadToHead";

export default function HeadToHeadContainer({ heading1, heading2 }) {
  return (
    <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
      <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
        Head to head
      </h3>
      <HeadToHead heading1={heading1} heading2={heading2} />
      <HeadToHead heading1={heading1} heading2={heading2} />
      <HeadToHead heading1={heading1} heading2={heading2} />
    </div>
  );
}
