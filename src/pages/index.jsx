import Title from "./components/Head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";



import Login from "./Login";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Title />

      <Login />
    </>
  );
}
