import {redirect} from "next/navigation";
/* 
  * Instead of rendering a main page, you are forwarded to the learn page
*/

export default function Home() {
  redirect("/learn");
}
