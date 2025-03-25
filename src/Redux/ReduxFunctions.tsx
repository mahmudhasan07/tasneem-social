"use client";
import { useAxios } from "@/lib/useAxios";
import {
  BookDemoInterFace,
  ContactUsInterface,
  CreateUserInterFace,
  FormDataInterFace,
  LoginInterFace,
  PaymentInterface,
  UserInterface,
} from "@/utils/Interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError, AxiosInstance } from "axios";
import Cookies from "js-cookie";

interface AuthInterFace {
  user: UserInterface | null;
  loading?: boolean;
  error?: string;
  token: string | null;
}

const initialState: AuthInterFace = {
  user: null,
  token: null,
};

// const provider = useContext(ProviderSource)

const BookDemo = createAsyncThunk(
  "bookDemo",
  async ({ data }: { data: BookDemoInterFace }) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/demobook/send", data);
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        if (error instanceof AxiosError && error.response) {
          const errMessage = error.response.data.message;
          throw errMessage;
        }
      }
    }
  }
);

const CreateUser = createAsyncThunk(
  "createUser",
  async ({ data }: { data: CreateUserInterFace }) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/users/create", data);
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
);

// category
// const GetCategory = createAsyncThunk(
//     "getCategory",
//     async ({ data }: { data: CreateUserInterFace }) => {
//         const axiosLink: AxiosInstance = useAxios()
//         try {
//             const res = await axiosLink.get('/category')
//             return res.data
//         } catch (error: unknown) {
//             console.log(error);

//             if (error instanceof AxiosError && error.response) {
//                 const errMessage = error.response.data.message;
//                 throw errMessage;
//             }
//         }
//     }
// )

// Post Service
//  const ServiceAdd = createAsyncThunk<
//     // Return type of the async function
//     any,
//     // Argument type of the async function
//     { data: ServiceAddInterface },
//     // Optionally, you can define a config type (you can leave this empty if not needed)
//     { rejectValue: string }
// >(
//     'serviceAdd',
//     async ({ data }: { data: ServiceAddInterface }, { rejectWithValue }) => {
//         const axiosLink: AxiosInstance = useAxios();
//         try {
//             const res = await axiosLink.post('/service/create', data);
//             return res.data;
//         } catch (error: unknown) {
//             if (error instanceof AxiosError && error.response) {
//                 const errMessage = error.response.data.message;
//                 // Return the error message using rejectWithValue to handle the error
//                 return rejectWithValue(errMessage);
//             }
//             throw new Error('An unexpected error occurred');
//         }
//     }
// );

const AddService = createAsyncThunk(
  "addService",
  async (formData: FormData) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/service/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
);


const updateService = createAsyncThunk(
  "updateService",
  async ({ id, resData }: { id: string, resData: { name: string, description: string, categoryId: string, image: string } }) => {
    // console.log(id);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.put(`/service/update/${id}`, resData);
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
)

const deleteService = createAsyncThunk(
  "deleteService",
  async (id: string) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.delete(`/service/${id}`);
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }

  }
)

const AddProvideService = createAsyncThunk(
  "addService",
  async (formData: FormDataInterFace | unknown) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/provide-service/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
);




const LogInUser = createAsyncThunk(
  "login",
  async ({ data }: { data: LoginInterFace }) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/auth/login", data);
      console.log(res);
      Cookies.set("accessToken", res?.data?.result.accessToken, {
        expires: 1, // Expires in 1 day
        path: "/", // Path for which the cookie is valid
        secure: true, // Use Secure in production
        sameSite: "Lax", // Ensures cookie is sent with cross-site requests
        httpOnly: false, // Set this to true if you want to restrict JavaScript access (not possible in js-cookie, though)
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
);

const ContactUs = createAsyncThunk(
  "contactUs",
  async ({ data }: { data: ContactUsInterface }) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/contact/send-email", data);
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const err = error.response.data.message;
        throw err;
      }
    }
  }
);

const paymentGateway = createAsyncThunk(
  "paymentGateway",
  async ({ orderItems, id }: { orderItems: { service: string, time: string | undefined, items: PaymentInterface[] }; id: string }) => {
    console.log(orderItems);
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post(`/payment/create/${id}`, orderItems);
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const err = error.response.data.message;
        throw err;
      }
    }
  }
);


const OrderStatus = createAsyncThunk(
  "orderStatus",
  async ({ index, status }: { index: string, status: string }) => {
    const axiosLink: AxiosInstance = useAxios();
    console.log(index, status);

    try {
      const res = await axiosLink.put(`/payment/order-status/${index}`, { status })
      return res.data
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const err = error.response.data.message;
        throw err;
      }
    }
  }
)


const addReview = createAsyncThunk(
  "addReview",
  async ({ id, reviewData }: { id: string, reviewData: { rating: number, review: string } }) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post(`/review/create/${id}`, reviewData)
      return res.data
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.log(error);

        const err = error.response.data.message;
        throw err;
      }
    }

  }
)


const addPortfolio = createAsyncThunk(
  "addPortfolio",
  async (formData: FormData) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.post("/portfolio/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }
  }
)

const deletePortfolio = createAsyncThunk(
  "deletePortfolio",
  async (id: string) => {
    const axiosLink: AxiosInstance = useAxios();
    try {
      const res = await axiosLink.delete(`/portfolio/${id}`);
      return res.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof AxiosError && error.response) {
        const errMessage = error.response.data.message;
        throw errMessage;
      }
    }

  }
)


export const userAuth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: () => { },
});

export {
  BookDemo,
  CreateUser,
  LogInUser,
  ContactUs,
  paymentGateway,
  AddService,
  AddProvideService,
  OrderStatus,
  updateService,
  deleteService,
  addReview,
  addPortfolio,
  deletePortfolio
};

export const { logOut, setUser } = userAuth.actions;

export default userAuth.reducer;
