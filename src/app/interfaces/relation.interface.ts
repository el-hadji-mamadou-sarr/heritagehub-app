import { Person } from "./person.interface";

export interface Relation{
  id?: number;
  person_id: number;
  other_person_id: number;
  relation_type: string;
  other_person?:Person
}
