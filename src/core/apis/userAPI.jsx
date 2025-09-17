import { api } from "./axios";

export const assignBundle = async (payload) => {
  try {
    const res = await api.post(`api/v1/user/bundle/assign`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const assignTopupBundle = async (payload) => {
  try {
    const res = await api.post(`api/v1/user/bundle/assign-top-up`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getOrderByID = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/my-esim-by-order/${payload}`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getOrdersHistory = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/order-history`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getOrderHistoryById = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/order-history/${payload}`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getUserNotifications = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/user-notification`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getMyEsim = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/my-esim`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getMyEsimByIccid = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/my-esim/${payload}`, {
      params: { ...payload },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getEsimRelatedTopup = async ({ bundle_code, iccid }) => {
  try {
    const res = await api.get(
      `api/v1/user/related-topup/${bundle_code}/${iccid}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateBundleLabelByIccid = async (payload) => {
  try {
    const res = await api.post(
      `api/v1/user/bundle-label-by-iccid/${payload?.code}`,
      {
        ...payload,
      }
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const checkBundleExist = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/bundle-exists/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getMyEsimConsumption = async (payload) => {
  try {
    const res = await api.get(`api/v1/user/consumption/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const markAsRead = async (payload) => {
  try {
    const res = await api.post(`api/v1/user/read-user-notification/`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const verifyOrderOTP = async (payload) => {
  try {
    const res = await api.post(`api/v1/user/bundle/verify_order_otp`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};

export const cancelOrder = async (payload) => {
  try {
    const res = await api.delete(`api/v1/user/order/cancel/${payload}`);
    return res;
  } catch (error) {
    throw error;
  }
};
