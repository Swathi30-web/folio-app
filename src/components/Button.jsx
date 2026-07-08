const VARIANTS = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  dark: 'bg-ink text-white hover:bg-black',
  light: 'bg-white text-ink hover:bg-mist',
  outline: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
};


export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
        transition-colors duration-200 whitespace-nowrap ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
