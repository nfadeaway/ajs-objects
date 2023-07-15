export default function orderByProps(obj, order) {
  const orderPropsArray = [];
  const propsArray = [];

  if (order) {
    for (const prop of order) {
      orderPropsArray.push({ key: prop, value: obj[prop] });
    }
  }

  for (const prop in obj) {
    if (order.includes(prop) === false) {
      propsArray.push({ key: prop, value: obj[prop] });
    }
  }
  propsArray.sort((prop1, prop2) => (prop1.key > prop2.key ? 1 : -1));

  return [...orderPropsArray, ...propsArray];
}
