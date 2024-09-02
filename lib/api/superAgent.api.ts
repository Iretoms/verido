import { VeridoAPI } from "./axios";
import { ICreateSuperAgent } from "@/components/AllUsers/SuperAgentForm";

export const createSuperAgents = async (payload: ICreateSuperAgent) => {
  const { data } = await VeridoAPI.post("/superagent/create", payload);

  return data;
};
