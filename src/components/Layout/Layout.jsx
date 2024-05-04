import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}