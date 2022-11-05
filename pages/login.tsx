import type { NextPage } from "next";
import { useState } from "react";
import userAuthentification from "../utils/pocketbase";
import { useRouter } from 'next/router'

const LoginPage: NextPage = () => {
  const router = useRouter()
  const [mode, setMode] = useState('login');
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if(!(password.length < 6)){
      userAuthentification(email, password).then((response) => {
        if(response.user !== undefined){
          router.push('/app')
        }
      })
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm m-auto">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
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
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChangePassword}
              onFocus={() => setPasswordFocus(true)}
            />
          </div>
          {mode === "register" && (
            <div className="mb-6">
              <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="confirm_password">
                Confirmez le mot de passe
              </label>
              <input
                className={"focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" + ((password.length < 6 && passwordFocus) ? " border-red-500" : "")}
                id="confirm_password"
                type="password"
                placeholder="Mot de passe"
              />
              {(password.length < 6 && passwordFocus) && <p className="text-xs italic text-red-500">Utilisez 6 caractères ou plus pour votre mot de passe.</p>}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
            <a className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800" href="#">
              Mot de passe oublié
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
