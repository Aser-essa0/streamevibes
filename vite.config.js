import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   build: {
//     rollupOptions: {
//       external: [
//         "./ui/AppLayout",
//         "./pages/Home",
//         "./pages/MoviesAndShows",
//         "./pages/Movie",
//         "./pages/Shows",
//         "./pages/Support",
//         "./pages/Subscriptions",
//       ],
//     },
//   },
// });
