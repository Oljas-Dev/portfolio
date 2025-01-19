function haversine([lat1, lng1, lat2, lng2], setDistance) {
  //const R = 3958.8; //Earth's raius in miles
  const R = 6371; //Earth's raius in kilometers

  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLng / 2), 2) * Math.cos(lat1) * Math.cos(lat2);

  // First version
  // Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  // Math.cos(deg2rad(lat1)) *
  //   Math.cos(deg2rad(lat2)) *
  //   Math.sin(dLng / 2) *
  //   Math.sin(dLng / 2);

  const c = 2 * Math.asin(Math.sqrt(a));
  const d = R * c;

  const roundedNumber = round(d);

  setDistance(roundedNumber);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function round(num) {
  let m = Number((Math.abs(num) * 100).toPrecision(2));
  const result = (Math.round(m) / 100) * Math.sign(num);

  return result;
}

const toTop = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

export { deg2rad, round, haversine, toTop };
