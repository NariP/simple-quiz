import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { trivia } from './tivia';
import type { inferQueryKeyStore } from '@lukemorales/query-key-factory';

const queries = mergeQueryKeys(trivia);

export type QueryKeys = inferQueryKeyStore<typeof queries>;

export default queries;
