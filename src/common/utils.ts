export const delay = (timeout: number): Promise<string> =>
  new Promise(resolve => {
    setTimeout(resolve, timeout, "OK");
  });
