import Input from "@/components/Input";
import React from "react";

const TripSearch = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <Input placeholder="Data de ida" />
          <Input placeholder="Orçamento" />
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
