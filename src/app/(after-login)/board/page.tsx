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

const board : any = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

export default function Board() {

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex w-[800px] h-[800px] bg-foreground">
      {board.map((row : any, rowIndex: any) => (
        <div key={rowIndex} className="flex w-full h-[100px">
          {row.map((column: any, columnIndex: any) => (
            <div
              key={columnIndex}
              className="flex w-[100px] h-[100px]"
            >
              {/* Add content inside each cell if needed */}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}
