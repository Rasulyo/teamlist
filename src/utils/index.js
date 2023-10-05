export function getItem(key, icon, children, type) {
  return {
    key,
    icon,
    children,
    type,
  };
}

export const generateID = () => {
  return (1e7 + -1e3 + -4e3 + -8e3 + -1e11)
    .toString()
    .replace(/[018]/g, (a) =>
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16),
    );
};

export const saveDataToLocalStorage = (data) => {
  try {
    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    console.error("Ошибка при сохранении данных в localStorage: ", error);
  }
};

export const fetchDataFromJsonFile = async () => {
  try {
    const response = await fetch(
      "https://file.notion.so/f/s/b697dfd0-4a6f-4555-bd14-60559f2a8179/users.json?id=cc13eeae-fbeb-4b40-9b71-228fe193a8f6&table=block&spaceId=a73b0a18-75ee-4904-8f1e-0681ca27036a&expirationTimestamp=1696600800000&signature=maNeetIdDHHwATTxsxJsfbMn5Ph2UIACaZPlQB83c5w&downloadName=users.json",
    );
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка при загрузке данных:", error);
    throw error;
  }
};
