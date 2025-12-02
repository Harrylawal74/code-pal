type Props = {
  completed: boolean;
};

export default function ExerciseBox({ completed }: Props) {
  return (
    <div
      className={`w-15 h-15 rounded-xl transition-transform duration-300 
        hover:scale-110 hover:-translate-y-2 hover:rotate-x-3 hover:rotate-y-3 
        shadow-lg hover:shadow-2xl
        ${completed ? "bg-green-500" : "bg-[#4b5563]"}`}
    ></div>
  );
}
