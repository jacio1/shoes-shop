import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <h1>Хеадер</h1>
      <div>
        <Button >Войти</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
