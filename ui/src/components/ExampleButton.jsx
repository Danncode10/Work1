import clsx from 'clsx'

function ExampleButton({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        'btn btn-primary', // Bootstrap classes
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', // Tailwind classes
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ExampleButton
