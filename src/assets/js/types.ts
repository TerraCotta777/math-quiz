export interface Leaders {
  practice: {
    [string: string]: string;
  };
  "time-attack": {
    [string: string]: string;
  };
}

export interface User {
  username: string;
  gameMode: string;
  right: number;
  wrong: number;
  score: number;
}
