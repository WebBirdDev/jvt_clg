export const baseurl = "http://51.21.1.241/api/v1";
export const uploadurl = "http://51.21.1.241";
let message;

// post request
export const postRequest = async (url, body) => {
  const isFormData = body instanceof FormData;

  const response = await fetch(url, {
    method: "POST",
    headers: isFormData
      ? undefined // Let the browser set the correct Content-Type
      : {
          "Content-Type": "application/json",
        },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.message || data;
    return { error: true, message };
  }

  return data;
};

// get request
export const getRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};

// update request
export const updateRequest = async (url, body) => {
  const isFormData = body instanceof FormData;
  const response = await fetch(url, {
    method: "PUT",
    headers: isFormData
      ? undefined // Let the browser set the correct Content-Type
      : {
          "Content-Type": "application/json",
        },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.message || data;
    return { error: true, message };
  }

  return data;
};

// delete request
export const deleteRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();
  if (!response.ok) {
    message = data.message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return { error: true, message };
  }
  return data;
};
