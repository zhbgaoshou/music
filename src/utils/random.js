// 生成数组随机下标
export function randomIndex(array) {
  const v_array = JSON.parse(JSON.stringify(array)); //深拷贝
  const max = v_array.length - 1;
  const min = 0;
  const random_index = Math.floor(Math.random() * (max - min + 1)) + min;
  v_array.splice(random_index, 1);
  return random_index;
}
