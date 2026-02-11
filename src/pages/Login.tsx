import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-sm">
          <h1 className="font-serif text-2xl tracking-wide text-center mb-8">Sign In</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-foreground/70 mb-1.5 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-none border-foreground/20 focus-visible:ring-foreground/30 h-11"
                required
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-wider text-foreground/70 mb-1.5 block">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-none border-foreground/20 focus-visible:ring-foreground/30 h-11"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-none h-11 bg-foreground text-background hover:bg-foreground/90 text-xs uppercase tracking-widest"
            >
              Sign In
            </Button>
          </form>
          <p className="text-center text-xs text-foreground/60 mt-6">
            Don't have an account?{" "}
            <Link to="/login" className="underline underline-offset-4 text-foreground/80 hover:text-foreground">
              Create one
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
