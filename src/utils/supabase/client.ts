// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supbaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// export const db = createClient(supabaseUrl, supbaseKey);
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
