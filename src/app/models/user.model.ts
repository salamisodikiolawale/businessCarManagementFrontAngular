
export class User{

  public id: number;
  public email : string;
  public password: string;
  public role : string;


  constructor(id?: number, email?: string, role?: string, password?:string){
    this.id = id || 0;
    this.email = email || '';
    this.password = password || '';
    this.role = role || '';
  }

}
