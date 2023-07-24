const fetchUsers = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    if (!response.ok) {
      throw new Error('Failed to fetch users.');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch users.');
  }
};

export default fetchUsers;
