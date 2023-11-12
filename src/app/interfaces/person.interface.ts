import { Relation } from './relation.interface';
import { Event } from './event.interface';

export interface Person {
  id?: number;
  first_name: string;
  last_name: string;
  birth_date: Date | null;
  familly_id: number | null;
  father_id: number | null;
  mother_id: number | null;
  gender: string;
  child_from_marriage: number | null;
  events_count?: number;
  relations_count?: number;
  events?: Event[];
  relations?: Relation[];
}

export interface PersonQuerryResult{
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}
