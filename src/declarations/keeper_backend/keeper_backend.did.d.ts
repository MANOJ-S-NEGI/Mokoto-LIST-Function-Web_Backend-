import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : ActorMethod<[string, string], undefined>,
  'delNotes' : ActorMethod<[bigint], undefined>,
  'readNotes' : ActorMethod<[], Array<Note>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
