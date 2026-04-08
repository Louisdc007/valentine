//import { useState } from "react";
import { HeaderBar } from "./components/header";
import { Card } from "./components/card";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="h-40"></div>
      <div className="flex flex-row gap-10 justify-center">
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KRkMUDBVRL0K9QIih1GICT00WBX4uzMvQwMrYdDjjXTwQrBJaRYz6-VgcB36dvf32W_ZwFTheXc0ieMzvVS2LJa27w2uCSAjJtUJpH8z&s=10"
          title="Tenders"
          body="Les bâtonnets de poulet (en anglais : chicken fingers), ou goujonettes de poulet, appelés aussi tenders de poulet (chicken tenders), sont une préparation culinaire à base de viande de poulet, généralement à partir des muscles pectoraux de l'animal."
        />
      </div>
    </>
  );
}

export default App;
