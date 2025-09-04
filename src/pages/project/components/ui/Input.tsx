type InputProps = {
  label: string;
};

export function Input({ label }: InputProps) {
  return (
    <div className="w-full h-[50%]">
      <input
        className="w-full h-full p-2 text-xs border rounded border-gray-250 placeholder:text-gray-500 placeholder:font-normal placeholder:text-xs"
        type="text"
        placeholder={label}
      />
    </div>
  );
}
