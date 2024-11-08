import { type AuthenticatedOperationFor } from '../wrappers.js';
import { updateCurrentUser as updateCurrentUser_ext } from 'wasp/ext-src/user/operations';
import { updateUserById as updateUserById_ext } from 'wasp/ext-src/user/operations';
import { generateGptResponse as generateGptResponse_ext } from 'wasp/ext-src/demo-ai-app/operations';
import { createTask as createTask_ext } from 'wasp/ext-src/demo-ai-app/operations';
import { detectText as detectText_ext } from 'wasp/ext-src/demo-ai-app/operations';
import { deleteTask as deleteTask_ext } from 'wasp/ext-src/demo-ai-app/operations';
import { updateTask as updateTask_ext } from 'wasp/ext-src/demo-ai-app/operations';
import { generateCheckoutSession as generateCheckoutSession_ext } from 'wasp/ext-src/payment/operations';
import { createFile as createFile_ext } from 'wasp/ext-src/file-upload/operations';
export type UpdateCurrentUser_ext = typeof updateCurrentUser_ext;
export declare const updateCurrentUser: AuthenticatedOperationFor<UpdateCurrentUser_ext>;
export type UpdateUserById_ext = typeof updateUserById_ext;
export declare const updateUserById: AuthenticatedOperationFor<UpdateUserById_ext>;
export type GenerateGptResponse_ext = typeof generateGptResponse_ext;
export declare const generateGptResponse: AuthenticatedOperationFor<GenerateGptResponse_ext>;
export type CreateTask_ext = typeof createTask_ext;
export declare const createTask: AuthenticatedOperationFor<CreateTask_ext>;
export type DetectText_ext = typeof detectText_ext;
export declare const detectText: AuthenticatedOperationFor<DetectText_ext>;
export type DeleteTask_ext = typeof deleteTask_ext;
export declare const deleteTask: AuthenticatedOperationFor<DeleteTask_ext>;
export type UpdateTask_ext = typeof updateTask_ext;
export declare const updateTask: AuthenticatedOperationFor<UpdateTask_ext>;
export type GenerateCheckoutSession_ext = typeof generateCheckoutSession_ext;
export declare const generateCheckoutSession: AuthenticatedOperationFor<GenerateCheckoutSession_ext>;
export type CreateFile_ext = typeof createFile_ext;
export declare const createFile: AuthenticatedOperationFor<CreateFile_ext>;
