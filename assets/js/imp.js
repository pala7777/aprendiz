/* ============================================================
   IMP — cliente do backend (PocketBase em api.impperformance.com.br)
   Login por código (OTP), conteúdo com gating, assinatura (Mercado Pago).
   Zero dependências.
   ============================================================ */
window.IMP = (function () {
  const API = "https://api.impperformance.com.br";
  const LS = "imp.auth.v1";
  let auth = null;
  try { auth = JSON.parse(localStorage.getItem(LS) || "null"); } catch (e) {}
  let meCache = null;
  const courseCache = {};

  const authHdr = () => (auth && auth.token ? { Authorization: "Bearer " + auth.token } : {});

  async function call(method, path, body, useAuth) {
    let r;
    try {
      r = await fetch(API + path, {
        method,
        headers: Object.assign({ "Content-Type": "application/json" }, useAuth === false ? {} : authHdr()),
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (e) { return { ok: false, status: 0, data: { message: "Sem conexão com o servidor." } }; }
    let d = null; try { d = await r.json(); } catch (e) {}
    return { ok: r.ok, status: r.status, data: d };
  }

  function setAuth(a) { auth = a; meCache = null; for (const k in courseCache) delete courseCache[k];
    if (a) localStorage.setItem(LS, JSON.stringify(a)); else localStorage.removeItem(LS); }

  return {
    isLogged: () => !!(auth && auth.token),
    email: () => (auth && auth.user && auth.user.email) || "",

    // login por código
    async requestCode(email) {
      email = String(email || "").trim().toLowerCase();
      await call("POST", "/api/imp/auth/ensure", { email }, false);
      const r = await call("POST", "/api/collections/users/request-otp", { email }, false);
      return r.ok ? { ok: true, otpId: r.data.otpId } : { ok: false, message: (r.data && r.data.message) || "Erro ao enviar código." };
    },
    async verifyCode(otpId, code) {
      const r = await call("POST", "/api/collections/users/auth-with-otp", { otpId, password: String(code).trim() }, false);
      if (r.ok && r.data && r.data.token) { setAuth({ token: r.data.token, user: r.data.record }); return { ok: true }; }
      return { ok: false, message: "Código inválido ou expirado." };
    },
    logout() { setAuth(null); },

    // estado do usuário (login + assinatura)
    async me(force) {
      if (meCache && !force) return meCache;
      const r = await call("GET", "/api/imp/me");
      meCache = r.data || { authenticated: false };
      return meCache;
    },
    async isSubscriber() { const m = await this.me(); return !!(m && m.subscription && m.subscription.status === "active"); },

    // conteúdo (com gating do servidor)
    async course(slug, force) {
      if (courseCache[slug] && !force) return courseCache[slug];
      const r = await call("GET", "/api/imp/course/" + slug);
      if (r.ok) courseCache[slug] = r.data;
      return r.ok ? r.data : null;
    },
    clearCourseCache() { for (const k in courseCache) delete courseCache[k]; meCache = null; },

    // planos + assinatura
    async catalog() { const r = await call("GET", "/api/imp/catalog", null, false); return r.data; },
    async plans() { const r = await call("GET", "/api/imp/plans", null, false); return (r.data && r.data.plans) || []; },
    async checkout(plan) {
      const r = await call("POST", "/api/imp/checkout", { plan });
      return r.ok ? { ok: true, init_point: r.data.init_point } : { ok: false, message: (r.data && r.data.message) || "Erro ao iniciar a assinatura." };
    },
  };
})();
