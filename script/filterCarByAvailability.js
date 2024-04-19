function filterCarByAvailability(cars) {
  console.log(cars);

  const result = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }

  // for (const car of cars) {
  //   if (car.available) {
  //     result.push(car);
  //   }
  // }

  console.log(result);
  console.table(result);

  return result;
}
