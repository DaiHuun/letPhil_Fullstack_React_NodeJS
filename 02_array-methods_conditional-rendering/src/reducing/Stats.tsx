import ProblemCard from "../extras/ProblemCard";

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];

  // const total = nums.reduce((acc, num) => acc + num);
  // const max = nums.reduce((acc, num) => Math.max(acc, num));

  const stats = nums.reduce(
    (acc, num) => {
      return { total: acc.total + num, max: num > acc.max ? num : acc.max };
    },
    { total: 0, max: nums[0] },
  );

  const average = stats.total / nums.length;
  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        {/* TODO:
            - total via reduce
            - max via reduce
            - average = total / nums.length
        */}
        <p>TOTAL: {stats.total}</p>
        <p>MAX: {stats.max}</p>
        <p>AVERAGE: {average}</p>
      </div>
    </ProblemCard>
  );
};
