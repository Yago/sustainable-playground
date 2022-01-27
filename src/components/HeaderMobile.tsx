import { createSignal } from 'solid-js';

type Props = {
  pathname: string;
};

const HeaderMobile = ({ pathname }: Props): JSX.Element => {
  const [open, setOpen] = createSignal(false);

  return (
    <nav className="block bg-white shadow sm:hidden" aria-hidden="true">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpen(!open())}
            >
              <span className="sr-only">Open main menu</span>
              {!open() && (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {open() && (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
            <div className="flex items-center flex-shrink-0">
              <img
                className="block w-auto h-8 lg:hidden"
                src="/assets/logo.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={open() ? 'sm:hidden' : 'hidden'} id="mobile-menu">
        <div className="pt-2 pb-4 space-y-1">
          {[
            ['Home', '/'],
            ['Rich Content', '/rich-content'],
          ].map(([label, path]) => (
            <a
              href={path}
              key={`item-${label}-mobile`}
              className={
                pathname === path
                  ? 'bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobile;
