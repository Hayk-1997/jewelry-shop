import React from 'react';

export default function AuthPagesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <>
      <div className="bg-dark-charcoal flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img
            src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">{children}</div>
      </div>
    </>
  );
}
