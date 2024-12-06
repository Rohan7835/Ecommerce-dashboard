export const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Whole number part of rating
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star condition
  const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

  const stars = [
    ...Array(fullStars).fill("full"),
    ...Array(halfStar).fill("half"),
    ...Array(emptyStars).fill("empty"),
  ];

  return stars.map((star, index) => (
    <span key={index} className={`star ${star}`}></span>
  ));
};
