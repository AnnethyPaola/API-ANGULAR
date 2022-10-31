export interface user {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber:string,
    idNumber: string,
    birthDate: string,
    address: 
     {
        street: string,
        number: number,
        city: string,
        state: string,
        zip: number,
      },
      status: number
      createdAt: string
      updatedAt: string
    }
