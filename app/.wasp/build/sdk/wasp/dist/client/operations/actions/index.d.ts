import { type ActionFor } from './core';
import { UpdateCurrentUser_ext } from 'wasp/server/operations/actions';
import { UpdateUserById_ext } from 'wasp/server/operations/actions';
import { GenerateGptResponse_ext } from 'wasp/server/operations/actions';
import { CreateTask_ext } from 'wasp/server/operations/actions';
import { DetectText_ext } from 'wasp/server/operations/actions';
import { DeleteTask_ext } from 'wasp/server/operations/actions';
import { UpdateTask_ext } from 'wasp/server/operations/actions';
import { GenerateCheckoutSession_ext } from 'wasp/server/operations/actions';
import { CreateFile_ext } from 'wasp/server/operations/actions';
export declare const updateCurrentUser: ActionFor<UpdateCurrentUser_ext>;
export declare const updateUserById: ActionFor<UpdateUserById_ext>;
export declare const generateGptResponse: ActionFor<GenerateGptResponse_ext>;
export declare const createTask: ActionFor<CreateTask_ext>;
export declare const detectText: ActionFor<DetectText_ext>;
export declare const deleteTask: ActionFor<DeleteTask_ext>;
export declare const updateTask: ActionFor<UpdateTask_ext>;
export declare const generateCheckoutSession: ActionFor<GenerateCheckoutSession_ext>;
export declare const createFile: ActionFor<CreateFile_ext>;