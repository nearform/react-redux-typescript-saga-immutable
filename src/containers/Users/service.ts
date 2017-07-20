export const fetchUsers = (id: string) => {
  return fetch('https://mysafeinfo.com/api/data?list=presidents&format=json')
    .then(res => {
      return res.json();
    })
    .then(result => result);
};
