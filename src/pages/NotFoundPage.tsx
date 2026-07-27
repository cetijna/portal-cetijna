import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-light text-[#003366]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-slate-800">Página não encontrada</h2>
        <p className="mt-2 text-sm text-slate-600">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="inline-flex mt-6 items-center justify-center rounded-sm bg-[#003366] px-4 py-2 text-sm font-medium text-white hover:bg-[#00264d] transition"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
