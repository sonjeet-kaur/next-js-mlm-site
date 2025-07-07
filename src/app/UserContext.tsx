'use client';
import { create } from "domain";
import { createContext,  useContext, useState } from "react";

const userContext = createContext<any>(null);

export const UserProvider = ({})