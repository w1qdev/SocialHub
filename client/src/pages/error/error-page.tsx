import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            className="w-100% h-[100vh] flex justify-center flex-col items-center"
        >
            <h1 className="mb-[20px] text-black-900 font-[700] text-[34px]">
                Ой!
            </h1>
            <p className="mb-[10px]">
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
