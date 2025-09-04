import { Input } from "./Input";

type InputFieldProps = {
  label: string;
  placeholder: string;
  options?: string[];
};

export function InputField({ label, placeholder, options }: InputFieldProps) {
  return (
    <div className="h-[50%]">
      <div className="text-xs">{label}</div>

      {options ? (
        <>
          <input
            list="options"
            placeholder={placeholder}
            className="w-full h-[50%] p-2 text-xs border rounded placeholder:text-gray-500 placeholder:font-normal placeholder:text-xs"
          />
          <datalist id="options">
            {options?.map((opt) => (
              <option key={opt} value={opt} />
            ))}
          </datalist>
        </>
      ) : (
        <Input label={placeholder} />
      )}
    </div>
  );
}
