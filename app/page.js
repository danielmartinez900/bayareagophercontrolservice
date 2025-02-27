import Image from "next/image";
import "./globals.css";

import HomePage from '../src/components/home/home-page';
import {Footer} from '../src/components/footer/footer';

export default function Home() {
  return (
    <div>
        <HomePage />
    </div>
  );
}
