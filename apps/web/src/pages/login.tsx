import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Input } from "ui";

import { loginSchema } from "@/validations/index";
import { useLogin } from "@/hooks/index";

import type { LoginData } from "@/types/auth/login";

const Inputs = [
  { type: "email", id: "email", placeholder: "Email" },
  { type: "password", id: "password", placeholder: "Password" },
];

const Login: NextPage = () => {
  const { mutate: login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginData) => login(data);

  return (
    <>
      <NextSeo title="Login" />

      <section>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, placeholder, type }) => (
            <div key={id}>
              <Input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id)}
              />
              {errors[id] && <p>{errors[id].message}</p>}
            </div>
          ))}

          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
