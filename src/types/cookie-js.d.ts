declare module "js-cookie" {
  interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: number | Date;
    secure?: boolean;
  }

  interface CookieStatic {
    get(key: string): string | undefined;
    set(key: string, value: string, options?: CookieOptions): void;
    remove(key: string): void;
  }

  const Cookies: CookieStatic;
  export default Cookies;
}
