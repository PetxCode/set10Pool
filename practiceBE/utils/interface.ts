import { Document } from "mongoose";

interface iUser {
  status: string;
  name: string;
  email: string;
  password: string;
  schoolName: string;
  phoneNumber: string;
  avatar: string;

  stage1Result: Array<{}>;
  stage2Result: Array<{}>;
  stage3Result: Array<{}>;
  stage4Result: Array<{}>;
  stage1Score: number;
  stage2Score: number;
  stage3Score: number;
  stage4Score: number;
}

export interface iUserData extends iUser, Document {}
