import clsx from 'clsx'

function ExampleButton({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        'btn-primary', // Custom primary button class
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ExampleButton
