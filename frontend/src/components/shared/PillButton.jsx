import clsx from 'clsx';

export default function PillButton({ variant = 'primary', children, className, ...rest }) {
  return (
    <button
      className={clsx('pill-button', `pill-${variant}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
