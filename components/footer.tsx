export default function Footer(): JSX.Element {
  return (
    <footer className="h-fit bg-slate-800 py-4 mt-auto">
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col md:flex-row items-center text-gray-200 space-x-2">
          {/* mobile */}
          <p className="md:hidden font-bold">
            &copy; {new Date().getFullYear()} Laboratory for QPE.
          </p>
          {/* PC, tablet */}
          <p className="hidden md:block font-bold">
            &copy; {new Date().getFullYear()} Laboratory for Quantitative
            Political Economy.
          </p>
          <p>All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
