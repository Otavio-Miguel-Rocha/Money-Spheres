"use client";
import React, { Key, useEffect, useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Image, User } from "@nextui-org/react";
import { m } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
import { log } from "console";

type User = {
  email: string;
  password: string;
};

export default function Home() {
  const [selected, setSelected] = useState<string | number>("Entrar");


  function login(event: any) {
    event.preventDefault();
    console.log(email, password);
  }
  function register(event: any) {
    event.preventDefault();
    console.log(username, email, password);
  }

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <div className="grid grid-cols-2 w-full h-screen justify-center items-center">
      <div className="flex w-full h-full justify-center items-center">
        <img src="/assets/logo-money.png" alt="Logo" className="mx-auto" />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <Card className="max-w-full w-[340px] h-[400px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Entrar">
                <form className="flex flex-col gap-4 h-[300px] justify-between" onSubmit={(e) => login(e)} >
                  <Input
                    isRequired
                    label="E-mail"
                    placeholder="Insira seu E-mail"
                    type="email"
                    className="pt-10"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Senha"
                    placeholder="Insira sua Senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth className="bg-[#0097B2] text-background" type="submit">
                      Entrar
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Registrar-se">
                <form className="flex flex-col gap-4 h-[300px] justify-between" onSubmit={(e) => register(e)}>
                  <Input
                    isRequired label="Nome"
                    placeholder="Insira seu Nome"
                    type="text"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    isRequired
                    label="E-mail"
                    placeholder="Insira seu E-mail"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Input
                    isRequired
                    label="Senha"
                    placeholder="Insira sua Senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth className="bg-[#0097B2] text-background" type="submit">
                      Registrar-se
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
