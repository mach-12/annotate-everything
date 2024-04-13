import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingIndicator from "./LoadingIndicator";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ACCESS_TOKEN, AUTH_USERNAME, REFRESH_TOKEN } from "@/api/constants";
import api from "@/api/api";
import { useUsernameStore } from "@/store/userStore";

interface LoginFormProps {
  route: string;
  method: string;
}

function LoginForm({ route, method }: LoginFormProps) {
  const [username, setFormUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const setUsername = useUsernameStore((state) => state.setUsername);

  const navigate = useNavigate();

  const action_name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        localStorage.setItem(AUTH_USERNAME, username);
        setUsername(username);
        navigate("/tasks");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false); // buffering showcase
    }
  };

  return (
    <>
    
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">{action_name}</h1>
              <p className="text-balance text-muted-foreground">
                Enter your Username and Password
              </p>
            </div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setFormUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {loading && <LoadingIndicator />}
              <Button type="submit" className="w-full" disabled={loading}>
                {action_name}
              </Button>
            </form>

            {action_name === "Login" && (
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a
                  className="underline"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/test.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
