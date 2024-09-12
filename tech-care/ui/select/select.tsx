type Option = {
  label: string;
  value: string;
};

type Props = {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: Option[];
};

export function Select({ handleSelect, value, options }: Props) {
  return (
    <select
      onChange={handleSelect}
      value={value}
      className="bg-transparent border-none focus-visible:border-none focus-visible:outline-none"
    >
      {options.map(option => (
        <option
          key={option.label}
          value={option.value}
          className="font-normal text-sm text-black-light"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
