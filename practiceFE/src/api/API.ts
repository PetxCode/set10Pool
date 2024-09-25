const url: string = `http://localhost:2211`;

export const createAccount = (data: any) => {
  try {
    return fetch(`${url}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = (data: any) => {
  try {
    return fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
  }
};
