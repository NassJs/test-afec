type InputProps = {
  placeholder: string;
  type: string;
  className: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({
  placeholder,
  type,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      <input
        onChange={onChange}
        className={className}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};
