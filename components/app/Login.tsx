import { useState } from "react";
import { userAuthentification } from "../../utils/pocketbase";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [formDisplay, setFormDisplay] = useState("");
  const [email, setEmail] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDisplay(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(formDisplay.length < 6)) {
      userAuthentification(email, formDisplay).then((response) => {
        if (response.user !== undefined) {
          router.push("/app");
        }
      });
    }
  };

  return (
    <div className="m-auto w-full max-w-xs sm:max-w-sm lg:max-w-md rounded border-2 border-solid border-white bg-black font-mono">
      <form className="px-8 pt-6 pb-6 md:pb-8 shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-200" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block font-bold text-gray-200" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={formDisplay}
            onChange={handleChangePassword}
            onFocus={() => setPasswordFocus(true)}
          />
        </div>
        {mode === "register" && (
          <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-700" htmlFor="confirm_password">
              Confirmez le mot de passe
            </label>
            <input
              className={
                "focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" +
                (formDisplay.length < 6 && passwordFocus ? " border-red-500" : "")
              }
              id="confirm_password"
              type="password"
              placeholder="Mot de passe"
            />
            {formDisplay.length < 6 && passwordFocus && (
              <p className="text-xs italic text-red-500">Utilisez 6 caractères ou plus pour votre mot de passe.</p>
            )}
          </div>
        )}
        <div className="flex items-center justify-between flex-col gap-4 md:flex-row md:gap-0">
          <button
            className="focus:shadow-outline rounded-lg border-2 border-gray-200 py-2 px-3 md:px-4.5 lg:px-7 font-bold text-gray-200 hover:bg-gray-200 hover:text-black focus:outline-none"
            type="submit"
          >
            Se connecter
          </button>
          <a className="inline-block align-baseline text-sm font-bold text-gray-200 hover:text-gray-400" href="#">
            Mot de passe oublié
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
