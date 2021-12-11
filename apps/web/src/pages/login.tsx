import Link from "next/link";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { Button, Input, Label } from "ui";

import { loginSchema } from "@/validations/index";
import { useLogin } from "@/hooks/index";

import type { TLoginData } from "@/types/auth/login";

const Inputs = [
  { type: "email", id: "email", name: "Email" },
  {
    type: "password",
    id: "password",
    name: "Password",
    additionalLink: { title: "Forgot password?", path: "/" },
  },
];

const Login: NextPage = () => {
  const { mutate: login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: TLoginData) => login(data);

  return (
    <>
      <NextSeo title="Login" />

      <section>
        <h1>Login to Pocto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Inputs.map(({ id, name, type, additionalLink }) => (
            <div key={id}>
              <Label css={{ display: "block", fontWeight: "600" }} htmlFor={id}>
                {name}

                {additionalLink && (
                  <Link href={additionalLink.path}>
                    <a style={{ fontWeight: "500" }}>{additionalLink.title}</a>
                  </Link>
                )}
              </Label>

              <Input type={type} id={id} {...register(id)} />
              {errors[id] && <p>{errors[id].message}</p>}
            </div>
          ))}

          <div>
            <Button disabled={isLoading} type="submit">
              Login
            </Button>
          </div>
        </form>

        <div>
          <p>
            Not a member?{" "}
            <Link href="/signup">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
