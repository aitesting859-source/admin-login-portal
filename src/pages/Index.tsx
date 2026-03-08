import { useState } from "react";
import { Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import adminBg from "@/assets/admin-bg.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    // Placeholder — connect to backend auth
    setTimeout(() => {
      toast.error("Authentication not configured yet");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <img
        src={adminBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 animate-pulse-glow">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-gradient-brand">
              ADMIN PANEL
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to access the dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border bg-muted/50 pl-10 font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border bg-muted/50 pl-10 pr-10 font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full bg-primary font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-glow)]"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Protected area · Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
