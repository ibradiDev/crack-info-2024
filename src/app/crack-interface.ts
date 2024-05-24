export interface CrackInterface {
  [key: string]: any;
  nom: string;
  email: string;
  dateNaissance: string;
  sexe: string;
  nationalite: string;
  telephone: string;
  specialite: {
    developpement: boolean;
    ia: boolean;
    rit: boolean;
    dataScience: boolean;
  };
  niveauEtude: string;
  motivation: string;
  niveauAnglais: number;
  photo: any;
}
