export class LoginPayloadDto {
  username: string;
  password: string;
}

export class Social {
  platform: string; // e.g. "Facebook", "Instagram", etc.
  handle: string; // e.g. "@johndoe"
}

export class RegisterPayloadDto {
  username: string;
  // TODO Password strength validation
  password: string;
  // TODO Length validation
  national_id: number; // 30412405
  nationality: string;
  // Johndoe@gmail.com
  email: string;
  // yyyy-mm-ddThh:mm:ss:fffZ
  dateOfBirth: Date;
  socials: Social[];
  // "https://www.google.com/"
  website: string;
  description: string;
}
