import { ADD_TEMP } from "./action";

const initialData = {
  temp: null,
};

export const reducer = (store = initialData, { type, payload }) => {
  if (type === ADD_TEMP) {
    return { ...store, temp: payload };
  } else {
    return store;
  }
};
