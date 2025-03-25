export interface BookDemoInterFace {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  selectDateTime: Date;
  websiteUrl: string;
  reasonOfCall: string;
  shortPitch: string;
  message: string;
}

export interface CreateUserInterFace {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInterFace {
  email: string;
  password: string;
}

export interface ServiceAddInterface {
  categoryId: string;
  name: string;
  description: string;
}

export interface ContactUsInterface {
  name: string;
  email: string;
  message: string;
}

export interface UserInterface {
  name: string;
  email: string;
  role: string;
}

export interface Options {
  service: string;
  price: number;
  time : string
}

export interface Services {
  service: string;
  description: string;
  image: string;
  id?: string;
  basePrice: number;
  options: Options[];
  category: {
    categoryName: string;
    imageUrl: string;
  };
}

export interface PaymentInterface {
  price_data: {
    currency: string;
    product_data: {
      name: string;
    };
    unit_amount: number;
  };
  quantity: number;
}

export interface AddServiceInterface {
  serviceImage: FileList;
  bodyData: string;
}

export interface OptionsInterFace {
  price: number,
  service: string,
  time: string
}
export interface AddProvideServiceInterface {
  categoryId: string
  service: string
  description: string
  options: OptionsInterFace[]
  packageImage: FileList | null | undefined

}

export interface FormDataInterFace {
  packageImage: FileList
  bodyData: string
}


export interface OrderInterFace {
  orderId: string
  orderStatus: string
  totalAmount: number
  createdAt: string
  user: {
    firstName: string
    lastName: string
  }
}

export interface PaymentTableInterFace {
  result :  OrderInterFace[]
}


export interface TransactionsInterface {
  order : {
    image : string

  }

  customerDetails :{
    name : string
    email : string
    phone? : string
    package ? : string
  }
  id : string
  createdAt : string
  orderStatus : string
}