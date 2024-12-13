export interface TProject {
  serialNumber: number;
  name: string;
  title: string;
  features: string;
  features2?: string[];
  description: string;
  description2?: string[];
  image?: string[];
  frontEndTechnology: string;
  backEndTechnology: string;
  live_link: string;
  client_side_code: string;
  server_side_code: string;
  isDeleted: boolean;
}
