import { Categorie } from './Categorie';
import { User } from './User';

export class Projet{
    id: number;
    nomprojet: string;
    description: string;
    objectif: number;
    budget: number;
    image: string;
    categorie: Categorie;
    date: Date;
    user: User;

} 